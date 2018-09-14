'use strict';
//пше
// var CLOUD_WIDTH = 420;
// var CLOUD_HEIGHT = 270;
// var CLOUD_X = 100;
// var CLOUD_Y = 10;
// var GAP = 10;
// var GAP_TITLE = 20;
//
// var FONT_GAP = 30;
// var BAR_INTERVAL = 50;
// var BAR_WIDTH = 40;
// var BAR_MAX_HEIGHT = 150;
// var barHeight = BAR_MAX_HEIGHT;
//
// var renderCloud = function(ctx, x, y, color) {
//   ctx.fillStyle = color;
//   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
// };
//
// var getMaxElement = function(arr) {
//   var maxElement = arr[0];
//
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > maxElement) {
//       maxElement = arr[i];
//     }
//   }
//
//   return maxElement;
// };
//
// window.renderStatistics = function(ctx, names, times) {
//   var maxTime = getMaxElement(times);
//   renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
//   renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
//
//   ctx.fillStyle = '#000';
//   ctx.font = '16px PT Mono';
//   ctx.textBaseline = 'hanging';
//   ctx.fillText('Ура вы победили!', CLOUD_X + GAP_TITLE, CLOUD_Y + GAP_TITLE);
//   ctx.fillText('Список результатов:', CLOUD_X + GAP_TITLE, CLOUD_Y + 2 * GAP_TITLE);
//
//   for (var i = 0; i < names.length; i++) {
//     ctx.fillStyle = '#000';
//     ctx.fillText(names[i], CLOUD_X + FONT_GAP + 90 * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
//     ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP + 90 * i, CLOUD_Y + CLOUD_HEIGHT - 30);
//
//     if (names[i] === 'Вы') {
//       ctx.fillStyle = 'rgba(255, 0, 0, 1)';
//     } else {
//       ctx.fillStyle = 'rgba(0, 0, 255,' + Math.random() + ')';
//     }
//
//     ctx.fillRect(CLOUD_X + FONT_GAP + (BAR_INTERVAL + BAR_WIDTH) * i, CLOUD_Y + GAP + (GAP) * i, BAR_WIDTH, (barHeight * times[i]) / maxTime);
//   }
//
// };

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;
var CLOUD_X = 100;
var CLOUD_Y = 50;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 20;
var barWidth = CLOUD_WIDTH - GAP - TEXT_WIDTH - GAP;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
    ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }
};
