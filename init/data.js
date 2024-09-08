const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Malibu",
    country: "United States" 
  },

  {
     title: "Modern Loft in Downtown",
      description: "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    Image: "https://unsplash.com/photos/a-house-with-a-swimming-pool-in-front-of-it-7ugCvlbjv-E",
    price: 1200,
    location: "New York City",
    country: "United States" 
  },

  {
     title: "Mountain Retreat",
      description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature,   it's a perfect place to recharge.",
    Image: "https://plus.unsplash.com/premium_photo-1682377521697-bc598b52b08a?q=80&w=1515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1000,
    location: "Aspen",
    country: "United States" 
  },

  {
     title: "Historic Villa in Tuscany",
      description: "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    Image: "https://images.unsplash.com/photo-1479642758906-86ea61b235af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 2500,
    location: "Florence",
    country: "Italy" 
  },

  {
     title: "Secluded Treehouse Getaway",
      description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    Image: "https://unsplash.com/photos/a-house-with-a-swimming-pool-in-front-of-it-7ugCvlbjv-E",
    price: 800,
    location: "Portland",
    country: "United States" 
  },

  {
     title: "Luxury Penthouse with City Views",
      description: "Experience luxury living in this modern penthouse offering breathtaking city views from every room.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3000,
    location: "Dubai",
    country: "United Arab Emirates" 
  },

  {
     title: "Charming Cottage in theCountryside",
      description: "Enjoy a peaceful retreat in this charmingcountryside cottage surrounded by rolling hills and forests.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 900,
    location: "Devon",
    country: "United Kingdom" 
  },

  {
     title: "Tropical Villa with Private Pool",
      description: "Relax in this tropical villa featuring a private pool,lush gardens,and luxurious amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Bali",
    country: "Indonesia" 
  },

  {
     title: "Rustic Cabin in the Woods",
      description: "Get back to nature in this rustic cabin,nestled deep in the woods for a secluded,peaceful retreat.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 700,
    location: "Banff",
    country: "Canada" 
  },

  {
     title: "Modern Apartment with Ocean View",
      description: "Enjoy the best of coastal living in this modern apartment with stunning ocean views from the balcony.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1800,
    location: "Sydney",
    country: "Australia" 
  },

  {
     title: "Eco-Friendly Cabin in the Jungle",
      description: "Stay in this eco-friendly cabin located in the heart of the jungle. Perfect for eco-conscious travelers.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "Costa Rica",
    country: "Costa Rica" 
  },

  {
     title: "Luxurious Beachfront Villa",
      description: "Soak up the sun in this luxurious beachfront villa with private beach access and breathtaking views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Maldives",
    country: "Maldives" 
  },

  {
     title: "Chic Studio in the Heart of Paris",
      description: "Explore the beauty of Paris from this chic studio apartment located in the heart of the city.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Paris",
    country: "France" 
  },

  {
     title: "Romantic Hideaway in the Alps",
      description: "Find romance and adventure in this cozy hideaway located in the picturesque Alps.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Zurich",
    country: "Switzerland" 
  },

  {
     title: "Urban Loft with Skyline Views",
      description: "Experience city life in this trendy urban loft with stunning skyline views and modern amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "San Francisco",
    country: "United States" 
  },

  {
     title: "Traditional Riad in Marrakech",
      description: "Experience the charm of Morocco in this traditional riad located in the heart of Marrakech.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Marrakech",
    country: "Morocco" 
  },

  {
     title: "Gorgeous Villa in Santorini",
      description: "Enjoy stunning sunsets and luxury living in this gorgeous villa located in beautiful Santorini.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2700,
    location: "Santorini",
    country: "Greece" 
  },

  {
     title: "Contemporary Art House in Berlin",
      description: "Immerse yourself in art and culture in this contemporary house featuring unique art pieces and modern design.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Berlin",
    country: "Germany" 
  },

  {
     title: "Quaint Cottage by the Lake",
      description: "Relax by the lake in this quaint cottage with picturesque views and cozy interiors.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 850,
    location: "Lake Tahoe",
    country: "United States" 
  },

  {
     title: "Stylish Urban Apartment",
      description: "Stay in style in this chic urban apartment with sleek design and modern amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Los Angeles",
    country: "United States" 
  },

  {
     title: "Elegant Apartment in Rome",
      description: "Discover the beauty of Rome from this elegant apartment,blending modern comforts with classic charm.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Rome",
    country: "Italy" 
  },

  {
     title: "Peaceful Retreat in the Highlands",
      description: "Escape to the highlands for a peaceful retreat in this charming and serene home.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1100,
    location: "Scotland",
    country: "United Kingdom" 
  },

  {
     title: "Chic Condo in Miami",
      description: "Enjoy the vibrant city life in this chic condo with modern design and great amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Miami",
    country: "United States" 
  },

  {
     title: "Picturesque Chalet in Switzerland",
      description: "Experience the beauty of Switzerland in this picturesque chalet surrounded by stunning mountain views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Zermatt",
    country: "Switzerland" 
  },

  {
     title: "Sophisticated City Loft",
      description: "Stay in sophistication with this city loft featuring modern decor and stunning city views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1400,
    location: "Chicago",
    country: "United States" 
  },

  {
     title: "Sumptuous Villa in the Caribbean",
      description: "Relax in luxury at this sumptuous villa in the Caribbean with stunning ocean views and top-notch amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3200,
    location: "Barbados",
    country: "Barbados" 
  },

  {
     title: "Urban Retreat in Tokyo",
      description: "Experience the energy of Tokyo from this modern urban retreat with sleek design and city views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1700,
    location: "Tokyo",
    country: "Japan" 
  },

  {
     title: "Elegant Mansion in the Hamptons",
      description: "Experience elegance and luxury in this grand mansion located in the prestigious Hamptons area.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Hamptons",
    country: "United States" 
  },

  {
     title: "Artistic Loft in Barcelona",
      description: "Immerse yourself in the artistic vibe of Barcelona in this unique loft with creative decor and modern comforts.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1500,
    location: "Barcelona",
    country: "Spain" 
  },

  {
     title: "Spacious Villa in Dubai",
      description: "Enjoy luxury living in this spacious villa with modern amenities and stunning city views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Dubai",
    country: "United Arab Emirates" 
  },

  {
     title: "Quaint Cottage in New England",
      description: "Experience the charm of New England in this quaint cottage with picturesque views and cozy interiors.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 950,
    location: "New England",
    country: "United States" 
  },

  {
     title: "Grand Villa in the South of France",
      description: "Experience the luxury of a grand villa in the picturesque South of France,  with beautiful gardens and elegant interiors.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2900,
    location: "Nice",
    country: "France" 
  },

  {
     title: "Luxurious Penthouse in Hong Kong",
      description: "Experience luxury and sophistication in this penthouse with stunning views of Hong Kong's skyline.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 3500,
    location: "Hong Kong",
    country: "Hong Kong" 
  },

  {
     title: "Seaside Retreat in Portugal",
      description: "Enjoy a relaxing seaside retreat in this beautiful home with stunning ocean views and modern amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1200,
    location: "Lisbon",
    country: "Portugal" 
  },

  {
     title: "Chic Apartment in Buenos Aires",
      description: "Explore Buenos Aires from this chic apartment featuring modern decor and great amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1300,
    location: "Buenos Aires",
    country: "Argentina" 
  },

  {
     title: "Grand Castle in Scotland",
      description: "Experience the grandeur of a Scottish castle with elegant interiors and stunningcountryside views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4000,
    location: "Scotland",
    country: "United Kingdom" 
  },

  {
     title: "Modern Penthouse in Toronto",
      description: "Enjoy modern luxury in this penthouse with sleek design and stunning city views.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2500,
    location: "Toronto",
    country: "Canada" 
  },

  {
     title: "Beachfront Mansion in the Bahamas",
      description: "Experience ultimate luxury in this beachfront mansion with private beach access and top-notch amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 4500,
    location: "Bahamas",
    country: "Bahamas" 
  },

  {
     title: "Charming Parisian Apartment",
      description: "Experience the charm of Paris in this elegant Parisian apartment with classic design and modern amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 1600,
    location: "Paris",
    country: "France" 
  },

  {
     title: "Exclusive Resort in the Seychelles",
      description: "Enjoy the ultimate tropical getaway at this exclusive resort in the Seychelles with stunning views and luxurious amenities.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 5000,
    location: "Seychelles",
    country: "Seychelles" 
  },

  {
     title: "Contemporary Home in Cape Town",
      description: "Experience contemporary living in this stylish home with modern design and beautiful views of Cape Town.",
    Image: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    price: 2000,
    location: "Cape Town",
    country: "South Africa" }
];
 module.exports = {
   data: sampleListings };