import { useSelector } from 'react-redux'

function People() {
  const Members = useSelector((store) => store.memberReducer.members)

  return (
    <section className="main-box people">
      <h1>
        Delivery Can Do this,
        <br /> successful promoted  <br />
        many startups should be this.
      </h1>

      {Members.map((member, i) => {
        if (i >= 6) return

        return (
          <article key={i} className="member-item">
            <div className="member-thum">
              <img
                src={`${process.env.PUBLIC_URL}/img/${member.img}`}
                alt={member.name}
              />
            </div>
            <div className="member-info">
              <span className="position">{member.position}</span>
              <strong className="name">{member.name}</strong>
              <p>{member.comment}</p>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default People
