import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Scrollbar } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

function Video() {
  const Videos = useSelector((store) => store.youtubeReducer.youtube)

  return (
    <section className="main-box video">
      <div className="inner">
        <div className="text">
          <h1>new product explain</h1>
          <p>Deliverys all the ways <br /> We can power team productivity.</p>
        </div>

        <Swiper
          pagination={{
            type: 'fraction',
          }}
          scrollbar={true}
          navigation={true}
          slidesPerView={'auto'}
          spaceBetween={10}
          modules={[Pagination, Navigation, Scrollbar]}
          className="swiper-video"
        >
          {Videos.map((item, i) => {
            if (i >= 6) return

            return (
              <SwiperSlide key={i}>
                <article>
                  <div className="thum">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`}
                      frameborder="0"
                    ></iframe>
                  </div>

                  <div className="desc">
                    <h3 className="title">{item.snippet.title}</h3>
                    <p>{item.snippet.description}</p>
                  </div>
                </article>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </section>
  )
}

export default Video
