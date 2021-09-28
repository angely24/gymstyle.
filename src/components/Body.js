import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Body extends Component {

    render() {
        return (
            <div>

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


                {/* esta es la imagen de fondo https://fondosmil.com/fondo/4036.jpg  */}
                <body background="https://fondosmil.com/fondo/4031.jpg " class="fixed-static">



                    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-CLINICA-MCD-PILATES-Y-FISIOTERAPIA-DE-MANTENIMIENTO.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Bienvenido a GYM STYLE</h5>
                                    <p>Vive la mejor experiencia de entretenimiento y descubre tu potencial.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-DE-PILATES-Y-MANTENIMIENTO-CLINICA-MCD.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Bienvenido a GYM STYLE</h5>
                                    <p>Vive la mejor experiencia de entretenimiento y descubre tu potencial.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.clinicamcd.es/wp-content/uploads/2015/05/GIMNASIO-DE-PILATES-Y-MANTENIMIENTO-CLINICA-MCD.jpg" class="d-block w-100" alt="..." />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Bienvenido a GYM STYLE</h5>
                                    <p>Vive la mejor experiencia de entretenimiento y descubre tu potencial.</p>
                                </div>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>




                    <h1 id="Titulo">GYM STYLE</h1>

                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card ">
                                <div class="card-body">
                                    <h5 class="card-title">¿Quienes somos?</h5>
                                    <p class="card-text">
                                        GYM STYLE brinda bienestar y satisfaccion a nuestros afiliados, contribuyendo al
                                        desarrollo profesional y personal de toda nuestra comunidad.
                                        Buscamos mejorar la calidad de vida de las
                                        personas a través del ejercicio, buena alimentación y disciplina basados en
                                        programas de entrenamiento y profesionales que motiven en las personas el valor
                                        de la salud y el ejercicio.</p>

                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Nuestra historia </h5>
                                    <p class="card-text">GYM STYLE nace como una idea de estudiantes, se analizó la posibilidad de crear un lugar donde a través del ejercicio se pudiera mejorar la calidad de vida de las persona, esta idea tenía como objetivo no sólo la consecución de un cuerpo atlético y tonificado, sino la prescripción del ejercicio de acuerdo con la condición física de las personas así como con sus motivaciones, previniendo lesiones y tratando los síntomas de distintos tipos de enfermedades.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <hr id="hr"></hr>
                    </div>
                    <h1 id="Titulo">PROMOCIONES DE ULTIMA HORA</h1>

                    <div class="container">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/512/1257/1257619.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">BEBIDAS ENERGIZANTES</h5>
                                        <p class="card-text">Manten tu energia, necesaria para cumplir tus deberes con los energizantes que traemos para ti.</p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$5.390</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/512/1248/1248801.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">TENIS DEPORTIVOS</h5>
                                        <p class="card-text">La variedad es lo que te motiva. Estos tenis de running cómodos y versátiles son perfectos para correr, levantar pesas o jugar un picadito.</p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$225.390</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/512/1210/1210282.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">TAPETE DEPORTIVO</h5>
                                        <p class="card-text">Son un implemento esencial para un entrenamiento de yoga, están diseñados para brindar seguridad, soporte y una tracción adecuada.</p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$135.000</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/512/1248/1248798.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">ROPA DEPORTIVA</h5>
                                        <p class="card-text">Nuestras prendas están hechas con material micro modal que las hace súper suaves y completamente transpirables.</p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$217.800</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/128/1252/1252158.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">MAQUINAS DEPORTIVAS</h5>
                                        <p class="card-text">Maquinas ideales para tu entrenamiento. Algunos de los beneficios de las maquinas es la ausencia de impacto en las articulaciones, fortalecimiento de músculos, quema de calorías, y prevención de enfermedades. </p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$1.887.100</h5></p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card h-100">
                                    <img src="https://image.flaticon.com/icons/png/512/1256/1256624.png" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">VITAMINAS</h5>
                                        <p class="card-text">Un buen suplemento de vitaminas nos ayudará a estar en forma y a tener mejor salud y además de mejorar nuestra capacidad de asimilación, permitiendo aprovechar todos los nutrientes de nuestras comidas. </p>
                                        <p class="card-text">precio ahora:<h5 class="card-title">$83.900</h5></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container">
                        <hr id="hr"></hr>
                    </div>

                    <div class="card">
                        <p>CONQUISTA TUS OBJETIVOS</p>
                        <div class="card-body">
                            <p class="card-text">Sabemos que estás dispuesto a darlo todo para alcanzar tus metas. Conoce más servicios y complementa tu entrenamiento.</p>
                        </div>
                    </div>


                    <h1 id="Titulo">CONQUISTA TUS OBJETIVOS</h1>

                    <p id="Text_relleno">El ejercicio puede ayudar a prevenir el aumento de peso excesivo o ayudar a mantener la pérdida de peso. Cuando realizas actividad física, quemas calorías. Mientras más intensa sea la actividad, más calorías quemarás.

                        Ir al gimnasio en forma regular es ideal, pero no te preocupes si no encuentras una franja de tiempo amplia para hacer ejercicio todos los días. Cualquier cantidad de actividad es mejor que ninguna. Para cosechar los beneficios del ejercicio, solo tienes que estar más activo a lo largo del día: sube las escaleras en lugar de usar el ascensor o acelera el ritmo de tus tareas domésticas. La consistencia es la clave.¿Necesitas un estímulo emocional? ¿O necesitas desahogarte después de un día estresante? Una sesión de gimnasia o una caminata rápida pueden ayudar. La actividad física estimula varias sustancias químicas cerebrales que pueden hacer que te sientas más feliz, más relajado y menos ansioso.

                        También puedes sentirte mejor sobre tu aspecto y sobre tú mismo si realizas ejercicios regularmente, lo cual puede aumentar tu confianza y mejorar tu autoestima.¿Estás sin aliento después de hacer las compras o los quehaceres domésticos? La actividad física regular puede mejorar la fuerza muscular y aumentar la resistencia.

                        El ejercicio suministra oxígeno y nutrientes a los tejidos y ayuda a que el sistema cardiovascular funcione de manera más eficiente. Y cuando tu salud cardíaca y pulmonar mejora, tienes más energía para hacer las tareas diarias.¿Te cuesta dormir? La actividad física regular puede ayudarte a quedarte dormido más rápido, a dormir mejor y más profundamente. Simplemente no hagas ejercicio demasiado cerca de la hora de acostarte, porque podrías tener demasiada energía como para irte a dormir.El ejercicio y la actividad física son excelentes formas de sentirte mejor, mejorar tu salud y divertirte.</p>

                    <br />
                    <br />
                    <br />
                    <br />


                </body>


                <div>
                    {/* <!-- Footer --> */}
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
            </div>

        )
    }
}

export default Body