# BarberPro - Backend

Bem-vindo ao repositório do backend do **BarberPro**, um sistema SaaS projetado para barbearias. Este backend gerencia as operações de autenticação, gerenciamento de usuários, agendamentos e integração com pagamentos.

## 📜 Descrição do Projeto

O **BarberPro** é uma solução digital que auxilia barbearias a gerenciar clientes e serviços de maneira eficiente. Este backend foi desenvolvido com foco em segurança, escalabilidade e facilidade de integração com outras plataformas.

---

## 🚀 Tecnologias Utilizadas

As principais ferramentas e bibliotecas utilizadas neste projeto são:

- **[Node.js](https://nodejs.org/)**: Plataforma para desenvolvimento do servidor.
- **[TypeScript](https://www.typescriptlang.org/)**: Superset de JavaScript para tipagem estática.
- **[Express](https://expressjs.com/)**: Framework minimalista para criação de APIs.
- **[Prisma](https://www.prisma.io/)**: ORM para manipulação do banco de dados.
- **[Stripe](https://stripe.com/)**: Integração para processamento de pagamentos.
- **[JWT (jsonwebtoken)](https://github.com/auth0/node-jsonwebtoken)**: Autenticação baseada em tokens.
- **[bcryptjs](https://github.com/dcodeIO/bcrypt.js)**: Criptografia de senhas.
- **[CORS](https://www.npmjs.com/package/cors)**: Middleware para controle de acesso entre origens diferentes.
- **[express-async-errors](https://www.npmjs.com/package/express-async-errors)**: Tratamento de erros em rotas assíncronas.

---

## 📂 Estrutura do Projeto

```plaintext
src/
├── prisma/            # Configurações e esquema do banco de dados
├── controllers/       # Lógica das rotas
├── middlewares/       # Middlewares para validação e tratamento de erros
├── routes/            # Definição das rotas
├── services/          # Lógica de negócios e integrações externas
└── server.ts          # Inicialização do servidor
