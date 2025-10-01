function showDateDay() {
      let today = new Date();

      // Options for date and day
      let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      // Format the date
      let dateString = today.toLocaleDateString("en-US", options);

      // Display
      document.getElementById("dateDay").innerText = dateString;
    }
    // Call function
    showDateDay();