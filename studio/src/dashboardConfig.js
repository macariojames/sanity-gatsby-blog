export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '604927d466e5d900d047a5b8',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-zmb8w51p',
                  apiId: '0edfc399-b487-4200-a33c-e4739903c333'
                },
                {
                  buildHookId: '604927d40b63de007e719336',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ygnj7dvb',
                  apiId: 'f981eab0-e0aa-49fa-8960-d8e66a77d989'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/macariojames/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ygnj7dvb.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
