let userInputUrl = prompt('Please enter a URL:');

let cleanedUrl = userInputUrl;

if (userInputUrl.startsWith('http://')) {
	cleanedUrl = userInputUrl.substring(7);
} else
	if (userInputUrl.startsWith('https://')) {
		cleanedUrl = userInputUrl.substring(8);
	}

const domainName = cleanedUrl.split('/')[0];
console.log(`Domain name: ${domainName}`);