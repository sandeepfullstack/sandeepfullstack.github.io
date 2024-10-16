#!/bin/bash

# Base URL
BASE_URL="https://cdn.vivekavani.com/wp-content/uploads/2021/07/Bhagavad-Gita-Chapter-2-Verse-"

# Loop from 1 to 40
for i in $(seq 1 72); do
    # Construct the full URL
    # FILE_URL="$BASE_URL/$i.mp3"
    FILE_URL="$BASE_URL$i.mp3"
    
    # Download the file
    wget "$FILE_URL"
done


# chmod +x download_mp3s.sh
# ./download_mp3s.sh
# for file in Bhagavad-Gita-Chapter-2-*; do mv "$file" "${file##*-}"; done
# https://vivekavani.com/bg/
# wget https://cdn.vivekavani.com/wp-content/uploads/2022/05/Bhagavad-Gita-Chapter-1-Verse-8-9.mp3