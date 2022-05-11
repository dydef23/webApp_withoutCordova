var routes = [
  // Index page
  {path: '/', componentUrl: 'pages/home.html'},
  {path: '/film/', componentUrl: 'pages/film.html'},
  {path: '/dfilm/', componentUrl: 'pages/detailfilm.html'},
  {path: '/mod/', componentUrl: 'pages/modul.html'},
  {path: '/dlokal/', componentUrl: 'pages/datalokal.html'},
  {path: '/addlokal/', componentUrl: 'pages/tambahdata.html'},
  {path: '/manlokal/', componentUrl: 'pages/keloladata.html'},
  {path: '/apipbl/', componentUrl: 'pages/apipublic.html'},
  {path: '/apipvt/', componentUrl: 'pages/apiprivate.html'},
  {path: '(.*)', url: 'pages/404.html',}

];
 