function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.activeTab');

  // deactivate existing active tab and panel
  // for( let i = 0; i < activeTabs.length; i++) {
  //   activeTabs[i].className = activeTabs[i].className.replace('active', '');
  // }

  activeTabs.forEach(function (tab) {
    tab.className = tab.className.replace('activeTab', '');
  });

  // activate new tab and panel
  event.target.parentElement.className += ' activeTab';
  document.getElementById(event.target.href.split('#')[1]).className += ' activeTab';
}

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);