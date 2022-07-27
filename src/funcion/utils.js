export function getImagen(imageID, size = 's') {
    return (
      'https://i.imgur.com/' +
      imageID +
      size +
      '.jpg'
    );
  }