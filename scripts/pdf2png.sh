#!/bin/bash

# Bash script that accepts a directory as only argument and recursively creates
# SVG files for the first page of every PDF it finds.
# Requires `convert` to be installed.

find $1 -type f -iname "*.pdf" \
 -exec sh -c 'convert -density 500 "$1"[0] "${1%.pdf}".png' x {} \;