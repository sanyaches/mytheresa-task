import { useState } from 'react'

export default function Accordion({ header, content }) {
  const [expanded, setExpanded] = useState(false)
  const toggle = () => {
    setExpanded(!expanded)
  }

  return (
    <div className={'accordion ' + (expanded ? 'is-expanded' : '')}>
      <div className="accordion__header" onClick={toggle}>
        <div>{header}</div>
        <div className="accordion__caret">&gt;</div>
      </div>
      {expanded ? <div className="accordion__content">{content}</div> : null}
    </div>
  )
}
