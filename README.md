<p align="center"><img src="https://scontent.fplu19-1.fna.fbcdn.net/v/t39.30808-6/393209613_962888202029977_4648674819764940418_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=f57Qr7359N8AX86_p-J&_nc_oc=AQlkmmjC1Zd36HavL9IhSxLr-uhe2vZkKzzGzpWYy-8GfeCQHXMFIAtXuUi-QpUUYRHFeaOO8DytoeVet_nm85G-&_nc_ht=scontent.fplu19-1.fna&oh=00_AfAxjQNBd9eqIpnrxh0QnBfUsbrkK7wTgtKZBnhA846CxQ&oe=65927A28" width="400" alt="Seidor Logo"></p>

## DESAFIO Backend - TTP - Teste Técnico Prático- Seidor

## Tecnologias utilizadas

- [Node 16.13](https://laravel.com/docs/10.x) - Linguagem de programação
- [ExpressJS 4.18](https://expressjs.com/pt-br/) - Framework
- [MongoDB](https://www.mongodb.com/docs/manual/) - Banco de dados
- [GitHub](https://github.com/features/) - Versionamento de código
- Outras bibliotecas JS também foram usadas

## Observações

Vou listar aqui algumas tecnologias que gostaria de ter utilizado, algumas que facilitariam o desenvolvimento e outras que poderiam mostrar um pouco mais do meu conhecimento, mas preferi aderir ao que foi proposto no escopo do desafio:

- TypeScript : Acredito que facilitaria muito na construção do sistema, já que ele permitiria a construção de uma arquitetura mais sólida (até mesmo atendendo a mais princípios SOLID), uma facilidade na identificação de erros e maior segurança. Optei por não usar pois foi solicitado o desenvolvimento em node.
- SQL : Para o desafio proposto acredito que um banco de dados relacional seria mais adequado, pelo fato de existir relacionamentos, porém ao ler os requisitos da vaga e ver que o Mongo era uma tecnologia requisitada entendi que faria mais sentido usa-lo.
- Docker: Estou acostumado a utilizar docker no meu dia a dia, mas como não foi pedido preferi por não utilizar, mesmo ele facilitando muito a nossa vida.
- Autenticação: Pensei logo de cara em fazer todo um sistema de autenticação usando OAuth2.0, ou mesmo o simples JWT, mas como não foi pedido acreditei que só adicionaria mais complexidade a aplicação e não seria avaliado.
- Jobs e Filas (Mensagerias), apesar de serem ferramentas que eu gosto muito e que eu acredito que poderiam ter me
ajudado a mostrar um pouco mais dos meus conhecimentos em Backend, não foi pedido e acredito que só implicaria em mais complexidade no sistema.

## Principais desafios

Acredito que o maior desafio para mim era que tinha muuuito tempo que eu não desenvolvia uma aplicação com node puro. Então para eu lembrar como funcionava tudo levou um tempinho, fora isso também tinha um tempo que não usava mongo, mas ele ainda estava mais fresco na memória do que o node puro.

## Principais Ferramentas utilizadas

| Ferramenta        | Descrição                                                                      | Motivo do uso                                                                                                                                                                                                |
|-------------------|--------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Validators      | Permite criar uma classe auxiliar para validar requisições          | Me auxiliou na validação dos campos de acordo com regras pre-definidas                               |
| Middlewares       | Permite criar uma classe que auxilia na interceptação de requisições           | Me auxiliou na interceptação de requisições para garantir que todos os forms enviados estavam em conformidade, mas também poderiam ser utilizados para validar tokens por exemplo    |
| Exception Handler         | Permite criar uma classe que auxilia na interceptação de exceções | Me auxiliou na interceptação de exceções para garantir que todas as exceções que chegam na API não fossem retornadas diretamente para o usuário, assim garantindo a segurança dos dados apresentados no JSON                        |
| Jest           | Permite criar testes unitários para o sistema                                  | Me auxiliou na criação de testes automatizados para garantir o funcionamento correto das requisições                                                                                                         |
| Route Resource     | Permite criar um binding entre o model e a rota                          | Me auxiliou a criar todas as rotas necessárias em poucas linhas de código                                                                             |


## Como rodar o projeto

OBS.: Não adicionei o .env ao gitignore pois criei um cluster no mongo para este desafio, utilizando um email novo e uma senha exclusiva para este desafio, pensando em facilitar a validação, então não precisam de mudar a URL de Conexão (a menos que vocês queiram)

Primeiramente rode este comando para instalar as dependencias:

```bash
npm run install
```
Depois para rodar a aplicação localmente rode este:

```bash
npm run dev
```

E por fim, para rodar os testes rode este:

```bash
npm run test
```

- Na raiz do projeto existe um JSON da Collection que eu estava usando no Insomnia para testes, caso queria utiliza-lá, basta ir no Insomnia clicar em Importar e selecionar este JSON. Mas se você for adepto ao Postman, aqui tem um tutorial de como importar do Insomnia para ele [Tutorial](https://learning.postman.com/docs/getting-started/importing-and-exporting/importing-from-insomnia/)
 

## Obrigado pela oportunidade 💙
