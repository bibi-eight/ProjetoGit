/* Criar a função (contarNumeroVogais) que recebe uma string
e retorna o número de vogais que ela tem (maiusculas e minusculas) “salve” => 2 */
const vogais = ["a", "e", "i", "o", "u"]
 
function contarNumeroVogais(str)
{
    let contar = 0;
 
    console.log(str);
    for (let letra of str.toLowerCase())
    {
        if(vogais.includes(letra))
        {
            contar++;
        }
    }
    return  contar;
}
let resultado = contarNumeroVogais('brenda');
console.log("a palavra tem "+resultado+ " vogais");