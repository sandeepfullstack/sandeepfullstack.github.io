const ytpl = require('ytpl');
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const path = require('path');

// Playlist URL
// const list='PLHLIDF7TFbcLL10FgbmxzQWVXZb_mMmI8'; // श्रीमद् भगवद गीता
// const list='PLHLIDF7TFbcI8u23WycnSmka3A_Ni4DZb'; // श्रीमद्भागवत महापुराण
const list='PLHLIDF7TFbcJHYGy7oZdxzvT9LKBv9kls'; // श्री वाल्मीकि रामायण


const playlistUrl = `https://www.youtube.com/playlist?list=${list}`;

// Directory to save MP3s
const outputDir = 'downloads';

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
        // await downloadVideo(videoUrl, `ch${noOfIdx}`);
        noOfIdx++;
    }
};

// Initiate the download
downloadPlaylist(playlistUrl).catch(err => {
    console.error('Error during processing:', err);
});

/* npm install ytpl
npm i youtube-dl-exec
npm update youtube-dl-exec
npm update ytpl */