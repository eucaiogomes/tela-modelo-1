# 2. Biblioteca de Componentes (UI Kit)

Abaixo catalogamos a estrutura comportamental tátil (UI) e temporal de reação das peças ativas do módulo educativo. Esteja consciente de suas diretrizes prostradas para evitar gambiarras no Front-end que dilacerem as regras UX impostas para a identidade do LMS.

---

### 1. Sistema de Abas (Tabs System)
Navegação estático-lateral horizontal do miolo mestre educativo alternando domínios (Ex: da Aba de Conteúdo para Desempenho Estatístico).

**Regras de Uso:** 
*   **SIM:** Sempre empregado em blocos irmãos e simétricos agrupados sob a mesma vertente (Mesmo curso). 
*   **NÃO:** Não aplicar para trocas severamente disruptivas no mapa do site (fugir do curso atual).

**Matriz de Estados:**
*   **Padrão Inativo:** Ícones ocos (`app-on-surface-variant`). Texto secundário, e piso (borda-bottom) fantasma sem delimitação visível no fundo App Background.
*   **Submetido ao Mouse (Hover):** Súbita oscilação do letreiro em transição pra a pigmentação de alto contraste (`app-on-surface`).
*   **Ativo Selecionado (Pressed):** Reivindica autoria da aba injetando o *Tertiary Orange* e atracando visualmente base e âncoras na superfície sublinhado por sólida tarja alaranjada. Fica despido de sombreamentos estéreis sob as bordas pro simulacro 3D real de estar acoplado em cima.
*   **Focado (Keyboard Tabulação):** Aro virtual acionado prezando pelos princípios universais de deficiência (Acessibilidade e mobilidade via hardware). Formado por anel virtual de contorno.

*( Insira [ 📸 Screenshot Placeholder das Abas ] Aqui )*

---

### 2. Painel em Sanfona (Accordion de Currículos)
Menu expansível encarregado pelo agrupamento massivo encadeado (Módulo Superior engolindo Aulas-Filhas).

**Regras de Uso:** 
*   **SIM:** Catálago natural que encurta percursos e salva escassez do painel ocultando o que não precisa de vista panorâmica inicial obrigatória, deixando a exploração em ordem cronológica a gosto de manobra real da pessoa matriculada.
*   **NÃO:** Interações de chamadas ou atalhos independentes não encaixam no fluxo da Sanfona.

**Matriz de Estados (Cartão de Módulo Abstrato):**
*   **Retraído Conservador (Padrão):** Contido uniformemente sob um escudo rígido, liso e branco (`app-surface`). Ícone da pasta repousa calmo.
*   **Expandido (Ativo/Aberto):** Entranha quebra da continuidade alva trocando fundo ao materializar base soturna de banho de pigmento ralo do cinza azulado (`bg-app-background/30`) pro ressaltamento do que é lido abaixo (as aulas do recheio exposto).

**Análise dos Estados Individuais das Lições e Aulas:**
*   **Indisponível (Vazio):** Fonte calada no espectro de chumbo plúmbeo cinza e linha do progresso em repouso invisível aguardando ser ativada. Nenhuma incidência Verde.
*   **Vitória Validada (Estado Sucesso):** Engate triunfante em `bg-green-500` cobrindo iconografia, acompanhado pelo preenchimento de agressiva brutalidade linear na escala medidora lateral completando sem hesitar a régua em Verde sólido evidenciando missão concluída inquestionável.
*   **Sinalizador Magnético (Last Visited Focus):** Disparo instantaneamente engatilhado ao detectar última aula acionada. Evidencia-se injetando tarja reta de esquadria na quina esquerda paralela do registro, saturado Verde e acompanhado no plano oposto em marca d'agua do carimbo itálico: "*(último tópico visitado)*". 

*( Insira [ 📸 Screenshot Placeholder do Accordion Expandido ] Aqui )*

---

### 3. Componentes Estatísticos - Desempenhos e Painéis
Scorecards que sumarizam carga cerebral em cartões instantâneos e gráficos da biblioteca reativa *Recharts*.

**Regras de Uso:** 
*   **SIM:** Avaliação rápida do sistema punitivo ou benevolente acerca do empenho real diário de performance estudantil da sua matriz de aluno comparado às diretrizes oficiais exigentes da turma escolar em andamento.

**Matriz Card de Situação de Desempenhos:**
*   **Situação Constante (Base Ideal):** Telhados e coberturas minimalistas em tons de calmas calhas Laranjas informando base sem anormalidades atípicas (o normal é nota acima da média padrão).
*   **Situação Inconveniente Constatada / Gatilho Disparativo Reprovação:** Fio no cume transborda ao alerta tático de Danger (`bg-red-500`) acompanhado pela massificação do mesmo rubro banhando a rubrica exclamando macro veredito textual de terror estudantil (Letras Garrafais "REPROVADA").

**Comportamento Gráfico Cartesiano Dimensional (ReCharts):**
*   **Evolução Vigorada (+70 pontos):** Os retângulos que ultrapassam o target orgulharão e pularão do painel esbanjando do majestoso Laranja Lector (`#eb6200`).
*   **Performance Abaixo Aceitável ou Vazia:** Retrocedem a profundidades passivas obscurecendo num breu opaco estéril de `00254e`. 
*   **Interações Suspensas de Leitura do Mouse (Tooltips Hover):** Submódulos engatados à elevação dimensional na passagem do cursor em áreas delimitadas pelo polígono, revelando discretamente janelas brancas limpas desobstruídas destilando as precisões decimais escondidas (`ex. 71,21% de aproveitamento validado no respectivo módulo quatro`) do pilar tocado sem grid lineares grosseiras rasgando por trás.

*( Insira [ 📸 Screenshot Placeholder ReCharts vs Dashcards ] Aqui )*
