# API Sistema Bancario

<p align = "center">
<img src = "https://img.shields.io/badge/status-em%20desenvolvimento-yellow">
<p>

## Tópicos

- [Descricão do projeto](#descrição-do-projeto)
  
- [Ferramentas utilizadas](#ferramentas-utilizadas)

- [Como executar o projeto](#como-executar-o-projeto)
  
- [Funcionalidades](#funcionalidades)
  
  
## 📌 Descrição do projeto
Este projeto é uma API que segue os padrões RESTful, a API foi desenvolvida para fazer as principais funções de um banco, como por exemplo a criação de contas, depositos e emissão de extrato de todas as transações efetuadas em uma determinada conta.

## Ferramentas Utilizadas
[![Ferramentas Usadas](https://skillicons.dev/icons?i=js,nodejs,express)](https://skillicons.dev)

## Como executar o projeto
Para executar o projeto é necessário ter o Node.js instalado.

Com o Node.js instalado basta fazer um clone do projeto
```bash
git clone https://github.com/Guilhsouza/banking-system-API.git
```
Abra o diretório do projeto
```bash
cd banking-system-API
```

Instale as dependências utilizando o comando:
```bash
npm i
```

Inicialize o servidor local: 
```bash
npm run dev
```
Para testar todas as rotas, é possível utilizar o Postman ou o Insomnia.
## Funcionalidades 

### Funções de contas
- ### Criar uma conta:
  O programa cria uma conta na memória do banco após validar se os dados estão dentro dos padrões e confirmar se o CPF e E-mail não existem em outra conta.

<p align = 'center'>
<img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/0543ebf4-cbda-4dd0-b5cf-353a914ba66a'>  
</p>

- ### Listar todas as contas do banco: 
  O programa busca TODAS as contas existentes no banco e imprime na tela um array de objetos com as informações de cada uma.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/8759e17b-ffc0-45dd-98d8-ef23ed8aeadc'
  </p>
  
- ### Editar uma determinada conta:
  O programa busca a conta pelo número que é passado no parametro da URL, depois verifica se a conta existe, se existir faz a alteração de todos os dados.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/74f5cebb-539a-484d-b69d-9b9730385836'>
  </p>
  
- ### Excluir uma determinada conta:
  O programa confirma se a conta existe, se existir ela exclui todo o objeto.

  <p align = 'center'>
  <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/a555c9ba-a5c6-4da4-8026-058f27e7edc8'
  </p>
  
<hr>

### Funções de transações
- ### Depósito:
  O programa verifica se a conta existe, e se os parametros foram passados corretamente, se sim, faz o depósito em uma conta específica. Os valores são passados em centavos e depois transformados em reais.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/0cb0da02-417f-4f02-ab2e-c28eb5a58fb6'>
  </p>
  
- ### Saque:
  O programa verifica se a conta existe, se o saldo é suficiente e se a senha passada é a correta, se passar em todos os testes faz o saque da conta. Também é passado em centavos e depois convertido em reais.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/5d81fac4-e6f0-4da4-90bb-9c6b66b9480a'>
  </p>
  
- ### Transferência:
  O programa verifica se ambas contas existem, se o saldo é suficiente da conta de origem e se a senha da conta de origem está correta. Também é passado em centavos e depois convertido em reais.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/9e41bdcc-8e9c-4d21-a9c6-10a92d4eadab'>
  </p>

<hr>

### Funções de consulta
- ### Consultar saldo:
  O programa vai procurar pelos parametros passados na URL se a conta existe comparando com o número da conta, se existir e a senha for correta, ele imprime o saldo atual da conta.

  <p align = 'center'>
     <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/285be5ba-6045-47e6-9ee7-aa37d62b2212'>
  </p>
  
- ### Consultar extrato:
  O programa vai procurar pelos parametros passados na URL se a conta existe comparando com o número da conta, se existir e a senha for correta, ele imprime o extrato de todas as transações que ocorreram na conta.

  <p align = 'center'>
    <img src = 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/ad5f54ca-a50d-4aed-ba98-987cab74461b'>
  </p>

## Como contribuir para o projeto
1. Faça um fork do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contanto o que você fez: `git commit -m "feature: My new feature"`
4. Envie as alterações: `git push origin my-feature`

## Autores 
[Guilherme Souza](https://www.linkedin.com/in/guilhrme-souza/)
