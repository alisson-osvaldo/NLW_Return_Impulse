import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
    onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ onFeedbackTypeChanged }: FeedbackTypeStepProps) {
    return(
        <>
            <header>
                <span className="text-xl leading-6">Deixe seu Feedback</span>

                <CloseButton />
            </header>

            <div className="flex py-8 gap-2 w-full">
                {Object.entries(feedbackTypes).map(([key, value]) => {
                    return (
                        <button
                        key={key}
                        className="bg-zinc-800 rounded-lg p-5 w-24  flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none "
                        onClick={() => onFeedbackTypeChanged(key as FeedbackType)} //arrow function, passando uma função que só sera utilizada se o User clicar
                        type="button"
                        >
                        <img
                            className="w-8 h-8"
                            src={value.image.source}
                            alt={value.image.alt}
                        />
                        <span>{value.title}</span>
                        </button>
                    )
                }) }
            </div>
        </>      
    )

    
}