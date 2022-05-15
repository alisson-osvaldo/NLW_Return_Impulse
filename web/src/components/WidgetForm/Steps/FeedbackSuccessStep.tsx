import { CloseButton } from "../../CloseButton";
import ImageCheck from '../../../assets/checkbox_103909.png';

interface FeedbackSucessStepProps {
    onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccesStep({
    onFeedbackRestartRequested
}: FeedbackSucessStepProps) {
    return(
        <>
            <header>
                <CloseButton />                
            </header>

            <div className="flex flex-col items-center py-10 w-[384px]">
                <img className="w-10 h-10" src={ImageCheck} alt="imagem de um check" />
                
                <span className="text-xl mt-2">Agradecemos o feedback!</span>
            
                <button
                type="button"
                onClick={onFeedbackRestartRequested}
                className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
                >
                    Quero enviar outro
                </button>
            </div>
        </>
    )
}