// File: specialMarks.jsx
// ---------------------------------------------------------------------
// Description:
// 
// Part of the ../shared.jsx shared library.
//
// Provides functions that add special marks to an InDesign document.
//
// ---------------------------------------------------------------------


// ---------------------------------------------------------------------
// Function:   DrawDot
// Purpose:    Draw a filled circle, useful for digital cutter registration
//             marks.
// Prerequisites:
//             Requires an open document.
// Parameters:
//     doc   : The document to add the dot to
//     x, y  : Co-ordinates of the centre of the dot, in document units
//     radius: Radius of the dot to draw, in document units (defaults to 4)
//     page  : Reference to the page to add the dot to (can be a master page;
//             defaults to current page)
//     color : The colour of the dot to draw (defaults to black)
//     layer : The layer to add the dot to (defaults to active layer)
// Returns:
//             Nothing.
// 
// Remarks:
// Some finishing equipment, such as digital cutters and spot-varnish
// machines, need a way to align their files with a printed sheet. Often,
// this is done using printed circles that are picked up by cameras on
// the finishing equipment. This function allows them to be added to an
// InDesign document.
//
function DrawDot(x, y, radius, page, color, layerName)
{
    // Gather other information, and set defaults if not supplied
    page = typeof page !== 'undefined' ? page : app.activeWindow.activePage;
    var doc = page.parent.parent;
    var layer = typeof layerName !== 'undefined' ? doc.layers.item(layerName) : app.activeWindow.activeLayer;
    color  = typeof color  !== 'undefined' ? color  : 'Black';
    page   = typeof page   !== 'undefined' ? page   : app.activeWindow.activePage;
    radius = typeof radius !== 'undefined' ? radius : 4;

    // Add the circle to the given page
    var dot = page.ovals.add({geometricBounds:[y-radius,x-radius,y+radius,x+radius],strokeWeight:0});
    
    // Alter appearance
    var noneSwatch = app.activeDocument.swatches.item("None");
    dot.strokeWeight = 0;
    dot.fillColor = color;
    dot.strokeColor = noneSwatch;
    
    // Set layer
    dot.itemLayer = layer;
}