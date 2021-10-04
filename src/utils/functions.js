export function convertColor(clr) {
  if (clr.type === 'rgb') {
    return `rgb(${clr.red}, ${clr.green}, ${clr.blue})`;
  } else if (clr.type === 'hsl') {
    return `hsl(${clr.hue}, ${clr.saturation}%, ${clr.lightness}%)`;
  } else {
    return '#000000';
  }
}