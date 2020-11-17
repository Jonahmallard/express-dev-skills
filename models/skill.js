const skills = [
    {id: 1, skill: 'Ruby'},
    {id: 2, skill: 'Sinatra'},
    {id: 3, skill: 'Ruby on Rails'},
    {id: 4, skill: 'Javascript'},
    {id: 5, skill: 'Node.js'},
    {id: 6, skill: 'Express'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    // URL params are always strings
    id = parseInt(id);
    return skills.find(skill => skill.id === id)
}