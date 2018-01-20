var app1 = new Vue({
    el: '#app-1',
    data: {
        show: true,
        server: [{
                name: 'Odil',
                birthday: '1984-11-11'
            },
            {
                name: 'Oybek',
                birthday: '1987-08-09'
            },
            {
                name: 'Zafar',
                birthday: '1995-07-11'
            },
            {
                name: 'Nassi',
                birthday: '1994-07-12'
            }
        ]
    },
    filters: {
        makeBig: function(value) {
            value = value.toString();
            let lastBigValue = value.slice(0, value.length - 1) + value.slice(value.length - 1).toUpperCase();
            return lastBigValue;
        },
        ageIdentify: function(date) {
            return moment().diff(moment(date), 'years');
        }
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        filters: [
            'all',
            'today',
            'tomorrow',
        ],
        active_filter: null,
        todos: [{
                text: 'call mom',
                date: '2018-01-20',
            },
            {
                text: 'buy apple',
                date: '2018-01-19',
            },
            {
                text: 'read news',
                date: '2018-01-21',
            },
        ],
    },
    methods: {
        chooseCategory: function(item) {
            this.active_filter = item;
        }
    },
    computed: {
        sortedTodos: function(this.todos) {
            var sortedArr = [];
            if (this.active_filter === 'today') {
                this.todos.forEach(function(item) {
                    if (moment().startOf('day').diff(moment(item.date), 'days') === 0) {
                        sortedArr.push(item);
                    }
                });
            } else if (this.active_filter === 'tomorrow') {
                this.todos.forEach(function(item) {
                    if (moment().diff(moment(item.date.), 'days') === 1) {
                        sortedArr.push(item);
                    }
                });
            } else {
                sortedArr.push(item);
            }
            return sortedArr;
        }
    }
});