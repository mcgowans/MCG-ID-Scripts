// File: shared.jsx
// ---------------------------------------------------------------------
// Description:
// 
// Useful functions that lots of our other scripts need. To access any
// of these functions, please include this file at the start of your
// script. For example, if your script is located at:
// 
// Example/Test.jsx
//
// ...then add the following line near the top of any script that needs
// to refer to it:
//
// #include '../shared.jsx'
// 
// The specific path will change depending on where your script resides.
//
// ---------------------------------------------------------------------




// Function:   PointsToMM
// Purpose:    Converts points to millimeters.
// Parameters:
//      value: a measurement in PostScript points that needs to be
//             converted to millimeters.
// Returns:
//             the millimeter equivalent of the supplied number of points.
// 
// Remarks:
// InDesign functions tend to use PostScript points as their default
// unit of measurement. This function translates the values returned by
// many of the built-in functions to millimeters, which are often easier
// to work with.
//
function PointsToMM(value)
{
	return (value * 25.4 ) / 72;
}

// Function:   MMToPoints
// Purpose:    Converts millimeters to points.
// Parameters:
//      value: a measurement in millimeters that needs to be
//             converted to PostScript points.
// Returns:
//             the points equivalent of the supplied number of millimeters.
// 
// Remarks:
// InDesign functions tend to use PostScript points as their default
// unit of measurement. This function translates millimeter values to
// points so that the built-in functions can be supplied accurate values.
//
function MMToPoints(value)
{
	return (value * 72 ) / 25.4;
}
