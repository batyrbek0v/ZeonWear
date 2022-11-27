const wrapper1 = document.querySelector('.news-container-wrapper1')
const wrapper2 = document.querySelector('.news-container-wrapper2')

const newsBase = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Nunc sit egestas...',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit....',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Nunc sit egestas...',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Nunc sit egestas...',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Nunc sit egestas...',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Nunc sit egestas...',
    date: '12.05.2021',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum consectetur adipiscing elit. Nunc sit egestas mi turpis nunc, neque non volutpat bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    img: '/assets/images/news-img.jpg'
  },
]

const newsBase2 = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur',
    date: '12.05.2021',
    img: '/assets/images/right-news-img2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img3.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img4.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img3.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img4.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img3.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img4.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img1.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis',
    date: '12.05.2021',
    img: '/assets/images/right-news-img2.jpg',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit egestas mi turpis...',
  },
]

window.addEventListener('load', () => {
  wrapperTemplate(newsBase)
  wrapperTemplate2(newsBase2)
})

const wrapperTemplate = (base) => {
  const template = base.map(({ title, date, content, img }) => {
    return `
    <div class="left-news-block">
      <div class="left-news-img">
        <img src="${img}" alt="man-catching-yellow-ball">
      </div>
      <div class="left-news-box">
        <h1>${title}</h1>
        <p>${date}</p>
        <div class="left-news-block-content">
          <p>${content}<span>Подробнее</span></p>
        </div>
      </div>
    </div>
    `
  }).join('')
  wrapper1.innerHTML = template
}

const wrapperTemplate2 = (base) => {
  const template = base.map(({ title, date, img, content }) => {
    return `
    <div class="right-news-block">
      <div class="right-news-img">
        <img src="${img}" alt="news-img">
      </div>
      <div class="right-news-box">
        <h1>${title}</h1>
        <p>${date}</p>
        <div class="right-news-block-content">
          <p>${content}</p>
        </div>
      </div>
    </div>
    `
  }).join('')
  wrapper2.innerHTML = template
}