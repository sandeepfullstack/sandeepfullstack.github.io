```sh
# low quelity less then 64k 
ffmpeg -i ch1.mp3 -b:a 24k ch1_1.mp3
# normal quelity 64k 
ffmpeg -i ch1.mp3 -b:a 24k ch1_1.mp3

# size reduce 
for file in *.mp3; do   
    echo "Compressing with VBR: $file";   
    ffmpeg -i "$file" -b:a 34k "/data/ytpl/Rigveda/test/$file"; 
done
# break file into 10 min each
ffmpeg -i input.mp3 -f segment -segment_time 600 -c copy output_%03d.mp3
# for multiple files
for file in *.mp3; do
  ffmpeg -i "$file" -f segment -segment_time 600 -c copy "${file%.mp3}_%03d.mp3"
done


# grep "bitrate": Filters the output to only show lines with the word "bitrate", so you can see the bitrate of each file.
for file in *.mp3; do
  echo "Processing: $file"
  ffmpeg -i "$file" 2>&1 | grep "bitrate"
done
# compressed_$file: Saves the compressed version with a "compressed_" prefix.
for file in *.mp3; do
  echo "Compressing: $file"
  ffmpeg -i "$file" -b:a 128k "compressed_$file"
done

# You can also use a variable bitrate (VBR) to compress files with better quality-to-size ratios.
# 1 == Less to 9 == big 
for file in *.mp3; do
  echo "Compressing with VBR: $file"
  ffmpeg -i "$file" -q:a 5 "compressed_vbr_$file"
done


for file in *.mp3; do
  echo "Compressing with VBR: $file"
  ffmpeg -i "$file" -q:a 1 "/data/ytpl/Rigveda/test/compressed_vbr_$file"
done





# If you want to convert multiple MP3 files to a different format (e.g., from MP3 to AAC or OGG)
for file in *.mp3; do
  echo "Converting to AAC: $file"
  ffmpeg -i "$file" -c:a aac -b:a 128k "${file%.mp3}.aac"
done


# You can adjust the bitrate (-b:a 128k), quality (-q:a 5), or output format to suit your needs.

ffmpeg -i input.mp3 -c:a aac -b:a 192k -f segment -segment_time 10 -segment_format mp4 -segment_list playlist.m3u8 -segment_list_type m3u8 segment_%03d.ts
# Explanation of the Command:
# -i input.mp3: The input MP3 file.
# -c:a aac: Encodes the audio in AAC format (which is commonly used in HLS).
# -b:a 192k: Sets the audio bitrate to 192 kbps (you can adjust this).
# -f segment: Tells FFmpeg to split the file into multiple segments.
# -segment_time 10: Each segment will be 10 seconds long (you can adjust this time).
# -segment_format mp4: The segments will be in the MP4 format, which is often used for HLS.
# -segment_list playlist.m3u8: This option generates an M3U8 playlist file (playlist.m3u8) that will reference the generated segments.
# -segment_list_type m3u8: Specifies that the playlist will be in the M3U8 format (HLS playlist).
# segment_%03d.ts: The name format for the segment files (segment_001.ts, segment_002.ts, etc.).


# for mutiple files
for file in *.mp3; do
  ffmpeg -i "$file" -c:a aac -b:a 192k -f segment -segment_time 10 -segment_format mp4 -segment_list "${file%.mp3}.m3u8" -segment_list_type m3u8 "${file%.mp3}_segment_%03d.ts"
done


# break into 10 minuts 600 seconds = 10 minutes
ffmpeg -i input.mp3 -f segment -segment_time 600 -c copy output%03d.mp3


```










```sh
# <=================================================================>
# just echo files
for file in *.mp3; do
  echo "Compressing with VBR: $file"  
done
# just echo files in single line
for file in *.mp3; do echo "Compressing with VBR: $file"; done
# check file size
for file in *.mp3; do du -sh $file; done

# ffmpeg -i "ch1.mp3" -q:a 1  # size increeased 1 greater and 9 is smalleset
# ffmpeg -i "ch1.mp3" -q:a 9  # size descrease
for file in *.mp3; do
  echo "Compressing with VBR: $file"
  ffmpeg -i "$file" -q:a 9 "/data/ytpl/PatanjalisYogaSutras/compressed/$file"
done
# <=================================================================>

for file in *.mp3; do   echo "Compressing with VBR: $file"
  ffmpeg -i "$file" -q:a 9 "/data/ytpl/PatanjalisYogaSutras/compressed/$file"; done
```






