if (typeof Raven !== 'undefined') {
    var head = document.getElementsByTagName('HEAD')[0];
    var ravenId = null;

    if (typeof head.getAttribute === 'function') {
        ravenId = head.getAttribute('data-raven');
    }
    else if (head.dataset) {
        ravenId = head.dataset['raven'];
    }

    if (ravenId && ravenId.length) {
        Raven.config(ravenId).install();
    }
}