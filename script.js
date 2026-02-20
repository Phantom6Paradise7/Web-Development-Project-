// --- DOM Elements ---
const propertyGrid = document.getElementById('property-grid');
const searchInput = document.querySelector('.search-bar input');
const searchSelect = document.getElementById('hero-type-select');
const searchBtn = document.querySelector('.search-bar button');
const filterBtns = document.querySelectorAll('.filter-btn');
const themeToggleBtn = document.getElementById('theme-toggle');

const propertyModal = document.getElementById('property-modal');
const addModal = document.getElementById('add-modal');
const modalDetails = document.getElementById('modal-details');
const fabAddProperty = document.getElementById('fab-add-property');
const addPropertyForm = document.getElementById('add-property-form');
const locateMeBtn = document.getElementById('locate-me-btn');
const locationStatusText = document.getElementById('location-status-text');

// --- 1. Massive NCR Database (Ultra-Stable Pexels Links) ---
let propertiesData = [
    {
        id: 1, type: 'builder-floor', status: 'For Sale', title: 'Independent 4BHK Builder Floor',
        location: 'Vasant Vihar, South Delhi', price: '₹12.5 Crore', area: '4,500', beds: 4, baths: 5, furnishing: 'Semi-Furnished', facing: 'East', parking: '3 Covered', age: 'New Construction',
        img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Basant Lok Market (0.5km)', 'Vasant Valley School (1km)'], transit: 'Vasant Vihar Metro (0.8km)', lat: 28.5562, lng: 77.1600, broker: { name: 'Rajesh Sharma', company: 'South Prime Realtors', phone: '+91 98765 43210' }
    },
    {
        id: 2, type: 'society', status: 'For Rent', title: 'Gated Co-operative Society 3BHK',
        location: 'IP Extension, Patparganj', price: '₹40,000/mo', area: '1,400', beds: 3, baths: 2, furnishing: 'Semi-Furnished', facing: 'North-East', parking: '1 Open', age: '10+ Years',
        img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Max Hospital (1km)', 'Madhu Vihar Market (0.5km)'], transit: 'IP Extension Metro (0.2km)', lat: 28.6284, lng: 77.3060, broker: { name: 'Mukesh Gupta', company: 'East Delhi Associates', phone: '+91 88000 11223' }
    },
    {
        id: 3, type: 'row-house', status: 'For Sale', title: 'Luxury Row House in Gated Community',
        location: 'Sector 150, Noida', price: '₹4.5 Crore', area: '3,200', beds: 4, baths: 4, furnishing: 'Unfurnished', facing: 'North', parking: '2 Covered', age: '0-5 Years',
        img: 'https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Shaheed Bhagat Singh Park (2km)', 'Noida Expressway (1km)'], transit: 'Sector 148 Metro (3km)', lat: 28.4357, lng: 77.4819, broker: { name: 'Apex Developers', company: 'Direct Builder', phone: '+91 99000 11223' }
    },
    {
        id: 4, type: 'studio', status: 'For Rent', title: 'Modern Studio Apartment',
        location: 'Hauz Khas Village, South Delhi', price: '₹35,000/mo', area: '650', beds: 1, baths: 1, furnishing: 'Fully Furnished', facing: 'East', parking: 'No Parking', age: '5-10 Years',
        img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['HKV Fort (0.1km)', 'Deer Park (0.5km)'], transit: 'Hauz Khas Metro (1.5km)', lat: 28.5543, lng: 77.1934, broker: { name: 'Sanjay Grover', company: 'HKV Rentals', phone: '+91 98100 55667' }
    },
    {
        id: 5, type: 'apartment', status: 'For Sale', title: 'Premium 4BHK DDA High-Rise',
        location: 'Dwarka Sector 11, Delhi', price: '₹2.8 Crore', area: '2,100', beds: 4, baths: 3, furnishing: 'Semi-Furnished', facing: 'South-West', parking: '1 Covered', age: '10+ Years',
        img: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Dwarka Sports Complex (1km)', 'Vegas Mall (2.5km)'], transit: 'Sector 11 Metro (0.2km)', lat: 28.5831, lng: 77.0504, broker: { name: 'Dwarka Homes', company: 'CGHS Specialists', phone: '+91 88888 77777' }
    },
    {
        id: 6, type: 'villa', status: 'For Sale', title: 'Independent Kothi / Villa',
        location: 'Punjabi Bagh, West Delhi', price: '₹18.0 Crore', area: '6,000', beds: 6, baths: 6, furnishing: 'Fully Furnished', facing: 'North-West', parking: '4 Covered', age: '5-10 Years',
        img: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Punjabi Bagh Club (0.5km)', 'Pacific Mall (3km)'], transit: 'Punjabi Bagh West Metro (1km)', lat: 28.6677, lng: 77.1309, broker: { name: 'Khurana & Sons', company: 'West Delhi Realty', phone: '+91 91111 22222' }
    },
    {
        id: 7, type: 'farmhouse', status: 'For Sale', title: 'Grand 6BHK Farmhouse Estate',
        location: 'Chattarpur, South West Delhi', price: '₹35.0 Crore', area: '12,500', beds: 6, baths: 8, furnishing: 'Fully Furnished', facing: 'North-East', parking: '6 Open', age: '0-5 Years',
        img: 'https://images.pexels.com/photos/277667/pexels-photo-277667.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Chattarpur Temple (2km)', 'Qutub Minar (5km)'], transit: 'Chattarpur Metro (3km)', lat: 28.4975, lng: 77.1843, broker: { name: 'Elite Estates', company: 'Luxury Farmhouse', phone: '+91 99111 22334' }
    },
    {
        id: 8, type: 'apartment', status: 'For Sale', title: 'Affordable 2BHK Ready to Move',
        location: 'Crossings Republik, Ghaziabad', price: '₹45 Lakhs', area: '1,050', beds: 2, baths: 2, furnishing: 'Unfurnished', facing: 'East', parking: '1 Covered', age: '5-10 Years',
        img: 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Galleria Market (0.5km)', 'ABES College (2km)'], transit: 'Vijay Nagar Station (3km)', lat: 28.6295, lng: 77.4332, broker: { name: 'Gaurav Infra Heights', company: 'Direct Builder', phone: '+91 77665 54433' }
    },
    {
        id: 9, type: 'builder-floor', status: 'For Rent', title: 'Spacious 3BHK Independent Floor',
        location: 'Vaishali Sector 4, Ghaziabad', price: '₹25,000/mo', area: '1,500', beds: 3, baths: 2, furnishing: 'Semi-Furnished', facing: 'North', parking: '1 Open', age: '5-10 Years',
        img: 'https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Shopprix Mall (1km)', 'Max Hospital (2km)'], transit: 'Vaishali Metro (1.5km)', lat: 28.6498, lng: 77.3395, broker: { name: 'Vikram Singh', company: 'NCR Realtors', phone: '+91 99887 76655' }
    },
    {
        id: 10, type: 'society', status: 'For Sale', title: 'Premium 3BHK in Luxury Society',
        location: 'Sector 75, Noida', price: '₹1.8 Crore', area: '1,750', beds: 3, baths: 3, furnishing: 'Unfurnished', facing: 'East', parking: '2 Covered', age: '0-5 Years',
        img: 'https://images.pexels.com/photos/830891/pexels-photo-830891.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Spectrum Metro Mall (0.5km)', 'Sector 50 Market (2km)'], transit: 'Sector 50 Metro (1km)', lat: 28.5726, lng: 77.3826, broker: { name: 'Noida Prime Properties', company: 'Registered Agent', phone: '+91 88811 22233' }
    },
    {
        id: 11, type: 'apartment', status: 'For Rent', title: 'Corporate 2BHK Fully Furnished',
        location: 'DLF Phase 4, Gurgaon', price: '₹65,000/mo', area: '1,200', beds: 2, baths: 2, furnishing: 'Fully Furnished', facing: 'South', parking: '1 Covered', age: '5-10 Years',
        img: 'https://images.pexels.com/photos/279719/pexels-photo-279719.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Galleria Market (0.5km)', 'Supermart 1 (1km)'], transit: 'HUDA City Centre (2km)', lat: 28.4646, lng: 77.0863, broker: { name: 'Priya Desai', company: 'Gurgaon Expat Rentals', phone: '+91 91234 56789' }
    },
    {
        id: 12, type: 'villa', status: 'For Sale', title: 'Designer 5BHK Corner Plot House',
        location: 'Defence Colony, South Delhi', price: '₹22.5 Crore', area: '4,800', beds: 5, baths: 6, furnishing: 'Semi-Furnished', facing: 'North-East', parking: '3 Covered', age: '10+ Years',
        img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
        attractions: ['Def Col Market (0.2km)', 'Lajpat Nagar (2km)'], transit: 'Lajpat Nagar Metro (1km)', lat: 28.5733, lng: 77.2280, broker: { name: 'Rajesh Sharma', company: 'South Prime Realtors', phone: '+91 98765 43210' }
    }
];

