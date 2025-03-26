function convert(event, type) {
  event.preventDefault();

  let value, fromUnit, toUnit, convertedValue;

  value = parseFloat(document.getElementById("value").value);
  fromUnit = document.getElementById("from").value;
  toUnit = document.getElementById("to").value;

  if (type === "length") {
    convertedValue = convertLength(value, fromUnit, toUnit);
  } else if (type === "weight") {
    convertedValue = convertWeight(value, fromUnit, toUnit);
  } else if (type === "temperature") {
    convertedValue = convertTemperature(value, fromUnit, toUnit);
  }

  document.getElementById("result-text").textContent = convertedValue;
  document.getElementById("form-container").style.display = "none";
  document.getElementById("result-container").style.display = "block";
}

function convertLength(value, fromUnit, toUnit) {
  let result;
  switch (fromUnit) {
    case "centimeter":
      result = handleCentimeter(value, toUnit);
      break;
    case "meter":
      handleMeter(value, toUnit);
      break;
    case "millimeter":
      handleMillimeter(value, toUnit);
      break;
    case "kilometer":
      handleKilometer(value, toUnit);
      break;
    case "foot":
      handleFoot(value, toUnit);
      break;
    case "inch":
      handleInch(value, toUnit);
      break;
    case "yard":
      handleYard(value, toUnit);
      break;
    case "mile":
      handleMile(value, toUnit);
      break;
  }

  function handleCentimeter(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} cm = ${v * 10} mm`;
      case "meter":
        return `${v} cm = ${v / 100} m`;
      case "kilometer":
        return `${v} cm = ${v / 100000} km`;
      case "inch":
        return `${v} cm = ${v / 2.54} inch`;
      case "foot":
        return `${v} cm = ${v / 30.48} ft`;
      case "yard":
        return `${v} cm = ${v / 91.44} yd`;
      case "mile":
        return `${v} cm = ${v / 160900} mi`;
    }
  }

  function handleMillimeter(v, unit) {
    switch (unit) {
      case "centimeter":
        return `${v} mm = ${v / 10} cm`;
      case "meter":
        return `${v} mm = ${v / 1000} m`;
      case "kilometer":
        return `${v} mm = ${v / 1000000} km`;
      case "inch":
        return `${v} mm = ${v / 25.4} inch`;
      case "foot":
        return `${v} mm = ${v / 304.8} ft`;
      case "yard":
        return `${v} mm = ${v / 914.4} yd`;
      case "mile":
        return `${v} mm = ${v / 1609000} mi`;
    }
  }

  function handleMeter(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} m = ${v * 1000} mm`;
      case "centimeter":
        return `${v} m = ${v * 100} cm`;
      case "kilometer":
        return `${v} m = ${v / 1000} km`;
      case "inch":
        return `${v} m = ${v * 39.37} inch`;
      case "foot":
        return `${v} m = ${v * 3.281} ft`;
      case "yard":
        return `${v} m = ${v * 1.094} yd`;
      case "mile":
        return `${v} m = ${v / 1609} mi`;
    }
  }

  function handleKilometer(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} km = ${v * 1000000} mm`;
      case "centimeter":
        return `${v} km = ${v * 100000} cm`;
      case "meter":
        return `${v} km = ${v * 1000} m`;
      case "inch":
        return `${v} km = ${v * 39370} inch`;
      case "foot":
        return `${v} km = ${v * 3281} ft`;
      case "yard":
        return `${v} km = ${v * 1094} yd`;
      case "mile":
        return `${v} km = ${v / 1.609} mi`;
    }
  }

  function handleInch(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} inch = ${v * 25.4} mm`;
      case "centimeter":
        return `${v} inch = ${v * 2.54} cm`;
      case "meter":
        return `${v} inch = ${v / 39.37} m`;
      case "kilometer":
        return `${v} inch = ${v / 39370} km`;
      case "foot":
        return `${v} inch = ${v / 12} ft`;
      case "yard":
        return `${v} inch = ${v / 36} yd`;
      case "mile":
        return `${v} inch = ${v / 63360} mi`;
    }
  }

  function handleFoot(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} ft = ${v * 304.8} mm`;
      case "centimeter":
        return `${v} ft = ${v * 30.48} cm`;
      case "meter":
        return `${v} ft = ${v / 3.281} m`;
      case "kilometer":
        return `${v} ft = ${v / 3281} km`;
      case "inch":
        return `${v} ft = ${v * 12} inch`;
      case "yard":
        return `${v} ft = ${v / 3} yd`;
      case "mile":
        return `${v} ft = ${v / 5280} mi`;
    }
  }

  function handleYard(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} yard = ${v * 914.4} mm`;
      case "centimeter":
        return `${v} yard = ${v * 91.44} cm`;
      case "meter":
        return `${v} yard = ${v / 1.094} m`;
      case "kilometer":
        return `${v} yard = ${v / 1094} km`;
      case "inch":
        return `${v} yard = ${v * 36} inch`;
      case "foot":
        return `${v} yard = ${v * 3} ft`;
      case "mile":
        return `${v} yard = ${v / 1760} mi`;
    }
  }

  function handleMile(v, unit) {
    switch (unit) {
      case "millimeter":
        return `${v} mile = ${v * 1609000} mm`;
      case "centimeter":
        return `${v} mile = ${v * 160900} cm`;
      case "meter":
        return `${v} mile = ${v * 1609} m`;
      case "kilometer":
        return `${v} mile = ${v * 1.609} km`;
      case "inch":
        return `${v} mile = ${v * 63360} inch`;
      case "foot":
        return `${v} mile = ${v * 5280} ft`;
      case "yard":
        return `${v} mile = ${v * 1760} yd`;
    }
  }

  return result;
}

