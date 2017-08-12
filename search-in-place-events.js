// Search-in-Place

// Search-in-Place has loaded
document.addEventListener('mindtouch-web-widget:search:loaded', (ev) => {

  // a reference to the loaded touchpoint (object)
  const search = ev.data.widget;

  // the unique embed id (string) of the loaded touchpoint
  const embedId = ev.data.embedId;

  // the embed id can optionally be used to match a load event to a specific embed code
  if(embedId === 'a0252feacde0956a0b11e41fcdb8ca560db6d46bff386c5e36d3da25ad005606') {
  
    // do something...
  }
  
  // setting the search query string will trigger auto search
  search.searchQuery = 'this is my query';
});
          
// Search-in-Place has completed a search
document.addEventListener('mindtouch-web-widget:search:search-completed', (ev) => {
  
  // the unique embed id (string) of the touchpoint that completed the search
  const embedId = ev.data.embedId;
    
  // the raw search results (array) from the API (immutable)
  const results = ev.data.results;
    
  // collection of html Node objects (array)
  const elements = ev.data.elements;
    
  // manipulate the html to inject link to case buttons or other elements...
  elements.forEach((result) => {
    let link = result.getElementsByTagName('a')[0];
    if(link) {
      let button = document.createElement('button');
      button.appendChild(document.createTextNode('My Link'));
      button.addEventListener('click', () => {
          
        // do something...
      });
    }
    result.appendChild(button);
  });
});
