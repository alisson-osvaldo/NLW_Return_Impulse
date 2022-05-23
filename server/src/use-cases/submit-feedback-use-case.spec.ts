import { SubmitFeedbackUseCase } from './submit-feedback-use-case';
// describe: é como se tivesse fazendo varios teste para uma funcionalidade.

// spies/espiões como saber se funções foram chamadas
const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy},
    { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
    it('shoul be able to submit a feedback', async () => { //Testando se eu consigo enviar um feedback na minha aplicação
        await expect(submitFeedback.execute({
            type: 'Bug',
            comment: 'axemple comment' ,
            screenshot: 'data:image/pgn;base64, asd4as56d46asda5s6',
        })).resolves.not.toThrow(); //Espero que quando eu chamar essa função, que ela não dispare nenhum erro
    
        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it('shoul not be able to submit feedback without type', async () => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/pgn;base64, asd4as56d46asda5s6',
        })).rejects.toThrow();
    });

    it('shoul not be able to submit feedback without comment', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/pgn;base64, asd4as56d46asda5s6',
        })).rejects.toThrow();
    });

    it('shoul not be able to submit feedback with an invalid screenshot', async () => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'Tá tudo bugado',
            screenshot: 'teste.jpg',
        })).rejects.toThrow();
    });
});