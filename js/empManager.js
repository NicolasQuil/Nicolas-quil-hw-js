import EmpClass from "./empClass.js";

export const doApi = async () => {

    document.querySelector("#id_row").innerHTML = '<h2>Loading...</h2>'
    let url = 'https://randomuser.me/api/?results=10&seed=google';
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);
    createLise(data.results);
}
export const doSearchApi = async (Qsearch) => {
    document.querySelector("#id_row").innerHTML = '<h2>Loading...</h2>'

    let url = `https://randomuser.me/api/?results=10&${Qsearch}=google`;
    let resp = await fetch(url);
    let data = await resp.json();
    console.log(data.results);

    createLise(data.results);
}

const createLise = (_arr) => {

    document.querySelector("#id_row").innerHTML = " "

    _arr.forEach(item => {
        let list = new EmpClass("#id_row", item);
        list.render();

    });

}