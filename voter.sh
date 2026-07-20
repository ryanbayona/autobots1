#!/usr/bin/env bash
count=0

while true; do
    start=$(date +%s)
    node myjs.ts
   
    status=$?

    end=$(date +%s)
    elapsed=$((end - start))

    ((count++))

    echo "Sleeping for 30"
    sleep 30
    count=0
done