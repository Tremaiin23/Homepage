// Enhanced ember creation function
function createEmbers() {
  const hero = document.querySelector('.hero');

  function createEmber() {
    const ember = document.createElement('div');
    ember.className = 'ember';
    
    // Random starting position
    const startX = Math.random() * window.innerWidth;
    // Random horizontal drift
    const xEnd = (Math.random() - 0.5) * 200; // Increased drift range
    
    ember.style.left = `${startX}px`;
    ember.style.setProperty('--x-end', `${xEnd}px`);
    
    // Random size between 2 and 4 pixels
    const size = 2 + Math.random() * 2;
    ember.style.width = `${size}px`;
    ember.style.height = `${size}px`;
    
    // Random animation duration between 3 and 6 seconds
    const duration = 3 + Math.random() * 3;
    ember.style.animation = `float-ember ${duration}s ease-out forwards`;
    
    // Remove ember after animation
    ember.addEventListener('animationend', () => {
      ember.remove();
    });
    
    hero.appendChild(ember);
  }

  // Create an initial ember and then continue creating embers at intervals
  createEmber();
  setInterval(createEmber, 50); // Reduced interval for more embers
}

// Market data simulation
const markets = [
  {
    id: 1,
    title: "Manchester United vs Liverpool",
    time: "Today 20:00",
    homeTeam: "Manchester United",
    awayTeam: "Liverpool",
    odds: {
      home: { back: 2.5, lay: 2.7, totalBacked: "ZMW-K455", totalLayed: "ZMW-K3245" },
      draw: { back: 3.4, lay: 3.6, totalBacked: "ZMW-K2398", totalLayed: "ZMW-K1980" },
      away: { back: 2.8, lay: 3.0, totalBacked: "ZMW-K3878", totalLayed: "ZMW-K2956" }
    },
    totalVolume: "ZMW-K1,245,678",
    matchedAmount: "ZMW-K987,654",
    status: "closed"  
  },
  {
    id: 2,
    title: "Real Madrid vs Barcelona",
    time: "Tomorrow 19:45",
    homeTeam: "Real Madrid",
    awayTeam: "Barcelona",
    odds: {
      home: { back: 1.9, lay: 2.1, totalBacked: "ZMW-K56,789", totalLayed: "ZMW-K43,210" },
      draw: { back: 3.5, lay: 3.7, totalBacked: "ZMW-K34,567", totalLayed: "ZMW-K27,890" },
      away: { back: 3.8, lay: 4.0, totalBacked: "ZMW-K49,012", totalLayed: "ZMW-K38,765" }
    },
    totalVolume: "ZMW-K2,345,890",
    matchedAmount: "ZMW-K1,876,543",
    status: "open"
  },
  {
    id: 3,
    title: "Bayern Munich vs Dortmund",
    time: "Saturday 18:30",
    homeTeam: "Bayern Munich",
    awayTeam: "Dortmund",
    odds: {
      home: { back: 1.7, lay: 1.9, totalBacked: "ZMW-K67,890", totalLayed: "ZMW-K52,345" },
      draw: { back: 3.8, lay: 4.0, totalBacked: "ZMW-K29,543", totalLayed: "ZMW-K23,456" },
      away: { back: 4.5, lay: 4.7, totalBacked: "ZMW-K43,210", totalLayed: "ZMW-K34,567" }
    },
    totalVolume: "ZMW-K987,654",
    matchedAmount: "ZMW-765,432",
    status: "open"
  },
  {
    id: 4,
    title: "PSG vs Marseille",
    time: "Sunday 20:00",
    homeTeam: "PSG",
    awayTeam: "Marseille",
    odds: {
      home: { back: 1.5, lay: 1.7, totalBacked: "ZMW-K78,901", totalLayed: "ZMW-K61,234" },
      draw: { back: 4.2, lay: 4.4, totalBacked: "ZMW-K23,456", totalLayed: "ZMW-K19,087" },
      away: { back: 6.0, lay: 6.2, totalBacked: "ZMW-K38,765", totalLayed: "ZMW-K32,109" }
    },
    totalVolume: "ZMW-K876,543",
    matchedAmount: "ZMW-K654,321",
    status: "open"
  },
  {
    id: 5,
    title: "Juventus vs Milan",
    time: "Saturday 20:45",
    homeTeam: "Juventus",
    awayTeam: "Milan",
    odds: {
      home: { back: 2.2, lay: 2.4, totalBacked: "ZMW-K56,789", totalLayed: "ZMW-K45,678" },
      draw: { back: 3.3, lay: 3.5, totalBacked: "ZMWK29,543", totalLayed: "ZMW-K24,567" },
      away: { back: 3.4, lay: 3.6, totalBacked: "ZMW-K43,210", totalLayed: "ZMW-K35,678" }
    },
    totalVolume: "ZMW-K1,123,456",
    matchedAmount: "ZMW-K876,543",
    status: "open"
  },
  {
    id: 6,
    title: "Arsenal vs Tottenham",
    time: "Sunday 16:30",
    homeTeam: "Arsenal",
    awayTeam: "Tottenham",
    odds: {
      home: { back: 1.8, lay: 2.0, totalBacked: "ZMW-K67,890", totalLayed: "ZMW-K54,321" },
      draw: { back: 3.6, lay: 3.8, totalBacked: "ZMW-K34,567", totalLayed: "ZMW-K28,901" },
      away: { back: 4.0, lay: 4.2, totalBacked: "ZMW-K49,012", totalLayed: "ZMW-K39,876" }
    },
    totalVolume: "ZMW-K1,567,890",
    matchedAmount: "ZMW-K1,234,567",
    status: "open"
  },
  {
    id: 7,
    title: "Ajax vs PSV",
    time: "Sunday 14:30",
    homeTeam: "Ajax",
    awayTeam: "PSV",
    odds: {
      home: { back: 2.1, lay: 2.3, totalBacked: "ZMW-K45,678", totalLayed: "ZMW-K36,789" },
      draw: { back: 3.4, lay: 3.6, totalBacked: "ZMW-K23,890", totalLayed: "ZMW-K19,543" },
      away: { back: 3.3, lay: 3.5, totalBacked: "ZMW-K32,109", totalLayed: "ZMW-K26,234" }
    },
    totalVolume: "ZMW-K765,432",
    matchedAmount: "ZMW-K543,210",
    status: "open"
  },
  {
    id: 8,
    title: "Porto vs Benfica",
    time: "Saturday 21:00",
    homeTeam: "Porto",
    awayTeam: "Benfica",
    odds: {
      home: { back: 2.4, lay: 2.6, totalBacked: "ZMW-K54,321", totalLayed: "ZMW-K43,210" },
      draw: { back: 3.2, lay: 3.4, totalBacked: "ZMW-K29,543", totalLayed: "ZMW-K24,567" },
      away: { back: 2.9, lay: 3.1, totalBacked: "ZMW-K38,765", totalLayed: "ZMW-K31,234" }
    },
    totalVolume: "ZMW-K654,321",
    matchedAmount: "ZMW-K432,109",
    status: "open"
  },
  {
    id: 9,
    title: "Celtic vs Rangers",
    time: "Sunday 12:00",
    homeTeam: "Celtic",
    awayTeam: "Rangers",
    odds: {
      home: { back: 1.6, lay: 1.8, totalBacked: "ZMW-K67,890", totalLayed: "ZMW-K54,321" },
      draw: { back: 3.8, lay: 4.0, totalBacked: "ZMW-K29,543", totalLayed: "ZMW-K24,567" },
      away: { back: 5.0, lay: 5.2, totalBacked: "ZMW-K43,210", totalLayed: "ZMW-K35,678" }
    },
    totalVolume: "ZMW-K898,765",
    matchedAmount: "ZMW-K678,901",
    status: "open"
  },
  {
    id: 10,
    title: "Boca Juniors vs River Plate",
    time: "Sunday 22:00",
    homeTeam: "Boca Juniors",
    awayTeam: "River Plate",
    odds: {
      home: { back: 2.3, lay: 2.5, totalBacked: "ZMW-K56,789", totalLayed: "ZMW-K45,678" },
      draw: { back: 3.1, lay: 3.3, totalBacked: "ZMW-K29,543", totalLayed: "ZMW-K24,567" },
      away: { back: 3.0, lay: 3.2, totalBacked: "ZMW-K43,210", totalLayed: "ZMW-K35,678" }
    },
    totalVolume: "ZMW-K987,654",
    matchedAmount: "ZMW-K789,012",
    status: "open"
  }
];

