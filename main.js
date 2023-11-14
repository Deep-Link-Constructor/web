function createHeader(title) {
  let header = document.createElement('h1');
  header.textContent = title;
  document.body.appendChild(header);
}

function createDescription(desc) {
  let description = document.createElement('p');
  description.textContent = desc;
  document.body.appendChild(description);
}

function createLinkElement(name, urlDesktop, urlMobile, icon) {
  let listItem = document.createElement('li');
  let link = document.createElement('a');
  let materialIcon = document.createElement('span');

  materialIcon.classList.add('material-icons');
  materialIcon.textContent = icon || 'link';

  link.href = '#';
  link.appendChild(materialIcon);
  link.append(` ${name}`);
  link.onclick = (event) => openLink(event, urlDesktop, urlMobile);
  listItem.appendChild(link);
  return listItem;
}

function openLink(event, urlDesktop, urlMobile) {
  event.preventDefault();
  let url = isMobileDevice() ? urlMobile : urlDesktop;

  if (url.startsWith('http') || url.startsWith('https')) {
    window.open(url, '_blank');
  } else {
    window.location = url;
    setTimeout(function () {
      if (document.hasFocus()) {
        window.location.href = urlDesktop;
      }
    }, 500);
  }
}

function isMobileDevice() {
  return window.innerWidth < 800 && window.innerWidth < window.innerHeight;
}

function updatePageContent() {
  let params = new URLSearchParams(window.location.search);
  let linkList = document.createElement('ul');
  linkList.classList.add('link-list');
  let hasContent = false;

  params.forEach((value, key) => {
    if (key === 'h1') {
      createHeader(value);
      hasContent = true;
    } else if (key === 'desc') {
      createDescription(value);
      hasContent = true;
    } else if (key.startsWith('cu')) {
      let [customName, customUrl, icon] = value.split('|');
      customUrl = customUrl.startsWith('http') ? customUrl : `http://${customUrl}`;
      linkList.appendChild(createLinkElement(customName, customUrl, customUrl, icon));
      hasContent = true;
    } else if (key in serviceKeys) {
      let service = serviceKeys[key];
      linkList.appendChild(createLinkElement(service.name, service.desktopUrl + value, service.mobileUrl + value, service.icon));
      hasContent = true;
    }
  });

  if (hasContent) {
    document.body.appendChild(linkList);
  } else {
    loadAPIDescription();
  }
}

let serviceKeys = {
  'in': { name: 'Instagram', desktopUrl: 'https://www.instagram.com/', mobileUrl: 'instagram://user?username=', icon: 'photo_camera' },
  'ar': { name: 'ArtStation', desktopUrl: 'https://www.artstation.com/', mobileUrl: 'artstation://', icon: 'brush' },
  'ti': { name: 'TikTok', desktopUrl: 'https://www.tiktok.com/@', mobileUrl: 'tiktok://@', icon: 'video_camera_front' },
  'yo': { name: 'YouTube', desktopUrl: 'https://www.youtube.com/@', mobileUrl: 'vnd.youtube://www.youtube.com/@', icon: 'play_circle' },
  'tw': { name: 'Twitter', desktopUrl: 'https://twitter.com/', mobileUrl: 'twitter://user?screen_name=', icon: 'chat' }
};

updatePageContent();
