function getBotResponse(input) {
    if(input == "Olá" ||input == "ola" ||input == "olá" ||input == "oi" ||input == "oie"){
        return "Hello"
    }else if (input == "bom dia" ||input == "Bom dia!" ||input == "BOM DIA" ||input == "Bom dia"){
        return "Bom dia!"
    }else if (input == undefined) {
        return "Desculpa não consegui entender"
    }else if(input == "Mais alguma coisa?") {
        return "Mais alguma coisa?"
    }
}