const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

const tickfont = {
    color: getCSS('--cor-primaria'),
    size: 16,
    family: getCSS('--fonte')
}

export {getCSS, tickfont}

function criarGrafico(data, layout){
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-containe') .appendChild(grafico)
    const config = {
        responsive: true,
        displayModeBar: false
        }
    Plotly.newPlot(grafico, data, layout, config)
    }
    
    export {getCSS, tickConfig, criarGrafico}

