#!/usr/bin/env bash
count=0

while true; do
    start=$(date +%s)
    npx tsx myjs.ts
   
    status=$?

    end=$(date +%s)
    elapsed=$((end - start))

    ((count++))

    echo "Sleeping for 30"
    sleep 60
    count=0
done