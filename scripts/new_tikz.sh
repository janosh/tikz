#!/bin/bash

# From the project's root dir, use via `scripts/newtikz.sh assets/tex-file/tex-file.tex`.

# Get name of directory containing the TeX file.
dir=${1%/*}

# Get basepath of TeX file, i.e. path without extension.
basepath=${1%.tex}

# Create PDF from TeX file.
latexmk -silent -pdf -jobname="$basepath" "$1"

# Delete LaTeX auxiliary files.
find -E "$dir" -type f -regex ".*\.(aux|log|fls|fdb_latexmk)$" -delete

# Compress PDF. iLovePDF performs much better than Ghostscript but the API only offers 200 free compressions per month.
# scripts/gs_pdf_compress.sh "$dir"
python scripts/ilove_pdf_compress.py "$basepath.pdf"

# Convert PDF to SVG and compress.
pdf2svg "$basepath.pdf" "$basepath.svg"
# If the SVG is larger than 2 MB, delete it instead of compressing. Don't want large files in the repo.
if ((`stat -f%z "$basepath.svg"` > 2000000)); then
  rm "$basepath.svg"
else
  svgo "$basepath.svg"
fi

# Convert PDF to PNG and compress.
convert -density 400 "$basepath.pdf" "$basepath.png"
imageoptim -a --quality 40-60 --speed 5 "$basepath.png"