const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1
const numCircles = circles.length

next.addEventListener('click', () => {
  currentActive++

  if(currentActive > numCircles) {
    currentActive = numCircles
  }

  handleProgress();
})

prev.addEventListener('click', () => {
  currentActive--

  if(currentActive < 1) {
    currentActive = 1
  }

  handleProgress();
})

function handleProgress() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  progress.style.width = (currentActive - 1) / (numCircles - 1) * 100 + '%'

  if(currentActive === 1) {
    prev.disabled = true
  } else if(currentActive === numCircles) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
