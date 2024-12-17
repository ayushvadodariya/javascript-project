document.querySelectorAll('.section h2').forEach(sectionHeader => {
    sectionHeader.addEventListener('click', () => {
        const content = sectionHeader.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});

const downloadButton = document.getElementById('downloadResume');
downloadButton.addEventListener('click', (event) => {
    event.preventDefault();

    const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'AYUSH_VADODARIYA_Resume.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});