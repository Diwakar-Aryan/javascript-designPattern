/*
A common problem when building apps is allowing collaboration between incompatible classes.

A good example to understand this is while maintaining backward compatibility.If you write a new version of a class, you’d naturally want it to be easily usable in all places where the old version worked.However, if you make breaking changes like removing or updating methods that were crucial to the functioning of the old version, you might end up with a class that needs all of its clients to be updated in order to be run.
*/

function Robot() {
  this.walk = function (steps) {
    console.log('Walked ', steps, 'steps');
  }
  this.sit = function () {
    console.log('sit');
  }

}

function AdvancedRobot(botName) {

  this.name = botName

  this.sit = function () {
    console.log('sit');
  }

  this.rightStepForward = function () {
    console.log('Right step forward');
  }
  this.leftStepForward = function () {
    console.log('Left step forward');
  }


}

function RobotAdapter(botName) {
  const robot = new AdvancedRobot(botName)

  this.sit = robot.sit

  this.walk = function (steps) {
    for (let i = 0; i < steps; i++) {
      if (i % 2 == 0)
        robot.rightStepForward()
      else
        robot.leftStepForward()
    }
  }
}

function run() {
  let robot = new Robot()
  robot.sit()
  robot.walk(5)

  robot = new RobotAdapter('new Bot')
  robot.sit()
  robot.walk(5)
}

run()