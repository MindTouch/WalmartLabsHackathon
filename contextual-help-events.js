// Contextual Help

// Contetual Help has loaded
document.addEventListener('mindtouch-web-widget:f1:loaded', (ev) => {

  // a reference to the loaded touchpoint (object)
  const f1 = ev.data.widget;

  // the unique embed id (string) of the loaded touchpoint
  const embedId = ev.data.embedId;

  // the embed id can optionally be used to match a load event to a specific embed code
  if(embedId === 'a0252feacde0956a0b11e41fcdb8ca560db6d46bff386c5e36d3da25ad005606') {
  
    // do something...
  }
  
  // providing a URL will open the contextual help dialog.
  // @NOTE the touchpoint will always force the URL to open at the MindTouch-powered site hostname that created it
  f1.open('https://example.com/foo/bar');
});
