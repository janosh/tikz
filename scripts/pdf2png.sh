#!/bin/bash

# Bash script that accepts a directory as only argument and recursively creates
# and compresses PNGs for the first page of every PDF it finds.
# Requires convert and imageoptim to be installed (`brew install imagemagick imageoptim-cli`).

# bash string manipulation via ${STR%foo*} strips the shortest match of foo* from STR
find $1 -type f -iname "*.pdf" \
 -exec sh -c 'convert -density 400 "$1"[0] "${1%.pdf}.png" && imageoptim --imagealpha "${1%.pdf}.png"' x {} \;
