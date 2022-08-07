export default {
  routes: [
    {
      title: 'home',
      path: '/',
      name: 'home',
      component: function(resolve) {
        require(['@/components/index.vue'], resolve)
      },
    },
    {
      title: 'header',
      path: '/header',
      name: 'header',
      component: function(resolve) {
        require(['@/components/header.vue'], resolve)
      },
    },
    {
      title: 'detail',
      path: '/:idolId(\\d+)',
      name: 'detail',
      component: function(resolve) {
        require(['@/components/detail.vue'], resolve)
      },
    },
    {
      title: 'product',
      path: '/product',
      name: 'product',
      component: function(resolve) {
        require(['@/components/product.vue'], resolve)
      },
    },
    {
      title: 'nft',
      path: '/nft',
      name: 'nft',
      component: function(resolve) {
        require(['@/components/nft.vue'], resolve)
      },
    },
    {
      title: 'nft-mint',
      path: '/nft/mint',
      name: 'nft-mint',
      component: function(resolve) {
        require(['@/components/nft-mint.vue'], resolve)
      },
    },
    {
      title: 'my',
      path: '/my',
      name: 'my',
      component: function(resolve) {
        require(['@/components/my.vue'], resolve)
      },
    },
    
  ],
}
