
const driver = {}

function updateDriverWithKeyAndValue(driver, k, v) {
return Object.assign({}, driver, {[k]:v})

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {

   driver[key] = value
   return driver
}

function deleteFromDriverByKey(driver, name) {
    const dri = {...driver}
     delete dri.name
     return dri
 
 }

function destructivelyDeleteFromDriverByKey(driver, name) {
    delete driver.name
    return driver
}