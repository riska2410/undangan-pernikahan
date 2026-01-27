function openInvitation() {
  document.getElementById("cover").classList.remove("active");
  document.getElementById("content").classList.add("active");

  const music = document.getElementById("bgMusic");
  music.play();
}

const urlParams = new URLSearchParams(window.location.search);
const guest = urlParams.get("to");
if (guest) {
  document.getElementById("guestName").innerText = guest;
}

function openInvitation() {
    const cover = document.getElementById('cover');
    const content = document.getElementById('content');

    cover.classList.remove('active');
    cover.style.display = 'none';

    content.classList.add('active');
    content.style.display = 'block';

    const bgMusic = document.getElementById('bgMusic');
    bgMusic.play();
}

const form = document.getElementById('messageForm');
const thanksMessage = document.getElementById('thanksMessage');

form.addEventListener('submit', function(e) {
  e.preventDefault(); 

  const name = form.querySelector('input').value;
  const message = form.querySelector('textarea').value;

  console.log("Nama:", name);
  console.log("Pesan:", message);

  thanksMessage.style.display = 'block';
  form.reset();
});
