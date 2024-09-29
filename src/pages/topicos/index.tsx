import { useParams } from "react-router-dom";
import { Comment, Comments, CreateComment, DisplaySection, Exercises, LinkVoltar, TopSection, VideoDiv, VideoSection } from "./styles";
import iconeUser from '../../assets/icone_user.png'

export function Topicos() {

    const { id } = useParams();

    return (
        <VideoSection>

    <TopSection>
      <LinkVoltar to="/trilha">
        Voltar
      </LinkVoltar>
      <h1>{id}</h1>
    </TopSection>

    <DisplaySection>
      <VideoDiv>
        <iframe src="https://www.youtube.com/embed/dqHa04N57-M?si=choRqzlrJBjkjPog" title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

        <Comments>
          <h2>Comentários</h2>
          <CreateComment type="text" placeholder="Fazer um comentário..." />
          <Comment>
            <img src={iconeUser} alt="imagem minificada do perfil do usuario" />
            <div>
              <h3>Kaua Vieira da Silva</h3>
              <p>Video muito interessante para entender quem é e o que a EuroFarma faz! 💪💪</p>
            </div>
          </Comment>
          <Comment>
            <img src={iconeUser} alt="imagem minificada do perfil do usuario" />
            <div>
              <h3>Vinicius Rodrigues da Silva</h3>
              <p>COntéudo de muito valor para os funcionários da EuroFarma!!!</p>
            </div>
          </Comment>
        </Comments>
      </VideoDiv>

      <Exercises>
        <h2>Exercícios</h2>
        <ul>
          <li>
            <a href="/exercicio/1">Exercício 1</a>
          </li>
          <li>
            <a href="/gamificado">Exercício 2</a>
          </li>
          <li>
            <a href="/exercicio/3">Exercício 3</a>
          </li>
          <li>
            <a href="/exercicio/4">Exercício 4</a>
          </li>
          <li>
            <a href="/exercicio/5">Exercício 5</a>
          </li>
        </ul>
      </Exercises>

    </DisplaySection>

  </VideoSection>
    )
}