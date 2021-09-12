
console.log('Iniciando procura telefones...');

let testAppearTmr = setInterval(function () {
    let phonesElements = document.querySelectorAll('[data-field="mobilephone"]');
    let buttonsElements = document.querySelectorAll('ul[class*="CreateEngagementButtons"]');
    let nameElements = document.querySelectorAll('[data-field="mobilephone"]');
    if (phonesElements.length && buttonsElements.length) {
        let phoneNumber = phonesElements[0].textContent;
        phoneNumber = phoneNumber.replace(/\D/g, "");
        if (phoneNumber.startsWith('0')) {
            phoneNumber = phoneNumber.substr(1);
        }

        if (phoneNumber.startsWith('55')) {
            phoneNumber = phoneNumber.substr(2);
        }

        let liZap = document.createElement('li');
        liZap.classList.add("uiListItem");
        liZap.classList.add("private-list__item");
        liZap.classList.add("create-engagement-button");

        let divZap = document.createElement('div');
        divZap.classList.add("gdBXAr");
        divZap.classList.add("create-engagement-icon");
        divZap.classList.add("m-x-1");
        divZap.classList.add("m-top-2");
        divZap.classList.add("text-center");
        liZap.append(divZap)

        let btnZap = document.createElement('button');
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

        let spanZap = document.createElement('span');
        btnZap.append(spanZap)

        let linkZap = document.createElement('a');
        linkZap.href = 'https://api.whatsapp.com/send?phone=55' + phoneNumber;
        linkZap.setAttribute('target', '_blank');
        linkZap.append("Z");
        spanZap.append(linkZap)

        buttonsElements[0].appendChild(liZap);
        clearInterval(testAppearTmr);
    }
}, 250);
