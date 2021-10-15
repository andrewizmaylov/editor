class PopupMessage {
	constructor(text, id, coords) {
		this.text = text;
		this.id = id;
		this.coord = coords;
		this.count = 0;
	}
	render() {
		let target = document.getElementById(id);
				target.mouseover = () => {
					this.count++;
					if (this.count < 2) {
						showContent(this.text, this.id);

					}
				}
				target.mousleave = () => {
					this.count = 0;
					hideContent(this.id);
				}
	}
	showContent(text, id, coords = null) {
		let popup = document.createElement('div');
				popup.classList.add('absolute', 'rounded','bg-gray-700', 'top-10', 'w-32', 'px-2', 'py-1', 'text-xs', 'text-gray-100', 'z-10', 'shadow', 'transform', 'opacity-90');
				popup.setAttribute('id', `popup_${id}`);
				let popup_text = document.createElement('span');
						popup_text.innerHTML = text;
				popup.appendChild(popup_text);

				if (this.coords) {
					popup.style.left = `${coords[0]-document.getElementById(id).offsetLeft}px`;
				}
				setTimeout(() => popup.style.filter="opacity(100%)", 3000);
				setTimeout(() => popup.style.filter="opacity(0%)", 4000);
		document.getElementById(id).appendChild(popup);
	}
	export function hideContent(id) {
		let popup = document.getElementById(`popup_${id}`);
		if (popup) {
			document.getElementById(id).removeChild(popup);
		}
	}
}

export default PopupMessage