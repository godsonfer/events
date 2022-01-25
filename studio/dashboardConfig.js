export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'events-studio-xzo1chsd',
                  apiId: 'e194fc6c-9305-4fde-bced-57d33dda9c89'
                },
                {
                  buildHookId: '61f01e77b2525834b93fcea3',
                  title: 'Events Website',
                  name: 'events-web-hbwvimv5',
                  apiId: '6cb10329-2738-40f3-a768-7b665ef10652'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/godsonfer/events',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://events-web-hbwvimv5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
