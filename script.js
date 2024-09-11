const urlParams = new URLSearchParams(window.location.search);
const throneId = urlParams.get('throneId');

setInterval(update, 5000);

async function update() {
  const url = "https://api-leaderboard-ijywe5kgva-uc.a.run.app/v1/leaderboard/" + throneId;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.log("error", response)
    }

    const json = await response.json();
    name2 = json.lastTwentyGifters[0].gifterUsername;
    if (!name2) {
    	name2 = "Anonymous"
    }
    console.log(name2);
    document.getElementById("user").textContent = name2;
  } catch (error) {
    console.error(error.message);
  }
}
