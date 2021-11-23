'use strict';

let installPrompt = null;

const btnInstalar = document.getElementById("btnInstall");
btnInstalar.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPrompt)

function saveBeforeInstallPrompt(evt) {
    installPrompt = evt;
    //Si la aplicación no está instalada, desoculta el botón
    btnInstalar.removeAttribute('hidden');
}

function installPWA(evt) {
    installPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    installPrompt.userChoice.then((choice)=> {
        if(choice.outcine === 'accepted') {
            console.log("Instalación aceptada");
        }else {
            console.log("Instalación no aceptada");
        }
        installPrompt.Prompt = null;
    })

    window.addEventListener('appinstalled', appInstalledlog);

    function appInstalledlog(evt) {
        console.log("PWA istalada");
    }
}