var esprima = require('esprima');
var escodegen = require('escodegen');
var _ = require('lodash');
var jsonQuery = require('json-query');

var code = ['var functionName = function (arg1, arg2) {'] +
           //['    console.log(\'functionName was called\');'] +
           ['    return \'arg1\' + \'arg2\';'] +
           ['};'] +
           ['/* raz */'] +
           ['functionName(\'1\', \'2\')'];

var ast = esprima.parse(code, {
	comment: false,
	range: false,
	tokens: false
});

//ast = escodegen.attachComments(ast, ast.comments, ast.tokens);
console.log(JSON.stringify(ast, ' ', 2)); // All 3 comments are put in place as either leading or trailing

putConsoleLog(ast);

function putConsoleLog (ast) {

  var result = jsonQuery('body[type=BlockStatement]', {
    data: ast
  });

  result = result;

  //  var tokens = ast.tokens;

	// var allFunctions = _.filter(tokens, function(token) {
	//   return token.type === 'Keyword' && token.value === 'function';
	// });

	// var firstFunction = _.first(allFunctions);
	// var firstFunctionIndexOf = _.indexOf(tokens, firstFunction); // 3

	// var allTokensBeforeFunction = _.first(tokens, 3);
	// var functionName = _.findLast(allTokensBeforeFunction, function (token) {
	// 	return token.type === 'Identifier';
	// });

	// // find position to include the console.log
	// var allTokensAfterFunction = _.tail(tokens, 3);
	// var functionStartingelement = _.findLast(allTokensAfterFunction, function (token) {
	// 	return token.type === 'Punctuator' && token.value === '{';
	// });

	// var functionStratingIndexOf = _.indexOf(tokens, functionStartingelement) + 1;

	// var logToInclude = {
 //      "type": "ExpressionStatement",
 //      "expression": {
 //        "type": "CallExpression",
 //        "callee": {
 //          "type": "MemberExpression",
 //          "computed": false,
 //          "object": {
 //            "type": "Identifier",
 //            "name": "console"
 //          },
 //          "property": {
 //            "type": "Identifier",
 //            "name": "log"
 //          }
 //        },
 //        "arguments": [
 //          {
 //            "type": "Literal",
 //            "value": "functionName was called",
 //            "raw": "'functionName was called'"
 //          }
 //        ]
 //      }
 //    };

	// // insert an array inside another array
	// // from: http://stackoverflow.com/questions/7032550/javascript-insert-an-array-inside-another-array
	// ast.tokens.splice.apply(ast.tokens, [functionStratingIndexOf, 0].concat(logToInclude));
	// ast.range = [ 0, 145 ];

	// console.log(escodegen.generate(ast, { comment: true }));
}

