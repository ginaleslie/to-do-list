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

const addItems = $(".add-items");
const clearItems = $(".clear-items");
const itemsList = $(".plates");

const items = JSON.parse(localStorage.getItem("items")) || [];
// const dates = JSON.parse(localStorage.getItem("dates")) || [];

function addItem(e) {
	e.preventDefault(); //Default for a form is to reload the page

	const textVal = $("input[name=item]").val();
	const dateVal = $("input[name=date]").val();
	// const dateVal = this.querySelector("[name=date]").value;

	const item = {
		text: textVal,
		date: dateVal,
		done: false,
		//define all item attributes here
	};

	// const date = {
	// 	text: dateVal,
	// 	done: false,
	// 	//define all item attributes here
	// };

	items.push(item);
	// dates.push(date);
	//This adds the newly created item to the items array

	PopulateListWithItems();
	// PopulateDateListWithItems(dateList, dates); //This method will update a list with the data in the items array

	localStorage.setItem("items", JSON.stringify(items));
	// localStorage.setItem("dates", JSON.stringify(dates));

	this.reset();
}

// function MapItemDataToHTMLList(listItem) {
// 	return `
// 	<li>
// 		<label>${listItem.text}</label>
// 	</li>
// 	`;
// }
// function MapItemDataTodateHTMLList(dateItem) {
// 	return `
// 	<li>
// 		<label>${dateItem.text}</label><input type="checkbox" />
// 	</li>

// 	`;
// }

// function PopulateListWithItems(htmlList, listItems = []) {
// 	htmlList.innerHTML = listItems.map(MapItemDataToHTMLList).join("");
// }

function PopulateListWithItems() {
	var taskTemplate = $("#list-template").html();

	var compileTaskTemplate = Handlebars.compile(taskTemplate);

	var html = compileTaskTemplate({
		items: items,
	});

	$("#task-container").empty().append(html);
}

// function PopulateDateListWithItems(dateHtmlList, dateItems = []) {
// 	dateHtmlList.innerHTML = dateItems.map(MapItemDataTodateHTMLList).join("");
// }
function forgetItems(e) {
	localStorage.setItem("items", JSON.stringify([]));
}

// addItems.addEventListener("submit", addItem);
addItems.on("submit", addItem);
clearItems.on("submit", forgetItems);
// clearItems.addEventListener("submit", forgetItems);

PopulateListWithItems();
// PopulateDateListWithItems(dateList, dates);
