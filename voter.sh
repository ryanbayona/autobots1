#!/usr/bin/env bash
count=0

while true; do
    start=$(date +%s)

    node myjs.js
    node myjs.js
    node myjs.js
    node myjs.js
    node myjs.js
    status=$?

    end=$(date +%s)
    elapsed=$((end - start))

    ((count++))

    echo "Iteration: $count | Exit: $status | Duration: ${elapsed}s"

    if (( count >= 25 )); then
        sleep 60
        count=0
    fi
done