Feature: Autenticação
    Scenario Outline: Login de usuário
        Given que estou na Tela inicial 
        When eu faço o login com usuario "<email>" e senha "<senha>"
        Then o nome do usuario deve aparecer na página de perfil
        Examples:
            | email | senha |
            | cliente@ebac.art.br    | GD*peToHNJ1#c$sgk08EaYJQ   |