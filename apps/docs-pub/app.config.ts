//<--------@/app.config.ts----------------------------------------------------->
// Exposes Reactive Config to App
// Exposed to user client bundle, so NO SECRET VALS.
export default defineAppConfig({
    title: 'docs-pub',
    socials: {
        github: 'annebrown/docs-pub',
    },
    nuxtIcon: {
        aliases: {
        'dark-mode': 'ph:moon-bold',
        'light-mode': 'ph:sun-bold',
        'go-back': 'ph:arrow-left',
        }
    }
})
//<--------@/app.config.ts----------------------------------------------------->