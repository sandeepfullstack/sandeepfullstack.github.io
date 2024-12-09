const ytpl = require('ytpl');
const youtubedl = require('youtube-dl-exec');
const fs = require('fs');
const path = require('path');

const list='PLSyEwewdBy3LDIPdW67GmXCSErx1kPcJh'; //HanumanChalisaMeaning
const playlistUrl = `https://www.youtube.com/playlist?list=${list}`;
// const outputDir = 'HanumanChalisaMeaning';

const outputDir = 'TheChroniclesOfHanuman';
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
/* downloadPlaylist(playlistUrl).catch(err => {
    console.error('Error during processing:', err);
}); */

downloadVideo('https://www.youtube.com/watch?v=9j1hr9HO-rw', `TheChroniclesOfHanuman`).catch(err => {
    console.error('Error during processing:', err);
}); 

// ffmpeg -i TheChroniclesOfHanuman.mp3 -f segment -segment_time 600 -c copy ch%03d.mp3
// ffmpeg -i TheChroniclesOfHanuman.mp3 -f segment -segment_time 600 -c copy -reset_timestamps 1 ch%d.mp3
// ffmpeg -i TheChroniclesOfHanuman.mp3 -f segment -segment_time 600 -c copy -start_number 1 -reset_timestamps 1 ch%d.mp3

