// Componente responsável por criar o botão Solicite Demonstração

import Link from "next/link";
import './style.css';
function BtnLearnMore() {
  return (
    <Link className="btnSolicitarDemonstracao flex button" href='https://www.salesforce.com/br/form/contact/contactme/?d=cta-header-9'>Solicitar Demonstração</Link>
  );
};

export default BtnLearnMore;