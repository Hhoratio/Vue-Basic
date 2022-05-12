<template>
        <table class="table">
                <thead>
                    <th>編號</th>
                    <th>課程</th>
                    <th>評論</th>
                    <th>價格</th>
                </thead>
                <tbody>
                    <tr v-for="lesson in orderList" :key="lesson.id">
                        <td>{{lesson.id}}</td>
                        <td>{{lesson.title}}</td>
                        <td>{{lesson.comments}}</td>
                        <td>{{lesson.price}}</td>
                    </tr>
                </tbody>
        </table>
        <div class="btn">
            按編號排序：
            <button @click="orderById">升冪</button>
            <button @click="orderById">降冪</button>
        </div>
        <div class="btn">
            按評論排序：
            <button @click="orderByCom">升冪</button>
            <button @click="orderByCom">降冪</button>
        </div>
        <div class="btn">
            按價格排序：
            <button @click="orderByPrice">升冪</button>
            <button @click="orderByPrice">降冪</button>
        </div>
</template>

<script>
import lessons from '../data/lessons'
    export default {
        data() {
            return {
                lessons,
                tagBy: 'id',
                orderBy: 'asc',
            }
        },
        computed: {
            orderList() {
                return this.lessons.sort((a, b) => {
                    return this.orderBy == 'asc'? a[this.tagBy] - b[this.tagBy]: b[this.tagBy] - a[this.tagBy];
                })
            }
        },
        methods: {
            orderById(e) {
                this.tagBy = 'id';
                if(e.target.innerHTML == '升冪') {
                    this.orderBy = 'asc'
                } else {
                    this.orderBy = 'dec'
                }
            },

            orderByPrice(e) {
                this.tagBy = 'price';
                if(e.target.innerHTML == '升冪') {
                    this.orderBy = 'asc'
                } else {
                    this.orderBy = 'dec'
                }
            },

            orderByCom(e) {
                this.tagBy = 'comments';
                if(e.target.innerHTML == '升冪') {
                    this.orderBy = 'asc'
                } else {
                    this.orderBy = 'dec'
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .table, tr, th, td {
        border: 1px solid #ddd;
        border-collapse: collapse;
        text-align: center;
    }

    tr, td {
        padding: 0 10px;
    }

    .btn {
        margin-top: 10px;
    }

    button {
        outline: none;
        border: 1px solid #ddd;
        margin-right: 5px;
    }
</style>