```js
const ytpl = require('ytpl');
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const path = require('path');

// Playlist URL
// const list='PLHLIDF7TFbcLL10FgbmxzQWVXZb_mMmI8'; // श्रीमद् भगवद गीता
// const list='PLHLIDF7TFbcI8u23WycnSmka3A_Ni4DZb'; // श्रीमद्भागवत महापुराण
// const list='PLHLIDF7TFbcJHYGy7oZdxzvT9LKBv9kls'; // श्री वाल्मीकि रामायण
// const list='PLxq1RSkJshlPi5AjG-570UOzabbYPJ0WD'; // श्हनुमान चालीसा का अर्थ
// const list='PLI9pJ1j5Go3uErxQabaNAPa3Y6QjcAqv-'; //vrindavanchandra.das  
// const list='PLFr_jkwUp0his35ff0LvPrI_U2oBYdL3b'; // UpanishadGanga
// const list='PLf9t1BuDaz1cCFiWg3x9L1uO1aArFdjCJ'; // Rigveda
// const list='PLi40Uu5ziQ7YnTssjlmllhSyP63LC1FXs'; // अष्टाध्यायी
// https://www.youtube.com/channel/UCe7lw7N0av2B295t17pkeGQ
// https://www.youtube.com/watch?v=9oEfutjvAi0&list=PLTfDtaImcXfsvYGDfjxrEPQ03DgpVD7Tc
// const list='PL9C28snP3B3uRMUCurSz8HlqaO_Tm9sAN'; //सम्पूर्ण अथर्ववेद (हिंदी)
// const list='PL9C28snP3B3trwcW2CscglPYe38gW_M-p'; //हिंदी में यजुर वेद
// const list='PLnc0uXpfPvYwNtXrP3eeAv_WHeKqE_AEz'; //Patanjali Yoga Sutra
// const list='PLr1IjOKSXurTn3DcqIHStmiKChBi2vnZH'; //Gayatri Mantra
// const list='PLr1IjOKSXurRqvAXOyWVw8nQoXimw6cj8'; //OmSwami BhagavadGita
const list='PLvWv7q5J9EYdLZPgu4hmABhBQmINSeEZ5'; // Ashtavakra Gita



const playlistUrl = `https://www.youtube.com/playlist?list=${list}`;

// Directory to save MP3s
// const outputDir = 'downloads';
// const outputDir = 'hanumanChalisa';
// const outputDir = 'UpanishadGanga';
// const outputDir = 'atharvaVeda';
// const outputDir = 'GayatriMantra';
// const outputDir = 'BhagavadGitaByOmSwami';
const outputDir = 'AshtavakraGita'
// const outputDir ='YajurVeda';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Function to download and convert a video to MP3
const downloadVideo = async (videoUrl, vname) => {
    const outputFile = path.join(outputDir, `${vname}.mp3`);
    try {
        await youtubedl(videoUrl, {
            extractAudio: true,
            audioFormat: 'mp3',
            output: outputFile,
            noCheckCertificate: true,
        });
        console.log(`Downloaded: ${outputFile}`);
    } catch (err) {
        console.error(`Error downloading ${videoUrl}: ${err.message}`);
    }
};

// Function to get video URLs from the playlist using ytpl
const getPlaylistVideos = async (url) => {
    try {
        const playlist = await ytpl(url);
        return playlist.items.map(item => item.shortUrl);
        // return ['https://www.youtube.com/watch?v=DD1OjOo0zTQ'];
    } catch (err) {
        console.error('Error fetching playlist:', err);
        return [];
    }
};

// Start the download process
const downloadPlaylist = async (url) => {
    const videos = await getPlaylistVideos(url);
    console.log(`Found ${videos.length} videos in the playlist.`);
    
    let noOfIdx = 1;
    for (const videoUrl of videos) {
        console.log(`Downloading: ${videoUrl} as ch${noOfIdx}`);
        await downloadVideo(videoUrl, `ch${noOfIdx}`);
        noOfIdx++;
    }
};

// Initiate the download
downloadPlaylist(playlistUrl).catch(err => {
    console.error('Error during processing:', err);
});

```


```json
{
  "dependencies": {
    "youtube-dl-exec": "^3.0.10",
    "ytpl": "^2.3.0"
  }
}
```