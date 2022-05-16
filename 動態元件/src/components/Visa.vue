<template>
    <card>
        <template #header>維薩卡 - Visa</template>
        <template #main>
            <de-input title="卡號：" v-model="config.visa.number"/>
            <de-input title="持卡人：" v-model="config.visa.owner"/>
            <de-textarea :rows="3" title="內容：" v-model="config.visa.info"/>
        </template>
    </card>
</template>

<script>
    import Card from './Card.vue'
    import DeInput from './DeInput.vue'
    export default {
        components: { Card, DeInput },
        inject: ['config'],
    }
</script>
