import { CloseButton } from "./CloseButton";

import bugImageUrl from '../assets/bug.png';
import ideiaImageUrl from '../assets/lampada.png';
import thought from '../assets/thought.png'; 

const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image: {
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        },
    },
    IDEA:{     
        title: 'Ideia',
        image: {
            source: ideiaImageUrl,
            alt: 'imagem de uma lampada'
        }
    },
    OTHER:{
        title: 'Outro',
        image: {
            source: thought,
            alt: 'imagem de um balão de pensamento'
        }
    },
}

export function WidgetForm() {
    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>

                <CloseButton />
            </header>
            
            <div className="flex py-8 gap-2 w-full">
                { Object.entries(feedbackTypes).map(([key, value]) => {
                    return(
                        <button
                        className="bg-zinc-800 rounded-lg p-5 w-24  flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
                        >
                            <img className="w-8 h-8" src={value.image.source} alt={value.image.alt} />
                            <span>{value.title}</span>
                        </button>
                    )
                })}
            </div>

            <footer className="texte-xs text-neutral-400">
                Feito com ♥ pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
            </footer>
        </div>

    );
}