import '../style/homepage.css'
import ContainerWhatsNew from '../components/pagina-principal/ContainerWhatsNew';
import ContainerMarketingCloud from '@/components/pagina-principal/ContainerMarketingCloud';
import ContainerNossosProdutos from '../components/pagina-principal/NossosProdutos';
import ContainerEventosOnline from '../components/pagina-principal/ContainerEventosOnline';
import ContainerOqueECrm from '../components/pagina-principal/ContainerOqueECrm';
import NossosClientes from '../components/pagina-principal/NossosClientes';
import ContainerTrailblazers from '../components/pagina-principal/ContainerTrailblazers';
import ContainerSupport from '../components/pagina-principal/ContainerSupport'
import ContainerFreeTrial from '../components/pagina-principal/ContainerFreeTrial'
import Customer360 from '@/components/pagina-principal/Customer360';

export default function Home() {
  return (
    <main className='homepage'>
      <Customer360 />

      <ContainerWhatsNew />

      <ContainerNossosProdutos />

      <NossosClientes />

      <ContainerOqueECrm />

      <ContainerEventosOnline />

      <ContainerTrailblazers title='Cresça com uma comunidade de companheiros Trailblazers'
        textParagraph='Domine o CRM para integrar equipes, impulsionando o crescimento e a produtividade em sua empresa'
        textButton='Conecte-se com os Traiblazers'
        linkButton='https://trailhead.salesforce.com/'
        altImgContainer='Mulher com a camisa do Trailhead com um circulo roxo ao fundo e o Einstein ao lado dela com as mãos para cima'
      />

      <ContainerMarketingCloud />

      <ContainerFreeTrial title='Experimente a Salesforce gratuitamente' 
        subTitle='Não é necessario cartão de crédito nem instalar nenhum software'
        textButton='Iniciar Teste Gratuito'
        altImgContainer='exemplo do Sales Cloud apresentado por três pop ups representando gerenciamento de contatos, automação de fluxo de trabalho e gerenciamento de oportunidades'
      />

    <ContainerSupport title={'Ainda tem duvidas ? Podemos ajudar e direcionar você para o caminho certo'} 
    altImgContainer='Astro, o mascote principal da Salesforce acenando com a mão'
    textButton='Entrar em contato'
    />
    </main>
  );
}
