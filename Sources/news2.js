const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=4bd0561b821e43eabb75687cffac5ecb";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}