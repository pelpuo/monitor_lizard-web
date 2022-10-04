import React from 'react'
import ReactLoading from 'react-loading'

function Loading() {
  return (
    <div className='flex w-full items-center justify-center'>
      <ReactLoading type={"bars"} color={'#149A9B'} height={72} width={72} />
    </div>
  )
}

export default Loading
