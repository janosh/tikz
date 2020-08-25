# Uses the free iLovePDF API to compress PDF files.
# https://developer.ilovepdf.com
# Call e.g. as `python scripts/ilove_pdf_compress.py assets/**/*.pdf`.
# Warning: This script compresses files in place.

import os
import sys

from dotenv import load_dotenv
from pylovepdf.tools.compress import Compress

load_dotenv()
ILP_KEY = os.getenv("ILOVEPDF_PUBLIC_KEY")

assert ILP_KEY, f"Invalid iLovePDF API key: {ILP_KEY}"

# if filenames received as command line arguments are relative paths,
# convert to absolute paths
paths = [a if a.startswith("/") else f"{os.getcwd()}/{a}" for a in sys.argv]
# Keep only paths pointing to PDFs that exist.
pdfs = [p for p in paths if p.endswith(".pdf") and os.path.exists(p)]

assert pdfs, "Invalid arguments, no PDFs found."

print("PDFs to be compressed:")
for pdf in pdfs:
    print("- " + pdf)


# https://stackoverflow.com/a/1094933
def sizeof_fmt(size):
    for unit in ["B", "KB", "MB", "GB", "TB", "PB"]:
        if abs(size) < 1024:
            return f"{size:3.1f} {unit}"
        size /= 1024


for pdf_path in pdfs:
    task = Compress(ILP_KEY, verify_ssl=True, proxies=None)
    # task.compression_level = "extreme" # one of low, recommended, extreme

    task.add_file(pdf_path)

    dir_name, pdf_name = os.path.split(pdf_path)

    task.set_output_folder(dir_name)
    task.execute()
    compressed_pdf_name = task.download()
    task.delete_current_task()

    compressed_pdf_path = f"{dir_name}/{compressed_pdf_name}"

    orig_size = os.path.getsize(pdf_path)
    compressed_size = os.path.getsize(compressed_pdf_path)

    print(f"iLovePDF COMPRESSION RESULTS for {pdf_name}")

    diff = orig_size - compressed_size
    if diff > 0:
        percent_diff = 100 * diff / orig_size
        print(
            f"Compressed file is {sizeof_fmt(compressed_size)} "
            f"which is {sizeof_fmt(diff)} ({percent_diff:.2g} %) "
            f"smaller than the original ({sizeof_fmt(orig_size)})"
        )
        print("Using the compressed file")
        os.remove(pdf_path)
        os.rename(compressed_pdf_path, pdf_path)
    else:
        print("Compressed PDF is no smaller than the original")
        print("Keeping the original file")
        os.remove(compressed_pdf_path)
