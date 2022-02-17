import type { AppRouteModule } from '@/router/types'

// import { LAYOUT } from '@/router/constant'
import { t } from '@/hooks/web/useI18n'

const home: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: () => import('@/views/home/personnel/index.vue'),
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard')
  },
  children: [
    {
      path: 'personnel',
      name: 'Personnel',
      component: () => import('@/views/home/personnel/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.dashboard.analysis')
      }
    }
  ]
}

export default home
