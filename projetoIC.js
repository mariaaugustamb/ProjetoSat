/**
 * This file should be placed at the node_modules sub-directory of the directory where you're
 * executing it.
 *
 * Written by Fernando Castor in November/2017.
 */
exports.solve = function(fileName) {
    let formula = readFormula(fileName)
    let result = doSolve(formula.clauses, formula.variables)
    return result // two fields: isSat and satisfyingAssignment
  }
  
  // Receives the current assignment and produces the next one
    var cont = 0
  function nextAssignment(currentAssignment) {
    // implement here the code to produce the next assignment based on currentAssignment.
    cont = cont +1
        var  aux = ""
        var aux2 = 0
        for (var i = 0; i<assignment.length; i++){
             aux = aux + assignment[i]
        }
        for (var j = 0; j<assignment.length; j++){
            if (aux.charAt(j) == 1){
            aux2 = aux2 + Math.pow(2,aux.length-1)
            }
        }
        
        aux2 = aux2 + 1;
        
        aux3 = aux2.toString(2)

        for ( var i  = 0; i<aux3.length; i++){
            newAssignment[i] = aux3.charAt(i)
        }

        cont = cont+1

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
            for ( var j = 0; j<separando.length && !roda; j++){
                if (separando[i][j]<0){
                    aux4 = separando[i][j]-(2*separando[i][j])

                    if (assignment[aux4] == 0){
                        cont2=cont2+1;
                        roda = true
                    }
                }else if (separando[i][j]>=0){
                    if (assignment[separando[i][j]] == 1){
                        cont2 = cont2 + 1;
                       roda = true
                    }
                } if (cont2 == clauses){
                    isSat = true
                }
            }
            // if not, get the next assignment and try again.
            if (cont < Math.pow(2,assignment.length)){
             assignment = nextAssignment(assignment)
            }
        }
    }
    let result = {'isSat': isSat, satisfyingAssignment: null}
    if (isSat) {
      result.satisfyingAssignment = assignment
    }
    return result
  }
   
  function readFormula(fileName) {
    // To read the file, it is possible to use the 'fs' module.
    // Use function readFileSync and not readFile.
    // First read the lines of text of the file and only afterward use the auxiliary functions.
    let text  = fs.readFileSnyc(fileName, 'utf8')  //  an array containing lines of text extracted from the file.
    var arrauAux = text.split("\n")
  
    let clauses = readClauses(text)
    let variables = readVariables(clauses)
   
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
  
      var cont2=0
  function readClauses(text){
      for (var i = 0; i<text.length; i++ ){
          if (text[i][0]=="p"){
              var cv = text[i].split(" ");
              var vars = cv[2]
              var clauses = cv[3]
          }else if (text[i][0]!="c"){
              var tudo
              //var tamanho = text[i].length;
              for (var j = 0; j<text[i].length; j++){
                  //for (var d = 0; d<text[i][cont].length; d++){
                      tudo[cont2] = text[i][j]
                      cont2++
                  }
              }
          }
          var separando = tudo.split("0") // separando as clausulas
      }
      function readVariables(clauses) {
          for (var i = 0; i<vars; i++){
               variables[i] = 0 
          }
          assignment = variables
      }
  
      function checkProblemSpecifications() {
          if (vars == variables.length && separando.length == clauses){
              return true
          }else {
              console.log("Entrada Inválida")
              return false
          }
      }
  