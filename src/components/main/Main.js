import Visual from './Visual'
import People from './People'
import Content from './Content'
import Video from './Video'
import Footer from '../common/Footer'

function Main() {
  return (
    <>
      <div className="main">
        <Visual />
        <Content />
        <People />
        <Video />
        <Footer />
      </div>
    </>
  )
}

export default Main
