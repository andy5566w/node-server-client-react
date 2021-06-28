import classes from './Loading.module.scss'
const Loading = () => {
  return (
    <div>
      <i className={'las la-spinner ' + classes.loading} />
    </div>
  )
}
export default Loading
