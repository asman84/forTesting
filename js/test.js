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
        active_filter: 'all',
        todos: [{
                text: 'call mom',
                date: '2018-01-25',
            },
            {
                text: 'buy apple',
                date: '2018-01-22',
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
        testComputed: function() {
            var sortedArr = [];
            var today = moment().startOf('day');
            if (this.active_filter === 'today') {
                this.todos.forEach(function(item) {
                    if (moment(item.date).diff(today, 'days') === 0) {
                        sortedArr.push(item);
                    }
                });
            } else if (this.active_filter === 'tomorrow') {
                this.todos.forEach(function(item) {
                    if (moment(item.date).diff(today, 'days') === 1) {
                        sortedArr.push(item);
                    }
                });
            } else {
                this.todos.forEach(function(item) {
                    sortedArr.push(item);
                });
            }
            return sortedArr;
        }
    }
});
Vue.component('my-component', {
    template: '#my-template-2'
})
var app3 = new Vue({
    el: "#app-3",
    data: {
        show: true,
        array: ['sort', 'chort', 'tort', 'bort', ],
        text: '',
        currentPerson: 'oybek'
    },
    methods: {
        switchView: function(item) {
            this.currentPerson = item;
        }
    },
    components: {
        odil: {
            template: '#odil'
        },
        oybek: {
            template: '#oybek'
        },
        shamik: {
            template: '#shamik'
        },
        zafar: {
            template: '#zafar'
        }
    },
    filters: {
        sorting: function(item) {
            return item.split('').sort();
        }
    },
    computed: {
        sorted: function() {
            return this.array.sort();
        },
        lengthOfText: function() {
            return this.text.length;
        }
    }
});