// Create market cards
function createMarketCards() {
  const marketGrid = document.getElementById('marketGrid');
  
  markets.forEach(market => {
    const card = document.createElement('div');
    card.className = 'market-card';
    
    card.innerHTML = `
      <div class="market-header">
        <div class="market-title">${market.title}</div>
        <div class="market-time">${market.time}</div>
      </div>
      <div class="market-status ${market.status === 'open' ? 'status-open' : 'status-closed'}">
        Market ${market.status === 'open' ? 'Open' : 'Closed'}
      </div>
      <div class="market-stats">
        <div class="stat-item">
          <span class="stat-label">Total Volume:</span>
          <span class="stat-value">${market.totalVolume}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Total Matched:</span>
          <span class="stat-value">${market.matchedAmount}</span>
        </div>
      </div>
      <div class="team-odds-container">
        <div class="team-odds">
          <div class="team-name">${market.homeTeam}</div>
          <div class="odds-container">
            <div class="odds-button-group">
              <button class="odds-button back-button" onclick="placeBet('back', ${market.id}, '${market.homeTeam}', ${market.odds.home.back})">
                ${market.odds.home.back}
              </button>
              <div class="bet-stat">
                <span>Total Backed</span>
                <span class="bet-stat-value">${market.odds.home.totalBacked}</span>
              </div>
            </div>
            <div class="odds-button-group">
              <button class="odds-button lay-button" onclick="placeBet('lay', ${market.id}, '${market.homeTeam}', ${market.odds.home.lay})">
                ${market.odds.home.lay}
              </button>
              <div class="bet-stat">
                <span>Total Layed</span>
                <span class="bet-stat-value">${market.odds.home.totalLayed}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="team-odds">
          <div class="team-name">Draw</div>
          <div class="odds-container">
            <div class="odds-button-group">
              <button class="odds-button back-button" onclick="placeBet('back', ${market.id}, 'Draw', ${market.odds.draw.back})">
                ${market.odds.draw.back}
              </button>
              <div class="bet-stat">
                <span>Total Backed</span>
                <span class="bet-stat-value">${market.odds.draw.totalBacked}</span>
              </div>
            </div>
            <div class="odds-button-group">
              <button class="odds-button lay-button" onclick="placeBet('lay', ${market.id}, 'Draw', ${market.odds.draw.lay})">
                ${market.odds.draw.lay}
              </button>
              <div class="bet-stat">
                <span>Total Layed</span>
                <span class="bet-stat-value">${market.odds.draw.totalLayed}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="team-odds">
          <div class="team-name">${market.awayTeam}</div>
          <div class="odds-container">
            <div class="odds-button-group">
              <button class="odds-button back-button" onclick="placeBet('back', ${market.id}, '${market.awayTeam}', ${market.odds.away.back})">
                ${market.odds.away.back}
              </button>
              <div class="bet-stat">
                <span>Total Backed</span>
                <span class="bet-stat-value">${market.odds.away.totalBacked}</span>
              </div>
            </div>
            <div class="odds-button-group">
              <button class="odds-button lay-button" onclick="placeBet('lay', ${market.id}, '${market.awayTeam}', ${market.odds.away.lay})">
                ${market.odds.away.lay}
              </button>
              <div class="bet-stat">
                <span>Total Layed</span>
                <span class="bet-stat-value">${market.odds.away.totalLayed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // NEW: If the market is closed, add a blur effect and overlay for "Market Closed"
    if (market.status === 'closed') {
      card.classList.add('closed');
      const overlay = document.createElement('div');
      overlay.className = 'closed-overlay';
      overlay.textContent = 'Market Closed';
      card.appendChild(overlay);
    }
    
    marketGrid.appendChild(card);
  });
}

// Betting function
function placeBet(type, marketId, selection, odds) {
  showBettingModal(type, marketId, selection, odds);
}

// Betting modal functionality
function showBettingModal(type, marketId, selection, odds) {
  const modal = document.createElement('div');
  modal.className = 'modal-overlay';
  modal.style.display = 'flex';

  const explanation = type === 'back' 
    ? 'Back betting means betting FOR a selection to win. If your selection wins, you win the profit calculated by (stake × odds - stake). If it loses, you lose your stake.'
    : 'Lay betting means betting AGAINST a selection to win. You act as the bookmaker. If your selection loses, you win the stake. If it wins, you must pay out the liability amount.';

  modal.innerHTML = `
    <div class="modal">
      <i class="fas fa-times modal-close"></i>
      <h2>${type.toUpperCase()} Bet on ${selection}</h2>
      <div class="bet-type-explanation">
        <p>${explanation}</p>
      </div>
      <div class="calculator-section">
        <div class="input-group">
          <label>Odds</label>
          <input type="number" step="0.01" id="betOdds" value="${odds}" />
        </div>
        <div class="input-group">
          <label>Stake (ZMW)</label>
          <input type="number" step="0.01" id="betStake" placeholder="Enter stake amount" />
        </div>
        <div class="calculation-result">
          <div class="result-item">
            <span>Potential Profit:</span>
            <span id="potentialProfit">ZMW0.00</span>
          </div>
          ${type === 'lay' ? `
          <div class="result-item">
            <span>Liability:</span>
            <span id="liability">ZMW0.00</span>
          </div>
          ` : ''}
          <div class="result-item">
            <span>Commission (10%):</span>
            <span id="commission">ZMW0.00</span>
          </div>
          <div class="result-item">
            <span>Net Profit:</span>
            <span id="netProfit">ZMW0.00</span>
          </div>
        </div>
        <div class="commission-note">
          <p>* A 10% commission is charged on net winnings only.</p>
          ${type === 'lay' ? `<p>* Liability is the amount you need to risk when laying a bet.</p>` : ''}
        </div>
        <a href="https://onematchbettingexchange.formaloo.co/ldbboc" target="_blank" class="place-bet-button">
          Place Your Bet
        </a>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Close modal functionality
  const closeModal = () => {
    modal.style.display = 'none';
    modal.remove();
  };

  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Calculator functionality
  const calculateResults = () => {
    const odds = parseFloat(document.getElementById('betOdds').value) || 0;
    const stake = parseFloat(document.getElementById('betStake').value) || 0;
    
    let potentialProfit;
    let liability = 0;

    if (type === 'back') {
      potentialProfit = stake * (odds - 1);
    } else {
      potentialProfit = stake;
      liability = stake * (odds - 1);
      document.getElementById('liability').textContent = `ZMW${liability.toFixed(2)}`;
    }

    const commission = potentialProfit * 0.1;
    const netProfit = potentialProfit - commission;

    document.getElementById('potentialProfit').textContent = `ZMW${potentialProfit.toFixed(2)}`;
    document.getElementById('commission').textContent = `ZMW${commission.toFixed(2)}`;
    document.getElementById('netProfit').textContent = `ZMW${netProfit.toFixed(2)}`;
  };

  // Add event listeners for real-time calculation
  document.getElementById('betOdds').addEventListener('input', calculateResults);
  document.getElementById('betStake').addEventListener('input', calculateResults);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
  createMarketCards();
  createEmbers();
  
  // Menu toggle functionality
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');
  
  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Toggle menu icon between bars and times
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
      navLinks.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    }
  });

  // Handle navigation links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
      // Remove active class from all links
      document.querySelectorAll('.nav-links a').forEach(l => 
        l.classList.remove('active')
      );
      // Add active class to clicked link
      e.target.classList.add('active');
      // Close menu after clicking a link
      navLinks.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
    });
  });
});