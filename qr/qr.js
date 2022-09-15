//Create the QR
$(document).ready(function(){    
    $('#qr').css({
        'width' : '270',
        'height' : '270',
        'border-style' : 'solid',
        'border-width': '3px',
        'border-color': 'white'
        })        
    $('#qr').qrcode({width: '270',height: '270',text: localStorage.getItem('email')});   
    localStorage.removeItem('email');
})

//Image download
function downloadInvite(e) {
    htmlToImage.toJpeg(e.currentTarget, { quality: 0.95 }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = "invite.jpeg";
      link.href = dataUrl;
      link.click();
      link.remove();
    });
  }  
document.querySelector("main").addEventListener("click", downloadInvite);