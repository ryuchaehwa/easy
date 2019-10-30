<template>
<v-container>
    <v-date-picker type="month" locale="ko" v-model="date">
    </v-date-picker>
</v-container>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            date: new Date().toISOString().substring(0, 7)
        }
    }
}
</script>