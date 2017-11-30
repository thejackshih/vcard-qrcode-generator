var QRCode = require('qrcode')
var image = document.getElementById('image')
var logo = document.getElementById('logo')

let template = 
`BEGIN:VCARD
VERSION:3.0
N:lastname;firstname;;;
FN:Name
ORG:company;department
TITLE:title
TEL;TYPE=WORK:
TEL;TYPE=FAX:
ADR;TYPE=WORK:;;
EMAIL;TYPE=WORK:
URL:
END:VCARD`
// Post Office Address; Extended Address; Street; Locality; Region; Postal Code; Country

let generateQRCodeString = function() {
    let name = document.getElementById('name').value
    let lastName = document.getElementById('lastName').value
    let org = document.getElementById('org').value
    let department = document.getElementById('department').value
    let title = document.getElementById('title').value
    let phone = document.getElementById('phone').value
    let email = document.getElementById('email').value
    let fax = document.getElementById('fax').value
    //let address = document.getElementById('address').value
    let website = document.getElementById('website').value
    let color = document.getElementById('color').value
    let extAddress = document.getElementById('extAddress').value
    let street = document.getElementById('street').value
    let locality = document.getElementById('locality').value
    let region = document.getElementById('region').value
    let postalCode = document.getElementById('postalCode').value
    let country = document.getElementById('country').value

    let showLogo = document.getElementById('showLogo').value    

    var result = "BEGIN:VCARD\nVERSION:3.0\n"
    if(name && lastName) {
        result += "N:" + lastName + ";" + name + ";;;\nFN:" + lastName + name + "\n";
    }
    if(org && department) {
        result += "ORG:" + org + ";" + department + "\n"
    }
    if(title) {
        result += "TITLE:" + title + "\n" 
    }
    if(phone) {
        result += "TEL;TYPE=WORK:" + phone + "\n"
    }
    if(fax) {
        result += "TEL;TYPE=FAX:" + fax + "\n"
    }
    result += "ADR;TYPE=WORK:;"
    if(extAddress) {
        result += extAddress
    }
    result += ";"
    if(street) {
        result += street
    }
    result += ";"
    if(locality) {
        result += locality
    }
    result += ";"
    if(region) {
        result += region
    }
    result += ";"
    if(postalCode) {
        result += postalCode
    }
    result += ";"
    if(country) {
        result += country
    }
    result += "\n"
    if(email) {
        result += "EMAIL:" + email + "\n"
    }
    if(website) {
        result += "URL:" + website + "\n"
    }
    result += "END:VCARD";
    console.log(result)
    return result
}
let generateQRCode = function() {
    QRCode.toCanvas(generateQRCodeString(), {margin:0, scale: 20, color: {dark: color.value, light: "#ffffff" }, errorCorrectionLevel: 'H' }, function (error, canvas) {
        if (error) console.error(error) 
        if(showLogo && showLogo.checked) {
            var ctx = canvas.getContext('2d')
            console.log(canvas.width);
            console.log(canvas.height);
            ctx.drawImage(logo,canvas.width/2 - 250*1.13, canvas.width/2 - 250, 500*1.13, 500);
        }
        image.src = canvas.toDataURL("image/png")
    })
}


let fileHandler = function(evt) {
    var files = evt.target.files;
    var f = files[0];
    var reader = new FileReader();
    reader.onload = (function(theFile) {
        return function(e) {
            logo.src = e.target.result;
        };
    })(f);
    reader.readAsDataURL(f);
}
document.getElementById('files').addEventListener('change', fileHandler, false);
