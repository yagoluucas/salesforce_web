import ContainerTrailblazersProps from './interface';
import Image from 'next/image';
import Button from '@/components/Button';
import './style.css';

// Componente responsável por criar um bloco (container) do Trailblazers
export default function ContainerTrailblazers(props: ContainerTrailblazersProps) {
    return (
        <section className='container-trailblazer flex flex-wrap mb-40'>
            <div className='flex flex-col content'>
                <h2>{props.title}</h2>
                <p>{props.textParagraph}</p>
                <Button class='large' link={props.linkButton} text={props.textButton} />
            </div>
            <Image className='imgContainer' src='/image-index/be-a-trailblazer.webp' alt={props.altImgContainer} width={400}height={350} />
        </section>
    )
}