$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { name: 'Banana', 	colour: 'Yellow', countryOfOrigin: 'Papua New Guinea'		},
  { name: 'Orange',  colour: 'Orange', countryOfOrigin:	'Brazil'},
  { name: 'Lime',	colour: 'Green', countryOfOrigin:	'Spain'	},
  { name: 'Avacado',	colour: 'Green', countryOfOrigin:	'Spain'	}
];



function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: {fruitlist: fruit },
		});
}