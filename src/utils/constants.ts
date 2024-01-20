export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + import.meta.env.VITE_YOUTUBE_API_KEY;

export const CHANNEL_URL = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics";

// export const YT_SEARCH = "http://suggestqueries.google.com/complete/search?ds=yt&q=";
export const YT_SEARCH = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
// jaz&callback=google.sbox.p50&gs_gbg=0l0MjG05RWnWBe9WcipQbsy