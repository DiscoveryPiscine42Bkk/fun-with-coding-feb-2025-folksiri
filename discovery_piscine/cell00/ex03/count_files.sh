#!/bin/bash

count=$(find . -maxdepth 1 \( -type f -o -type d \) | wc -l)
count=$((count - 1))  # Subtract 1 to exclude "."

echo "$count"
