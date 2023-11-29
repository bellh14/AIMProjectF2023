import React from 'react'
import FormTemplate from './FormTemplate'

type Props = {}

const Advisor = (props: Props) => {
  return (
    <section className="relative mt-40 shadow-lg flex justify-center w-3/5 text-center left-1/2 -translate-x-1/2 bg-primary-off-white">
        <FormTemplate />
    </section>
  )
}

export default Advisor