# 📋 Contact List

Aplicação web para gerenciamento de contatos, construída com React, TypeScript e Redux Toolkit. Permite adicionar, editar, remover e buscar contatos com validação em tempo real e proteção contra duplicatas.

---

## ✨ Funcionalidades

- **Adicionar contato** com nome, e-mail e telefone
- **Editar contato** existente diretamente pelo card
- **Remover contato** com confirmação
- **Busca em tempo real** por nome, e-mail ou telefone
- **Máscara automática** no campo de telefone (formato brasileiro)
- **Bloqueio de letras** no campo de telefone
- **Validação de e-mail** enquanto o usuário digita
- **Proteção contra duplicatas** — e-mails e telefones já cadastrados são rejeitados
- **Mensagens de erro inline** abaixo de cada campo (sem `alert()`)
- **Banner de sucesso** ao adicionar um novo contato
- **Estado visual por campo**: borda vermelha (erro) / verde (válido) / padrão
- Layout **responsivo** para desktop, tablet e mobile

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca de UI |
| [TypeScript](https://www.typescriptlang.org/) | 4.9 | Tipagem estática |
| [Redux Toolkit](https://redux-toolkit.js.org/) | 2.x | Gerenciamento de estado |
| [React Redux](https://react-redux.js.org/) | 9.x | Integração React + Redux |
| [styled-components](https://styled-components.com/) | 6.x | Estilização com CSS-in-JS |
| [uuid](https://github.com/uuidjs/uuid) | 13.x | Geração de IDs únicos |

---

## 🗂 Estrutura de Pastas

```
src/
├── components/
│   ├── ContactCard/      # Card individual de um contato
│   ├── ContactForm/      # Formulário de criação e edição
│   ├── ContactList/      # Lista de contatos com busca
│   └── Header/           # Cabeçalho da aplicação
├── pages/
│   └── Home/             # Página principal
├── store/
│   ├── index.ts          # Configuração do Redux store
│   └── reducers/
│       └── contacts.ts   # Slice de contatos (add, edit, remove)
├── utils/
│   └── validators.ts     # Máscara de telefone e validações
├── App.tsx
└── styles.ts             # Estilos globais e paleta de cores
```

---

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) 16+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/GilbertoPaiva/contact-list.git
cd contact-list

# Instale as dependências
npm install
```

### Desenvolvimento

```bash
npm start
```

Abre automaticamente em [http://localhost:3000](http://localhost:3000).  
O servidor reinicia a cada alteração salva.

### Build de produção

```bash
npm run build
```

Gera os arquivos otimizados na pasta `build/`.

### Testes

```bash
npm test
```

---

## 📱 Validações implementadas

### Telefone
- Aceita apenas dígitos durante a digitação (letras são bloqueadas)
- Máscara aplicada em tempo real: `(XX) XXXX-XXXX` (fixo) ou `(XX) XXXXX-XXXX` (celular)
- Número considerado válido com 10 ou 11 dígitos
- Celular de 11 dígitos deve ter `9` como terceiro dígito

### E-mail
- Validação de formato em tempo real após o campo receber e perder foco
- Formato esperado: `usuario@dominio.extensao`

### Duplicatas
- Ao tentar salvar, o sistema verifica se já existe outro contato com o mesmo e-mail ou telefone
- Na edição, o próprio contato é excluído da verificação

---

## 📄 Licença

Este projeto está sob a licença MIT.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
