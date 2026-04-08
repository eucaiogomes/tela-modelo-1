# 1. Design System e Guia de Estilos Visuais (Style Guide)

Bem-vindo à fonte única de verdade visual do **Lector LMS**. Este guia define as decisões fundamentais de estilo para manter a coesão da plataforma educativa. Toda e qualquer alteração de interface deve basear-se nessas primitivas visuais.

---

## 🎨 Cores e Design Tokens

A paleta de cores foca em dois pilares principais: **Foco** (através de tons frios como azul e cinza) e **Ação/Alegria** (através do Laranja vibrante). 

### Cores Primárias (Fundação)
Usadas predominantemente em fundos, cabeçalhos robustos e barras laterais corporativas.
*   **Primary Navy:** `--color-app-primary` | `#00254e`
    *(Uso: Background do Header global, Fundo vazio/baixo do gráfico dinâmico)*
*   **Primary Container:** `--color-app-primary-container` | `#003a75`
    *(Uso: Painéis que demandam contraste na barra lateral canhota, sobrepondo-se ao branco básico)*

### Cores Secundárias / Terciárias (Ação Guiada)
O norte visual que diz ao usuário para onde olhar ou clicar.
*   **Tertiary Orange:** `--color-app-tertiary` | `#eb6200`
    *(Uso principal: Botões principais, Gráficos radiais dinâmicos percentuais, Fundo de avatares com iniciais, Status ativo nas abas de navegação)*
*   **Tertiary Hover:** `--color-app-tertiary-hover` | `#d05700`
    *(Uso: Apenas no feedback interativo (Hover) quando o ponteiro do mouse cobrir elementos do Laranja original base)*

### Fundos (Surfaces e Backgrounds)
Ditam o respiro das informações em tela cheia.
*   **App Surface:** `--color-app-surface` | `#ffffff` (Branco puro)
    *(Uso: Fundo dos cartões em destaque, módulos do Accordion quando fechados, painéis estatísticos isolados)*
*   **App Background:** `--color-app-background` | `#f7f9fc` (Cinza Azulado Gelo)
    *(Uso: Tela inteiriça de fundo do LMS em geral, permitindo que os Cartões App Surface criem profundidade sem usar muitas sombras escandalosas)*

### Textos e Delineamentos
Base para hierarquia textual impecável.
*   **On Surface (Principal):** `--color-app-on-surface` | `#191c1e` (Usar sobre superfícies para títulos fortíssimos).
*   **On Surface Variant:** `--color-app-on-surface-variant` | `#434750` (Usar para legendas secundárias, parágrafos grandes ou ícones passivos).
*   **Outline Variant:** `--color-app-outline-variant` | `#c3c6d1` (Divisores de linha, aberturas modais discretas).

### Semântica
*   **Success (Sucesso):** `#22c55e` (Espectro Tailwind `green-500`). Representa aulas validadas positivamente, marcas de check list cumpridos.
*   **Danger / Error:** `#ef4444` (Espectro Tailwind `red-500`). Barra limitrofe estourada por reprovações em performance.

---

## ✒️ Tipografia (Typography)
Família Fonte Principal: **Geist Variable**. Uma fonte sem-serifa limpa desenhada digitalmente para telas.

### Hierarquia e Tamanhos
*   **H1 (Títulos Principais Pág):** Tamanho `2xl` / Fonte Black (`font-black`), na cor `#191c1e`. Ex: "100,00%" de desempenho global; Nomes de Cursos no meio da tela.
*   **H2 (Subtítulos do Cartão):** Tamanho `lg` / Fonte Semibold. Letras ativas nos cartões superiores da Lector e resumos visuais de módulos dentro de abas.
*   **Corpo de Texto (Base Parágrafos):** Tamanho `sm` / Fonte Regular (`text-sm font-normal`). Mensagens compridas ou resumos de aulas.
*   **Rótulos, Badges e Botões (Macro labels):** Utilizam muitas vezes marcações nativas como "Caixa Alta" (`uppercase`) e tamanho micro (`text-[10px]` ou `text-xs`) mas sobressaídas pelo estilo Fortíssimo de Peso (`font-bold`). Ex: Rótulo de *Andamento*, Nomeclatura no pilar dos Cardões Resumos.

---

## 📏 Espaçamento e Grids (Spacing System)
O sistema espacial baseia-se diretamente na matemática por escala natural do Tailwind CSS (`rem` multiplicadores).

### Regras de Ouro
1.  **Limites do Contêiner Máximo:** O *wrapper* principal dos cursos de consumo engessará numa extensão `max-w-[1400px]` para não esgarçar horizontes em telas Ultrawide gigantes e impossibilitar a fluência óptica leitura humana.
2.  **Abordagem em Grid Lógica:**
    *   No Desktop (Large viewports): Dividimos a tela do LMS na balança `300px` restritos para Menu Relatório Lateral (Fixa visualmente as diretrizes do curso à esquerda) *VERSUS* Fração Remanescente total (`1fr` fractional unit) orientada pro miolo sanfonado à direita.
3.  **Respiros e Paddings Fixos:** Cartões principais exigem repouso de retina e utilizam obrigatoriamente calhas acolchoadas em todas os quatros confins do container com gap médio e acolchoamento na medida de classe de `p-6` ou superior (equivalente a 24 pixels reais de margens no tecido natural do CSS). Divisórias sanfonadas de lições utilizam acolheimento assimétrico (`py-4 px-6`) priorizando formato leiturável de listagem alongada. Coleções encostadas adotam vãos e canaletas nativos (`gap-6`, equivalente a 24px).
