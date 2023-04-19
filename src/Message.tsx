// tsx for react componenets and ts for plain ts files

//Use PascalCasing for react functional components
function Message() {
  // JSX javascript XML

  const name = 'Taha';

  if (name) {
    return <h1>Hello {name}</h1>;
  }
  return <h1>Hello World</h1>;
}

export default Message;
