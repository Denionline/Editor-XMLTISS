# Editor XMLTISS

Editor XMLTISS é uma aplicação web moderna para visualização, edição e gerenciamento de arquivos XML no padrão TISS (Troca de Informação em Saúde Suplementar), utilizado por operadoras e prestadores de serviços de saúde no Brasil.

## Visão Geral

O Editor XMLTISS foi desenvolvido para facilitar o trabalho de profissionais que lidam com arquivos XML TISS, permitindo importar, visualizar, editar e exportar arquivos de forma simples e intuitiva, sem a necessidade de instalar programas adicionais. O projeto oferece uma interface amigável, responsiva e com recursos avançados para manipulação de dados de guias, beneficiários, procedimentos e despesas.

## Principais Funcionalidades

- **Upload e listagem de arquivos XML**: Importe arquivos `.xml` do padrão TISS e visualize todos os arquivos carregados em uma lista organizada.
- **Visualização estruturada**: Exibe os dados do XML de forma estruturada, facilitando a leitura e compreensão das informações.
- **Edição de detalhes do arquivo**: Permite editar metadados do arquivo, como nome, código do prestador, número do protocolo e registro ANS.
- **Gerenciamento de guias**: Visualize, edite e exclua guias SPSADT individualmente, com formulários dinâmicos para cada campo relevante.
- **Edição de procedimentos e despesas**: Adicione, edite ou remova procedimentos executados e despesas associadas a cada guia.
- **Exportação**: Baixe o arquivo XML atualizado após as edições, pronto para ser enviado para operadoras ou órgãos reguladores.
- **Persistência local**: Os arquivos e alterações são salvos no armazenamento local do navegador, garantindo que nada seja perdido durante a navegação.
- **Notificações**: Feedback visual para ações como salvar, excluir ou atualizar dados.
- **Interface responsiva**: Totalmente adaptável para uso em desktops e dispositivos móveis.

## Tecnologias Utilizadas

- **React + TypeScript**: Estrutura principal da aplicação.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **Tailwind CSS**: Estilização moderna e responsiva.
- **Radix UI**: Componentes acessíveis e customizáveis.
- **xml-js**: Conversão entre XML e JSON para manipulação dos dados.
- **Phosphor Icons / Lucide Icons**: Ícones modernos e acessíveis.

## Estrutura do Projeto

- `src/pages/arquive-list.tsx`: Página principal de listagem e upload dos arquivos XML.
- `src/pages/arquive-xml/page.tsx`: Página de visualização e edição detalhada de um arquivo XML.
- `src/pages/arquive-xml/components/guide-details/`: Componentes para edição detalhada de cada guia SPSADT.
- `src/context/ContextXml.tsx`: Contexto global para gerenciamento dos arquivos e ações.
- `src/reducer/arquive/`: Reducers e actions para manipulação do estado dos arquivos.
- `src/utils/Objetct2Xml.ts`: Conversão de objetos JSON de volta para XML.
- `src/components/ui/`: Componentes reutilizáveis de interface (botões, tabelas, diálogos, etc).

## Público-Alvo

- Clínicas, hospitais, operadoras de saúde e profissionais que precisam manipular arquivos XML TISS.
- Desenvolvedores que desejam customizar ou integrar o editor em outros sistemas.

## Licença

Distribuído sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Desenvolvido com ❤️ para a comunidade de saúde suplementar.