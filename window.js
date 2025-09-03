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
    result += "ADR;TYPE=WORK:;";
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

let generateQRCode = async function() {
    const text = generateQRCodeString();
    const options = {
        margin: 0,
        scale: 20,
        color: { dark: color.value, light: "#ffffff" },
        errorCorrectionLevel: 'H'
    };

    try {
        // The 'showLogo' feature has been disabled to accommodate the new secure architecture.
        // The previous method required direct canvas access which is no longer available in the sandboxed renderer.
        image.src = await window.electronAPI.generateQR(text, options);
    } catch (err) {
        console.error(err);
    }
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
