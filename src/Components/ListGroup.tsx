function ListGroup() {
  let items = [
    'New York',
    'San Francisco',
    'Mumbai',
    'Bharuch',
    'Surat',
    'Ahmedabad',
  ];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items}
      <ul className='list-group'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
    // React.createElement('ul')
  );
}

export default ListGroup;
