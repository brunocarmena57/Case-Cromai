from flask import Flask, jsonify, request
from flask_cors import CORS
from math import sqrt

# Criação da aplicação Flask
app = Flask(__name__)
# Ativa CORS para a aplicação
CORS(app)

# Endpoint para resolver o teorema de pitágoras
@app.route('/solve', methods=['GET'])
def solve_pythagoras():
    # Obtém o valor de A da query
    a = request.args.get('a')
    # Obtém o valor de B da query
    b = request.args.get('b')
    #Calcula o valor de C usando o teorema
    c = sqrt(float(a)**2 + float(b)**2)
    # Limita a resposta a dois decimais
    c = round(c, 2)
    # Retorna o valor de C como um JSON object
    return jsonify(c)

# Testa se o script está rodando corretamente
if __name__ == '__main__':
    # Liga a aplicação
    app.run(debug=True)