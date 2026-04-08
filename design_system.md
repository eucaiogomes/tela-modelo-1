# Lector LMS: Super Design System 📚

Este documento centraliza as diretrizes visuais e componentes do sistema **Lector LMS**. O objetivo é manter a consistência em futuras implementações, respeitando o layout atual e a identidade da marca, sem realizar alterações no código existente.

---

## 🎨 Design Tokens

Os Design Tokens são as variáveis base que constroem toda a nossa interface. Eles permitem escalabilidade.

### 1. Paleta de Cores (Colors)

O sistema de cores utiliza um contraste de alta legibilidade, com tons sóbrios (azuis) que inspiram confiança e foco, contrapostos com laranjas vibrantes para guiar as ações do usuário.

#### Cores de Marca (Brand)
| Nome | Variável CSS | HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| **Primary Navy** | `--color-app-primary` | `#00254e` | Cabeçalho, Topbar, Fundo de gráficos inativos |
| **Primary Container**| `--color-app-primary-container` | `#003a75` | Card da barra lateral, Contrastes no escuro |
| **Tertiary Orange** | `--color-app-tertiary` | `#eb6200` | Abas ativas, Gráficos positivos, Avatar, Ações primárias |
| **Tertiary Hover** | `--color-app-tertiary-hover` | `#d05700` | Interações de *hover* e cliques (Botões Laranjas) |

#### Fundos e Superfícies (Backgrounds & Surfaces)
| Nome | Variável CSS | HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| **App Background** | `--color-app-background` | `#f7f9fc` | Fundo principal da página (LMS Miolo) |
| **App Surface** | `--color-app-surface` | `#ffffff` | Fundo dos cartões, módulos e popovers de conteúdo |

#### Textos e Bordas (Foreground & Outlines)
| Nome | Variável CSS | HEX | Uso Principal |
| :--- | :--- | :--- | :--- |
| **On Surface Base** | `--color-app-on-surface` | `#191c1e` | Texto principal, Títulos fortes |
| **On Surface Variant**| `--color-app-on-surface-variant`| `#434750` | Texto secundário, descrições longas, breadcrumbs, ícones inativos |
| **On Primary Cont.** | `--color-app-on-primary-container`| `#7fa6e7` | Ícones do header escuro, pesquisa, placeholders |
| **Outline Variant** | `--color-app-outline-variant` | `#c3c6d1` | Linhas de divisão (dividers), bordas sutis de componentes inativos |

#### Cores Semânticas Adicionais (Tailwind Base)
*   **Success (Verde):** Puxado das classes `bg-green-500`, `text-green-500` e `bg-green-50`. Designado invariavelmente para lições completadas com êxito, ou para indicar enfaticamente o *último tópico visitado*.
*   **Danger/Alert (Vermelho):** Puxado das classes `bg-red-500` e `text-red-600`. Empregado para ressaltar um limite de atenção perigosa ou alertas negativos, como em avisos de "REPROVADO".

---

### 2. Tipografia (Typography)
A tipografia eleva a legibilidade em telas educacionais. Todo o sistema se nutre da mesma família fonte.

*   **Família Principal:** `Geist Variable`, sans-serif.
*   **Pesos (Font Weights):**
    *   **Regular / Medium (`font-normal`, `font-medium`):** Corpo dos textos, miolo das descrições, labels subjacentes.
    *   **Semibold (`font-semibold`):** Títulos de cartões, rótulos destacados em botões, nomenclatura das lições ou títulos em caixas informativas.
    *   **Bold / Black (`font-bold`, `font-black`):** Assinaturas numéricas (e.g., métricas 100,00% em cartões de desempenho), Cabeçalho "Lector" mestre da plataforma, ou percentuais em anéis.

---

### 3. Forma e Física (Shape & Elevation)

*   **Bordas Arredondadas (Radius):** 
    *   **Forma de Pílula (`rounded-full`):** Barra de input de pesquisa, indicadores de preenchimento (progress bar).
    *   **Arredondamento Padrão (`rounded-lg`, `rounded-md`, `rounded-sm`):** Moldura de toda caixa de cartão e avatar (gerando uma estética moderna tipo "*squircle*").
    *   **Arredondamento Zerado (`rounded-none`):** Especificamente reservado a itens contínuos, como a base natural de abas de menu horizontal (TabsList).

