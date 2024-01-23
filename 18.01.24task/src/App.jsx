import Card from "./Card";

function App() {
  return (
    <div className="container">
      <Card
        cardImg="Carousel.png"
        cardTitle="Person 1"
        cardDescription="Props example"
        skills={[
          {
            skillBgColor: "rgb(100, 120, 200)",
            skillContent: "HTML",
          },
          {
            skillBgColor: "rgb(200, 201, 200)",
            skillContent: "CSS",
          },
          {
            skillBgColor: "rgb(10, 200, 150)",
            skillContent: "JS",
          },
        ]}
      />
      <Card
        cardImg="Carousel.png"
        cardTitle="Person 2"
        cardDescription="Props example 2"
        skills={[
          {
            skillBgColor: "rgb(225, 10, 250)",
            skillContent: "React",
          },
          {
            skillBgColor: "rgb(210, 250, 125)",
            skillContent: "Java",
          },
          {
            skillBgColor: "rgb(125, 125, 100)",
            skillContent: "C#",
          },
        ]}
      />
    </div>
  );
}

export default App;

//! SPA -> Single Page Application
