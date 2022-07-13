import React from 'react'


// Active is a prop
const NavigationDots = ({active}) => {
  return (
    <div className = "app__navigation">
          {['home', 'about', 'work', 'skills','testimonials', 'contact'].map((item, index) => (
              
            <a
            href={`#${item}`}
            key = {item+index}
            className = "app__navigation-dot"
            style = {active === item ? {bacgroundColor: '#313BAC'}: { }}
             />
              
          ))};
    </div>
  )
}

export default NavigationDots