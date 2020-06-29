let color = document.getElementsByClassName('color');

let toggle = false;

for (let i = 0; i < color.length; i++) {
    console.log(color[i]);
    color[i].addEventListener('click', (e) => {
        for (let j = 0; j < color.length; j++) {
            if (i == j) {
                if (toggle) color[j].style.width = '70px'; else color[j].style.width = '100%';
            } else {
                if (toggle)color[j].style.display = 'block'; else color[j].style.display = 'none';
            }
        }
        toggle = !toggle;
    });
}