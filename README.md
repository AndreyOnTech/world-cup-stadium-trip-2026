# World Cup 2026 Stadium Trip

Follow us on Youtube: https://youtube.com/@andreyontech

PT-BR | [English](#english)

Simulado de estádios da Copa do Mundo 2026 com visualização de conexões entre cidades-sede usando Leaflet.

Demo publicada no GitHub Pages:
https://andreyontech.github.io/world-cup-stadium-trip-2026/

## PT-BR

### Visão geral

Este projeto apresenta os estádios da Copa de 2026 em um mapa interativo e permite visualizar os caminhos possíveis entre todos os estádios listados.

Fluxo principal do projeto:

1. `index.html` monta a estrutura da página e carrega os assets.
2. `js/stadiums.js` define os dados dos estádios (nome, cidade, país, coordenadas).
3. `js/map.js` inicializa o mapa Leaflet e ajusta o zoom.
4. `js/markers.js` cria marcadores personalizados para cada estádio.
5. `js/connections.js` cria as linhas de conexão entre todos os estádios.
6. `js/index.js` orquestra e executa todas as etapas.
7. `index.css` organiza o layout da área do mapa e painel lateral.

### Objetivo

O projeto testa diferentes fórmulas e estratégias para calcular os melhores caminhos entre os estádios, considerando o mapa criado e as conexões possíveis. O objetivo é explorar diferentes abordagens de resolução do **Problema do Caixeiro Viajante** e avaliar qual é mais eficiente.

### Formulações Matemáticas

O projeto utiliza as seguintes fórmulas para calcular distâncias e rotas:

#### Cálculo de Distâncias
As distâncias entre os estádios são calculadas utilizando a **projeção geográfica do Leaflet** baseada na Terra esférica (CRS.Earth). O cálculo é realizado através do método `map.distance()` no arquivo `js/connections.js`, que retorna a distância em metros.

#### Número de Conexões Possíveis
O número total de conexões entre n estádios é dado por:

$$\text{Conexões} = \frac{n(n-1)}{2}$$

Com **n = 16** estádios:

$$\text{Conexões} = \frac{16 \times 15}{2} = \frac{240}{2} = 120$$

#### Número de Rotas Possíveis (Caixeiro Viajante)
O número total de rotas possíveis começando sempre do mesmo estádio é:

$$\text{Rotas} = (n-1)!$$

Com **n = 16** estádios:

$$\text{Rotas} = 15! = 1.307.674.368.000$$

### Recursos

- Mapa interativo com os estádios da Copa 2026.
- **16 estádios** mapeados em Canadá, México e Estados Unidos (definidos em `js/stadiums.js`).
- Marcadores personalizados com ícone de estádio.
- Popup com nome do estádio, cidade e país.
- Checkbox para mostrar/ocultar todas as conexões.
- Enquadramento automático do mapa com todos os pontos.

### Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- Leaflet
- OpenStreetMap (tiles)

### Estrutura do projeto

```text
world-cup-stadium-trip-2026/
|- index.html
|- index.css
|- js/
|  |- index.js          (Orquestrador principal)
|  |- stadiums.js       (Dados dos estádios)
|  |- map.js            (Criação do mapa)
|  |- markers.js        (Criação dos marcadores)
|  |- connections.js    (Criação das conexões)
|- images/
|  |- stadium.png
|- leaflet/
```

### Como executar

1. Abra `index.html` diretamente no navegador.
2. Ou rode com servidor local (recomendado), como Live Server no VS Code.

### Observacoes

- As conexões representam caminhos visuais entre todos os estádios e nao rotas reais de transporte.
- O projeto é 100% estático e pronto para publicação em GitHub Pages.

### Conteudo e redes

- YouTube: [@andreyontech](https://www.youtube.com/@andreyontech)
- Twitter/X: [@andreyontech](https://x.com/andreyontech)
- Site: [andreyontech.is-a.dev](https://andreyontech.is-a.dev)

---

## English

### Overview

This project displays the FIFA World Cup 2026 stadiums on an interactive map and lets you visualize possible connections between all listed stadiums.

Main project flow:

1. `index.html` builds the page structure and loads assets.
2. `js/stadiums.js` defines stadium data (name, city, country, coordinates).
3. `js/map.js` initializes the Leaflet map and adjusts the zoom.
4. `js/markers.js` creates custom markers for each stadium.
5. `js/connections.js` creates connection lines between all stadiums.
6. `js/index.js` orchestrates and executes all stages.
7. `index.css` defines the map area and side panel layout.

### Objective

This project tests different formulas and strategies for calculating the best paths between stadiums, considering the created map and possible connections. The goal is to explore different approaches to solving the **Traveling Salesman Problem** and evaluate which one is more efficient.

### Mathematical Formulations

The project uses the following formulas to calculate distances and routes:

#### Distance Calculation
Distances between stadiums are calculated using the **Leaflet geographic projection** based on a spherical Earth (CRS.Earth). The calculation is performed through the `map.distance()` method in the `js/connections.js` file, which returns the distance in meters.

#### Number of Possible Connections
The total number of connections between n stadiums is given by:

$$\text{Connections} = \frac{n(n-1)}{2}$$

With **n = 16** stadiums:

$$\text{Connections} = \frac{16 \times 15}{2} = \frac{240}{2} = 120$$

#### Number of Possible Routes (Traveling Salesman Problem)
The total number of possible routes starting always from the same stadium is:

$$\text{Routes} = (n-1)!$$

With **n = 16** stadiums:

$$\text{Routes} = 15! = 1.307.674.368.000$$

### Features

- Interactive map with World Cup 2026 stadium locations.
- **16 stadiums** mapped across Canada, Mexico, and the United States (defined in `js/stadiums.js`).
- Custom stadium icon markers.
- Popup with stadium name, city, and country.
- Checkbox toggle to show/hide all connections.
- Automatic map fitting to include all stadiums.

### Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- Leaflet
- OpenStreetMap tiles

### Project structure

```text
world-cup-stadium-trip-2026/
|- index.html
|- index.css
|- js/
|  |- index.js          (Main orchestrator)
|  |- stadiums.js       (Stadium data)
|  |- map.js            (Map creation)
|  |- markers.js        (Marker creation)
|  |- connections.js    (Connection creation)
|- images/
|  |- stadium.png
|- leaflet/
```

### How to run

1. Open `index.html` directly in your browser.
2. Or run it with a local server (recommended), such as Live Server in VS Code.

### Notes

- The connections are visual links between all stadiums, not real transportation routes.
- The project is fully static and ready for GitHub Pages deployment.

### Creator links

- YouTube: [@andreyontech](https://www.youtube.com/@andreyontech)
- Twitter/X: [@andreyontech](https://x.com/andreyontech)
- Website: [andreyontech.is-a.dev](https://andreyontech.is-a.dev)

## License

This project is licensed under the terms described in the `LICENSE` file.
