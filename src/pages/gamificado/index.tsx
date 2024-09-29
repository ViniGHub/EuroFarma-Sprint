import React, { useState } from "react";
import { Container, CustomerImage, ChatBox, ResponseButton, SatisfactionBar } from "./styles"; // Você pode adicionar suas imagens no arquivo de estilos.
import Vini from '../../assets/Vini.jpeg'
import Kaua from '../../assets/Kaua.jpeg'
import Viana from '../../assets/Viana.jpeg'
import Lucas from '../../assets/Lucas.jpeg'
const scenarios = [
  {
    id: 1,
    customer: {
      name: "Juliuz Carvalho",
      issue: "Ela está insatisfeita com um produto que chegou com defeito.",
      image: Vini, 
    },
    responses: [
      { text: "Peço desculpas pelo ocorrido, vamos enviar um novo produto.", impact: 10 },
      { text: "Você pode devolver, mas o processo pode demorar.", impact: -5 },
      { text: "Não é possível fazer a troca, você deve entrar em contato com o fabricante.", impact: -10 },
    ],
  },
  {
    id: 2,
    customer: {
      name: "Edemilson",
      issue: "Ele quer saber mais sobre um produto antes de comprar.",
      image: Kaua, 
    },
    responses: [
      { text: "Claro, vou te passar todos os detalhes agora!", impact: 10 },
      { text: "Você pode verificar todas as informações no site.", impact: 0 },
      { text: "Desculpe, não sei muito sobre esse produto.", impact: -10 },
    ],
  },
  {
    id: 3,
    customer: {
      name: "Lucas",
      issue: " Ele está chateado porque o atendimento demorou muito tempo para responder sua solicitação.",
      image: Lucas, 
    },
    responses: [
      { text: "Peço desculpas pela demora, vou resolver sua solicitação agora mesmo!", impact: 10 },
    { text: "Estamos muito ocupados, você terá que aguardar um pouco mais.", impact: -5 },
    { text: "Infelizmente, isso acontece às vezes. Não podemos fazer nada.", impact: -10 },
    ],
  },
  {
    id: 4 ,
    customer: {
      name: "Viana",
      issue: "Ela quer cancelar uma assinatura e está com dificuldades no site.",
      image: Viana, 
    },
    responses: [
      { text: "Posso te ajudar com o cancelamento agora mesmo.", impact: 10 },
    { text: "Você precisa tentar de novo mais tarde, pode ser que funcione.", impact: -5 },
    { text: "Cancele por conta própria, não podemos fazer isso por você.", impact: -10 },
    ],
  },
];

export function SimuladorCliente() {
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [satisfaction, setSatisfaction] = useState(50); 
  const [finished, setFinished] = useState(false);

  const handleResponse = (impact: number) => {
    setSatisfaction((prev) => Math.max(0, Math.min(100, prev + impact))); 

    if (currentScenarioIndex < scenarios.length - 1) {
      setCurrentScenarioIndex((prev) => prev + 1);
    } else {
      setFinished(true); 
    }
  };

  const restartGame = () => {
    setCurrentScenarioIndex(0);
    setSatisfaction(50);
    setFinished(false);
  };

  return (
    <Container>
      <h1>Simulador de Interação com Clientes</h1>

      {/* Mostra a barra de satisfação */}
      <SatisfactionBar>
        <div style={{ width: `${satisfaction}%` }}></div>
        <span>Satisfação: {satisfaction}%</span>
      </SatisfactionBar>

      {/* Exibe o cenário atual */}
      {!finished ? (
        <>
          <CustomerImage src={scenarios[currentScenarioIndex].customer.image} alt={scenarios[currentScenarioIndex].customer.name} />
          <ChatBox>
            <h2>{scenarios[currentScenarioIndex].customer.name}</h2>
            <p>{scenarios[currentScenarioIndex].customer.issue}</p>

            {}
            {scenarios[currentScenarioIndex].responses.map((response, index) => (
              <ResponseButton key={index} onClick={() => handleResponse(response.impact)}>
                {response.text}
              </ResponseButton>
            ))}
          </ChatBox>
        </>
      ) : (
        <div>
          <h2>Jogo Concluído!</h2>
          <p>Você terminou com uma satisfação de {satisfaction}%.</p>
          <button onClick={restartGame}>Reiniciar</button>
        </div>
      )}
    </Container>
  );
}
