import { ContentContainer, FilterContainer, FilterInputs, FiltersSection, Library, LibraryContainer, MainContainer, Paging, SearchPages, TestImage } from "./styles";

export function Biblioteca() {
    return (
        <MainContainer>
            <FiltersSection>
          <h1>Filtros</h1>
          <FilterInputs>
            <FilterContainer>
              <input type="checkbox" name="filter1" />
              <label htmlFor="filter1">Filter 1</label>
            </FilterContainer>
            <FilterContainer>
              <input type="checkbox" name="filter2" />
              <label htmlFor="filter2">Filter 2</label>
            </FilterContainer>
            <FilterContainer>
              <input type="checkbox" name="filter3" />
              <label htmlFor="filter3">Filter 3</label>
            </FilterContainer>
            <FilterContainer>
              <input type="checkbox" name="filter4" />
              <label htmlFor="filter4">Filter 4</label>
            </FilterContainer>
            <FilterContainer>
              <input type="checkbox" name="filter5" />
              <label htmlFor="filter5">Filter 5</label>
            </FilterContainer>
          </FilterInputs>
        </FiltersSection>

        <Library>
          <h1>Biblioteca</h1>
          <SearchPages>
            <input
              type="text"
              placeholder="Buscar na biblioteca..."
            />

            <Paging>
              <div><a href="">Next</a></div>
              <div><a href="">Back</a></div>
            </Paging>
          </SearchPages>

          <LibraryContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
            <ContentContainer>
              <TestImage></TestImage>
              <h2>Nome do Arquivo</h2>
              <h3>(Tamanho do arquivo)</h3>
              <h3>(Local do arquivo)</h3>
            </ContentContainer>
          </LibraryContainer>
        </Library>
        </MainContainer>
    )
}