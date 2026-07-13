import Image from "next/image";

const foods = [
  {
    id: 1,
    name: "Burger",
    price: 4.99,
    image: "https://seko29953-design.github.io/miniapp/foods/burger.png",
  },
  {
    id: 2,
    name: "Fries",
    price: 1.49,
    image: "https://seko29953-design.github.io/miniapp/foods/fries.png",
  },
  {
    id: 3,
    name: "Hotdog",
    price: 3.49,
    image: "https://seko29953-design.github.io/miniapp/foods/hotdog.png",
  },
  {
    id: 4,
    name: "Taco",
    price: 3.99,
    image: "https://seko29953-design.github.io/miniapp/foods/taco.png",
  },
  {
    id: 5,
    name: "Pizza",
    price: 7.99,
    image: "https://seko29953-design.github.io/miniapp/foods/pizza.png",
  },
  {
    id: 6,
    name: "Donut",
    price: 1.49,
    image: "https://seko29953-design.github.io/miniapp/foods/donut.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center pt-4">
      <div className="w-full max-w-md px-3">
        <div className="grid grid-cols-3 gap-4">
          {foods.map((food) => (
            <div
              key={food.id}
              className="flex flex-col items-center h-44"
            >
              {/* Fixed Image Area */}
              <div className="w-20 h-20 flex items-center justify-center">
                <Image
                  src={food.image}
                  alt={food.name}
                  width={70}
                  height={70}
                  className="w-16 h-16 object-contain"
                />
              </div>

              {/* Fixed Name Area */}
              <h3 className="h-6 flex items-center justify-center text-sm font-medium text-center text-gray-500">
                {food.name}
              </h3>

              {/* Fixed Price Area */}
              <p className="h-5 text-sm text-gray-700">
                ${food.price.toFixed(2)}
              </p>

              {/* Button Always at Bottom */}
              <button className="mt-auto w-18 bg-amber-400 hover:bg-amber-500 text-white font-bold text-xs py-2 rounded-lg shadow">
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
