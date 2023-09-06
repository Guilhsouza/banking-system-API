# API Sistema Bancario

<p align = "center">
<img src = "https://img.shields.io/badge/status-em%20desenvolvimento-yellow">
<p>

## Tópicos

- [Descricão do projeto](#descrição-do-projeto)
- [Funcionalidades](#funcionalidades)

## Descrição do projeto
Este projeto é uma API que segue os padrões RESTful, a API foi desenvolvida para fazer as principais funções de um banco, como por exemplo a criação de contas, depositos e emissão de extrato de todas as transações efetuadas em uma determinada conta.

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
  <img src= 'https://github.com/Guilhsouza/banking-system-API/assets/124008139/a555c9ba-a5c6-4da4-8026-058f27e7edc8'
  </p>

### Funções de transações
- Depósito;
- Saque;
- Transferência.

**Funções de consulta:**
- Consultar saldo;
- Consultar extrato.
