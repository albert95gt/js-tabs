import './sass/main.scss';

const refs = {
    controls: document.querySelector('#tabs-1 [data-controls]'),
    panes: document.querySelector('#tabs-1 [data-panes]'),
}

refs.controls.addEventListener('click', event => {
    event.preventDefault();
    if(event.target.nodeName !== 'A'){
        return;
    }
    const controlItem = event.target;
    
    const currentActiveControlItem = refs.controls.querySelector('.controls__item--active');
    if(currentActiveControlItem){
        currentActiveControlItem.classList.remove('controls__item--active');
        const paneID = currentActiveControlItem.getAttribute('href');
        const pane = refs.panes.querySelector(paneID);
        pane.classList.remove('pane--active');
    }
    const paneID = controlItem.getAttribute('href');
    controlItem.classList.add('controls__item--active');

    
    const pane = refs.panes.querySelector(paneID);
    pane.classList.add('pane--active');
})
