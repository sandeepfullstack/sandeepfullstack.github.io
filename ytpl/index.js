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
// const list='PLvWv7q5J9EYdLZPgu4hmABhBQmINSeEZ5'; // Ashtavakra Gita
// const list='PLIvsAvL6xE75oG0OoLyML-M-pYEamrI0_'; // Shikshapatri
// const list='PL2F3F85480462FE28'; //english Shikshapatri
// const list='PL2Oa0rCbxcVRAPMz0S2bYbef_j0LKy5RK'; // zenYoga
// const list='PLSyEwewdBy3LDIPdW67GmXCSErx1kPcJh'; //HanumanChalisaMeaning
const list='PLDqahtm2vA70qrUoOPzu4PPpf0bL2PAot'; // Patanjali's Yoga Sutras 


const playlistUrl = `https://www.youtube.com/playlist?list=${list}`;

// Directory to save MP3s
// const outputDir = 'downloads';
// const outputDir = 'hanumanChalisa';
// const outputDir = 'UpanishadGanga';
// const outputDir = 'atharvaVeda';
// const outputDir = 'GayatriMantra';
// const outputDir = 'BhagavadGitaByOmSwami';
// const outputDir = 'AshtavakraGita'
// const outputDir ='YajurVeda';
// const outputDir = 'Shikshapatri';
// const outputDir = 'ShikshapatriEnglish';
// const outputDir = 'zenYoga';
// const outputDir = 'HanumanChalisaMeaning';
const outputDir ='PatanjalisYogaSutras'; //Vedanta Society of New York


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
