fetch('details.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('names').textContent = `${data.groom} & ${data.bride}`;
    document.getElementById('date').textContent = data.date;
    document.getElementById('time').textContent = data.time;
    document.getElementById('venue-name').textContent = data.venue.name;
    document.getElementById('venue-link').href = data.venue.gmap_link;
    document.getElementById('message').textContent = data.message;

    // Build dynamic Google Calendar link
    const gCalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      data.groom + ' & ' + data.bride + "'s Wedding"
    )}&dates=${data.calendar.start}/${data.calendar.end}&details=${encodeURIComponent(
      data.message
    )}&location=${encodeURIComponent(data.venue.name)}`;
    document.getElementById('google-calendar').href = gCalLink;
  })
  .catch(err => {
    console.error('Failed to load details.json:', err);
    document.getElementById('invite').innerHTML = "<p class='text-red-500'>Error loading invite details.</p>";
  });
