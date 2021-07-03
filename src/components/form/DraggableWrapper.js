import Draggable from 'react-draggable'
const DraggableWrapper = (props) => {
  let timer
  const eventLogger = (_, data) => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      props.handleChangeValue({
        type: 'MUTATION_VALUE',
        transform: data,
        id: props.id,
      })
    }, 1000)
  }

  const handleDelete = () => {
    props.handleChangeValue({
      type: 'REMOVE',
      id: props.id,
    })
  }
  return (
    <Draggable
      axis="y"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      scale={1}
      onStop={eventLogger}
      bounds="parent"
    >
      <div>
        <div className="">
          <i className="handle las la-arrows-alt cursor-pointer" />
          <i className="las la-trash" onClick={handleDelete} />
        </div>
        {props.children}
      </div>
    </Draggable>
  )
}

export default DraggableWrapper
