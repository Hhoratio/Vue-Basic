<template>
    <card>
        <template #header>萬事達卡 - MasterCard</template>
        <template #main>
            <de-input title="卡號：" v-model="config.mastercard.number" />
            <de-input title="持卡人：" v-model="config.mastercard.owner" />
            <de-textarea :rows="3" title="內容：" v-model="config.mastercard.info"/>
        </template>
    </card>
</template>

<script>
    import Card from './Card.vue'
    import DeInput from './DeInput.vue'
    import DeTextarea from './DeTextarea.vue'
    export default {
        components: { Card, DeInput, DeTextarea },
        inject: ['config'],
    }
</script>
