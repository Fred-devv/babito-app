import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";

export const Home = () => {
  const { products } = useOutletContext();
  return (
    <section className="content">
      <div className="container">
        <div className="content-box">
          <div className="content-main">
            <h2 className="content-main_title">Рекомендации для вас</h2>
            <div className="content-main_list">
              {products.map((card) => (
                <Card
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  price={card.price}
                  address={card.address}
                  date={card.date}
                  img={card.img}
                />
              ))}
            </div>
          </div>
          <div className="content-side">
            <h3 className="content-side_title">Сервисы и услуги</h3>
            <div className="content-side_box">
              <div className="content-side_list">
                <div className="content-side_list-item">
                  <img
                    className="content-side_list-item-img"
                    src="images/001-delivery-truck 1.svg"
                    alt=""
                  />
                  <h5 className="content-side_list-item-title">Доставка</h5>
                  <p className="content-side_list-item-text">
                    Проверка при получении и возможность бесплатно вернуть товар
                  </p>
                </div>
                <div className="content-side_list-item">
                  <img
                    className="content-side_list-item-img"
                    src="images/002-sedan 1.svg"
                    alt=""
                  />
                  <h5 className="content-side_list-item-title">Автотека</h5>
                  <p className="content-side_list-item-text">
                    Отчёт с историей авто: пробег, владельцы, сведения о залоге,
                    ДТП и ремонтах
                  </p>
                </div>
                <div className="content-side_list-item">
                  <img
                    className="content-side_list-item-img"
                    src="images/love 1.svg"
                    alt=""
                  />
                  <h5 className="content-side_list-item-title">
                    Онлайн-бронирование жилья
                  </h5>
                  <p className="content-side_list-item-text">
                    Посуточная аренда квартир и домов: большой выбор вариантов
                    для поездок по России
                  </p>
                </div>
              </div>

              <div className="content-side_footer">
                <p className="content-side_footer--item">
                  © ООО «Абито», 2011–2021
                </p>
                <a href="#!" className="content-side_footer--item">
                  Политика конфиденциальности
                </a>
                <a href="#!" className="content-side_footer--item">
                  Обработка данных
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
