# UserFormAngular

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 17.1.2.

## Descrição
Este projeto consiste em incrementar a tarefa FEB-P011, adicionando um serviço no Angular para mapear os eventos do usuário ao interagir com um formulário de cadastro. O serviço armazena todas as alterações, incluindo valores e status do formulário, desde o início da interação até o momento em que o usuário finaliza o cadastro ao pressionar o botão "Enviar".

## Serviço de Mapeamento de Eventos do Formulário
O serviço proposto permite armazenar todas as alterações no formulário, proporcionando métodos públicos para acessar essas informações. A estrutura de dados no serviço é projetada para armazenar dados relevantes sobre a interação do usuário com o formulário.

## Integração Serviço/Componente
O serviço é injetado no componente do formulário (`FormUsuario`). A interação entre o serviço e o componente é realizada de maneira a validar a funcionalidade do serviço, garantindo que todas as alterações do usuário sejam registradas conforme necessário.

## Execução
Após clonar o repositório, instale as dependências usando o seguinte comando:
```bash
npm install
```

Execute o projeto com o seguinte comando:

```bash
ng serve
```

Navegue para `http://localhost:4200/`. O aplicativo será recarregado automaticamente se você modificar qualquer um dos arquivos de origem.

