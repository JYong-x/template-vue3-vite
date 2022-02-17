import { SizeEnum } from '@/constants/sizeEnum'

export interface LoadingProps {
  tip: string
  size: SizeEnum
  absolute: boolean
  loading: boolean
  background: string
  theme: 'dark' | 'light'
}
