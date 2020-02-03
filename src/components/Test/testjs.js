import React from "react";
export const test = () => {
        let div = document.getElementById('div');
        div.childNodes[0].innerHTML = 'Расстояние до нижнего индекса: ' + (document.getElementById('button').getBoundingClientRect().top
            - div.getBoundingClientRect().top) + 'px';
alert('Расстояние до нижнего индекса: ' + (document.getElementById('button').getBoundingClientRect().left
    - div.getBoundingClientRect().left) + 'px')
}
