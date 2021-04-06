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
                  buildHookId: '606c3b54c1f54e3c10dc04fb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-j8zuwv9o',
                  apiId: 'a7f12ed9-02b7-4185-a980-c1ef5ca00531'
                },
                {
                  buildHookId: '606c3b5504ad8346699e84b2',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-yijjveep',
                  apiId: '5325da75-249d-498f-a069-547e7a88595f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prakashindimath/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-yijjveep.netlify.app', category: 'apps'}
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
