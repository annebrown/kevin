//<--------@@/base/app.config.ts----------------------------------------------->
//------------------------------------------------------------------------------
//
// Configs avail to any app in the monorepo that extends the base layer
//
//------------------------------------------------------------------------------
// Exposes Reactive Config to App
// Exposed to user client bundle, so NO SECRET VALS.
export default defineAppConfig({
    title: 'kevin',
    socials: {
        github: 'annebrown/kevin',
    },
    nuxtIcon: {
        aliases: {
        'dark-mode': 'ph:moon-bold',
        'light-mode': 'ph:sun-bold',
        'go-back': 'ph:arrow-left',
        }
    }
})
//<--------@@/base/app.config.ts----------------------------------------------->