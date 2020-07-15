import '../css/componentes.css';

export const saludar = ( nombre ) => {

    console.log( 'Funcion Saludar' );

    const h1 = document.createElement('h1');
    h1.innerText = `Hola como estas?, soy ${ nombre }`;

    document.body.append(h1);

}
