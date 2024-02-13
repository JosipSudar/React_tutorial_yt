import List from "./List";

const App = () => {
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "banana", calories: 105 },
    { id: 3, name: "orange", calories: 45 },
    { id: 4, name: "coconut", calories: 159 },
    { id: 5, name: "pineapple", calories: 50 },
  ];
  const vegetables = [
    { id: 6, name: "potatoes", calories: 10 },
    { id: 7, name: "celery", calories: 15 },
    { id: 8, name: "carrots", calories: 25 },
    { id: 9, name: "corn", calories: 63 },
    { id: 10, name: "broccoli", calories: 50 },
  ];

  return (
    <>
      {vegetables.length > 0 && (
        <List items={vegetables} category="vegetables" />
      )}
      {fruits.length > 0 && <List items={fruits} category="fruits" />}
    </>
  );
};

export default App;
