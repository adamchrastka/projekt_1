const fileUrl = 'data.txt';

    fetch(fileUrl)
      .then(response => {
        if (!response.ok) throw new Error('File not found');
        return response.text();
      })
      .then(text => {
        const tbody = document.getElementById('tabulka').querySelector('tbody');
        const lines = text.trim().split('\n'); 

        lines.forEach(line => {
          const row = document.createElement('tr');
          const fields = line.split(','); 

          fields.forEach(field => {
            const cell = document.createElement('td');
            cell.textContent = field;
            row.appendChild(cell);
          });

          tbody.appendChild(row);
        });
      })
      .catch(error => console.error('Error loading file:', error));