import { ReactNode } from 'react'
import cn from 'clsx'
import styles from './alert.module.sass'

interface AlertProps {
  children: ReactNode
  type: 'success' | 'error'
}

export default function Alert(props: AlertProps) {
  return (
    <div
      className={cn({
        [styles.success]: props.type === 'success',
        [styles.error]: props.type === 'error',
      })}
    >
      {props.children}
    </div>
  )
}