function convertWeight(value, fromUnit, toUnit) {
  let result;
  switch (fromUnit) {
    case "milligram":
      result = handleMilligram(value, toUnit);
      break;
    case "gram":
      result = handleGram(value, toUnit);
      break;
    case "kilogram":
      result = handleKilogram(value, toUnit);
      break;
    case "ounce":
      result = handleOunce(value, toUnit);
      break;
    case "pound":
      result = handlePound(value, toUnit);
      break;
  }

  function handleMilligram(v, unit) {
    switch (unit) {
      case "gram":
        return `${v} mg = ${v / 1000} g`;
      case "kilogram":
        return `${v} mg = ${v / 1000000} kg`;
      case "ounce":
        return `${v} mg = ${v / 28350} oz`;
      case "pound":
        return `${v} mg = ${v / 453600} lb`;
    }
  }

  function handleGram(v, unit) {
    switch (unit) {
      case "milligram":
        return `${v} g = ${v * 1000} mg`;
      case "kilogram":
        return `${v} g = ${v / 1000} kg`;
      case "ounce":
        return `${v} g = ${v / 28.35} oz`;
      case "pound":
        return `${v} g = ${v / 453.6} lb`;
    }
  }

  function handleKilogram(v, unit) {
    switch (unit) {
      case "milligram":
        return `${v} kg = ${v * 1000000} mg`;
      case "gram":
        return `${v} kg = ${v * 1000} g`;
      case "ounce":
        return `${v} kg = ${v * 35.274} oz`;
      case "pound":
        return `${v} kg = ${v * 2.205} lb`;
    }
  }

  function handleOunce(v, unit) {
    switch (unit) {
      case "milligram":
        return `${v} oz = ${v * 28350} mg`;
      case "gram":
        return `${v} oz = ${v * 28.35} g`;
      case "kilogram":
        return `${v} oz = ${v / 35.274} kg`;
      case "pound":
        return `${v} oz = ${v / 16} lb`;
    }
  }

  function handlePound(v, unit) {
    switch (unit) {
      case "milligram":
        return `${v} lb = ${v * 453600} mg`;
      case "gram":
        return `${v} lb = ${v * 453.6} g`;
      case "kilogram":
        return `${v} lb = ${v / 2.205} kg`;
      case "ounce":
        return `${v} lb = ${v * 16} oz`;
    }
  }

  return result;
}

function convertTemperature(value, fromUnit, toUnit) {
  let result;
  switch (fromUnit) {
    case "celsius":
      result = handleCelsius(value, toUnit);
    case "fahrenheit":
      result = handleFahrenheit(value, toUnit);
    case "kelvin":
      result = handleKelvin(value, toUnit);
  }

  function handleCelsius(v, unit) {
    if (unit === "fahrenheit") {
      return `${v} °C = ${v * (9 / 5) + 32} °F`;
    } else {
      return `${v} °C = ${v + 273.15} K`;
    }
  }

  function handleFahrenheit(v, unit) {
    if (unit === "celsius") {
      return `${v} °F = ${((v - 32) * 9) / 5} °C`;
    } else {
      return `${v} °F = ${((v - 32) * 9) / 5 + 273.15} K`;
    }
  }

  function handleKelvin(v, unit) {
    if (unit === "celsius") {
      return `${v} K = ${v - 273.15} °C`;
    } else {
      return `${v} K = ${(v - 273.15) * (9 / 5) + 32} °F`;
    }
  }

  return result;
}

function reset() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("form-container").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
  const selects = document.querySelectorAll("select");

  function updateOptions() {
    // Get selected values
    let selectedValues = Array.from(selects).map((select) => select.value);

    selects.forEach((select) => {
      Array.from(select.options).forEach((option) => {
        if (
          selectedValues.includes(option.value) &&
          select.value !== option.value
        ) {
          option.hidden = true;
        } else {
          option.hidden = false;
        }
      });
    });
  }

  // Initialize options hiding on page load
  updateOptions();

  selects.forEach((select) => {
    select.addEventListener("change", function () {
      updateOptions();
    });
  });
});
