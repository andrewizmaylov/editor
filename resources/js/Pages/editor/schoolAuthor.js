export function showAuthorBlock(data) {
  	let author_block = document.createElement('div');
  	author_block.setAttribute("id", "author_block");
  	author_block.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded', 'order-3')
  		// create author content div
	  	let content = document.createElement('div');
	  	content.setAttribute('id', 'author_content');
	  	content.classList.add('mt-4');
	  	// create author header div with title, collapse-btn, remove-btn
  	  let author_header = document.createElement('div');
  	  author_header.classList.add('flex', 'justify-between', 'p-4');

  	    let author_header_title = document.createElement('span');
  	    author_header_title.classList.add('text-xs', 'font-semibold', 'px-2', 'py-1');
  	    author_header_title.innerHTML = "Author info";

  	    // wrapper for 2 btn for flex alignment inside the header
  	    let author_header_block_btn = document.createElement('section');
	  	    let author_header_swap_btn = document.createElement('span');
	  	    author_header_swap_btn.classList.add('px-2', 'py-1', 'hover:bg-gray-400', 'cursor-pointer', 'text-xs', 'font-semibold', 'border', 'border-gray-400', 'rounded', 'mr-4');
	  	    author_header_swap_btn.innerHTML = "Сollapse";
	  	    author_header_swap_btn.addEventListener('click', () => {
	  	    	if (content.classList.contains('hidden')) {
	  	    		content.classList.remove('hidden');
	  	    		author_header_swap_btn.innerHTML = "Сollapse";
	  	    	} else {
		  	    	content.classList.add('hidden');
		  	    	author_header_swap_btn.innerHTML = "Expand";
	  	    	}
	  	    })

	  	    let author_header_delete_btn = document.createElement('span');
	  	    author_header_delete_btn.setAttribute("id", "delete_author_btn");
	  	    author_header_delete_btn.classList.add('px-2', 'py-1', 'bg-red-400', 'hover:bg-red-500', 'cursor-pointer', 'text-xs', 'font-semibold', 'text-white', 'rounded');
	  	    author_header_delete_btn.innerHTML = "Remove";
	  	    author_header_delete_btn.addEventListener('click', () => {
	  	    	document.getElementById('author_btn').classList.remove('hidden');
	  	    	this.author_exists = false;
	  	    	author_block.classList.add('hidden');
	  	    	author_block.remove();
	  	    })

	  	  author_header_block_btn.appendChild(author_header_swap_btn);
	  	  author_header_block_btn.appendChild(author_header_delete_btn);
  	  author_header.appendChild(author_header_title);
  	  author_header.appendChild(author_header_block_btn);

  	author_block.appendChild(author_header);
  	author_block.appendChild(content);

  	    let author_name = document.createElement('div');
  	    author_name.setAttribute("id", "author_name");
  	    author_name.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');
  	    author_name.contentEditable = true;
  	    author_name.innerHTML = data.author ? data.author.name : 'Author name, could be a link to profile on platform';

  	  content.appendChild(author_name);

  	    let author_company = document.createElement('div');
  	    author_company.setAttribute("id", "author_company");
  	    author_company.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');
  	    author_company.contentEditable = true;
  	    author_company.innerHTML = data.author ? data.author.company : 'Company';

  	  content.appendChild(author_company);

  	    let author_position = document.createElement('div');
  	    author_position.setAttribute("id", "author_position");
  	    author_position.classList.add('p-4', 'm-4', 'bg-white', 'border', 'border-gray-400', 'rounded');
  	    author_position.contentEditable = true;
  	    author_position.innerHTML = data.author ? data.author.position : 'position';

  	  content.appendChild(author_position);
  	return author_block;
	}


export function checkAuthorExistsInData(data) {
    if (data.author!== null) {
      author_exists = true;
      return true;
    } else {
      return false;
    }
  }
