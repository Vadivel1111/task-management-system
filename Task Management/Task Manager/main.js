        let toggle = document.querySelector('.toggle');
        let left = document.querySelector('.left');
        let right = document.querySelector('.right');
        let close = document.querySelector('.close');
        let body = document.querySelector('body');
        let searchBx = document.querySelector('.searchBx');
        let searchOpen = document.querySelector('.searchOpen');
        let searchClose = document.querySelector('.searchClose');
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
            left.classList.toggle('active');
            right.classList.toggle('overlay');
            body.style.overflow = 'hidden';
        });
        close.onclick = () => {
            toggle.classList.remove('active');
            left.classList.remove('active');
            right.classList.remove('overlay');
            body.style.overflow = '';
        };
        searchOpen.onclick = () => {
            searchBx.classList.add('active');
        };
        searchClose.onclick = () => {
            searchBx.classList.remove('active');
        };
        window.onclick = (e) => {
            if (e.target == right) {
                toggle.classList.remove('active');
                left.classList.remove('active');
                right.classList.remove('overlay');
                body.style.overflow = '';
            }
        };
      
      
      
      
const calendarBody = document.getElementById('calendarBody');
    const monthYear = document.getElementById('monthYear');
    const prevMonth = document.getElementById('prevMonth');
    const nextMonth = document.getElementById('nextMonth');
    
    let date = new Date();
    
    function renderCalendar() {
      calendarBody.innerHTML = '';
      const year = date.getFullYear();
      const month = date.getMonth();
      const firstDay = new Date(year, month, 1).getDay();
      const daysInMonth = new Date(year, month + 1, 0).getDate();
      
      monthYear.textContent = date.toLocaleDateString('en-us', { month: 'long', year: 'numeric' });
      
      let day = 1;
      for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
          const cell = document.createElement('td');
          if (i === 0 && j < firstDay) {
            cell.textContent = '';
          } else if (day > daysInMonth) {
            cell.textContent = '';
          } else {
            cell.textContent = day;
            if (
              day === new Date().getDate() &&
              month === new Date().getMonth() &&
              year === new Date().getFullYear()
            ) {
              cell.classList.add('today');
            }
            day++;
          }
          row.appendChild(cell);
        }
        calendarBody.appendChild(row);
      }
    }
    
    prevMonth.addEventListener('click', () => {
      date.setMonth(date.getMonth() - 1);
      renderCalendar();
    });
    
    nextMonth.addEventListener('click', () => {
      date.setMonth(date.getMonth() + 1);
      renderCalendar();
    });
    
    renderCalendar();
