const {readFile} = require('fs').promises;

const search = (list, entry) => list.some((element) => element === entry);

const loadExpenses = async (path) => {
    const entries = await readFile(path, {encoding: 'ascii'});
    return entries.split('\n').map((entry) => parseInt(entry))
};


(async (path) => {
    const expenses = await loadExpenses(path);

    const needs = expenses.map((expense) => [expense, 2020 - expense])

    console.table(needs);
    const match = needs.findIndex(([,needs]) => search(expenses, needs));

    if (match) {
        console.log(`The two product is ${needs[match][0] * needs[match][1]}`)
    }
})('./expenses');





