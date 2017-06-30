/* eslint-disable no-unused-vars */

let world = [
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1],
  [1, 2, 2, 3, 2, 2, 1]
]

class RacerCar {
  constructor(direction, speed, location) {
    this.direction = direction
    this.speed = speed
    this.location = location
  }
}

function createMap(map) {
  const $world = document.querySelector('#world')
  $world.innerHTML = ''

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        const $wall = document.createElement('div')
        $wall.classList.add('wall')
        $world.appendChild($wall)
      }
      if (map[i][j] === 2) {
        const $ground = document.createElement('div')
        $ground.classList.add('ground')
        $world.appendChild($ground)
      }
      if (map[i][j] === 3) {
        const $yellow = document.createElement('div')
        $yellow.classList.add('yellow')
        $world.appendChild($yellow)
      }
    }
    const $br = document.createElement('br')
    $world.appendChild($br)
  }
}

createMap(world)
