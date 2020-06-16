class Authorization {
    form() {
        this.authorization = document.getElementById('authorization');
        this.div = document.createElement('div');
        this.divWrapperModal = document.createElement('div');
        this.divModal = document.createElement('div');
        this.divPole = document.createElement('div');
        this.divZagolovok = document.createElement('div');
        this.label = document.createElement('label');
        this.aClose = document.createElement('a');
        this.divClone0 = this.div.cloneNode(false);
        this.divClone1 = this.div.cloneNode(false);
        this.labelClone0 = this.label.cloneNode(false);

        this.divWrapperModal.classList.add('wrapper-modal');
        this.divModal.classList.add('div-modal');
        this.divPole.classList.add('pole');
        this.divZagolovok.classList.add('zagolovok');
        this.label.classList.add('label');
        this.labelClone0.classList.add('label');
        this.aClose.classList.add('close');
        this.authorization.classList.add('modal');
        this.aClose.setAttribute('href', '#');

        this.divZagolovok.textContent = 'Авторизация';
        this.label.innerHTML = 'Ваш логин: <input class="input-modal" type="password" required placeholder="Password">';
        this.labelClone0.innerHTML = 'Ваш пароль: <input class="input-modal" type="password" required placeholder="Password">';
        this.divClone1.innerHTML = '<input class="button-modal" type="submit" value="Войти">';
        this.aClose.innerHTML = '<button id="close">&#10008;</button>';

        this.div.appendChild(this.label);
        this.divClone0.appendChild(this.labelClone0);
        this.divPole.appendChild(this.divZagolovok);
        this.divPole.appendChild(this.div);
        this.divPole.appendChild(this.divClone0);
        this.divPole.appendChild(this.divClone1);
        this.divPole.appendChild(this.aClose);
        this.divModal.appendChild(this.divPole);
        this.divWrapperModal.appendChild(this.divModal);
        this.authorization.appendChild(this.divWrapperModal);
    }
    closeForm() {
        this.authorization.classList.remove('modal');
        this.authorization.removeChild(this.divWrapperModal);

    }

}

document.addEventListener("DOMContentLoaded", openAuth);

function openAuth() {
    let newForm = new Authorization();

    document.addEventListener('click', showForm, false);

    function showForm(e) {
        let clickElem = e;

        if (clickElem.srcElement.id == 'buttonAuth' | clickElem.srcElement.id == 'buttonAuth2') {
            newForm.form()
        } if (clickElem.srcElement.id == 'close' ) {
            newForm.closeForm()
        }
    }
}
