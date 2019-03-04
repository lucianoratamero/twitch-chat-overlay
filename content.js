

var extensionDocument = document.createElement('iframe');
extensionDocument.frameBorder = 0;
var channelInput = document.createElement('input');
channelInput.placeholder = 'Channel name (ninja, e.g.)';

var changeChannel = function(channel){
  var url = window.location.protocol + "//www.twitch.tv/embed/" + channel + "/chat";
  document.querySelector('.twitch-chat-overlay iframe').src = url;
}

var getChannel = function(){
  return channelInput.value;
}

var extensionWrapper = document.createElement('div');

var channelInputWrapper = document.createElement('div');
channelInputWrapper.className = 'channel-input-wrapper';

var channelChangeButton = document.createElement('button');
channelChangeButton.innerText = 'Go';
channelChangeButton.onclick = function(){changeChannel(getChannel())};

channelInputWrapper.appendChild(channelInput);
channelInputWrapper.appendChild(channelChangeButton);

extensionWrapper.className = 'twitch-chat-overlay';
extensionWrapper.style.display = 'none';

extensionWrapper.appendChild(channelInputWrapper);
extensionWrapper.appendChild(extensionDocument);

document.body.appendChild(extensionWrapper);
