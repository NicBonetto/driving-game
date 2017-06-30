/* eslint-disable no-unused-vars */

let world = [
  [1, 1, 1, 1, 1, 1, 1],
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
  [1, 2, 2, 3, 2, 4, 1],
  [1, 1, 1, 1, 1, 1, 1]
]

class RaceCar {
  constructor($car, direction, speed, location) {
    this.$car = $car
    this.direction = direction
    this.speed = speed
    this.location = location
  }

  turn(change) {
    this.direction = change
  }

  move() {
    this.$car.className = ''
    this.$car.classList.add('car')
    switch (this.direction) {
      case 38 :
        if (world[this.location[0] - this.speed][this.location[1]] !== 1) {
          this.$car.classList.add('car-up')
          world[this.location[0]][this.location[1]] = 2
          this.location[0] -= this.speed
          world[this.location[0]][this.location[1]] = 4
          createMap(world)
        }
        break
      case 40 :
        if (world[this.location[0] + this.speed][this.location[1]] !== 1) {
          this.$car.classList.add('car-down')
          world[this.location[0]][this.location[1]] = 2
          this.location[0] += this.speed
          world[this.location[0]][this.location[1]] = 4
          createMap(world)
        }
        break
      case 39 :
        if (world[this.location[0]][this.location[1] + this.speed] !== 1) {
          this.$car.classList.add('car-right')
          world[this.location[0]][this.location[1]] = 2
          this.location[1] += this.speed
          world[this.location[0]][this.location[1]] = 4
          createMap(world)
        }
        break
      case 37 :
        if (world[this.location[0]][this.location[1] - this.speed] !== 1) {
          this.$car.classList.add('car-left')
          world[this.location[0]][this.location[1]] = 2
          this.location[1] -= this.speed
          world[this.location[0]][this.location[1]] = 4
          createMap(world)
        }
        break
      default : alert('Error: Wrong Direction Indicated!')
        break
    }
  }

  static start(car) {
    const intervalID = setInterval(() => car.move(), 200)
    this.intervalID = intervalID
  }

  static stop(car) {
    clearInterval(this.intervalID)
  }
}

function createMap(map) {
  const $world = document.querySelector('#world')
  $world.innerHTML = ''

  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      switch (map[i][j]) {
        case 1 :
          const $wall = document.createElement('div')
          $wall.classList.add('wall')
          $world.appendChild($wall)
          break
        case 2 :
          const $ground = document.createElement('div')
          $ground.classList.add('ground')
          $world.appendChild($ground)
          break
        case 3 :
          const $yellow = document.createElement('div')
          $yellow.classList.add('yellow')
          $world.appendChild($yellow)
          break
        case 4 :
          $world.appendChild($racer)
      }
    }
    const $br = document.createElement('br')
    $world.appendChild($br)
  }
}

function createElement(tagName, attributes, children) {
  const $element = document.createElement(tagName)

  for (const key in attributes) {
    $element.setAttribute(key, attributes[key])
  }

  children.forEach(child => $element.appendChild(child))

  return $element
}

const $racer = createElement('div', { class: 'car car-up' }, [])

const racer = new RaceCar($racer, 38, 1, [12, 5])

let spaceCounter = 0

createMap(world)

document.addEventListener('keypress', function (event) {
  if (event.keyCode === 32) {
    if (spaceCounter % 2 !== 0) {
      RaceCar.stop(racer)
    }
    else {
      RaceCar.start(racer)
    }
    spaceCounter++
  }
})

document.addEventListener('keydown', function (event) {
  if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
    racer.turn(event.keyCode)
  }
})
