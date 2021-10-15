class Errors {
	constructor() {
		this.errors = {};
	}
	record(data) {
		this.errors = Object.assign({}, data);
	}
	get(field) {
		if(this.errors[field]) {
			// add for each loop
			return this.errors[field][0]; 
		}
	}
	clear(field) {
		if(field) {
			delete this.errors[field];
			return;
		}
		this.errors = {};

	}
	has(field) {
		return this.errors.hasOwnProperty(field); 
	}
	any() {
		return Object.keys(this.errors).length > 0; 
	}
}


class Form {
	constructor(data) {
		this.originalData = data;
		for(let field in data) {
			this[field] = data[field];
		};
		this.errors = new Errors();
		this.isLoading = false;
	}
	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}
    	this.errors.clear();
	}
	data() {
		let data = {};
		for(let field in this.originalData) {
			data[field] = this[field];
		}
		return data;
	}
	submit(requestType, url) {
		this.isLoading = true;
		return new Promise((resolve, reject) => {
			axios[requestType](url, this.data())
				.then(response => {
					this.onSuccess(response);
					resolve(response);
				})
				.catch(error => {
					this.onFail(error);
					reject(error);
				})
		})
	}
	onSuccess(response) {
    	this.isLoading = false;
	    // console.log(response);
	    if(response.status == 200) {
	    	this.reset();
	    }
	}
	onFail(error) {
  	this.isLoading = false;
		let err = Object.assign({}, error.response.data.errors);
	  	this.errors.record(err);
	}
}

export default Form;