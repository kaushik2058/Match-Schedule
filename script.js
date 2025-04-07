fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const matchesDiv = document.getElementById('matches');
    const searchInput = document.getElementById('search');

    function displayMatches(filtered = data) {
      matchesDiv.innerHTML = '';
      filtered.forEach(item => {
        const matchEl = document.createElement('div');
        matchEl.classList.add('match');
        matchEl.innerHTML = 
          <div class="league">${item.league}</div>
          <div>${item.match}</div>
          <div><strong>Channel name:</strong><br> ${item.channels.map((ch, i) => ${i + 1}. ${ch}).join('<br>')}</div>
        ;
        matchesDiv.appendChild(matchEl);
      });
    }

    searchInput.addEventListener('input', () => {
      const val = searchInput.value.toLowerCase();
      const filtered = data.filter(item =>
        item.league.toLowerCase().includes(val) ||
        item.match.toLowerCase().includes(val) ||
        item.channels.some(c => c.toLowerCase().includes(val))
      );
      displayMatches(filtered);
    });

    displayMatches();
  });
