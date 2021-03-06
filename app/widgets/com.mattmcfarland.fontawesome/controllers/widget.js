/**
 * @file widget.js 
 * @namespace Widget
 * @author Matthew McFarland
 * @summary com.mattmcfarland.fontawesome
 * @version 1.2.0
 * @desc Font Awesome Ti.Widget
 * @example <caption>Alloy:</caption>
 * <Widget id = "fa" src = "com.mattmcfarland.fontawesome" />
 * @example <caption>Titanium:</caption>
 * var fa = Alloy.createWidget("com.mattmcfarland.fontawesome");
 * win.add(fa);
 */



// --------------------------------------------
//
// Public Properties (AKA "Members") 
// ============================================

/**
 * @name debugMode
 * @public 
 * @since v1.0.0
 * @memberOf Widget#
 * @type {Boolean}
 *
 * @summary Toggle debugMode.
 * 
 * @default false
 * 
 * @desc 
 * If enabled, prints debug output to console if your log level is at debug. 
 * 
 * @example $.fa.debugMode = true; 
 * 
 */
exports.debugMode; 

/**
 * @name icons
 * @public 
 * @since v1.2.0
 * @type {Object}
 * @memberOf Widget#
 * @summary Set a custom charmap.js file. 
 *
 * @default require(WPATH('icons'));
 * 
 * @desc 
 * Add your own icon character map if you want to use custom icons. 
 * It is recommended that you have a basic understanding of how to add custom fonts with Titanium Alloy.
 * Because Android, IOS, and mobileweb interpret font files differently, you should read up on the custom font docs.
 * Once you put your font files in the proper assets directory, you can must /require/ your character map in your lib folder.
 * 
 * IMPORTANT: Set parse to false for best results.
 * 
 * @example <caption>Titanium:</caption>
 *	var glyph = Alloy.createWidget("com.mattmcfarland.fontawesome");
 *	var glyphicons = require('glyphicons');
 * 	glyph.icons = MyIconFile;
 * 	win.add(glyph);
 * @example <caption>Alloy:</caption>
 *  <Widget id = "fa" src = "com.mattmcfarland.fontawesome" icons = "require('glyphicons')" />
 * 	
 */
exports.icons;

/**
 * @name iconPrefex
 * @public 
 * @memberOf Widget#
 * @since v1.2.0
 * @type {String}
 * 
 * @summary Prefix for parser.
 *
 * @default 'icons.iconPrefix-' ('fa-')
 *
 * @desc 
 * The iconPrefix property declares what the parser should look for when applying icons to View elements.
 * Therefore, it only will parse view elements that have an icon property with the declared value.
 * 
 * > IMPORTANT: This will override any settings in your custom icons.js 
 * 
 * @example <caption>Titanium:</caption>
 *	var glyph = Alloy.createWidget("com.mattmcfarland.fontawesome");
 *	var glyph.iconPrefix = 'glyph-'
 * 	win.add(glyph);
 * 
 * @example <caption>Alloy:</caption>
 *  <Widget src = "com.mattmcfarland.fontawesome" iconPrefix = "glyph-" />
 *  <Label icon = "gylph-star"/>
 * 	
 */
exports.iconPrefix; 

/**
 * @name instaParse
 * @public 
 * @since v1.2.0
 * @type Boolean
 * @memberOf Widget#
 * 
 * @summary Configure if Parser starts immediately.
 * 
 * @default true
 * 
 * @desc 
 * When enabled (and is by default), widget will parse viewport (excluding parent objects!) for icons immediately.
 * If you wish to parse the document at a later time (after data is loaded), set it to false then call the `init()` method. 
 * 
 * @example <caption>Titanium:</caption>
 *	var fa = Alloy.createWidget("com.mattmcfarland.fontawesome");
 *  fa.instaParse = false;
 * 	win.add(fa);
 * 
 * @example <caption>Alloy (index.xml):</caption>
 *	<Alloy>
 *		<Window id = "index">
 *			<Label id = "MyLabel" icon="fa-star"></Label>
 *			<Button id = "MyButton" icon="fa-file"></Button>
 *			<Widget id="fa" src = "com.mattmcfarland.fontawesome" instaParse = "false" />
 *		<Window>
 *	</Alloy>
 * @example <caption>Alloy (index.js):</caption> 
 *	$.index.open()
 *	// Do Stuff
 *	// Do More Stuff
 *	// Ok, Now Parse!
 *	$.fa.refresh()
 */
