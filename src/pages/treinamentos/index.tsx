import { CardButton, CardsUp, FlipCard, FlipCardBack, FlipCardFront, FlipCardInner, LinkVoltar, MainContainner, TopSection } from "./styles";

import { useParams } from "react-router-dom";

export function Treinamentos() {

    const { id } = useParams();

    return (
    <MainContainner>
        <TopSection>
            <LinkVoltar to="/trilha">
                Voltar
            </LinkVoltar>
            <h1>{id}</h1>
        </TopSection>
        <CardsUp>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 1
                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 2

                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 3

                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
        </CardsUp>
        <CardsUp>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 4
                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 5

                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
            <FlipCard>
                <FlipCardInner>
                    <FlipCardFront>
                        Topico 6

                        <CardButton>
                            Acessar
                        </CardButton>
                    </FlipCardFront>
                    <FlipCardBack>
                        <p>O topico 1 elabora principalmente os topicos de apresentação da EuroFarma e o
                            poscionamento da empresa no mercado.</p>
                    </FlipCardBack>
                </FlipCardInner>
            </FlipCard>
        </CardsUp>
    </MainContainner>
    )
}