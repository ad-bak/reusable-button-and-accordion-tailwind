import Accordion from "./components/Accordion";
function App() {
  const items = [
    {
      id: 1,
      label: "first label",
      content:
        "React is a JavaScript library for building user interfaces. And it's awesome! And you can use it to build this accordion component.",
    },
    {
      id: 2,

      label: "second label",
      content:
        "React is a JavaScript library for building user interfaces. And it's awesome! And you can use it to build this accordion component.",
    },
    {
      id: 3,

      label: "third label",
      content:
        "React is a JavaScript library for building user interfaces. And it's awesome! And you can use it to build this accordion component.",
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default App;
