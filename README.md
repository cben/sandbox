---
---

sandbox
=======

Dummy project to test various aspects of github and integrations with it.

## markdown

README processed by Jekyll into https://cben.github.io/sandbox/README

MathJax loaded in output via Jekyll template `_layouts/default.html`.

Delimiters [recognized by kramdown](http://kramdown.gettalong.org/syntax.html#math-blocks):

inline $$ \frac{kram}{down} \sum_0^\infty $$ text.

$$ \frac{kram}{down} \sum_0^\infty $$

The second is display math because it occurs alone in a block.

See also <katex.md> -> https://cben.github.io/sandbox/katex for using KaTeX instead of MathJax.

<div dir="rtl" markdown="1">

### Dummy PR change

some text added here

### Right-to-left עברית

נזכיר שעקומה מסדר שני היא בעלת מבנה כללי.
$$a_{1,1}x^2+2a_{1,2}xy+a_{2,2}y^2+a_1x+a_2y+a=0$$

**תרגיל**. צייר את העקום $$.4x^2+2\sqrt{3}xy+2y^2-6=0$$

**פתרון** כדי להבין את מבנה העקום נאפס את המקדם של המונום $$xy$$ באמצעות טרנספורמציה מתאימה בין מערכות קורדינאטות. לפי הנוסחא שפיתחנו בהרצאה,תמיד ניתן לסובב את מערכת הקורדינאטות ב $$\theta$$ מעלות נגד כיוון השעון ולקבל מערכת מתאימה $$O'$$ שבה העקום הוא בעל צורה קנונית. ...

</div>

<kbd>C-x</kbd> <kbd>M-c</kbd> <kbd>M-butterfly</kbd>

## LaTeX

Example content taken from Authorea.  Currently only `test.tex` is used.

Compiled via ShareLaTeX's CI: [![PDF Status](https://www.sharelatex.com/github/repos/cben/sandbox/builds/latest/badge.svg)](https://www.sharelatex.com/github/repos/cben/sandbox/builds/latest/output.pdf)