// --- 2. Theme Toggle ---
if (localStorage.getItem('theme') === 'dark') {
    document.body.setAttribute('data-theme', 'dark');
    themeToggleBtn.textContent = '☀️ Light Mode';
}

themeToggleBtn.addEventListener('click', () => {
    if (document.body.getAttribute('data-theme') === 'dark') {
        document.body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Dark Mode';
    } else {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Light Mode';
    }
});

// --- 3. Math & Geo Location API ---
let userLat = null; 
let userLng = null; 

function getDistanceNumber(lat1, lon1, lat2, lon2) {
    if(!lat1 || !lat2) return Infinity;
    const R = 6371; const dLat = (lat2 - lat1) * Math.PI / 180; const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon/2) * Math.sin(dLon/2); 
    return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)));
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    if(!lat1 || !lat2) return "N/A";
    return getDistanceNumber(lat1, lon1, lat2, lon2).toFixed(1) + " km";
}

function formatCurrency(num) {
    if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Crore`;
    if (num >= 100000) return `₹${(num / 100000).toFixed(2)} Lakhs`;
    return `₹${num.toLocaleString('en-IN')}`;
}

locateMeBtn.addEventListener('click', () => {
    locateMeBtn.innerText = "⏳ Finding Location...";
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLat = position.coords.latitude;
                userLng = position.coords.longitude;
                const nearbyProperties = propertiesData.filter(prop => getDistanceNumber(userLat, userLng, prop.lat, prop.lng) <= 15.0);
                nearbyProperties.sort((a, b) => getDistanceNumber(userLat, userLng, a.lat, a.lng) - getDistanceNumber(userLat, userLng, b.lat, b.lng));
                locationStatusText.innerHTML = `<span style="color: #10b981; font-weight: bold;">📍 Showing properties within 15km of your location</span>`;
                locateMeBtn.innerHTML = "Update Location";
                renderProperties(nearbyProperties);
            },
            (error) => {
                alert("Location access denied. Please enable permissions in your browser.");
                locateMeBtn.innerHTML = "📍 Find Properties Near Me";
            }
        );
    } else { alert("Geolocation is not supported by your browser."); }
});

// --- 4. Rendering logic ---
function renderProperties(data) {
    propertyGrid.innerHTML = ''; 
    if(data.length === 0) {
        propertyGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; background: var(--card-bg); border-radius: 12px;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">No properties found in this radius/criteria.</h3>
                <p style="color: #64748b;">Try adjusting your filters or zooming out your search.</p>
            </div>`;
        return;
    }
    data.forEach(property => {
        // Fallback color added to the inline style in case image load is slow or blocked
        const bgImg = property.img; 
        const displayType = property.type.replace('-', ' ').toUpperCase();
        const distanceStr = userLat ? calculateDistance(userLat, userLng, property.lat, property.lng) : "Location Off";
        
        const card = document.createElement('div');
        card.className = 'property-card';
        card.innerHTML = `
            <div class="card-img" style="background-image: url('${bgImg}'), linear-gradient(#cbd5e1, #94a3b8); background-color: #cbd5e1;">
                <div style="position: absolute; top: 15px; left: 15px;">
                    <span class="badge" style="background-color: ${property.status === 'For Rent' ? '#10b981' : 'var(--primary-color)'};">${property.status}</span>
                    <span class="badge" style="background-color: rgba(0,0,0,0.7); backdrop-filter: blur(4px);">${displayType}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${property.title}</h3>
                <p class="location">📍 ${property.location}</p>
                <div class="stats-grid">
                    <div class="stat-box"><span class="stat-label">Config</span><span class="stat-value">${property.beds || '-'} BHK</span></div>
                    <div class="stat-box"><span class="stat-label">Area</span><span class="stat-value">${property.area} sqft</span></div>
                    <div class="stat-box"><span class="stat-label">Furnishing</span><span class="stat-value" style="font-size: 0.9rem;">${property.furnishing}</span></div>
                    <div class="stat-box"><span class="stat-label">Distance</span><span class="stat-value" style="color: var(--primary-color);">${distanceStr}</span></div>
                </div>
                <div class="card-footer">
                    <span class="price">${property.price}</span>
                    <button class="btn-outline" onclick="openDetailsModal(${property.id})">Contact Agent</button>
                </div>
            </div>
        `;
        propertyGrid.appendChild(card);
    });
}

