#!/bin/bash

# ffmpeg -i TheChroniclesOfHanuman.mp3 -f segment -segment_time 600 -c copy ch%d.mp3

i=1
for file in $(ls ch*.mp3 | sort); do
  # mv "$file" "ch$i.mp3"
  # mv -vn "$file" "ch$i.mp3"
  mv -n "$file" "ch$i.mp3"
  echo "$file" "ch$i.mp3"
  ((i++))
done

