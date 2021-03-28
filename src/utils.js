function uuidv4() {
	return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
		(c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
	);
}

function getIcon(url) {
	let icon;
	if (!url) {
		return undefined;
	}
	if (url[0]=="/") {
		icon = url;
	}
	else {
		icon = "/open-iconic/svg/"+url+".svg"
	}
	return icon;
}

function range(start, end, step = 1) {
	const len = Math.floor((end - start) / step) + 1
	return Array(len).fill().map((_, idx) => start + (idx * step))
}

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

export {uuidv4,getIcon,range,pad}