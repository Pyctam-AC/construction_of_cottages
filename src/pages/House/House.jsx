import "./House.scss";

const House = () => {

  const blocks = document.querySelectorAll(".block"); // вносим в переменную все элементы с классом блок
  
  const illumination = (entries) => { //функция принемаюшая на вход отображаемый на экране элемент
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.5) {//если есть что отображать и на экране меньше половины этого элемента (если секции большие, то нужно менять это параметр)
        blocks.forEach((block) => {
         
          block.classList.remove("active");//то убираем класс актив
        });
        const activeId= entry.target.id;//id  отображаемого класса сохраняем в переменную
  
        const activeBlock = document.querySelector(`.house__block${activeId}`);// находим и сохраняем в  переменную отображаемый блок

        if (activeBlock){
          activeBlock.classList.add('active')// присваеваем ему класс актив
        }
      }
    });
  };
  const blockObbserver = new IntersectionObserver(illumination, {//конструктор который принимает в себя исполняемую функцию и границу срабатывания от общей величины экрана (в данном случае 0.75 от общей высоты)
    threshold: 0.75,
  });

  blocks.forEach((block) => blockObbserver.observe(block));//вешаем обсервер на каждый блок

  return (
    <section className="house">
      <div id = '1' className="house__block1 block">
        
      </div>
      <div id = '2' className="house__block2 block"><h1 className="house__title">Купи Дом</h1></div>
      <div id = '3' className="house__block3 block"></div>
      <div id = '4' className="house__block4 block"></div>
      <div id = '5' className="house__block5 block"></div>
      <div id = '6' className="house__block6 block">
      <p className="block1__text">Сегодня все больше людей стремятся жить в загородном доме и это не случайно. Жизнь в городе с его шумом, суетой и загрязненным воздухом становится все менее привлекательной. В статье мы рассмотрим основные причины, по которым стоит купить загородный дом и преимущества жизни за городом.</p>
      <p className="block1__text">Сегодня все больше людей стремятся жить в загородном доме и это не случайно. Жизнь в городе с его шумом, суетой и загрязненным воздухом становится все менее привлекательной. В статье мы рассмотрим основные причины, по которым стоит купить загородный дом и преимущества жизни за городом.</p>

      </div>
    </section>
  );
};

export default House
