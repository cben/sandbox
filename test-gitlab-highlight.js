// problem seen on private gitlab Community Edition 10.8.7 eb600b0
// does it still happen on gitlab.com?  yep, Enterprise Edition 11.9.4-ee

// the \\ escapes itself, not the following ', so the `splitToken(token)` line
// should be colored as code, not string.
  
const foo = [
    someCode(),
    'TOKEN="\\',
    splitToken(token),
    '"',
    'bar "$TOKEN"',
];

moreCodeColoredAsString();
