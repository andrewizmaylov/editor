import gql from 'graphql-tag';

export function getLocalUser() {
	const userStr = localStorage.getItem("user");

	if(!userStr) {
		return null;
	}

	return JSON.parse(userStr);
} 

export function login(credentials) {

	return new Promise((res, rej) => {
		axios.post('api/login', credentials)
			.then((response) => {
				res(response.data);
			})
			.catch((err) => {
				// console.log(err.response.data);
				let errors = Object.assign({}, err.response.data);
				console.log(errors);
				rej(errors);
			})
	})
}

export function putUserToLocalStorage(user) {
	localStorage.setItem('user', JSON.stringify(user));
}

export function removeUserFromLocalStorage() {
	localStorage.removeItem('user');
}

export function proceedForm(path) {
	this.form.submit('post', path)
		.then(response => {
			console.log(response.data);
			this.$router.push('account/info');
		})
		.catch(error => {
			console.log(error.response.data);
		});	
}

export function setData(path) {
	axios.get(path)
	  .then(response => {
	  	this.form = new Form(response.data);
	  })
}
// check auth user editor role 
// email, created_at, updated_at, contact, job, authorForCourses, authorForLessons, studentFromCourse, roles, commentsByUser, notifications, passed_tests
export function checkEditor() {
	let response = false;
	if (localStorage.getItem('user')) {
		(JSON.parse(localStorage.getItem('user')).roles).forEach(role => {
			// return true if user is admin with id 1
			if (role.id == 1) {
				// console.log('yes');
				response = true;
			}
		})
	} 
	return response;
}
export function checkVolunteer() {
	let response = false;
	if (localStorage.getItem('user')) {
		(JSON.parse(localStorage.getItem('user')).roles).forEach(role => {
			// return true if user is admin with id 1
			if (role.id == 6 || role.id == 7 ) {
				// console.log('yes');
				response = true;
			}
		})
	} 
	return response;
}
// show context popup buttons
export function showContent(text, id, coords = null) {
	let popup = document.createElement('div');
			popup.classList.add('absolute', 'rounded','bg-gray-700', 'top-10', 'w-32', 'px-2', 'py-1', 'text-xs', 'text-gray-100', 'z-10', 'shadow', 'transform', 'opacity-90');
			popup.setAttribute('id', `popup_${id}`);
			let popup_text = document.createElement('span');
					popup_text.innerHTML = text;
			popup.appendChild(popup_text);

			if (coords) {
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

export function upperCaseFirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function home() {
  Router.push({name: 'courses_all'});
  document.getElementById('side_menu').classList.add('hidden');
}

export function translate ( str ) {
    
    var ru = {
        'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 
        'е': 'e', 'ё': 'e', 'ж': 'j', 'з': 'z', 'и': 'i', 
        'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 
        'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u', 
        'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch', 'ш': 'sh', 
        'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'u', 'я': 'ya'
    }, n_str = [];
    
    str = str.replace(/[ъь]+/g, '').replace(/й/g, 'i');
    
    for ( var i = 0; i < str.length; ++i ) {
       n_str.push(
              ru[ str[i] ]
           || ru[ str[i].toLowerCase() ] == undefined && str[i]
           || ru[ str[i].toLowerCase() ].toUpperCase()
       );
    }
    
    return n_str.join('');
}

// не пошло. так как аполло не заработал пока что
export function logoutUser() {
	// calculate spended time used twice here and in schoolapp
	// let time = Math.floor(moment().diff(moment(JSON.parse(localStorage.getItem('user')).lastSeen))/1000/60);
	// apollo.mutate({
	// 	mutation: gql`mutation updateTotalTime($id: ID!, $totalTime: Int!) {updateTotalTime(id: $id, totalTime: $totalTime) {id, lastSeen, totalTime}}`,
	// 	variables: {"id": JSON.parse(localStorage.getItem('user')).id, "totalTime": JSON.parse(localStorage.getItem('user')).totalTime+time}
	// })
	// .then( result => {
	// 	console.log('result', result);
		 
	// 	// axios.get('/sanctum/csrf-cookie').then(response => {});
	//   axios.post('/logout')
	//     .then(response => {
 //        console.log('logout user, remove from localStorage', response);
 //        localStorage.removeItem('user');
	// 			window.location.reload();
	//     })
	//     .catch(error => {
 //        console.log(error);
	//     });
	// })
}