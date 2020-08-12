#!/bin/bash

# Bash script that accepts a directory as only argument and recursively creates
# and compresses PNGs for the first page of every PDF it finds.
# Requires convert and imageoptim to be installed (`brew install imageoptim-cli`).

find $1 -type f -iname "*.pdf" \
 -exec sh -c 'convert -density 500 "$1"[0] "${1%.pdf}.png" && imageoptim "${1%.pdf}.png"' x {} \;