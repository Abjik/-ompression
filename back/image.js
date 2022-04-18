field.view.value = `${canvas.width} x ${canvas.height}`;
    
button.download = name.replace(/\w+$/, 'png');

file = blobFrom( canvas.toDataURL() );
    
field.size.value = (file.size / 1024).toFixed(2);

button.href = URL.createObjectURL( file );