exports.instaParse; 

// --------------------------------------------
//
// Public Methods
// ============================================

/**
 * @public
 * @method
 * @name add(el,icon)
 * @since v1.1.0
 * @memberOf Widget#
 * @summary Add a new Icon
 * 
 * @param {Ti.UI.View} el - Create and Prepend To Target Element (label, button, view, etc)
 * @param {String} icon - font-awesome icon (ie: "fa-flag")
 * 
 * @desc 
 * Adds an Icon to an existing view element and prepends it to the title or text.
 * 
 * @example $.fa.add(MyLabel,"fa-star")
 */
exports.add = function(el,icon) {
	createIcon(el,icon);
};

/**
 * @public 
 * @method 
 * @name remove(el)
 * @since v1.1.0
 * @memberOf Widget#
 * 
 * @summary Remove an Icon
 *
 * @param {Ti.UI.View} el - Removes icon property from target element and from text/title.
 * 
 * @desc 
 * Removes an Icon from an existing view element.
 * 
 * @example $.fa.remove(MyButton)
 * 
 */
exports.remove = function(el) {
	destroyIcon(el);
};


/**
 * @public
 * @method
 * @name change(el,icon)
 * @since v1.1.0
 * @memberOf Widget#
 * 
 * @summary Changes an Icon
 * 
 * @param {Ti.UI.View} el - Element with existing icon property (label, button, view, etc)
 * @param {String} icon - Change existing icon property to (e.g. : "fa-flag")
 * 
 * @desc 
 * Changes an already existing Icon to another Icon on an existing view element.
 * 
 * @example $.fa.change(MyLabel, "fa-flag")  
 */
exports.change = function(el,icon) {
	changeIcon(el,icon);	
};

/**
 * @public
 * @method
 * @name refresh
 * @memberOf Widget#
 * 
 * @summary Parse and apply icons in view.
 * 
 * @desc 
 * Parse existing viewport along with siblings and descendants for icon properties 
 * that only have the proper prefix (default 'fa-'), then apply icons respectivly. 
 * 
 * > IMPORTANT: MUST be ran if instaParse is set to false!
 * 
 * 
 * @example $.fa.refresh();
 */
exports.refresh = function(){applyIcons();};

// --------------------------------------------
//
// Private Methods
// ============================================

/**
 * @private 
 * @since 1.0.0
 * 
 * Find all siblings / children of existing widget and
 * apply icons to any item with 'icon' property containing 'fa-' prefix.
 */
function applyIcons() {
    function updateIcons(children) {
        
        // Iterate tags
        if (children) {
            children.forEach(function (tag) {
                
                // Debugging stuff
                counter++;
                if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  Checking for icon attribute');
                //.../Debugging stuff
                // Add or change Icon if user changes the ['icon'] property.

                
                // If current tag has an icon property
                if (tag['icon']) {
                    var iconChar = icons.charMap[tag['icon']];
                    
                    if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  icon attribute found. value is "'+tag['icon']+'"');
                                        
                    //Only handle icons that use 'fa-' prefix					
                    if (tag['icon'].substring(0, 3) === "fa-") {
                        
                        if (debugMode) Ti.API.debug('['+counter+'] ('+tag['id']+')  fa- prefix found');
                        
                        addIcon(tag,iconChar);
                    }
                }
                // think about the children!
                updateIcons(tag.views || tag.children);
            });
        }
    }
    // initial call, wrap in an array
    updateIcons([__parentSymbol]);
}

/**
 * @private 
 * @since v1.1.0
 * 
 * Remove an Icon from a view, then remove any special characters (which are hopefully icon!) from text/title
 * @param {Ti.UI.View} tag - view element to remove..
 */
function removeIcon(tag) {
	if (tag.icon) tag.icon = '';
	if (tag.text) tag.text = removeChars(tag.text);
	if (tag.title) tag.text = removeChars(tag.title);	
}

