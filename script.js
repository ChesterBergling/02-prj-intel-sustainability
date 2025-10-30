// Get the element by ID
const element = document.getElementById('intel-in-the-community');

// Function to blend blue and green based on percentage
function blendColors(bluePercentage, greenPercentage) {
  // Ensure percentages add up to 100
  const total = bluePercentage + greenPercentage;
  if (total !== 100) {
    console.error('Percentages must add up to 100');
    return;
  }

  // Calculate blended color
  const blueValue = Math.round((bluePercentage / 100) * 255);
  const greenValue = Math.round((greenPercentage / 100) * 255);

  // Set the background color
  element.style.backgroundColor = `rgb(0, ${greenValue}, ${blueValue})`;
}

// Example usage: 0% blue and 100% green
blendColors(0, 100);

// Check the current background color
function checkBackgroundColor() {
  const bgColor = window.getComputedStyle(element).backgroundColor;
  console.log('Current background color:', bgColor);
}

// Call the function to check the background color
checkBackgroundColor();