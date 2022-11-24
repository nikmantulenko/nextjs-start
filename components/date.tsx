import { parseISO, format } from 'date-fns'

Date.defaultProps = {
  format: 'LLLL d, yyyy',
}

type DateProps = {
  dateString: string
  format?: string
} & typeof Date.defaultProps

export default function Date(props: DateProps) {
  const date = parseISO(props.dateString)

  return (
    <time dateTime={props.dateString}>
      {format(date, props.format)}
    </time>
  )
}
