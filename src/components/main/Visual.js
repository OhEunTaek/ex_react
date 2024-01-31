function Visual() {
  return (
    <section className="main-box visual">
      <h1>
        Delivery
        <br />
        wherever possible <br />
        can do.
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil tempore dolor maxime. Nihil obcaecati corrupti vitae perferendis consequatur. Tenetur eligendi sit reiciendis! Facilis esse itaque assumenda ex nobis eligendi totam!
      </p>

      <figure>
        <video
          src={process.env.PUBLIC_URL + '/img/wave.mp4'}
          loop
          muted
          autoPlay
        ></video>
      </figure>
    </section>
  )
}

export default Visual
