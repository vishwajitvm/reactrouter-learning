import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <div className='navlinks'>
        <ul>
        <li> <NavLink to="company" style={{textDecoration: 'none'}}>Company</NavLink> </li>
        <li> <NavLink to="channel" style={{textDecoration: 'none'}}>Channel</NavLink> </li>
        <li> <NavLink to="other" style={{textDecoration: 'none'}}>Other</NavLink> </li>
        <Outlet />
        </ul>
      </div>
      <h1>Contact us page</h1>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus officia atque perspiciatis non placeat cupiditate excepturi illum? Maiores tenetur eaque iure libero voluptate? Voluptas magnam dolorum debitis ab, quos eaque voluptatum cupiditate delectus aperiam ullam ducimus? Id temporibus illum nemo dolor dolore, incidunt alias ullam hic accusantium delectus repellendus necessitatibus quod sit sed nulla, dolores assumenda, consequatur aut placeat! Veritatis possimus maxime impedit dolore officia praesentium quibusdam, harum, repellendus asperiores beatae, voluptas qui optio consectetur velit fugit aut repudiandae earum commodi iusto hic doloremque accusamus veniam. Est. </p> <br /><br />
      <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel aspernatur cupiditate quos, consequuntur eius saepe obcaecati, necessitatibus illum est quis! Sint explicabo, exercitationem dolorum nulla in tenetur excepturi iste nihil ipsa minima officiis odio doloribus, a ex itaque earum natus magnam quod. Nesciunt accusantium inventore illum autem voluptatem aspernatur. </p>
    </div>
  )
}
