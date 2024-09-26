import { BoxModule, Homepage, JourneyStep, LineSteps, MainContainner, Step, StepBox, Steps } from "./styles";
import lineStep from '../../assets/line_steps.png'

export function Trilha() {
    return (
        <Homepage>
            <MainContainner>
                <h1>My Journey</h1>
                <JourneyStep>
                <LineSteps src={lineStep}/>

                <Steps>
                    <StepBox>
                        <Step to="/treinamentos/1">1</Step>
                        <BoxModule>
                            <a href="/treinamentos/1">Unidade 1</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                                <li><a href="/topicos/4">Conteúdo 4</a></li>
                                <li><a href="/topicos/5">Conteúdo 5</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>

                    <StepBox>
                        <Step to="/treinamentos/2">2</Step>
                        <BoxModule>
                            <a href="/treinamentos/2">Unidade 2</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>

                    <StepBox>
                        <Step to="/treinamentos/3">3</Step>
                        <BoxModule>
                            <a href="/treinamentos/3">Unidade 3</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                                <li><a href="/topicos/4">Conteúdo 4</a></li>
                                <li><a href="/topicos/5">Conteúdo 5</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>

                    <StepBox>
                        <Step to="/treinamentos/4" >4</Step>
                        <BoxModule>
                            <a href="/treinamentos/4">Unidade 4</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                                <li><a href="/topicos/4">Conteúdo 4</a></li>
                                <li><a href="/topicos/5">Conteúdo 5</a></li>
                                <li><a href="/topicos/6">Conteúdo 6</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>

                    <StepBox>
                        <Step to="/treinamentos/5">5</Step>
                        <BoxModule>
                            <a href="/treinamentos/5">Unidade 5</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                                <li><a href="/topicos/4">Conteúdo 4</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>

                    <StepBox>
                        <Step to="/treinamentos/6">6</Step>
                        <BoxModule>
                            <a href="/treinamentos/6">Unidade 6</a>
                            <ul>
                                <li><a href="/topicos/1">Conteúdo 1</a></li>
                                <li><a href="/topicos/2">Conteúdo 2</a></li>
                                <li><a href="/topicos/3">Conteúdo 3</a></li>
                                <li><a href="/topicos/4">Conteúdo 4</a></li>
                            </ul>
                        </BoxModule>
                    </StepBox>
                </Steps>
            </JourneyStep>
        </MainContainner>
    </Homepage>
    )
}