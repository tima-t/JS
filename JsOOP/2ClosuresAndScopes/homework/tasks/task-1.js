/* Task Description */
/* 
	*	Create a module for working with books
		*	The module must provide the following functionalities:
			*	Add a new book to category
				*	Each book has unique title, author and ISBN
				*	It must return the newly created book with assigned ID
				*	If the category is missing, it must be automatically created
			*	List all books
				*	Books are sorted by ID
				*	This can be done by author, by category or all
			*	List all categories
				*	Categories are sorted by ID
		*	Each book/catagory has a unique identifier (ID) that is a number greater than or equal to 1
			*	When adding a book/category, the ID is generated automatically
		*	Add validation everywhere, where possible
			*	Book title and category name must be between 2 and 100 characters, including letters, digits and special characters ('!', ',', '.', etc)
			*	Author is any non-empty string
			*	Unique params are Book title and Book ISBN
			*	Book ISBN is an unique code that contains either 10 or 13 digits
			*	If something is not valid - throw Error
*/
function solve() {
	var library = (function () {
		var books = [];
		var categories = [];

		function listBooks(parameter) {
			if (books.length==0 ){
				return books;
			}


			if(typeof parameter.category !=='undefined'){
				return booksByCategory(parameter.category)
			}
			else if(typeof parameter.author!='undefined'){
				return booksByAuthor(parameter.author)
			}


			else{
			return books;
			}
		}

		function addBook(book) {
			if(book.isbn.length>13 || book.isbn.length<10 || !isbnCheck(book)){
				throw new Error("Invalid ISbn");
			}
			if(!TitleCheck(book) || book.title.length<2 || book.title.length>100){
				throw new Error("Invalid Title");
			}
			if(!book.author){
				throw new Error("Invalid Author");
			}
			book.ID = books.length + 1;
			books.push(book);
			if(CategoryCheck(book)) {
				categories.push(book.category);
			}
			if(book.category== undefined){
				book.category='book category1';
			}
			return book;
		}

		function listCategories() {

		return categories.sort(function(a, b){
			if(a>b)  return -1;

			return 0;
		});

		}

		function TitleCheck(book){
			var isUnique=true,
				title=book.title;
	      	isUnique=!(books.some(isEqual));

			function isEqual(el) {
				return el.title == title;
			}

			return isUnique;

		}

		function CategoryCheck(book){
			var isUnique=true,
				category=book.category;
			isUnique=!(categories.some(isEqual));

			function isEqual(el) {
				return el == category;
			}

			return isUnique;

		}
		function isbnCheck(book){
			var isUnique=true,
				ISBN=book.isbn;
			isUnique=! (books.some(isEqual));

			function isEqual(el) {
				return el.isbn == ISBN;
			}

			return isUnique;

		}
		function booksByCategory(category){
			function isCategory(el) {
				return el.category==category;
			}
			return books.filter(isCategory);

		}
		function booksByAuthor(Author){

			function isAuthor(el) {
				return el.author==Author;
			}
			return books.filter(isAuthor);

		}

		return {
			books: {
				list: listBooks,
				add: addBook
			},
			categories: {
				list: listCategories
			}
		};
	} ());
	return library;
}
module.exports = solve;
