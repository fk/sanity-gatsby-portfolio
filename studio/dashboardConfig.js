export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ce6db013906f116894b0fec',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-kmuty8rk',
                  apiId: 'b1b7a3b4-4a97-4843-8a7f-7d2698ed09ae'
                },
                {
                  buildHookId: '5ce6db029839d578ac22b23e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-zci5tzud',
                  apiId: '07810d8e-f374-424a-91c5-8ab807eaeedc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fk/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-zci5tzud.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
