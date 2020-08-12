#!/bin/bash

# Bash script that recursively compresses all PDFs in encountered in the
# directory provided as first argument. Requires the ghostscript cli: gs.

# Example invocation: scripts/pdfcompress.sh assets

find "$1" -name "*.pdf" | while read file; do
  basename=${file%.pdf}

  gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/ebook \
    -dNOPAUSE -dBATCH -dQUIET -sOutputFile="$basename-min.pdf" "$file"

  if ((`stat -f%z "$basename-min.pdf"` < `stat -f%z "$basename.pdf"`)); then
    rm "$basename.pdf"
    mv "$basename-min.pdf" "$basename.pdf"
  else
    rm "$basename-min.pdf"
  fi
done