<h1 align="center">
Smartex Test App
</h1>

<p align="center">Aplicativo de listagem de tarefas onde pode-se criar, editar e excluir novas tarefas.</p>

## 🎨 Telas

<img width="250px" src="telas.gif" alt="telas-do-app">

## 📃 Sobre o projeto

Aplicativo proposto como desafio pela <a href="https://www.smartex.ai/" target="_blank">Smartex</a> onde o objetivo é desenvolver um app que permita a criação, edição e remoção de tarefas, tudo isso seguindo uma linha de design e guidelines propostos.

## 🛠 Tecnologias utilizadas

- ⚛️ **React native** — Aplicativo mobile
- ⚛️ **Expo** — Ferramenta de desenvolvimento
- 🖼 **AsyncStorage** — Sistema de armazenamento e manipulação de dados
- 🧭 **React navigation (drawer e native-stack)** — Estratégias de navegação
- 🎨 **Paper Material Design for React Native** — Coleção de components customizaveis que seguem o Material Design da Google
- 📱 **UUID Generator** — Gerador de chaves únicas aleatórias
- 💅 **StyleSheet ** — Estilização dos componentes

## 🚀 Rodando o projeto

A aplicação é composta pelo front end, o aplicativo mobile precisa de um dispotivo e/ou emulador sendo executado para funcionar.

## Pré-requisitos

- Git
- NodeJS
- Expo

## 📱 Rodando o aplicativo mobile

Clone o repositório

```bash
# Clona o repositório
git clone https://github.com/lucasvuicik/SmartexTest.git
```

Navegue até a pasta do projeto clonado e execute os comandos abaixo

```bash
# Entra na pasta do aplicativo
cd mobile
# Instala as dependências
npm install
```

Após isso, no terminal da pasta mobile execute o comando abaixo

```bash
# Inicia o aplicativo
expo start
```

## 📋 Observações sobre o projeto
1 - A escolha do react-native-paper ao inves do react-native-material por conta do react-native-material nao possuir suporte para uma contexto de theme para a minha aplicacao. Acredito que para utilizar o react-native-material eu poderia modificar arquivos internos dentro da node_modules com a biblioteca patch-package, porem por conta do pouco tempo de desenvolvimento resolvi prosseguir com uma biblioteca que tambem segue as guidelines UI da Google.

2 - Em relacao ao typescript, efetuei a instalacao do ts no projeto, porem por conta do tempo mais elevado que é necessario para desenvolver com ts, achei mais prudente seguir com o projeto em js para respeita o prazo de entrega.

3 - O projeto esta com uma versao inferior do native por motivo de compatibilidade, mas ja esta numa versao com a nova arquitetura lancada a partir da 0.68

## 😏 Ideia de melhoras para implementar no app
Este bloco foi pensado para implementacoes de otimizacao do projeto caso fosse possivel desfrutar de mais tempo para desenvolver. A intencao é mostrar uma visao de longo prazo caso fosse um projeto real, sendo estas implementacoes:
- centralizacao das libs em uma pastinha '@libs'
- refatorar o codigo com ts
- implementar mais tokens no theme e otimizar a densidade de pixels com o RFValue
- utilizar a biblioteca react-native-swipe-list-view na listagem das tarefas
