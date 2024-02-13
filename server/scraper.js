/* eslint-disable no-undef */
import "dotenv/config";
import { google } from "googleapis";
import yargs from "yargs";

/****************************************** API INIT ******************************************/

const API_KEY = "AIzaSyBcApwCH5J5b0ooYEm1fWla7MAmwgu9QcM";

const youtube = google.youtube({
  version: "v3",
  auth: API_KEY,
});

/*************************************** FETCH PLAYLISTS **************************************/

async function getPlaylists(channelID) {
  try {
    const response = await youtube.playlists.list({
      part: "snippet",
      channelId: channelID,
      maxResults: 50,
    });

    const playlists = response.data.items;

    playlists.forEach((playlist) => {
      console.log(`Playlist Title: ${playlist.snippet.title}`);
      console.log(`Playlist ID: ${playlist.id}`);
      console.log("-----------");
    });
  } catch (error) {
    console.error("Error fetching playlists:", error.message);
  }
}

/******************************** ACCEPT COMMAND LINE ARGUMENTS *******************************/

const argv = yargs(process.argv.slice(2)).demandCommand(
  1,
  "Please provide the channel ID."
).argv;

// Call the function to get playlists with the provided channel ID
const channelID = argv._[0];
getPlaylists(channelID);