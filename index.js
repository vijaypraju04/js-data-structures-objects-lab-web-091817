// Write your solution in this file!

let driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  let newObj = { ...driver }
  newObj[key] = value
  return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key, value) {
  let newObj = {...driver}
  delete newObj[key]
  return newObj
}


function destructivelyDeleteFromDriverByKey(driver, key, value) {
  delete driver[key]
  return driver
}
