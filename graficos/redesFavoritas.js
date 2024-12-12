import { getCSS } from "./comum.js";  
import { tickfont } from "./comum.js";
import { criarGrafico } from "./comum.js";
async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json'; 
    const res = await fetch(url); 
    const dados = await res.json();  
    console.log(dados);  
    
 
    const redes = Object.keys(dados);
    const valores = Object.values(dados);
    
    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',  
            textinfo: 'label+percent'  
        }
    ];

    const tickfont = {
        family: 'Arial',
        size: 12,
        color: getCSS('--cor-secundaria')  
    };

    
    const layout = {
        plot_bgcolor: getCSS('--cor-de-fundo'),  
        paper_bgcolor: getCSS('--cor-de-fundo'),  
        height: 700,  
        title: {
            text: 'Redes sociais com mais usuários no mundo',  
            x: 0,  
            font: {
                color: getCSS('--cor-primaria'), 
                size: 16 
            }
        },
        xaxis: {
            tickfont: tickfont,  
            title: {
                text: 'Nome das redes sociais',  
                font: {
                    color: getCSS('--cor-secundaria') 
                }
            }
        },
        yaxis: {
            tickfont: tickfont,  
            title: {
                text: 'Milhões de usuários ativos',  
                font: {
                    color: getCSS('--cor-secundaria')
                }
            }
        }
    };

    
    criarGrafico(data, layout);
}

redesFavoritasMundo();
