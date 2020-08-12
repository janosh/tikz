#!/bin/bash

# Bash script that accepts a directory as only argument and recursively creates
# and compresses SVGs for every PDF it finds.
# Requires pdf2svg and svgo to be installed (`brew install pdf2svg svgo`).

find $1 -type f -iname "*.pdf" \
 -exec sh -c 'pdf2svg "$1" "${1%.pdf}.svg" && svgo "${1%.pdf}.svg"' x {} \;