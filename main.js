// Retrieve the template data from the HTML (jQuery is used here).
var template = $("#handlebars-demo").html();

// Compile the template data into a function
var templateScript = Handlebars.compile(template);

var context = {
	title: "To do list",
};

// html = 'My name is Ritesh Kumar. I am a developer.'
var html = templateScript(context);

// Insert the HTML code into the page
$("#title-heading").append(html);

var addItems = $(".add-items");
var clearItems = $(".clear-items");
var itemsList = $(".plates");

var items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
	e.preventDefault();
	var textVal = $("input[name=item]").val();
	var dateVal = $("input[name=date]").val();
	// var dateVal = this.querySelector("[name=date]").value;

	var item = {
		text: textVal,
		date: dateVal,
		done: false,
		//define all item attributes here
	};

	items.push(item);

	PopulateListWithItems();

	localStorage.setItem("items", JSON.stringify(items));

	this.reset();
}

function PopulateListWithItems() {
	var taskTemplate = $("#list-template").html();

	var compileTaskTemplate = Handlebars.compile(taskTemplate);

	var html = compileTaskTemplate({
		items: items,
	});

	$("#task-container").empty().append(html);
}

function forgetItems(e) {
	localStorage.setItem("items", JSON.stringify([]));
}

addItems.on("submit", addItem);
clearItems.on("submit", forgetItems);

PopulateListWithItems();
