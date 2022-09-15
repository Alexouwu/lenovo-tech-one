import React, { useState } from "react";
import { Footer, TextWrapper, FooterContainer, A } from "./footer.Elements";
import Modal from 'react-modal';

const Footerr = () => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width:"90%",
      maxWidth: '1024px',
      zIndex: 10
    },
  };
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal=()=>{
    setIsOpen(true)
  }
  const closeModal=()=>{
    setIsOpen(false)
  }

  return (
    <>
    <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Aviso de privacidad"
    >
      <div className="close-btn">
        <p className="close" onClick={closeModal}>x</p>
      </div>
      <h1>Declaración de <br/>privacidad</h1>
      <br/>
      <img src="/aviso.png" className="modal-img"/>
      <p>
      Acerca de esta declaración<br/><br/>
¿Qué información recopila Lenovo, cómo se utiliza la información, y se comparte alguna información personal con terceros?<br/><br/>
Lenovo recopila información sobre usted cuando interactúa con nuestros sitios web y determinados servicios sin conexión mantenidos por Lenovo o nuestros proveedores de servicios y socios. Utilizamos esta información para proporcionarle un producto o servicio que haya solicitado; para proporcionarle soporte o asistencia al cliente; para enviarle noticias, actualizaciones u ofertas; para mejorar nuestros sitios web, productos y servicios; para asegurarse de que están funcionando a su máximo rendimiento, entre otras finalidades. Tenga en cuenta que, en determinadas circunstancias, si no nos proporciona información personal cuando sea necesario, es posible que no podamos proporcionarle los productos, experiencias o funcionalidades que ha solicitado. A continuación se describe cómo recopilamos, utilizamos y compartimos información, incluida la información personal, en determinados contextos tanto con conexión como sin ella.<br/><br/>
¿Utiliza Lenovo cookies, etiquetas, balizas web, análisis y tecnologías relacionadas para publicidad en línea y otros fines?<br/><br/>

Al igual que sucede en la mayoría de sitios web, recopilamos determinada información automáticamente y la almacenamos en archivos de registro. A veces recopilamos información acerca del comportamiento de nuestros visitantes durante sus visitas a nuestros sitios web para ayudarnos a ofrecer un mejor servicio de atención al cliente, para mejorar la calidad de las experiencias en nuestro sitio web o para insertar publicidad.<br/>

Por ejemplo, llevamos un seguimiento de los dominios desde los que llegan a nuestro sitio web los visitantes y también medimos la actividad de los visitantes en los sitios web de Lenovo, pero lo hacemos de formas que no permiten la identificación real de ningún visitante (lo que más adelante denominamos «información no identificable»). Lenovo u otros en nuestro nombre pueden utilizar estos datos para analizar tendencias y estadísticas, para mejorar nuestros sitios web y para proporcionar publicidad individualizada.<br/>
<br/>
<strong>¿Vende Lenovo mi información personal?</strong><br/>

No. Lenovo no vende información personal. Tal y como se describe en las secciones anteriores, Lenovo puede compartir información personal con Lenovo, socios y proveedores de servicios de terceros para que puedan ofrecer soporte técnico a nuestros productos y sitios web o para proporcionar servicios adicionales a Lenovo y a sus clientes y usuarios de productos. Al hacerlo, Lenovo toma las medidas adecuadas para garantizar que estos proveedores de servicios y socios cumplen nuestros sólidos estándares de privacidad y seguridad. Sin embargo, Lenovo no vende información personal. Si Lenovo decide vender información personal en algún momento, le proporcionaremos las oportunidades de notificación previa y consentimiento necesarias según lo requiera la ley aplicable.<br/><br/>

¿Transfiere Lenovo mis datos personales a nivel internacional?<br/><br/>

Lenovo es una organización global con entidades legales, procesos empresariales, estructuras de gestión y sistemas técnicos que traspasan las fronteras. Por lo tanto, en los casos permitidos por la ley, es posible que compartamos su información personal dentro de Lenovo (incluidas sus subsidiarias, filiales y empresas matrices) o con nuestros proveedores y socios de negocios, así como que la transfiramos a países en los que operamos (incluidos, sin limitación, Estados Unidos y China). Con independencia de dónde se transfiera o resida su información, nuestras prácticas de privacidad y seguridad están diseñadas para proporcionar protección a su información personal en todo el mundo.<br/>

Algunos países tienen leyes de privacidad que no son equivalentes a las leyes de privacidad de su propio país y las agencias de cumplimiento de la ley en esas jurisdicciones podrían requerir sus datos. En dichos países, Lenovo seguirá manejando la información tal y como se describe en el presente documento y tomará las medidas necesarias para cumplir con las leyes de protección de datos aplicables al transferir y procesar su información. Cuando sea necesario, Lenovo también mantendrá acuerdos entre las empresas del grupo Lenovo o con socios o proveedores de servicios de Lenovo para regular la transferencia, el procesamiento y la protección de la información personal.<br/><br/>

Lenovo utiliza cláusulas contractuales estándar como un medio para ayudar a realizar transferencias de información personal desde y dentro de la Unión Europea y el Espacio Económico Europeo.<br/><br/>
¿Durante cuánto tiempo se conserva mi información personal?<br/><br/>
Lenovo tiene la intención de conservar la información, incluida la información personal, solo el tiempo necesario para fines empresariales u otros fines razonables, y de eliminar de forma segura la información personal cuando se hayan satisfecho dichos fines de uso. Conservaremos su información, incluida la información personal, siempre que se cumpla cualquiera de las siguientes circunstancias:<br/><br/>
<ul className="modal-list">
  <li>Su cuenta o suscripción está activa</li>
  <li>Para proporcionarle los servicios o el soporte que pueda solicitar</li>
  <li>Para garantizar la funcionalidad y el rendimiento necesarios de los productos y sitios web de Lenovo, incluidas las responsabilidades asociadas con las garantías de nuestros productos</li>
  <li>Para cumplir con las leyes aplicables, incluidas las obligaciones fiscales y de auditoría</li>
  <li>Para hacer cumplir nuestros derechos, incluido el arbitraje y cobro de deudas</li>
</ul> <br/><br/>
¿Cómo se protege mi información?<br/><br/>
Utilizamos las medidas técnicas y organizativas estándar al transmitir información de nuestros sitios web a nuestros servidores, cuando almacenamos datos y cuando los compartimos con terceros. Por ejemplo, mientras se transmite información confidencial, utilizamos el cifrado en caso necesario para mantener segura su información. Al compartir su información con terceros, tomaremos las medidas razonables y apropiadas para garantizar de manera contractual que esas partes protegerán y utilizarán esa información de forma responsable.<br/>

Sin embargo, recuerde que no se puede garantizar que ningún producto, software o transmisión de datos sea cien por cien seguro. Por ello, aunque hemos tomado las medidas adecuadas para proteger su información, Lenovo no puede garantizar ni garantizar de ningún otro modo la seguridad de nuestros sitios web ni la información que nos proporcione. Al utilizar nuestros sitios web, lo hace por su propia cuenta y riesgo.<br/><br/>

¿Qué sucede con la privacidad de los menores?<br/><br/>
Nuestros sitios web están destinados a adultos y mayores de 16 años, o la edad mínima equivalente en la jurisdicción que corresponda, con permiso de sus padres o tutores legales para utilizarlos. Lenovo no pretende recopilar información personal acerca de menores de 16 años. Los usuarios menores de 16 años no deben proporcionar información personal a Lenovo.<br/>

Si Lenovo advierte que un menor de 16 años, o la edad mínima equivalente en la jurisdicción que corresponda, ha enviado información personal a Lenovo, tomaremos las medidas necesarias para eliminar la información tan pronto como sea posible y no se utilizará para ningún propósito. Lenovo anima a los padres a adoptar un papel activo en cuanto al uso de los productos de Lenovo de sus hijos y a informarles de los posibles peligros que supone proporcionar información sobre sí mismos.<br/><br/>

¿Cuáles son mis derechos de protección de datos?<br/><br/>
Las leyes de protección de datos aplicables pueden otorgarle el derecho a controlar el uso y procesamiento de su información personal. Concretamente, pueden incluir el derecho (i) a solicitar el acceso a una copia de su información personal, (ii) a solicitar la rectificación o el borrado de su información personal, (iii) a oponerse al procesamiento de su información personal, (iv) a restringir el procesamiento o excluirse de cualquier venta de su información personal y (v) a la portabilidad de los datos. Cuando utilicemos su información personal con su consentimiento, también tiene el derecho de retirar este consentimiento en cualquier momento aunque esto no afectará a los usos de su información personal antes de la retirada del consentimiento.<br/>

Además, puede tener la capacidad de revisar, corregir o eliminar determinada información personal mediante su cuenta Lenovo en caso de tenerla.<br/>

Para ejercer sus derechos como se ha descrito anteriormente, envíe una solicitud de privacidad o póngase en contacto con privacy@lenovo.com. Revisaremos, responderemos y actuaremos con respecto a dichas solicitudes conforme a las leyes de protección de datos aplicables.<br/>
<br/>
Tenga en cuenta que tomaremos medidas de acuerdo con la legislación aplicable y nuestras normas de privacidad y seguridad para verificar su identidad antes de concederle acceso a su información personal o cumplir de otro modo con su solicitud. Si tiene una cuenta de Lenovo, es posible que verifiquemos su identidad exigiéndole que inicie sesión en su cuenta. Si no tiene una cuenta de Lenovo o una dirección de correo electrónico archivada con nosotros, podemos solicitar información adicional limitada para verificar su identidad. Tenga en cuenta que si no tiene una cuenta con Lenovo, o una dirección de correo electrónico en el archivo, o si no podemos verificar su identidad en nuestros registros, podremos rechazar su solicitud.<br/>
También puede utilizar un agente autorizado para enviar una solicitud con arreglo a esta sección en su nombre. Si decide que un agente autorizado envíe dicha solicitud en su nombre, Lenovo le pedirá: (i) que proporcione al agente autorizado permiso por escrito para hacerlo; y (ii) que su agente verifique su identidad directamente con Lenovo. Lenovo puede denegar una solicitud de un agente que no cumpla estos requisitos.<br/>
Además, usted tiene derecho a plantear preguntas o quejas ante la autoridad nacional de protección de datos correspondiente en cualquier momento.<br/>
<br/>
¿Cómo contacto con el programa de privacidad de Lenovo?<br/><br/>
Para ejercer sus derechos como se ha descrito anteriormente, envíe una solicitud de privacidad.<br/>
Si tiene preguntas adicionales sobre esta declaración de privacidad, puede ponerse en contacto con Lenovo en privacy@lenovo.com, o por correo postal de EE.UU. u otros medios en:<br/>
Lenovo Group Limited<br/>
Attn: Privacy Program<br/>
8001 Development Drive<br/>
Morrisville, NC, USA 27560<br/>
Puede encontrar información adicional sobre el servicio de atención al cliente de Lenovo, incluidos datos de contacto telefónicos y de chat, en la página de contacto.<br/>
      </p>
    </Modal>
    <FooterContainer>
      <Footer>
        <TextWrapper>
          <A className="avico" onClick={openModal} style={{cursor:"pointer"}}>Aviso de privacidad</A>
        </TextWrapper>

        <TextWrapper>
          <A href="#" className="avico">©Copyright</A>
        </TextWrapper>
      </Footer>
    </FooterContainer>
    </>
  );
};

export default Footerr;
