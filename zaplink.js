
console.log('Iniciando procura telefones...');

function extractMobilePhoneNumber(phonesElements) {
    var phoneNumber = phonesElements[0].textContent;

    if (!phoneNumber) {
        phoneNumber = document.querySelectorAll('[data-field="phone"]')[0].textContent;
    }

    phoneNumber = phoneNumber.replace(/\D/g, "");
    if (phoneNumber.startsWith('0')) {
        phoneNumber = phoneNumber.substr(1);
    }

    if (phoneNumber.startsWith('55')) {
        phoneNumber = phoneNumber.substr(2);
    }

    return phoneNumber;
}

function buildLinkZap(phoneNumber) {
    var linkZap = document.createElement('a');
    linkZap.href = 'https://api.whatsapp.com/send?phone=55' + phoneNumber;
    linkZap.setAttribute('target', '_blank');
    linkZap.append("Z");
    return linkZap;
}

function createZapButton(phonesElements, buttonsElements) {
    var phoneNumber = extractMobilePhoneNumber(phonesElements);
    var liZap = document.createElement('li');
    liZap.classList.add("uiListItem");
    liZap.classList.add("private-list__item");
    liZap.classList.add("create-engagement-button");

    var divZap = document.createElement('div');
    divZap.classList.add("gdBXAr");
    divZap.classList.add("create-engagement-icon");
    divZap.classList.add("m-x-1");
    divZap.classList.add("m-top-2");
    divZap.classList.add("text-center");
    liZap.append(divZap)

    var btnZap = document.createElement('button');
    btnZap.classList.add("uiButton");
    btnZap.classList.add("private-button");
    btnZap.classList.add("private-button--tertiary-light");
    btnZap.classList.add("private-button--sm");
    btnZap.classList.add("iAmgrf");
    btnZap.classList.add("private-button--icon-only");
    btnZap.classList.add("private-button--circle");
    btnZap.classList.add("private-button--active");
    btnZap.classList.add("private-button--non-responsive");
    //btnZap.classList.add("private-button--non-link");
    divZap.append(btnZap)

    var spanZap = document.createElement('span');
    btnZap.append(spanZap)
    spanZap.append(buildLinkZap(phoneNumber));
    buttonsElements[0].appendChild(liZap);
}

let testAppearTmr = setInterval(function () {
    var phonesElements = document.querySelectorAll('[data-field="mobilephone"]');
    var buttonsElements = document.querySelectorAll('ul[class*="CreateEngagementButtons"]');
    if (phonesElements.length && buttonsElements.length) {
        createZapButton(phonesElements, buttonsElements);
        clearInterval(testAppearTmr);
    } else {}
}, 500);
