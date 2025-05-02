export const downloadCanvasToImage = () => {
    const canvas = document.querySelector('canvas');
    if (!canvas) {
      console.error("Canvas not found");
      return;
    }
  
    const dataURL = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'custom-shirt.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  