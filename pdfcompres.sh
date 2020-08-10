#!/bin/bash

# Bash script that recursively compresses all PDFs in encountered in the
# directory provided as first argument. Requires ghostscript (cli: gs).

# You may want to first test this script by appending something -min or
# similar ("$path/$filename-min.pdf") to the output file rather than
# immediately compressing files in place.

find "$1" -name "*.pdf" | while read file; do
  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
    -dNOPAUSE -dBATCH -dQUIET -sOutputFile="$file" "$file"
done