/**
 * @private 
 * @since v1.1.0
 * 
 * Helper: Remove special characters
 * 
 * @param {String} string - REGEX this.
 * @returns {String} new string without special characters.
 */
function removeChars(string) {
	return string.replace(/[^\w\s]/gi, '');
}

/**
 * @private 
 * @since v1.0.0
 * 
 * Adds Icon to tags text/title, set font property and preserve font sizing.
 * 
 * @param {Ti.UI.View} tag - View elem to add to
 * @param {String} iconChar - Font Character String
 */
function addIcon(tag,iconChar) {
	
    // Set title/text caches to hold icon character.
    var aText = iconChar;
    var aTitle = iconChar;
    var fSize = icons.defaultSize;
    
    // Preserve existing text and title properties, if they exist.
    // by appending original text/title to new text/title that only has icon char. 
    if (tag['text']) aText += ' ' + tag['text'];
    if (tag['title']) aTitle += ' ' + tag['title'];
    
    // Debugging stuff
    if (debugMode) Ti.API.debug('['+counter+'] aText = "'+aText+'"');
    if (debugMode) Ti.API.debug('['+counter+'] aTitle = "'+aTitle+'"');
    
    
    // Preserve existing font size, if it is configured.
    if (tag['font']) {
        if (tag['font']['fontSize']) {
            fSize = tag['font']['fontSize'];
        }
    }
    
    // Configure new properties
    var props = {
        font: {
            fontFamily: icons.fontFamily,
            fontSize: fSize,
        },
        text: aText,
        title: aTitle,
    };
    
    // Apply properties 
    tag.applyProperties(props);
    
    // Debugging stuff
    if (debugMode) {
        Ti.API.debug(tag.getFont()['fontFamily']);
        for (var p in tag) {
            Ti.API.debug('['+counter+'] ('+tag['id']+') {'+p+'} value is "'+tag[p]+'"');
        }
    }
	
}

/**
 * @private 
 * @since v1.1.0
 * 
 * Prepends an Icon to a Ti.UI.View Element.
 * 
 * @param {Ti.UI.View} el - Create and Prepend To Target Element (label, button, view, etc)
 * @param {String} iconName - font-awesome icon string (ie: fa-flag)
 */
function createIcon(el,iconName) {
	el.icon=iconName;
	var iconSyl = icons.charMap[el['icon']];
	addIcon(el,iconSyl);
}


/**
 * @private 
 * @since v1.1.0
 * 
 * Removes .icon property from view and strips from .title or .text property.
 * 
 * @param {Ti.UI.View} el - Remove from Target Element (label, button, view, etc)
 */
function destroyIcon(el) {
    removeIcon(el);	
}


/**
 * @private 
 * 
 * @param {Ti.UI.View} el - Remove & Replace Icon
 * @param {String} iconName - New Icon string.
 */
function changeIcon(el,iconName) {
    removeIcon(el);
	createIcon(el,iconName);
}

// --------------------------------------------
//
// Initialize
// ============================================

var args = arguments[0] || {};
var iconPrefix; var debugMode; var icons; var instaParse; var counter=0;

// Set any initial arguments passed when first created. (fallback on exports)
typeof args.icons		=== 'undefined' ? icons 		= exports.icons		 : icons 		= args.icons;
typeof args.debugMode 	=== 'undefined' ? debugMode 	= exports.debugMode	 : debugMode 	= args.debugMode;
typeof args.iconPrefix 	=== 'undefined' ? iconPrefix 	= exports.iconPrefix : iconPrefix 	= args.iconPrefix;
typeof args.instaParse 	=== 'undefined' ? instaParse 	= exports.instaParse : instaParse 	= args.instaParse;

// Prefix Fallback to icons object if nothing declared here.
if (typeof icons 		=== 'undefined') { icons = require(WPATH('icons')); }
if (typeof iconPrefix   === 'undefined') { iconPrefix = icons.prefix; }
if (typeof iconPrefix 	=== 'undefined') { iconPrefix = 'fa-'; }
if (typeof debugMode 	=== 'undefined') { debugMode = false; }
if (typeof instaParse 	=== 'undefined') { instaParse = true; }

// Start
if (debugMode) Ti.API.debug('Font Awesome widget.js is active');
if (instaParse) { applyIcons(); }