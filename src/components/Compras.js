import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class Compras extends Component {

    

    render() {

     
        

        return (

            <div>
                <body background="https://fondosmil.com/fondo/4031.jpg " class="fixed-static">

                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <div class="container-fluid">
                            <Link className="navbar-brand" to="/">
                                Gym Style
                            </Link>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <Link className="nav-link active" to="/Compras">
                                            Compras
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link className="nav-link" to="/Home">
                                            Clases
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <h1 id="Titulo">COMPRA LOS MEJORES OBJETOS PARA QUE ESTES COMODO EN EL GYM</h1>
                    <div className="container">
                        <div id="card-group" class="card-group">
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226236.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title"> Aro Para Entrenamiento</h5>
                                    <p class="card-text">Es un elemento funcional y fundamental para el entrenamiento de coordinación y de propiocepción, entre otras.</p>
                                    <p class="card-text"><small class="text-muted">$7.800</small></p>
                                    <button  type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1219/1219860.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Mancuernas Pesas Por 2 Unidades</h5>
                                    <p class="card-text">Entrenamiento con cargas, en el cual se usa la fuerza de gravedad que se opone a la contracción muscular.</p>
                                    <p class="card-text"><small class="text-muted">$23.750</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1255/1255713.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Bicicleta de montaña </h5>
                                    <p class="card-text">La Bicicleta es impulsada por el propio viajero, que acciona el vehículo con el esfuerzo muscular de las piernas, en particular mediante pedales o manivelas.</p>
                                    <p class="card-text"><small class="text-muted">$1.300.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div id="card-group" class="card-group">
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/128/1222/1222720.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Botella Deportiva Adidas</h5>
                                    <p class="card-text">Producto ambientado, solo incluye productos especificados en la descripción.</p>
                                    <p class="card-text"><small class="text-muted">$ 34.990</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/425/425829.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Pesas de polietileno de alta densidad</h5>
                                    <p class="card-text">Le permiten concentrarse en grupos musculares diferentes para un entrenamiento de cuerpo entero, desde tus pantorrillas a sus brazos y hombros</p>
                                    <p class="card-text"><small class="text-muted">$275.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226172.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Barra deportiva</h5>
                                    <p class="card-text">Es un equipo de entrenamiento usado en entrenamiento con pesas, halterofilia, atletismo de fuerza y levantamiento de potencia.</p>
                                    <p class="card-text"><small class="text-muted">$139.900</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div id="card-group" class="card-group">
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/128/1226/1226178.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Cruce De Cable Ajustable </h5>
                                    <p class="card-text">La máquina de cruce de cables se utiliza para la estación de levantamiento de rodillas, estación de dominadas con múltiples agarres, estación de inmersión, estación de empuje y otros ejercicios de entrenamiento de fuerza.</p>
                                    <p class="card-text"><small class="text-muted">$1.599.999</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226176.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Maquina De Remo Magnetica Con Monitor</h5>
                                    <p class="card-text">Perfecto para aquellos centrados en el ajuste que tienen más motivación que el espacio de entrenamiento.</p>
                                    <p class="card-text"><small class="text-muted">$1.680.900</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/128/1226/1226175.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Bicicleta Eliptica</h5>
                                    <p class="card-text">Esta bicicleta cuenta con asiento ergonómico profesional, que puedes ajustar a tu altura y a la distancia de tus brazos, para estar en total comodidad para el ejercicio.</p>
                                    <p class="card-text"><small class="text-muted">$ 869.900</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div id="card-group" class="card-group">
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/128/1226/1226180.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Maquina pectoral</h5>
                                    <p class="card-text">Es una máquina que cuenta con un asiento para trabajar los músculos sentados, ejercitando el tren superior del cuerpo.</p>
                                    <p class="card-text"><small class="text-muted">$2.575.900</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226174.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Caminadora</h5>
                                    <p class="card-text">Una cinta de correr, cinta ergométrica, caminadora de banda o máquina de caminar es una máquina para entrenamiento físico que puede funcionar mediante propulsión eléctrica o manual, y que sirve para correr o andar sin moverse de un mismo sitio.</p>
                                    <p class="card-text"><small class="text-muted">$1.149.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226186.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Balón Inestable </h5>
                                    <p class="card-text">Nos ayuda a mejorar el equilibrio, especialmente de las articulaciones de tobillo, rodilla y cadera.Fortalece los músculos de pies y piernas. Además nos ayuda a entrenar la coordinación, agilidad y concentración. Nos ayuda a corregir la postura</p>
                                    <p class="card-text"><small class="text-muted">$64.900</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                        </div>
                        <div id="card-group" class="card-group">
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226193.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Saco Bolsa Boxeo</h5>
                                    <p class="card-text">El saco de boxeo o saco de box es un elemento imprescindible en los entrenamientos de multitud de deportes de contacto y artes marciales.</p>
                                    <p class="card-text"><small class="text-muted">$229.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226203.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Pelota de gimnasia</h5>
                                    <p class="card-text">Se trata de un producto asequible que, cuando se combina con ejercicios básicos, ayuda a mejorar la estabilidad, el equilibrio y la resistencia.</p>
                                    <p class="card-text"><small class="text-muted">195.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://image.flaticon.com/icons/png/512/1226/1226201.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Raqueta de tenis</h5>
                                    <p class="card-text">La raqueta es un instrumento deportivo que consiste en un marco con un aro abierto y con una especie de red o caucho que lo cubre. </p>
                                    <p class="card-text"><small class="text-muted">$50.000</small></p>
                                    <button id="CompraButtom" type="button" className="btn btn-warning">Comprar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <footer class="text-center text-lg-start bg-light text-muted">
                        {/* <!-- Section: Social media --> */}
                        <section
                            class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                        >
                            {/* <!-- Left --> */}
                            <div class="me-5 d-none d-lg-block">
                                <span>MANTENGAMOS EL CONTÁCTO</span>
                            </div>
                            {/* <!-- Left -->

<!-- Right --> */}
                            <div>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-twitter"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-google"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-instagram"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                                <a href="" class="me-4 text-reset">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                            {/* <!-- Right --> */}
                        </section>
                        {/* <!-- Section: Social media -->

<!-- Section: Links  --> */}
                        <section class="">
                            <div class="container text-center text-md-start mt-5">
                                {/* <!-- Grid row --> */}
                                <div class="row mt-3">
                                    {/* <!-- Grid column --> */}
                                    <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                        {/* <!-- Content --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            <i class="fas fa-gem me-3"></i>GYM STYLE
                                        </h6>
                                        <p>
                                        El ejercicio físico, ya sea de corta o larga duración, contribuye a establecer un bienestar mental, mejorando la autonomía de la persona, la memoria, rapidez de ideas, etcétera, y promoviendo sensaciones como el optimismo o la euforia, al tiempo que se mejora la autoestima de las personas.
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Productos
                                        </h6>
                                        <p>
                                            <a href="#!" class="text-reset">BEBIDAS ENERGIZANTES</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">TENIS DEPORTIVOS</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">TAPETE DEPORTIVO</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">TAPETE DEPORTIVO</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">MAQUINAS DEPORTIVAS</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">VITAMINAS</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Useful links
                                        </h6>
                                        <p>
                                            <a href="#!" class="text-reset">Pricing</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Settings</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Orders</a>
                                        </p>
                                        <p>
                                            <a href="#!" class="text-reset">Help</a>
                                        </p>
                                    </div>
                                    {/* <!-- Grid column -->

    <!-- Grid column --> */}
                                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                        {/* <!-- Links --> */}
                                        <h6 class="text-uppercase fw-bold mb-4">
                                            Contact
                                        </h6>
                                        <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p>
                                        <p>
                                            <i class="fas fa-envelope me-3"></i>
                                            info@example.com
                                        </p>
                                        <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                        <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                                    </div>
                                    {/* <!-- Grid column --> */}
                                </div>
                                {/* <!-- Grid row --> */}
                            </div>
                        </section>
                        {/* <!-- Section: Links  -->

<!-- Copyright --> */}
                        <div class="text-center p-4" id="Footer">
                            © 2021 Copyright:
                            <a class="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>
                        {/* <!-- Copyright --> */}
                    </footer>
                        {/* <!-- Footer --> */}
                    </div>
                </body>
            </div>
        )

    }
}


export default Compras;