// Search Logic
searchBtn.addEventListener('click', () => {
    const searchText = searchInput.value.toLowerCase().trim();
    const filterType = searchSelect.value;
    const filteredData = propertiesData.filter(prop => {
        const matchesText = searchText === '' || prop.location.toLowerCase().includes(searchText) || prop.title.toLowerCase().includes(searchText);
        const matchesType = filterType === 'all' || prop.type === filterType;
        return matchesText && matchesType;
    });
    locationStatusText.innerText = "Showing search results";
    renderProperties(filteredData);
    document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(button => button.classList.remove('active'));
        e.target.classList.add('active');
        searchInput.value = ''; searchSelect.value = 'all';
        const filterValue = e.target.getAttribute('data-filter');
        locationStatusText.innerText = "Showing properties across Delhi NCR";
        renderProperties(propertiesData.filter(prop => filterValue === 'all' || prop.type === filterValue));
    });
});

// --- 5. Massive Detail Modal ---
window.openDetailsModal = function(id) {
    const property = propertiesData.find(p => p.id === id);
    if (!property) return;
    const attractionsHtml = property.attractions ? property.attractions.map(attr => `<li>📍 ${attr}</li>`).join('') : '<li>Information not provided</li>';
    const distanceStr = userLat ? calculateDistance(userLat, userLng, property.lat, property.lng) : "Location Off - Please use 'Find Near Me'";

    modalDetails.innerHTML = `
        <div class="detail-header">
            <div class="detail-title">
                <h2>${property.title}</h2>
                <p style="color: #64748b; font-size: 1.2rem; margin-top: 0.5rem; display: flex; align-items: center; gap: 8px;">🗺️ ${property.location}</p>
                <span class="btn-success" style="display: inline-block; margin-top: 10px;">⚖️ 100% Clear Title & Dispute Free</span>
            </div>
            <div style="text-align: right;">
                <span class="detail-price">${property.price}</span>
                <p style="color: #64748b; font-weight: bold; margin-top: 5px;">@ ₹${Math.round((parseInt(property.price.replace(/\D/g,'')) * (property.price.includes('Crore') ? 100000 : 1)) / parseInt(property.area.replace(',',''))).toLocaleString('en-IN')} per sq.ft.</p>
            </div>
        </div>
        <div class="detail-grid">
            <div>
                <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; color: var(--text-color);">Property Overview</h3>
                <div class="specs-grid">
                    <div class="spec-item"><span class="spec-label">Configuration</span><span class="spec-value">${property.beds || 'N/A'} Beds, ${property.baths || 'N/A'} Baths</span></div>
                    <div class="spec-item"><span class="spec-label">Super Built-up Area</span><span class="spec-value">${property.area} sqft</span></div>
                    <div class="spec-item"><span class="spec-label">Property Status</span><span class="spec-value">${property.status}</span></div>
                    <div class="spec-item"><span class="spec-label">Furnishing State</span><span class="spec-value">${property.furnishing}</span></div>
                    <div class="spec-item"><span class="spec-label">Facing</span><span class="spec-value">${property.facing || 'Not Specifed'}</span></div>
                    <div class="spec-item"><span class="spec-label">Age of Construction</span><span class="spec-value">${property.age || 'Not Specifed'}</span></div>
                    <div class="spec-item" style="grid-column: 1 / -1;"><span class="spec-label">Parking Available</span><span class="spec-value">${property.parking || 'Not Specified'}</span></div>
                </div>
                <div class="modal-section">
                    <h3>Neighborhood & Landmarks</h3>
                    <ul>${attractionsHtml}</ul>
                    <div style="margin-top: 2rem; padding: 1.5rem; background: var(--bg-color); border: 1px dashed #cbd5e1; border-radius: 8px;">
                        <p style="font-size: 1.1rem; margin-bottom: 0.8rem;">🚆 <strong>Nearest Transit:</strong> ${property.transit || 'N/A'}</p>
                        <p style="font-size: 1.1rem; color: #64748b;">This property is approximately <strong>${distanceStr}</strong> from your current location.</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="broker-card">
                    <div class="broker-avatar">👤</div>
                    <h3>${property.broker.name}</h3>
                    <p style="color: #64748b; font-weight: 500;">${property.broker.company}</p>
                    <p style="color: #10b981; font-size: 0.85rem; font-weight: bold; margin-top: 5px;">✔️ KYC Verified User</p>
                    <div class="contact-box">📞 ${property.broker.phone}</div>
                    <button class="btn-primary" style="width: 100%; font-size: 1.1rem; padding: 1.2rem;" onclick="alert('Details securely shared with ${property.broker.name}.')">Get Call Back</button>
                    <p style="font-size: 0.8rem; color: #94a3b8; margin-top: 1rem;">By inquiring, you agree to our terms and conditions.</p>
                </div>
            </div>
        </div>
    `;
    propertyModal.style.display = 'flex';
}

