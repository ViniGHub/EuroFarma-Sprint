import { useEffect, useState } from "react";
import { Container, OfficeImage, ObjectButton, DragArea, TaskDescription, TaskProgress } from "./styles"; // Você pode adicionar suas imagens no arquivo de estilos.

const tasks = [
  {
    id: 1,
    description: "Ligue o computador clicando no botão de 'power'.",
    image: "../../assets/comput.jpg", 
    action: "powerOn",
    completed: false,
  },
  {
    id: 2,
    description: "Arraste os documentos para a pasta 'Treinamento'.",
    image: "../../assets/Documentos.jpeg", // Imagem de documentos
    action: "organizeFiles",
    completed: false,
  },
  {
    id: 3,
    description: "Envie um e-mail clicando no ícone de e-mail.",
    image: "../../assets/Icone_Email.jpeg", // Imagem de um ícone de e-mail
    action: "sendEmail",
    completed: false,
  },
];

export function MissaoCorporativa() {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);
  const [computerOn, setComputerOn] = useState(false);
  const [documentsOrganized, setDocumentsOrganized] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleAction = (action: string) => {
    if (action === "powerOn") {
      setComputerOn(true);
      setCurrentTaskIndex((prev) => prev + 1);
    } else if (action === "organizeFiles" && computerOn) {
      setDocumentsOrganized(true);
      setCurrentTaskIndex((prev) => prev + 1);
    } else if (action === "sendEmail" && documentsOrganized) {
      setEmailSent(true);
      setCurrentTaskIndex((prev) => prev + 1);
    }
  };

  return (
    <Container>
      <h1>Missão Corporativa - Gamificação</h1>

      {/* Exibir progresso da tarefa */}
      <TaskProgress>
        <span>Tarefa {currentTaskIndex + 1} de {tasks.length}</span>
      </TaskProgress>

      {/* Descrição da Tarefa */}
      <TaskDescription>
        <p>{tasks[currentTaskIndex].description}</p>
      </TaskDescription>

      {/* Imagem do Escritório */}
      <OfficeImage src="../../assets/Escritorio.jpeg" alt="Escritório" />

      {/* Objetos Interativos */}
      <div style={{ position: "relative" }}>
        {/* Computador - Tarefa 1 */}
        {currentTaskIndex === 0 && (
          <ObjectButton
            style={{ top: "50%", left: "30%" }} // Posicione conforme a imagem do escritório
            onClick={() => handleAction("powerOn")}
            disabled={computerOn}
          >
            <img src="/images/computer-button.png" alt="Computador" />
          </ObjectButton>
        )}

        {/* Documentos - Tarefa 2 */}
        {currentTaskIndex === 1 && (
          <DragArea>
            <img src="../../assets/Button_PC.jpeg" alt="Documentos" draggable onDragStart={() => handleAction("organizeFiles")} />
          </DragArea>
        )}

        {/* E-mail - Tarefa 3 */}
        {currentTaskIndex === 2 && (
          <ObjectButton
            style={{ top: "70%", left: "60%" }} // Posicione conforme a imagem do escritório
            onClick={() => handleAction("sendEmail")}
            disabled={emailSent}
          >
            <img src="../../assets/Icone_Email.jpeg" alt="Enviar E-mail" />
          </ObjectButton>
        )}
      </div>

      {/* Mensagem de conclusão */}
      {currentTaskIndex === tasks.length && (
        <div>
          <h2>Parabéns! Você concluiu todas as tarefas e agora conhece melhor a empresa.</h2>
        </div>
      )}
    </Container>
  );
}
