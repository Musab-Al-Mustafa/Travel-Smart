// Fetch family package JSON data
fetch("Assets/JSON/family.json")
  .then((response) => response.json())
  .then((json) => {
    let data = ""; // Initialize an empty string to hold the generated HTML content
    for (let package of json) {
      data += `
        <div class="col-lg-4 mb-6">
          <div class="card" style="width: 22rem;">
            <img src="Assets/images/img/family-packages-images${package.image}" class="card-img-top" alt="${package.name}">
            <div class="card-body">
              <h5 class="card-title">${package.name}</h5>
              <p class="card-text"><strong>Destination:</strong> ${package.destination}</p>
              <p class="card-text"><strong>Duration:</strong> ${package.duration}</p>
              <p class="card-text"><strong>Accommodation:</strong> ${package.accommodation}</p>
              <p class="card-text"><strong>Price:</strong> $${package.price}</p>
              <ul class="card-text"><strong>Activities:</strong>
                ${package.activities.map(activity => `<li>${activity}</li>`).join('')}
              </ul>
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>`;
    }
    // Insert the generated HTML into the Family Packages container
    document.getElementById("family").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching family packages:", error));


  // Fetch advanture package JSON data
fetch("Assets/JSON/advanture.json")
.then((response) => response.json())
.then((json) => {
  let data = ""; // Initialize an empty string to hold the generated HTML content
  for (let package2 of json) {
    data += `
      <div class="col-lg-4 mb-6">
        <div class="card" style="width: 22rem;">
          <img src="Assets/images/img/family-packages-images${package2.image}" class="card-img-top" alt="${package2.name}">
          <div class="card-body">
            <h5 class="card-title">${package2.name}</h5>
            <p class="card-text"><strong>Destination:</strong> ${package2.destination}</p>
            <p class="card-text"><strong>Duration:</strong> ${package2.duration}</p>
            <p class="card-text"><strong>Accommodation:</strong> ${package2.accommodation}</p>
            <p class="card-text"><strong>Price:</strong> $${package2.price}</p>
            <ul class="card-text"><strong>Activities:</strong>
              ${package2.activities.map(activity => `<li>${activity}</li>`).join('')}
            </ul>
            <a href="#" class="btn btn-primary">Book Now</a>
          </div>
        </div>
      </div>`;
  }
  // Insert the generated HTML into the Family Packages container
  document.getElementById("advanture").innerHTML = data;
})
.catch((error) => console.error("Error fetching advanture packages:", error));

  // Fetch cultural package JSON data
  fetch("Assets/JSON/cultural.json")
  .then((response) => response.json())
  .then((json) => {
    let data = ""; // Initialize an empty string to hold the generated HTML content
    for (let package3 of json) {
      data += `
        <div class="col-lg-4 mb-6">
          <div class="card" style="width: 22rem;">
            <img src="Assets/images/img/family-packages-images${package3.image}" class="card-img-top" alt="${package3.name}">
            <div class="card-body">
              <h5 class="card-title">${package3.name}</h5>
              <p class="card-text"><strong>Destination:</strong> ${package3.destination}</p>
              <p class="card-text"><strong>Duration:</strong> ${package3.duration}</p>
              <p class="card-text"><strong>Accommodation:</strong> ${package3.accommodation}</p>
              <p class="card-text"><strong>Price:</strong> $${package3.price}</p>
              <ul class="card-text"><strong>Activities:</strong>
                ${package3.activities.map(activity => `<li>${activity}</li>`).join('')}
              </ul>
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>`;
    }
    // Insert the generated HTML into the Family Packages container
    document.getElementById("cultural").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching advanture packages:", error));
  

  // Fetch luxury package JSON data
  fetch("Assets/JSON/luxury.json")
  .then((response) => response.json())
  .then((json) => {
    let data = ""; // Initialize an empty string to hold the generated HTML content
    for (let package4 of json) {
      data += `
        <div class="col-lg-4 mb-6">
          <div class="card" style="width: 22rem;">
            <img src="Assets/images/img/family-packages-images${package4.image}" class="card-img-top" alt="${package4.name}">
            <div class="card-body">
              <h5 class="card-title">${package4.name}</h5>
              <p class="card-text"><strong>Destination:</strong> ${package4.destination}</p>
              <p class="card-text"><strong>Duration:</strong> ${package4.duration}</p>
              <p class="card-text"><strong>Accommodation:</strong> ${package4.accommodation}</p>
              <p class="card-text"><strong>Price:</strong> $${package4.price}</p>
              <ul class="card-text"><strong>Activities:</strong>
                ${package4.activities.map(activity => `<li>${activity}</li>`).join('')}
              </ul>
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>`;
    }
    // Insert the generated HTML into the Family Packages container
    document.getElementById("luxury").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching advanture packages:", error));


  // Fetch transportation JSON data
  
  fetch("Assets/JSON/transportation.json")
  .then((response) => response.json())
  .then((json) => {
    let data = ""; // Initialize an empty string to hold the generated HTML content
    for (let transport of json) {
      data += `
        <div class="col-lg-4 mb-6">
          <div class="card" style="width: 22rem;">
            <img src="Assets/images/${transport.image}" class="card-img-top" alt="${transport.name}">
            <div class="card-body">
              <h5 class="card-title">${transport.name}</h5>
              <p class="card-text"><strong>Type:</strong> ${transport.type}</p>
              <p class="card-text"><strong>Route:</strong> ${transport.route}</p>
              <p class="card-text"><strong>Duration:</strong> ${transport.duration}</p>
              <p class="card-text"><strong>Price:</strong> $${transport.price}</p>
              <ul class="card-text"><strong>Activities:</strong>
                ${transport.activities.map(activity => `<li>${activity}</li>`).join('')}
              </ul>
              <a href="#" class="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>`;
    }
    // Insert the generated HTML into the Transportation container
    document.getElementById("transport").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching transportation packages:", error));
