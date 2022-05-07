const jokeBtn = document.querySelector('#jokeBtn')
const jokeField = document.querySelector('#joke')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

async function generateJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeField.innerHTML = data.joke
}