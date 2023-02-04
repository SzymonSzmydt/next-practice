function EventList({ eventList }) {
  return (
    <>
      <h1>List of Events</h1>
      {eventList.map((event) => (
        <div key={event.id}>
          <h2>
            {event.id} {event.title} {event.date} | {event.category}
          </h2>
          <p> {event.description}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default EventList;

export async function getServerSideProps() {
  const response = await fetch(`http://localhost:4000/events`);
  const data = await response.json();
  return {
    props: {
      eventList: data,
    },
  };
}
