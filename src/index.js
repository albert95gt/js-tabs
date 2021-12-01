import './sass/main.scss';

const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
}

refs.controls.addEventListener('click', onControlsClick);

function onControlsClick(event){

    event.preventDefault();
    if(event.target.nodeName !== 'A'){
        return;
    }
    const controlItem = event.target;
    
    const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');
    if(currentActiveControlItem){
        currentActiveControlItem.classList.remove('controls__item--active');
        const paneID = getPaneId(currentActiveControlItem);
        const pane = getPaneById(paneID);
        pane.classList.remove('pane--active');
    }
    const paneID = getPaneId(controlItem);
    controlItem.classList.add('controls__item--active');

    
    const pane = getPaneById(paneID);
    pane.classList.add('pane--active');
}

function getPaneId(control){
    return control.getAttribute('href')
}

function getPaneById(id){
    return refs.panes.querySelector(id)
}
