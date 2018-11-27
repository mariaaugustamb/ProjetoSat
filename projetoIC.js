/**
 * This file should be placed at the node_modules sub-directory of the directory where you're
 * executing it.
 *
 * Written by Fernando Castor in November/2017.
 */
//CHECKED
exports.solve = function(fileName) {
    let formula = readFormula(fileName)
    let result = doSolve(formula.clauses, formula.variables)
    return result // two fields: isSat and satisfyingAssignment
  }
  
  // Receives the current assignment and produces the next one
  //CHECKED
    var cont = 0
  function nextAssignment(currentAssignment) {
    // implement here the code to produce the next assignment based on currentAssignment.
    cont = cont +1
        var aux2 = 0
        for(let i = 0 ; i < currentAssignment ; i++){
            if(assignment[i] == 1){
                aux2 = aux2 + Math.pow(2, aux.length-1-i);
            }
        }
        
        aux2 = aux2 + 1
        
        aux3 = aux2.toString(2)

        for ( var i  = 0; i<aux3.length; i++){
            newAssignment[i] = aux3.charAt(i)
        }

     return newAssignment
  }


cont2 = 0;
var roda = false
function doSolve(clauses, assignment) {
    let isSat = false
    while ((!isSat) && cont <= Math.pow(2,assignment.length)) {
      // does this assignment satisfy the formula? If so, make isSat true.
        for ( var i = 0; i<clauses; i++){
            roda = false
            for ( var j = 0; j<separando[i].length && !roda; j++){
                if (separando[i][j]<0){
                    if (assignment[separando[i][j]] == 0){
                        cont2=cont2+1;
                        roda = true
                    }
                }else if (separando[i][j]>0){
                    if (assignment[separando[i][j]] == 1){
                        cont2 = cont2 + 1;
                       roda = true
                    }
                }
                if (cont2 == clauses){
                    isSat = true
                }
            }
        }
        assignment = nextAssignment(assignment)
    }
    let result = {'isSat': isSat, satisfyingAssignment: null}
    if (isSat) {
      result.satisfyingAssignment = assignment
    }
    return result
  }

  //CHECKED
  function readFormula(fileName) {
    // To read the file, it is possible to use the 'fs' module.
    // Use function readFileSync and not readFile.
    // First read the lines of text of the file and only afterward use the auxiliary functions.
    const fs = require('fs')
    let text  = fs.readFileSync(fileName, 'utf8')  //  an array containing lines of text extracted from the file.
    var arrayAux = text.split("\n")
  
    let clauses = readClauses(arrayAux)
    let variables = readVariables()
   
    // In the following line, text is passed as an argument so that the function
    // is able to extract the problem specification.
    let specOk = checkProblemSpecification(text, clauses, variables)
  
    let result = { 'clauses': [], 'variables': [] }
    if (specOk) {
      result.clauses = clauses
      result.variables = variables
    }
    return result
  }

//CHECKED
var cont3=0

function readClauses(text){
    let aux5 = ""
    var tudo = ""
    var separando = []
    for (var i = 0; i<text.length; i++ ){
        if (text[i][0]== "p" || text[i][1] == "cnf"){
            var cv = text[i].split(" ");
            var vars = cv[2]
            var clauses = cv[3]
        }else if (text[i][0] != 'c'){
            for (var j = 0; j<text[i].length; j++){
                if(text[i][j] != "0"){
                   separando[cont3][j] = parseInt(text[i][j])
                }else{
                    cont3++
                }
           }
            for ( var i = 0 ; i<separando.length ; i++){
                let compara
                if ( i = 0){
                    compara = separando[i].length
                    } else{
                        aux6 = separando[i].length
                        if (compara<aux6){
                            compara = aux6
                            vars = compara
                        }
                    
                
                }
            }
        }
    }
}

//CHECKED
function readVariables() {
          for (var i = 0; i<vars; i++){
               variables[i] = 0 
        }
          var assignment = variables
    }

//CHECKED
function checkProblemSpecification() {
    if (separando.length == clauses){
        return true
    }else {
              console.log("Entrada Inválida")
              return false
        }
    }
  