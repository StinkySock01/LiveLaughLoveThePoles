
const navbar = document.getElementById('navbar');
const links = navbar.getElementsByTagName('a');

    for (let link of links) {
        link.addEventListener('mouseover', function() {
            this.style.color = 'blue';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    }