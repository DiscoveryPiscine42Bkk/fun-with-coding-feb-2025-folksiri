#!/bin/bash

if [ -z "$1" ]; then
    echo "No argument supplied"
else
    [ "$1" ] && echo "$1"
    [ "$2" ] && echo "$2"
    [ "$3" ] && echo "$3"
fi
