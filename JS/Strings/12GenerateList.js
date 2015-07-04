/**
 * Created by Тито on 09/06/2015.
 */
var jsConsole,
    people = [{name: 'Peter', age: 14}],
    template = '<strong>-{name}-</strong> <span>-{age}-</span>';

function generateList(people, template) {
    var result = '',
        placeholder;

    result += '<ul>';

    for (var i = 0; i < people.length; i += 1) {
        result += '<li>';

        var currentListItem = template.replace('-{name}-', people[i].name);
        currentListItem = currentListItem.replace('-{age}-', people[i].age);

        result += currentListItem;
        result += '</li>';
    }
    result += '</ul>';
    return result;
}

console.log(generateList(people, template));