*   **Profundidade (Shadows):** Uso extremamente limpo e moderado. Adotamos o `shadow-sm` nas grandes caixas (App Surfaces) apenas para que pareçam folhetos ligeiramente descolados do App Background acinzentado. Elementos flutuantes minúsculos como o avatar Laranja ganham leve brilho com shadow colorizada em baixo.

---

## 2. Biblioteca de Componentes (UI Kit)

Abaixo está o inventário de cada peça-chave deste ecossistema LMS, documentando seus estados de interação (Padrão, Hover, Acionado/Pressionado, Focado, Inativo e Erro) e as regras claras de uso para a manutenção da coerência visual.

*(Nota: Para a documentação dinâmica visual, insira futuramente as respectivas capturas de tela `![Nome do Componente](caminho-da-imagem.png)` onde houver os placeholders abaixo).*

---

### 1. Sistema de Abas (Tabs System)
As abas são fundamentais para organizar a visão principal da sala de aula, alternando agrupamentos sem navegar para outra página.

> **Regras de Uso:** Utilize Abas para separar seções lógicas da visão principal do aluno em uma mesma página ("Conteúdo", "Desempenho", "Informações").
> **Quando NÃO usar:** Não utilize para navegação central entre páginas completamente não correlacionadas do sistema (neste caso, o padrão é utilizar menus de navegação do topo).

#### Estados de Interação
*   **Padrão (Inativo):** Texto na cor `--color-app-on-surface-variant` (cinza escuro). Ícones discretos sem fundo, e borda inferior transparente. Sem *box-shadow*.
*   **Hover (Passar o Mouse):** O texto escurece levemente (`hover:text-app-on-surface`). Indica proativamente que a área é clicável.
*   **Pressed/Active (Acionado/Ativo):** Mutação visual drástica. O texto converte-se à cor primária abstrata (`Tertiary Orange` - `#eb6200`). A margem inferior solidifica-se exibindo uma rígida faixa sublinhada (`border-b-2`) de mesmo tom Laranja.
*   **Focado (Tabulação de Visão via Teclado):** Um sutíl delineamento pontilhado se materializa englobando toda a caixa, prezando pelas premissas cruciais de acessibilidade virtual (utilizando o padrão `focus:ring-2`).

*[ 📸 Screenshot Placeholder: Aba Ativa vs Inativa na área de alunos ]*

---

### 2. Sanfona de Aulas (Accordion de Currículo)
Elemento do tipo "retrai-expande" responsável primariamente por estruturar o índice do curso.

> **Regras de Uso:** Sempre use este componente como catálogo denso encurtador de lições para não exaurir espacialmente todas as matérias disponíveis na tela. Seu emprego pouca a carga cognitiva inicial.
> **Quando NÃO usar:** Para ações imperativas ou como "botões disfarçados". Eles têm o simples papel de expor conteúdo escondido inferior.

#### Estados do Módulo (Pasta-Pai)
*   **Padrão (Retraído):** Caixa unificada de fundo superficial (`app-surface` / `#ffffff`) emoldurada sob um traço acinzentado de `Outline Variant`. Composto pelo título negritado e respectivo ícone de pasta na variante pálida.
*   **Hover:** Impregna uma velatura pálida por induzimento sobreposto à superfície principal.
*   **Pressionado (Expandido):** Quebra na continuidade do fundo da área interna recém-aberta introduzindo um matiz sombrio ralo (`bg-app-background/30`) como terreno seguro para ejetar as fileiras das videoaulas submissas.

#### Estados Interativos da Aula (Registro-Filho)
*   **Não Começada (Padrão):** Textos calmos em cinza plúmbeo e calha contendo progresso zerado horizontal, transparente. Ausência vital de cor Verde.
*   **Sucesso (Completed/Feito):** Emite inquestionável validação de encerramento através disto: Ícone engole o `bg-green-500`. A barra de progresso individual arranca violentamente aos irrecorríveis 100% cobrindo o bloco de Verde intenso. Adquire aspecto semi-inativo pelo curso estar exaurido.
*   **Destaque (Last Visited Focus):** Assume estado vibrante indicando de imediato o "onde-parei". Lança o marcador espesso e verde de exatos `4px` rente à lateral canhota da carta com infusão em seu pano de fundo na coloração translúcida natural (`bg-green-50/30`), e um rotulo incisivo "(último tópico visitado)".

