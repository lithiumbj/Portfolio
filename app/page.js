'use client'

export default function Home() {

    const scrollTo = (selector) => {
        const element = document.querySelector(selector);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    };

    return (
        <div>
            <div className={"section section-1"}>
                <div className={"row"}>
                    <div className={"col-6 my-name"}>
                        <div className={"text-v-center"}>
                            <h1>Borja José Celda González</h1>
                            <h2>Full-Stack developer</h2>
                        </div>
                    </div>
                    <div className={"col-6 centered"}>
                        <img className={"my-pic"} src="/assets/1711481515615.jpeg"/>
                    </div>
                </div>
                <div className={"arrow-down"} onClick={() => {
                    scrollTo(".section.section-2")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                    </svg>
                </div>
            </div>


            <div className={"section section-2"}>
                <div className={"arrow-up"} onClick={() => {
                    scrollTo(".section.section-1")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                    </svg>
                </div>
                <div className={"about-me"}>
                    <h2>Sobre mi</h2>
                    <div>
                        Mi nombre es <strong>Borja José Celda González</strong> y soy un <strong>desarrollador
                        Full-Stack</strong> especializado en el área de comercio electrónico y software de gestión.<br/><br/>
                        También estoy especializado en el desarrollo de aplicaciones multiplataforma con <strong>Ionic
                        Framework (Angular)</strong> y en desarrollo de aplicaciones basadas en <strong>ReactJS</strong><br/><br/>
                        Nacido en <strong>Valencia en 1993</strong>, desde pequeño me interesé por el mundo de la
                        informática y comencé como muchos otros comenzamos, copiando el código fuente de las páginas web
                        y modificándolo en mi propio ordenador. A la tierna edad de 8 años, <strong>cree mi propio sitio
                        web para vender copias piratas de software</strong>, aunque mis padres decidieron que no era lo
                        mejor y decidieron cerrarla por mi... <br/><br/>
                        Tras aquel intento fallido de convertirme en adinerado por la vía rápida, decidí que lo mejor
                        sería esperar a cumplir los 16 años y entonces especializarme en informática con las siguientes
                        titulaciones:
                        <ul>
                            <li>Técnico en Sistemas Microinformáticos y redes: <strong>2009 - 2011</strong></li>
                            <li>Técnico superior en Desarrollo de Aplicaciones Multiplataforma: <strong>2011 -
                                2013</strong></li>
                            <li>Técnico superior en Desarrollo de Aplicaciones <strong>2013 - 2014</strong></li>
                        </ul>
                        Mi alma mater fué <strong>Florida Universitaria</strong>, sita en Catarroja, Valencia, lugar
                        donde senté las bases que me han llevado a donde estoy ahora.
                        <br/><br/>
                        Me considero un amante del desarrollo sencillo, limpio y escrito de manera que cualquier otro
                        desarrollador pueda seguir donde yo lo dejé, he construido este portfolio con esa misma
                        mentalidad de minimalismo y de <strong>ir al grano</strong>
                    </div>
                </div>
                <div className={"arrow-down"} onClick={() => {
                    scrollTo(".section.section-3")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                    </svg>
                </div>
            </div>


            <div className={"section section-3"}>
                <div className={"arrow-up"} onClick={() => {
                    scrollTo(".section.section-2")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                    </svg>
                </div>
                <div className={"about-me"}>
                    <h2>Proyectos en los que he participado</h2>
                    <div>
                        <strong>Disclaimer:</strong> Algunos de mis proyectos están protegidos bajo NDA y por tanto no
                        pueden ser divulgados o aquí expuestos, por lo que me veo obligado a publicar unicamente los
                        proyectos que he realizado como autónomo / freelance:
                    </div>
                    <div className={"projects-container"}>
                        <div className={"project"}>
                            <div className={"inner-project"}>
                                <div className={"project-picture"} style={{backgroundImage: "url('/assets/prj1.jpg')"}}></div>
                                <h5 className={"project-name"}>Myox.fit APP</h5>
                                <div className={"project-excerpt"}>
                                    Aplicación Android, iOS y web enfocada a la salud y a la fisioterapia
                                    <hr/>
                                    <a href={"https://play.google.com/store/apps/details?id=fit.myox.app"} target={"_blank"}>Acceder al proyecto</a>
                                </div>
                            </div>
                        </div>

                        <div className={"project"}>
                            <div className={"inner-project"}>
                                <div className={"project-picture"} style={{backgroundImage: "url('/assets/prj2.jpg')"}}></div>
                                <h5 className={"project-name"}>Myox Institute</h5>
                                <div className={"project-excerpt"}>
                                    LMS en Aplicación Android, iOS y web enfocada
                                    <hr/>
                                    <a href={"https://play.google.com/store/apps/details?id=fit.myox.app"} target={"_blank"}>Acceder al proyecto</a>
                                </div>
                            </div>
                        </div>

                        <div className={"project"}>
                            <div className={"inner-project"}>
                                <div className={"project-picture"} style={{backgroundImage: "url('/assets/prj3.jpg')"}}></div>
                                <h5 className={"project-name"}>#eligesoria</h5>
                                <div className={"project-excerpt"}>
                                    Aplicación Android, iOS con información turística y audioguías
                                    <hr/>
                                    <a href={"https://play.google.com/store/apps/details?id=com.spk.eligesoria"} target={"_blank"}>Acceder al proyecto</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"arrow-down"} onClick={() => {
                    scrollTo(".section.section-4")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
                    </svg>
                </div>
            </div>

            <div className={"section section-4"}>
                <div className={"arrow-up"} onClick={() => {
                    scrollTo(".section.section-3")
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 384 512">
                        <path
                            d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/>
                    </svg>
                </div>
                <div className={"about-me"}>
                    <h2>Mi experiencia laboral</h2>
                    <div>
                        Como desarrollador de culo inquieto (y como casi todos los desarrolladores) he participado en
                        diversos proyectos y he sido contratado en varias empresas a lo largo de mi carrera, también he
                        probado suerte como freelance (autónomo) y como socio capitalista de una startup
                        <br/>
                        <br/>
                        Comencé oficialmente en 2012 a trabajar como programador, pero os dejo mis 3 ultimos puestos de
                        trabajo para no hacer esta sección demasiado aburrida, ordenados de más recientes a más lejanos
                        en el tiempo:

                        <div className={"job-list-container"}>
                            <div className={"job-list"}>


                                <div className={"job"}>
                                    <h3>Head of developer + NodeJS Full-Stack developer</h3>
                                    <h5>¿Dónde? - <strong>Línea Gráfica ECE</strong></h5>
                                    <h5>¿Cuándo? - <strong>Desde 2021/01</strong></h5>
                                    <p>
                                        Comencé como desarrollador e-commerce basado en PrestaShop y pronto me convertí
                                        en una pieza clave de la empresa gracias al esfuerzo y la dedicación puestos en
                                        mi constante mejora de conocimeinto y actitudes.
                                        <br/><br/> en Línea Gráfica he desarrollado multitud de roles, algunos
                                        relacionados con la gestión.
                                        <br/>Actualmente me encuentro como desarrollador principal de Apps, desarrollos
                                        a medida y plantillas en NodeJS / ReactJS en el nuevo
                                        rumbo de la empresa, la cual viró hacia <strong>Shopify</strong> y su ecosistema
                                        a finales de
                                        2022
                                    </p>
                                </div>
                                <div className={"job-separetor-container"}>
                                    <span className={"job-separetor"}>&nbsp;</span>
                                </div>


                                <div className={"job"}>
                                    <h3>E-commerce developer</h3>
                                    <h5>¿Dónde? - <strong>4webs</strong></h5>
                                    <h5>¿Cuándo? - <strong>2019/10 a 2021/01</strong></h5>
                                    <p>
                                        En búsqueda de un cambio de paradigma, comencé como desarrollador Junior
                                        e-commerce en Prestashop 1.6 y 1.7, en el tiempo que trabajé para 4Webs,
                                        desarrollé varias tiendas online desde 0.<br/><br/>
                                        También ayudé con la gestión y el mantenimiento de varios proyectos, así como
                                        del módulo super ventas <strong>Paypal con recargo</strong> siendo además el
                                        creador (desarrollador original y principal) del sistema
                                        POS <strong>PrestaPOS</strong>
                                    </p>
                                </div>
                                <div className={"job-separetor-container"}>
                                    <span className={"job-separetor"}>&nbsp;</span>
                                </div>


                                <div className={"job"}>
                                    <h3>CTO</h3>
                                    <h5>¿Dónde? - <strong>Explora Marketing</strong></h5>
                                    <h5>¿Cuándo? - <strong>2017/10 a 2019/10</strong></h5>
                                    <p>
                                        Tras cerrar Digial Bamboo, en búsqueda de un trabajo más estable y alejado del
                                        múndo del <strong>autónomo</strong> comencé como desarrollador / CTO en Explora
                                        Marketing.
                                        Lugar en el que desarrollé diversas soluciones de software, como aplicaciones de
                                        gestión (ERP Personalizado basado en Kotlin y Angular) como apps móviles para
                                        Smart (Mercedes Benz) y otros desarrollos para Estrella Galicia
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
