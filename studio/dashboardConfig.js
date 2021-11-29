export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '61a485c962b336c317f981a3',
                  title: 'Sanity Studio',
                  name: 'website-studio-whawbadn',
                  apiId: '4cef013d-be49-434d-ac4c-8b62d0f8fa0b'
                },
                {
                  buildHookId: '61a485c9c6e229e98ad6242c',
                  title: 'Blog Website',
                  name: 'website-web-5bsejz56',
                  apiId: '49bf9949-24b2-4515-aa24-ccadfa551171'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justtrustbit710/website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://website-web-5bsejz56.netlify.app', category: 'apps'}
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
