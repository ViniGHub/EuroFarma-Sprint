import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MainContainer,
  FiltersSection,
  FilterInputs,
  FilterContainer,
  Library,
  SearchPages,
  Paging,
  LibraryContainer,
  ContentContainer,
} from "./styles"; // Ajuste as importações conforme necessário
import pdfIcon from "../../assets/icons/pdf.png"; // Importa os ícones
import docxIcon from "../../assets/icons/docx.png";
import xlsxIcon from "../../assets/icons/xlsx.png";
import pptxIcon from "../../assets/icons/pptx.png";
import { useSearchParams } from "react-router-dom";

type FileType = "pdf" | "docx" | "xlsx" | "pptx";

interface File {
  ID: number;
  NOMEARQUIVO: string;
  TAMANHOARQUIVO: number;
  TIPOARQUIVO: string; // Agora o tipo é restrito
  location: string;
  extension: FileType;
}

const fileIcons = {
  pdf: pdfIcon,
  docx: docxIcon,
  xlsx: xlsxIcon,
  pptx: pptxIcon,
};

const fileTypes: string[] = [];

export function Biblioteca() {
  const [files, setFiles] = useState<File[]>([]); // Armazena a lista de arquivos
  const [filteredFiles, setFilteredFiles] = useState<File[]>([]); // Armazena a lista de arquivos filtrados
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]); // Estado para armazenar tipos de arquivos selecionados
  const [searchQuery, setSearchQuery] = useState<string>(""); // Estado para armazenar a busca
  const [currentPage, setCurrentPage] = useState<number>(1); // Estado para armazenar a página atual
  const filesPerPage = 6; // Número de arquivos por página
  const [searchParams] = useSearchParams();

  // Busca os arquivos do backend
  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:3000/arquivos"); // Ajuste a URL conforme seu backend
        response.data.map((file: File) => {
          const fileExtension = file.NOMEARQUIVO.split(".").pop()!; // Obtém a extensão do arquivo
          if (!fileTypes.includes(fileExtension)) fileTypes.push(fileExtension); // Adiciona a extensão à lista de tipos
          file.extension = fileExtension as FileType; // Salva a extensão do arquivo
        });
        setFilteredFiles(response.data);
        setFiles(response.data);
        setSearchQuery(searchParams.get("search") || ""); // Atualiza a busca com o parâmetro da URL
      } catch (error) {
        console.error("Erro ao buscar os arquivos:", error);
      }
    };

    fetchFiles();
  }, []);

  // Função para lidar com o download do arquivo
  const handleDownload = async (fileId: number, fileName?: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/download/${fileId}`);
      const name = fileName ? fileName : response.data;
      const url = `/src/assets/docs/${name}`;
      const link = document.createElement("a");
      link.href = url;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Erro ao baixar o arquivo:", error);
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return `${bytes} bytes`; // Menor que 1 KB, exibe em bytes
    else if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`; // Menor que 1 MB, exibe em KB
    else if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`; // Menor que 1 GB, exibe em MB
    else return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`; // Acima de 1 GB, exibe em GB
  };

  // Função para atualizar o estado da barra de busca
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.currentTarget.value);
  };

  // Função para atualizar tipos de arquivos selecionados
  const handleTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setSelectedTypes((prevSelected) =>
      checked ? [...prevSelected, name] : prevSelected.filter((type) => type !== name)
    );
  };

  // Efeito para filtrar arquivos toda vez que selectedTypes, searchQuery ou currentPage mudar
  useEffect(() => {
    let filtered = files;

    // Filtro de tipo de arquivo (checkboxes)
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((file) => selectedTypes.includes(file.extension));
    }

    // Filtro de busca (barra de pesquisa)
    if (searchQuery) {
      const normalizedSearch = searchQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      filtered = filtered.filter((file) => {
        const normalizedFileName = file.NOMEARQUIVO.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return normalizedFileName.includes(normalizedSearch);
      });
    }

    setFilteredFiles(filtered);
    setCurrentPage(1); // Reseta para a primeira página sempre que os filtros mudarem
  }, [selectedTypes, searchQuery, files]);

  // Determina os arquivos que devem ser exibidos na página atual
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = filteredFiles.slice(indexOfFirstFile, indexOfLastFile);

  // Função para mudar de página
  const paginate = (direction: "next" | "back") => {
    if (direction === "next" && currentPage < Math.ceil(filteredFiles.length / filesPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else if (direction === "back" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <MainContainer>
      <FiltersSection>
        <h1>Filtros</h1>
        <h2>Tipo de arquivo</h2>
        <FilterInputs>
          {Array.from(fileTypes, (file, index) => (
            <FilterContainer key={index}>
              <input
                type="checkbox"
                id={`filter${index + 1}`}
                name={file}
                onChange={handleTypeChange} // Atualiza estado dos tipos de arquivos
              />
              <label htmlFor={`filter${index + 1}`}>{file}</label>
            </FilterContainer>
          ))}
        </FilterInputs>
      </FiltersSection>

      <Library>
        <h1>Biblioteca</h1>
        <SearchPages>
          <input type="text" value={searchQuery} placeholder="Buscar na biblioteca..." onChange={handleSearchChange} />
          <Paging>
              <button onClick={() => paginate("back")} disabled={currentPage === 1}>
                Anterior
              </button>

              <button onClick={() => paginate("next")} disabled={currentPage >= Math.ceil(filteredFiles.length / filesPerPage)}>
                Próximo
              </button>
          </Paging>
        </SearchPages>

        <LibraryContainer>
          {files.length === 0 ? (
            <p>Carregando arquivos...</p>
          ) : (
            currentFiles.map((filteredFile) => (
              <ContentContainer key={filteredFile.ID}>
                <img
                  src={fileIcons[filteredFile.extension as FileType]} // Usa o mapeamento para obter o ícone
                  alt={`Ícone de ${filteredFile.TIPOARQUIVO}`}
                  style={{ width: "50px", height: "50px" }} // Defina o tamanho da imagem
                />
                <h2>{filteredFile.NOMEARQUIVO}</h2>
                <h3>{formatFileSize(filteredFile.TAMANHOARQUIVO)}</h3>
                <h3>{filteredFile.location}</h3>
                <button onClick={() => handleDownload(filteredFile.ID)}>Baixar</button>
              </ContentContainer>
            ))
          )}
        </LibraryContainer>
      </Library>
    </MainContainer>
  );
}
