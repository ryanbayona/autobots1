const pollUrl =  'https://poll.fm/17221304/embed?fbclid=IwY2xjawTC819leHRuA2FlbQIxMABicmlkETFvdUhVa2RmazhBU0VCU3Juc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpT8h8FHERnj5I_ixAbiACVnYwwS8jUf-sM4-2xYSleN0d2aZ81CxvJFQ2en_aem_GgWpzb1RUPXIjqjSvim9pQ';
let params = {
    p: 17221304,
    b: 1,
    a: 75253678,
    o: '',
    va: 16,
    cookie: 0,  
    tags: '17221304-src:poll-embed',
    n: '',
    url:pollUrl
};
fetch('https://poll.fm/n/4b1edb5ca6983f1f6be1f868d6e68fe6/17221304?'+(new Date).getTime())
  .then(response => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.text();
  })
  .then(text => {
    params.n = text.split(";")[0].split("=")[1].replace(/'/g, '');
    
  }).then(() => {
    let queryString = new URLSearchParams(params).toString();
    let voteUrl = 'https://polls.polldaddy.com/vote-js.php?' + queryString ;

    fetch(voteUrl)
      .then(response => {
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return response.text();
      })
      .then(text => {
        
        if (/thank you for voting/i.test(text ?? '')) {
            console.log('✅ Voted');
        } else {
            console.log('❌ Not counted');
        }
      });
  })
  .catch(err => console.error('Request failed:', err));