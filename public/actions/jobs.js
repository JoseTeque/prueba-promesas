// PRUEBA FINAL ->
const BaseUrl = `https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json?`

const descripcion = document.getElementById('descripcion');
const location = document.getElementById('location');
const button = document.getElementById('buscar');
const contenedorEmpleo = document.querySelector("#contenedor-empleo");

const fragment = document.createDocumentFragment();

button.addEventListener('click',  (e) => {
    e.preventDefault();
    contenedorEmpleo.innerHTML = '';
   
    const descripcionValue = descripcion.value;
    const locationValue = location.value;

     axios.get(`${BaseUrl}description=${descripcionValue}&location=${locationValue}`).then(response => {
        
        const resultado = response.data;

        resultado.forEach(empleo => {
          
            const titulo = document.createElement('h3'); 
            titulo.textContent = empleo.title;
            titulo.style.color = 'blue';

            const type = document.createElement('p');
            type.textContent = empleo.type;
            type.style.color = 'green';

            const company = document.createElement('p');
            company.textContent = empleo.company;
            company.style.fontSize = '18px'

            const contenedorIzquierdo = document.createElement('div');
            contenedorIzquierdo.setAttribute('class', 'contenedorIzquierdo');

            contenedorIzquierdo.appendChild(titulo);
            contenedorIzquierdo.appendChild(type);
            contenedorIzquierdo.appendChild(company);

            const contenedorDerecho = document.createElement('div');
            contenedorIzquierdo.setAttribute('class', 'contenedorDerecho');

            const location = document.createElement('p');
            location.textContent = empleo.location;

            const creado = document.createElement('p');
            creado.textContent = empleo.created_at;

            contenedorDerecho.appendChild(location);
            contenedorDerecho.appendChild(creado);

            const contenidoEmpleo = document.createElement('li');
            contenidoEmpleo.appendChild(contenedorIzquierdo);
            contenidoEmpleo.appendChild(contenedorDerecho);

            contenidoEmpleo.style.display = 'flex';
            contenidoEmpleo.style.justifyContent = 'space-between';
            contenidoEmpleo.style.alignItems = 'center';
            contenidoEmpleo.style.marginTop = '20px';
            contenidoEmpleo.style.background = '#e1e1e1';
            contenidoEmpleo.style.padding = '8px';



            fragment.appendChild(contenidoEmpleo);

        })
    
        contenedorEmpleo.appendChild(fragment);
    }).catch(err => console.log(err))
   
})