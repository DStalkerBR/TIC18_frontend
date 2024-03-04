# UserFormAngular

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 17.1.2.

## Descrição
Este projeto contém um componente de formulário para representar um usuário. O componente `FormUsuario` inclui controles para Nome do usuário, Senha, Email, Nome completo, Telefone, Endereço, Data de Nascimento, Gênero, Profissão e um botão de submit.

## Controles e Validadores
1. **Nome do usuário:**
   - Não deve conter espaços.
   - Máximo de 12 caracteres.

2. **Senha:**
   - Mínimo de 4 caracteres.
   - Pelo menos uma letra maiúscula.
   - Pelo menos um símbolo.

3. **Email:**
   - Deve ter um endereço de email válido.

4. **Nome completo:**
   - Deve incluir um nome e um sobrenome.

5. **Telefone:**
   - Número de telefone válido de acordo com as regras do Brasil.

6. **Endereço:**
   - Deve ter um endereço válido.

7. **Data de Nascimento:**
   - Deve ter uma data válida.
   - O usuário deve ter no mínimo 18 anos.

8. **Gênero:**
   - Opções pré-definidas, por exemplo, rádio ou um dropdown.

9. **Profissão:**
   - Lista pré-definida de opções para o usuário escolher.

10. **Botão de submit:**
    - Chama um método TypeScript para coletar os dados do formulário e criar um objeto JSON.

## Critérios de Avaliação
O projeto será avaliado considerando os seguintes itens:
- Organização da view do componente nos arquivos `.css` e `.html`.
- Indentação e organização do código em TypeScript, com comentários sempre que possível.
- Utilização da biblioteca Material para a criação do formulário.
- Utilização dos Validators pré-definidos no Angular. Quando não for possível, foram criados validadores personalizados.

## Instalação
Após clonar o repositório, instale as dependências usando o seguinte comando:
```bash
npm install
```

## Execução
Execute o projeto com o seguinte comando:
```bash
ng serve
```

Navegue para `http://localhost:PORTA/`. O aplicativo será recarregado automaticamente se você modificar qualquer um dos arquivos de origem.


