$(document).ready(function () {

  $(document).on('click', '.movePage a', function (event) {

    history.pushState(null, null, event.target.href);

    $('body').load(event.target.href+' #wrapper');

    event.preventDefault();
  })

  $(window).on('popstate', function(event){
    $('body').load(location.href+' #wrapper');
  })
});
