#!/bin/bash

# Base URL
CHAPTER="5"
NO_OF_REC=45
TARGET_DIR="/var/www/html/sandeepfullstack.github.io/book/geeta/audio1/$CHAPTER"
mkdir -p "$TARGET_DIR"
# https://cdn.vivekavani.com/wp-content/uploads/2022/03/Bhagavad-Gita-Chapter-3-Verse-10.mp3
# https://cdn.vivekavani.com/wp-content/uploads/2022/04/Bhagavad-Gita-Chapter-4-Verse-1.mp3
# https://cdn.vivekavani.com/wp-content/uploads/2022/04/Bhagavad-Gita-Chapter-5-Verse-8-9.mp3
BASE_URL="https://cdn.vivekavani.com/wp-content/uploads/2022/04/Bhagavad-Gita-Chapter-$CHAPTER-Verse-"

# Loop from 1 to 40
for i in $(seq 1 $NO_OF_REC); do
    # Construct the full URL
    # FILE_URL="$BASE_URL/$i.mp3"
    FILE_URL="$BASE_URL$i.mp3"
    
    # Download the file
    # wget "$FILE_URL"
    wget -P "$TARGET_DIR" "$FILE_URL"
done


# chmod +x download_mp3s.sh
# ./download_mp3s.sh
# for file in Bhagavad-Gita-Chapter-2-*; do mv "$file" "${file##*-}"; done
# for file in Bhagavad-Gita-Chapter-5-*; do mv "$file" "${file##*-}"; done
# https://vivekavani.com/bg/
# wget https://cdn.vivekavani.com/wp-content/uploads/2022/05/Bhagavad-Gita-Chapter-1-Verse-8-9.mp3