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
    <main className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-md">
        <div className="grid grid-cols-3 gap-4">
          {foods.map((food) => (
            <div
              key={food.id}
              className="flex flex-col items-center text-center"
            >
              <Image
                src={food.image}
                alt={food.name}
                width={70}
                height={70}
                className="object-contain"
              />

              <h3 className="text-sm font-medium mt-2">{food.name}</h3>

              <p className="text-gray-600 text-xs mb-2">
                ${food.price.toFixed(2)}
              </p>

              <button className="bg-amber-400 hover:bg-amber-500 text-white font-bold text-xs px-5 py-1.5 rounded-md shadow transition">
                ADD
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
