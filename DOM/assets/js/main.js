document.addEventListener('DOMContentLoaded', () => {

    const handleBlur = () => {
        document.title = titleText.value;
            }
    const hide = () => {
        seccion.style.display = 'none';
            }
    const output = () => {
        document.createElement('div');
        document.body.appendChild(output);
            }
    const copyContent = (seccion) => {
        output.textContent = seccion.textContent;
            }
    const titleText = () => {
        document.getElementById('page-title-input');
        titleText.addEventListener('blur', handleBlur);
         }
    const capa = () => {
        document.createElement('div');
        capa.style.display = 'flex';
        capa.appendChild(button1);
        capa.appendChild(button2);
        capa.appendChild( );
            }
    const button1 = () => {
        document.createElement('button');
        button1.addEventListener('click', () =>{
            hide(seccion2);
            hide(seccion3);
        });
        button1.addEventListener('mouseover', copyContent(seccion1));
            }
    const button2 = () => {
        document.createElement('button');
        button2.addEventListener('click', () =>{
            hide(seccion1);
            hide(seccion3);
        });
        button2.addEventListener('mouseover', copyContent(seccion2));
    }
    const button3 = () => {
        document.createElement('button');
        button3.style.marginRight = '1em';
        button3.addEventListener('click', () =>{
            hide(seccion1);
            hide(seccion2);
        });
        button3.addEventListener('mouseover', copyContent(seccion3));

    }
    const seccion1 = () => {
        document.getElementById('section-1');
    }
    const seccion2 = () => {
        document.getElementById('section-2');
    }
    const seccion3 = () => {
        document.getElementById('section-3');
    }
    const words = (seccion) => {
        seccion.textcontent.split(' ');
    }
    

    function keydownFunction() {
        document.getElementById('page-descripion').textContent.length;
    }

    })