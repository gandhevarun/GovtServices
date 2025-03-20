const mediaInput = document.getElementById('mediaInput');
const mediaContainer = document.getElementById('mediaContainer');

mediaInput.addEventListener('change', (e) => {
    const files = mediaInput.files; 
    mediaContainer.innerHTML = '';

   
    for (let i = 0; i < files.length; i++) {
        const file = files[i];


        if (!file.type.startsWith('image/') && !file.type.startsWith('video/')) {
            alert('Please upload only image or video files.');
            return;
        }


        const mediaURL = URL.createObjectURL(file);


        const mediaDiv = document.createElement('div');
        mediaDiv.className = 'media-container';

        if (file.type.startsWith('image/')) {
            
            const img = document.createElement('img');
            img.src = mediaURL;
            mediaDiv.appendChild(img);
        } else if (file.type.startsWith('video/')) {
            const video = document.createElement('video');
            video.src = mediaURL;
            video.controls = true; 
            mediaDiv.appendChild(video);
        }

            mediaContainer.appendChild(mediaDiv);
    }
        });
