function Auu({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
  }
  
  export default function TeaSet() {
    return (
      <>
        <Auu guest={1} />
        <Auu guest={2} />
        <Auu guest={3} />
      </>
    );
  }
  