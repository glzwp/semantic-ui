//dropdown
$('.ui.dropdown').dropdown();

//sidebar
$('.ui.sidebar').sidebar('attach events', '.toc.item').sidebar('setting', 'transition', 'overlay');

var city_location = [
    {
        title: 'Boston',
        description:'Massachusetts'
    },
    {
        title: 'Hartford',
        description: 'Massachusetts'
    },
    {
        title: 'Denver',
        description: 'Colorado'
    },
    {
        title: 'Manhattan',
        description: 'New York'
    },
    {
        title: 'Queens',
        description: 'New York'
    },
    {
        title: 'Brooklyn',
        description: 'New York'
    },
    {
        title: 'Bronx',
        description: 'New York'
    },
    {
        title: 'Cleverland',
        description: 'Ohio'
    },
    {
        title: 'Worcester',
        description: 'Massachusetts'
    }
];

$('.ui.search.location').search({
    source: city_location,
    searchFields: ['title', 'description'],
    searchFullText: false
});
