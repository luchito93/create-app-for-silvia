function Drink({ name }) {
    let caffeine, part, Age;
    if (name === 'tea'){
          part = 'leaf';
      caffeine = '15–70 mg/cup';
      Age = '4,000+ years';
    } else if (name === 'coffee') {
      part = 'bean';
      caffeine = '80–185 mg/cup';
      Age = '1,000+ years';
    }
      
    return (
      <section>
        <h1>{name}</h1>
        <dl>
          <dt>Part of plant</dt>
          <dd>{part}</dd>
          <dt>Caffeine content</dt>
          <dd> {caffeine}</dd>
          <dt>Age</dt>
          <dd> {Age}</dd>
        </dl>
      </section>
    );
  }
  
  export default function DrinkList() {
    return (
      <div>
        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  