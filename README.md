---
---

sandbox
=======

## markdown

README processed by Jekyll into https://cben.github.io/sandbox/README

MathJax loaded in output via Jekyll template `_layouts/math.html`.

  - Delimiters [recognized by kramdown](http://kramdown.gettalong.org/syntax.html#math-blocks):

    inline $$ \frac{kram}{down} $$ ?

    $$ \sum_0^\infty $$

  - Delimiters recognized by MathJax after kramdown processing (defaults, could configure something else):

  inline \\( \frac{kram}{down} \\) ?
  
  \\[ \sum_0^\infty \\]
  
  The backslashes have to be doubled in source to produce `\(` and friends in HTML.
  
  This approach is buggy because kramdown parses all math, e.g. `_` might be treated as italic: \\( a_b + c_d \\)

## LaTeX

Example content taken from Authorea.  Currently only `test.tex` is used.

Compiled via ShareLaTeX's CI: [![PDF Status](https://www.sharelatex.com/github/repos/cben/sandbox/builds/latest/badge.svg)](https://www.sharelatex.com/github/repos/cben/sandbox/builds/latest/output.pdf)

