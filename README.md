# Automating the Smiles App

<h1 align="left">
    <img src="images/logo-smiles.png" width="250px">
</h1>

## 👨🏻‍💻 Como implementar o projeto do zero

### JAVA
- [x] Instalar JDK 11.0.16 (https://www.oracle.com/java/technologies/downloads/#java11-mac)
- [x] Selecionar: Arm 64 DMG Installer
- [x] Crie a variavel de ambiente JAVA_HOME no arquivo .zshenv
- [x] No terminal: vi ~/.zshenv
- [x] Escreva: export JAVA_HOME=$(/usr/libexec/java_home)
- [x] Sair e salvar: esc + :wq
- [x] Execute o comando: source ~/.zshenv

### Configuração ambiente android

- [x] npm init -y
- [x] npm instal @wdio/cli
- [x] npx wdio config
- Selecione: On my local machine
- Selecione: Mocha
- Selecione: No!
- Selecione: Enter
- Selecione: n
- [x] Marce as opções com "ESPAÇO" e navegue com ↑↓
- Selecione: spec
- Selecione: wait-for
- Selecione: Appium
- Selecione: Enter
- Selecione: y

### Verifique os drives instalados pelo terminal:
- [x] npm i appium@2.0.0-beta.19
- [x] npx appium driver list
- [x] Instalar driver: appium driver install [nomeDriver]

### Com VsCode instalado, abra o terminal e execute o comando:
- [x] code .
