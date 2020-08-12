#!/bin/bash

# Use as `./scripts/newtikz.sh assets/tex-file/tex-file.tex`.

# Get name of directory containing the TeX file and cd into it.
dir=${1%/*}
cd "$dir"

# Get basename of TeX file.
file=${1##*/}
basename=${file%.tex}

# Create PDF from TeX file.
latexmk -silent -pdf

# Clean Latex auxiliary files (actually all files not ending in .tex, .pdf, .svg or .png)
find -E . -type f -regex ".*\.(aux|log|fls|fdb_latexmk)$" -delete

# Try to compress PDF.
gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
  -dNOPAUSE -dBATCH -dQUIET -sOutputFile="$basename-min.pdf" "$basename.pdf"

# Check if compressed PDF is smaller than original. If so, remove old one and
# name compressed one according to original, else delete compressed one.
if ((`stat -f%z "$basename-min.pdf"` < `stat -f%z "$basename.pdf"`)); then
  rm "$basename.pdf"
  mv "$basename-min.pdf" "$basename.pdf"
else
  rm "$basename-min.pdf"
fi

# Convert PDF to SVG and compress.
pdf2svg "$basename.pdf" "$basename.svg"
svgo "$basename.svg"

# Convert PDF to PNG and compress.
convert -density 400 "$basename.pdf" "$basename.png"
imageoptim "$basename.png"