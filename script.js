function validarEntrada(valor) {
    const numero = parseFloat(valor);
    return !Number.isNaN(numero) && numero > 0;
}

function calcularPromedio(salarios) {
    const suma = salarios.reduce((acc, salario) => acc + salario, 0);
    return suma / salarios.length;
}

function clasificarSalarios(salarios) {
    const rangos = {
        menosDe850: 0,
        entre850Y2500: 0,
        masDe2500: 0
    };

    salarios.forEach(salario => {
        if (salario < 850000) {
            rangos.menosDe850++;
        } else if (salario >= 850000 && salario <= 2500000) {
            rangos.entre850Y2500++;
        } else {
            rangos.masDe2500++;
        }
    });

    return rangos;
}
function procesarSalarios() {
    const salarios = [];
    let continuar = true;

    while (continuar) {
        const entrada = prompt("Ingrese el salario o escriba '0' para terminar:");

        if (entrada.toLowerCase() === '0') {
            continuar = false;
        } else if (validarEntrada(entrada)) {
            salarios.push(parseFloat(entrada));
        } else {
            alert("Entrada inválida. Por favor, ingrese un número positivo mayor que cero.");
        }
    }

    if (salarios.length === 0) {
        alert("No se ingresaron salarios.");
        return;
    }

    const sumaTotal = salarios.reduce((acc, salario) => acc + salario, 0);
    const promedio = calcularPromedio(salarios);
    const clasificacion = clasificarSalarios(salarios);

  
    const informe = `
        Informe de Salarios:
        --------------------
        Cantidad de salarios procesados: ${salarios.length}
        Suma total de salarios: $${sumaTotal.toFixed(2)}
        Promedio de salarios: $${promedio.toFixed(2)}

        Distribución por rangos salariales:
        - Menos de $850,000: ${clasificacion.menosDe850}
        - Entre $850,000 y $2,500,000: ${clasificacion.entre850Y2500}
        - Más de $2,500,001: ${clasificacion.masDe2500}
    `;

    alert(informe);
}


procesarSalarios();