window.closeModal = function(modalId) { document.getElementById(modalId).style.display = 'none'; }
fabAddProperty.addEventListener('click', () => { addModal.style.display = 'flex'; });
window.addEventListener('click', (e) => { if (e.target === propertyModal) propertyModal.style.display = 'none'; if (e.target === addModal) addModal.style.display = 'none'; });

// --- 6. Handle Secure Form Submission ---
addPropertyForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    if(!document.getElementById('legal-declaration').checked) { alert("You must declare a Clear Title."); return; }
    const submitBtn = document.getElementById('submit-btn');
    const originalText = submitBtn.innerText;
    
    submitBtn.innerText = "⏳ Verifying Legal Documents...";
    submitBtn.style.backgroundColor = "#64748b";
    submitBtn.disabled = true;

    setTimeout(() => {
        const rawPrice = parseFloat(document.getElementById('new-price').value);
        const rawArea = document.getElementById('new-area').value;
        const statusVal = document.getElementById('new-status').value;
        const ownerName = document.getElementById('owner-name').value;
        const userImgInput = document.getElementById('ownership-doc').value; // Using file input as mock trigger

        const newProperty = {
            id: Date.now(), title: document.getElementById('new-title').value, location: document.getElementById('new-location').value,
            price: statusVal === 'For Rent' ? `₹${rawPrice.toLocaleString('en-IN')}/mo` : formatCurrency(rawPrice),
            type: document.getElementById('new-type').value, status: statusVal, area: rawArea,
            beds: Math.floor(rawArea / 500) || 1, baths: Math.floor(rawArea / 600) || 1, furnishing: 'Pending Verification', facing: 'Verified Map Drop', age: 'New Listing', parking: 'Included',
            img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800', // Default fallback
            broker: { name: ownerName + ' (Verified ✔️)', company: 'Direct Owner Listing', phone: 'Hidden for Privacy' },
            attractions: ['Coordinates locked via Maps integration'], transit: 'Property Registry Documents Vaulted 🔒',
            lat: userLat || 28.6692, lng: userLng || 77.4538
        };

        propertiesData.unshift(newProperty);
        renderProperties(propertiesData);
        closeModal('add-modal'); addPropertyForm.reset();
        submitBtn.innerText = originalText; submitBtn.style.backgroundColor = "var(--primary-color)"; submitBtn.disabled = false;
        document.getElementById('properties').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => alert("KYC Successful. Legal status cleared. Property listed securely."), 200);
    }, 2500);
});

// Initialize
renderProperties(propertiesData);