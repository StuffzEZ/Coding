console.log('links.js Loaded')

var disable = true

if (disable == false) {
    console.log('Script links.js Running Normally, Not Disabled, No Errors (Yet).')
} else {
    if (disable == true) {
        console.log('This Script Has Been Disabled By The Creator. If You Would Like To Re-Enable This Script, You Will Have To Contact The Owner.')
    } else {
        console.log('Variable "disable" Currently Set To Other Value. This Script Is Now Locked. It Will Not Work This Session.')
    }
}