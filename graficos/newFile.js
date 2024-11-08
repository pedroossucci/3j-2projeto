{

    const url = "https://raw.githubusercontent.com/guilhermeonrails";

    const res = await fetch(url);

    const dados = await res.json();

    const redes = Object.keys(dados);

    const valores = Object.values(dados);

    const infos = [
        {
            values: valores,

            labels, redes,

            type: 'pie',

            textinfo: 'label+percent'
        }
    ];

}
