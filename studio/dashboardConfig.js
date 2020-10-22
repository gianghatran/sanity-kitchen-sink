export default {
  widgets: [
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
                  buildHookId: '5f917bdf617386e072f400e9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-a2kc5q8f',
                  apiId: 'c4a4fdbf-a19a-46de-be2b-9ec5aab1d989'
                },
                {
                  buildHookId: '5f917be05202e5f2f805b5c2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-ci6rnpp6',
                  apiId: '2311a3f9-6c24-48eb-9f52-ce8cc1544dbb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gianghatran/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-ci6rnpp6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
