import React from 'react'

const MemoChild1 = ({display}) => {
    console.log(" this is Memo Child1 ")
  return (
    <div>
      <h1> this is Memo Child1 </h1>
    </div>
  )
}

export default React.memo( MemoChild1)
