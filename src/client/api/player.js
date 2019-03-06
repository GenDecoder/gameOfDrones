export async function createPlayer(name) {
   const response = await fetch('/api/player/create', {
      method: 'POST',
      headers: {
         Accept: 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name })
   });
   return response;
}
export async function updatePlayer(id, { win, numberOfRocks, numberOfPaper, numberOfScissors }) {
   const response = await fetch('/api/player/update', {
      method: 'POST',
      headers: {
         Accept: 'application/json, text/plain, */*',
         'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, win, numberOfRocks, numberOfPaper, numberOfScissors })
   });
   return response;
}

export function getAllPlayers() {
   const response = fetch('/api/player/get/all');
   return response.then(res => res.json());
}
