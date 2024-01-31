import SubLayout from '../common/SubLayout'
import { useRef, useEffect, useState } from 'react'

function Location() {
  const subtitle = {
    title: 'Delivery',
    p: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quo laboriosam obcaecati reprehenderit quaerat minus voluptas cupiditate, dolorem consectetur? Et nisi fugit dolor impedit modi eius aspernatur. Cum, reiciendis fugiat.',
  }
  const { kakao } = window
  const mapBox = useRef(null)
  const button = useRef(null)

  const mapInfos = [
    {
      title: 'Hanok Street in Ikseon-dong',
      address: 'Ikseon-dong, Jongno-gu, Seoul',
      phone: '+82 02-1234-1234',
      latlng: new kakao.maps.LatLng(37.5743484, 126.9897057),
    },
    {
      title: 'Seongsu-dong Cafe Street',
      address: 'Seongsu-i-ro, Seongdong-gu, Seoul, Republic of Korea',
      phone: '+82 02-1234-1234',
      latlng: new kakao.maps.LatLng(37.5446148, 127.0580149),
    },
  ]

  const [Index, setIndex] = useState(0)

  const mapOption = {
    center: mapInfos[Index].latlng,
    level: 3,
  }

  const imgSrc = process.env.PUBLIC_URL + '/img/map-icon.svg'
  const imgSize = new kakao.maps.Size(30, 30)
  const imgOption = { offset: new kakao.maps.Point(15, 30) }
  const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption)

  const marker = new kakao.maps.Marker({
    position: mapOption.center,
    image: markerImage,
  })

  useEffect(() => {
    mapBox.current.innerHTML = ''
    const map = new kakao.maps.Map(mapBox.current, mapOption)
    marker.setMap(map)

    const handleResize = () => {
      map.setCenter(mapInfos[Index].latlng)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [Index])

  return (
    <SubLayout name={'location'} sub={subtitle}>
      <div id="map" ref={mapBox}></div>
      <div className="map-info-list">
        {mapInfos.map((item, i) => {
          return (
            <div key={i} className="map-info-item">
              <strong>{item.title}</strong>
              <address>{item.address}</address>
              <a href={`tel:${item.phone.split('+')[1].replace(/(\s*)/g, '')}`}>
                {item.phone}
              </a>
              <button
                type="button"
                ref={button}
                onClick={() => {
                  setIndex(i)
                }}
              >
                check on a map
              </button>
            </div>
          )
        })}
      </div>
    </SubLayout>
  )
}

export default Location
