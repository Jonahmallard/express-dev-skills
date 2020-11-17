const skills = [
    {id: 1, skill: 'Ruby', data: 'A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.'},
    {id: 2, skill: 'Sinatra', data: 'Sinatra is a DSL for quickly creating web applications in Ruby with minimal effort.'},
    {id: 3, skill: 'Ruby on Rails', data: 'Ruby on Rails, sometimes known as "RoR" or just "Rails", is an open source framework for Web development in Ruby, an object-oriented programming (OOP) language similar to Perl and Python. According to David Geary, a Java expert, the Ruby-based framework is five to 10 times faster than comparable Java-based frameworks.'},
    {id: 4, skill: 'Javascript', data: 'JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it is used in many non-browser environments as well. JavaScript can function as both a procedural and an object oriented language.'},
    {id: 5, skill: 'Node.js', data: 'Node.js (Node) is an open source development platform for executing JavaScript code server-side. JS is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. Node.js applications are event-based and run asynchronously.'},
    {id: 6, skill: 'Express', data: 'Express, is a back end web application framework for Node. js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.'}
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