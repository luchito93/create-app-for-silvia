function Item({ name, lopez }) {
    return (
      <li className="item">
        {name} {lopez && '✔'}
      </li>
    );
  }
  
  export default function PackingList() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            lopez={true}
            name="Space suit"
          />
          <Item
            lopez={true}
            name="Helmet with a golden leaf"
          />
          <Item
            lopez={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
    );
  }