import SubLayout from '../common/SubLayout'
import { useSelector } from 'react-redux'

function Department() {
  const Members = useSelector((store) => store.memberReducer.members)

  const subtitle = {
    title: 'About Delivery',
    p: 'Where you are!!',
    count: Members.length,
  }

  return (
    <SubLayout name="organization" sub={subtitle}>
      {Members.map((member, i) => {
        return (
          <article key={i} className="member-item">
            <div className="member-thum">
              <img
                src={`${process.env.PUBLIC_URL}/img/${member.img}`}
                alt={member.name}
              />
            </div>
            <div className="member-info">
              <strong className="name">{member.name}</strong>
              <span className="position">{member.position}</span>
              <p>{member.comments}</p>
            </div>
          </article>
        )
      })}
    </SubLayout>
  )
}

export default Department
