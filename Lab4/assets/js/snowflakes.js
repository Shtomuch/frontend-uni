function createSnowflake() {
  var snowflake = document.createElement('div');
  snowflake.className = 'snowflake';
  snowflake.textContent = '*';

  var startPosition = Math.random() * window.innerWidth;
  var fontSize = 40 + Math.random() * 30;
  var duration = 8 + Math.random() * 7;
  var horizontalMovement = 200 + Math.random() * 300;

  snowflake.style.left = startPosition + 'px';
  snowflake.style.fontSize = fontSize + 'px';
  snowflake.style.animationDuration = duration + 's';
  snowflake.style.setProperty('--horizontal-movement', horizontalMovement + 'px');

  document.body.appendChild(snowflake);

  setTimeout(function() {
    document.body.removeChild(snowflake);
  }, duration * 1000);
}

function startSnowfall() {
  setInterval(function() {
    createSnowflake();
  }, 800);
}

startSnowfall();
