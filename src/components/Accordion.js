import { useState } from 'react'

export default function Accordion({ header, content }) {
  const [expanded, setExpanded] = useState(false)
  const toggle = () => {
    setExpanded(!expanded)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setExpanded(!expanded)
    }
  }

  return (
    <div className={'accordion' + (expanded ? ' is-expanded' : '')}>
      <div tabIndex="0" className="accordion__header" onKeyDown={handleKeyDown} onClick={toggle}>
        <div>{header}</div>
        <div className="accordion__caret" />
      </div>
      {expanded ? <div className="accordion__content">{content}</div> : null}
    </div>
  )
}
