<template>
    <div>
        <mavon-editor v-model="markdownValue" />
    </div>
</template>

<script>
export default {
    name: 'MyArticle',
    data() {
        return {
            markdownValue: ''
        }
    },
}
</script>

<style></style>