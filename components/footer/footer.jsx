import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-content container">
                    <div class="footer-section">
                        <h3>Sobre Nosotros</h3>
                        <p>Mario Store es tu tienda favorita dentro de la Escuela Técnica Otto Krause, ofreciendo las
                            mejores opciones en comidas, bebidas y dulces para todos los estudiantes.</p>
                        <div class="social-links">
                            <a href="https://www.instagram.com/mario_store_krause/"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <div class="footer-section">
                        <h3>Integrantes</h3>
                        <h2>Adrian De Sousa</h2>
                        <h2>Facundo Soto</h2>
                        <h2>Michael Torrico</h2>
                        <h2>Gian Esparragoza</h2>
                        <h2>Tomi jejejejej</h2>
                    </div>

                    <div class="footer-section">
                        <h3>Curso</h3>
                        <h2>Computación 5*2</h2>
                        <p>Escuela Técnica Otto Krause</p>
                        <p>Proyecto Web 2024</p>
                    </div>

                    <div class="footer-section">
                        <h3>Horario</h3>
                        <h2>Lunes a Viernes</h2>
                        <h2>7:45 AM - 5:30 PM</h2>
                        <p>¡Visítanos durante los recreos!</p>
                    </div>
                </div>

                <div class="footer-bottom container">
                    <p>&copy; 2024 Mario Store - Todos los derechos reservados</p>
                </div>
            </footer>
        </>
    )
}
