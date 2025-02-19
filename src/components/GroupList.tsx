function GroupList(){
  let list = ["person1", "person2", "person3"];

  return (<ul>
    {list.map((item) => (
        <li>{item}</li>
    ))}
  </ul>)
}

export default GroupList;