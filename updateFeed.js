function updateFeed() {
    console.log('Updating feed');
    const caption = document.getElementsByClassName('j-text');
    while (caption.length > 0) {
        caption[0].parentNode.removeChild(caption[0]);
    }

    const numColumns = document.querySelectorAll('[id^="j-column"]').length;
    let images = document.querySelectorAll('[class~="feed-item"]');
    const numImages = images.length;
    const heightProportion = 100 / (numImages / numColumns);
    
    images.forEach((image, index) => {
        image.style.height = heightProportion.toString() + '%';
    })

    const projects = document.querySelectorAll('.folio-item__thumb');
    const descriptions = document.querySelectorAll('[id^="modal-"]');

    console.log('Descriptions: ', descriptions);
    // console.log('Node', descriptions[0].dataset.desc);

    projects.forEach((project, index) => {
        let projectState = window.getComputedStyle(project, ':after');
        let desc = descriptions[index].dataset.desc;
        projectState.setProperty('content', desc);
        // projectState.setProperty('')
    })

}