*[ 📸 Screenshot Placeholder: Módulo Fechado vs Módulo com lições variadas em verde (Sucesso e Destaque) ]*

---

### 3. Gráfico Circular de Progresso (Ring Chart)
Anel visual percentual de rápida decodificação lateral.

> **Regras de Uso:** Exclusivamente enroscado à estrutura resumida lateral para responder instantaneamente o estímulo "O quão além ainda preciso prosseguir neste exato treinamento?"
> **Quando NÃO usar:** Jamais destrinchar percentuais pífios modulares ou comparações inter-pares com o gráfico radial espalhando-o inúmeras vezes. Deve ser uno por curso/tela.

#### Ciclo Visual
*   **Mínimo Inicial (Inativo/0%):** Formato contido encoberto pelo canal `opacity` esvaindo para zero, compondo um traçado vazio invisível de cinzas sem polpa.
*   **Estado Natural Estimulado:** O arco alaranjado de `strokedasharray` avança calculadamente parando ao referencial correspondente na malha, destacando tipografia ousada (`font-bold text-white`) a porção do percorrido (Ex: `21.43%`).

*[ 📸 Screenshot Placeholder: O majestoso gráfico radial laranja no lado esquerdo da tela ]*

---

### 4. Dashboards de Nota e Micro-Gráficos
Aparelhagem sintética (Cartões informativos e Gráficos do Recharts) focada na entrega da inteligência analítica perante o estudante.

> **Regras de Uso:** Embalar dados que causam alto ou baixo impacto comportamental no usuário, de modo claro usando da paleta emocional (Vermelho/Laranja/Azul).

#### Painel Analítico das Barras (Performance Grid)
*   **Desempenho Vigoroso (Estado Focado Positivo):** Acerta a nota referencial `> 70%`, a barra orgulha-se da visibilidade sob o estardalhaço maciço do nosso Laranja (`#eb6200`).
*   **Desempenho Medíocre/Negativo (Inativo Oculto):** Falha no target analítico, sua visibilidade cai. A cor perde prestígio, afundando na imENSIdão séria da cor `Primary Navy` (`#00254e`), ofuscando de modo natural fracassos para evadir queixas visuais sem sentido.

#### Cartões Top de Situação
*   **Padrão Seguro:** Paredes lizas alvas dotadas sutilmente na base do cocuruto superior da cor `Tertiary` Laranja provando regularidade.
*   **Estado de Erro (Gatilho Fatal):** Detectou-se falha/reprovação. Cume da estrutura superior e macro grafemas despencam abruptos pra coloração alarmante `Danger Red 500`.

*[ 📸 Screenshot Placeholder: Cartões exibindo Estado de Erro "REPROVADO" vs barras Azuis/Laranjas ]*

---

### 5. Navegação Limo e Botões de Comando
Elementos esparsos de intervenção que englobam o elo interativo real com o banco de dados (Acesso às Salas, Interações Sociais no teto).

> **Regras de Uso:** A ferramenta definitiva pra transição do olhar passivo pra intenção de agir e trocar de módulos.
> **Quando NÃO usar:** Não camufle ligações mortas (links `href`) inativados visualmente como grandes caixas com cores de botões para engodos imfames.

#### Espectro das Interações
*   **Padrão (Solto):** Ícones enxutos com traçados leves colorizados abrandamente (`app-on-primary-container`), submissos ao forte telhado Navy sem possuir invólucro ou chão delimitado. Botão Secundários (Contrato de Horas) são simples.
*   **Hover (Intenção de Clique):** Acolhe proativamente um leito translúcido embaraçado e branco (`bg-white/10`). Ícones transbordam solidez virando puramente Brancos.
*   **Pressionado/Erro Focado:** Transmudam à tonalidade avermelhada/alaranjada mais ríspida em requisições de API demoradas sinalizando bloqueios físicos temporários de toque duplo.

*[ 📸 Screenshot Placeholder: Três botões no topo da navegação reagindo ao simples "Passar o mouse" ]*
