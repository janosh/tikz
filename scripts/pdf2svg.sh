#!/bin/bash

# Bash script that accepts a directory as only argument and recursively creates
# SVG files for every PDF it finds.
# Requires `pdf2svg` to be installed (`brew install pdf2svg`).

find $1 -type f -iname "*.pdf" \
 -exec sh -c 'pdf2svg "$1" "${1%.pdf}".svg' x {} \;