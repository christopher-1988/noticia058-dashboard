import { useState } from "react";
import { faSearch, faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Card, Button } from "react-bootstrap";

const Terminos = () => {
  //Hook

  return (
    <>
      <Row>
        <Col>
          <Card className="m-2">
            <Card.Header className="d-flex"></Card.Header>
            <Card.Body>
              <div className="text-center">
                <h1>Noticia058</h1>
              </div>

              <h2 className="mb-2">Términos y condiciones</h2>

              <h3>1. Descripción del servicio</h3>
              <p>
                Noticia058 TV es una aplicación móvil que permite a los usuarios
                acceder a nuestra señal de televisión en vivo, ofreciendo
                noticias de Venezuela y el mundo en tiempo real. A través de
                nuestra plataforma, los usuarios podrán:
              </p>
              <ul>
                <li>
                  Ver la señal en vivo de Noticia058 TV en cualquier momento y
                  lugar.
                </li>
                <li>
                  Acceder a resúmenes de noticias diarias, reportajes especiales
                  y programas informativos.
                </li>
                <li>
                  Recibir actualizaciones y notificaciones sobre eventos
                  importantes y noticias de última hora.
                </li>
              </ul>

              <h3>2. Uso de la aplicación</h3>
              <p>
                El usuario se compromete a utilizar la aplicación conforme a las
                siguientes normas:
              </p>
              <ul>
                <li>
                  No utilizar la aplicación para fines ilegales o no
                  autorizados.
                </li>
                <li>
                  No modificar, copiar, distribuir o revender ningún contenido
                  de la aplicación sin autorización previa.
                </li>
                <li>
                  No realizar actividades que puedan afectar la estabilidad,
                  seguridad o disponibilidad de la aplicación.
                </li>
              </ul>

              <h3>3. Registro y Datos del Usuario</h3>
              <p>
                Para utilizar ciertas funciones de la aplicación, es posible que
                se requiera el registro del usuario. Al registrarse, el usuario
                acepta:
              </p>
              <ul>
                <li>Proporcionar información veraz y actualizada.</li>
                <li>
                  Mantener la confidencialidad de sus credenciales de acceso.
                </li>
                <li>No compartir su cuenta con terceros.</li>
              </ul>
              <h3>4. Privacidad y Protección de Datos</h3>
              <p>
                Noticia058 TV respeta la privacidad de sus usuarios y se
                compromete a proteger su información. Al utilizar la aplicación,
                el usuario acepta nuestra Política de Privacidad, donde se
                detalla cómo recopilamos, utilizamos y protegemos sus datos.
              </p>

              <h3>5. Propiedad Intelectual</h3>
              <p>
                Todo el contenido disponible en Noticia058 TV, incluyendo
                videos, textos, imágenes, logotipos y diseños, es propiedad
                exclusiva de Noticia058 TV o de sus respectivos titulares y está
                protegido por las leyes de derechos de autor.
              </p>

              <h3>6. Responsabilidad y Garantías</h3>
              <p>
                Noticia058 TV se esfuerza por garantizar un servicio de calidad,
                pero no garantiza que la aplicación esté libre de errores,
                interrupciones o fallos técnicos. No nos hacemos responsables
                de:
              </p>
              <ul>
                <li>Problemas técnicos ajenos a nuestra plataforma.</li>
                <li>
                  Interrupciones en la señal de transmisión debido a fallas de
                  internet o dispositivos del usuario.
                </li>
                <li>
                  Contenidos publicados por terceros dentro de la aplicación.
                </li>
              </ul>

              <h3>7. Modificaciones y Actualizaciones</h3>
              <p>
                Nos reservamos el derecho de modificar estos términos y
                condiciones en cualquier momento. Los usuarios serán notificados
                sobre cambios importantes en la aplicación o en sus condiciones
                de uso.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Terminos;
