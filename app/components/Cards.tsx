import { Tenant } from "../types/data.ts/data";
const Cards = ({ cardsData }: { cardsData: Tenant }) => {
  const { color1, color2 } = cardsData;
  const gradient = `bg-gradient-to-r from-[${color1}] to-[${color2}]`;
  const cards = cardsData.cards;
  console.log(cards);
  return (
    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Title
        </h2>
        {true &&
          cards.map((card, index) => (
            <div
              key={index}
              className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a
                  href="#"
                  className="flex flex-wrap no-underline hover:no-underline"
                >
                  <p className="w-full text-gray-600 text-xs md:text-sm px-6"></p>
                  <div className="w-full font-bold text-xl text-gray-800 px-6">
                    {card.title}
                  </div>
                  <p className="text-gray-800 text-base px-6 mb-5">
                    {card.description}
                  </p>
                </a>
              </div>
              <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-end">
                  <button
                    className={`mx-auto lg:mx-0 hover:underline ${gradient} text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out`}
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Cards;
