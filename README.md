---
---

sandbox
=======

Dummy project to test various aspects of github and integrations with it.

Testing [abuse of relative links to link to issues](http://stackoverflow.com/a/20829706/239657): [#1](/../../issues/1).

## markdown

README processed by Jekyll into https://cben.github.io/sandbox/README

MathJax loaded in output via Jekyll template `_layouts/default.html`.

Delimiters [recognized by kramdown](http://kramdown.gettalong.org/syntax.html#math-blocks):

inline $$ \frac{kram}{down} \sum_0^\infty $$ text.

$$ \frac{kram}{down} \sum_0^\infty $$

The second is display math because it occurs alone in a block.

See also <katex.md> -> https://cben.github.io/sandbox/katex for using KaTeX instead of MathJax.

<div dir="rtl" markdown="1">

### Links in SVG?
<img src='https://g.gravizo.com/svg?
 digraph G {
    link [shape=box; URL="http://google.com"];
  }
'>

### Right-to-left עברית

נזכיר שעקומה מסדר שני היא בעלת מבנה כללי.
$$a_{1,1}x^2+2a_{1,2}xy+a_{2,2}y^2+a_1x+a_2y+a=0$$

**תרגיל**. צייר את העקום $$.4x^2+2\sqrt{3}xy+2y^2-6=0$$

**פתרון** כדי להבין את מבנה העקום נאפס את המקדם של המונום $$xy$$ באמצעות טרנספורמציה מתאימה בין מערכות קורדינאטות. לפי הנוסחא שפיתחנו בהרצאה,תמיד ניתן לסובב את מערכת הקורדינאטות ב $$\theta$$ מעלות נגד כיוון השעון ולקבל מערכת מתאימה $$O'$$ שבה העקום הוא בעל צורה קנונית. ...

</div>

<kbd>C-x</kbd> <kbd>M-c</kbd> <kbd>M-butterfly</kbd>

## Nested fenced blocks

`````markdown
Foo:
```ruby
block.parents.map {|b| b.language}
```
bar.
`````

---

 ## This is a `##` header(?) prefixed with a space, let's see if it counts as header?

## LaTeX sync playground

As of 2015–2016 my recommendadion for collaborative LaTeX editing is [Overleaf](https://overleaf.com) (former WriteLaTeX).
It has real-time collaborative editing but you can also [work offline using Git][1].

For co-authors that want to work offline / use their favorite editor, but that don't want to learn Git, Github is a good place because any github repo can transparently also be cloned over SVN!

But then what if you want to also edit offline?

- You can push/pull local clone to both overleaf and github.
  Tip: overleaf creates git commits when you save in overleaf UI, but also on demand when you `git fetch` / `git pull`.  So `git fetch` frequently to force more history :-)

- https://ShareLaTeX.com supports direct github sync.  (ShareLaTeX is mostly open source but this feature isn't.)  TODO: try it.

- I've enabled github sync for this repo on Authorea.
  **That's where all the .tex files come from** (and `layout.md` which is not really markdown but list of files).

[1]: https://www.overleaf.com/blog/195-new-collaborate-online-and-offline-with-overleaf-and-git-beta

P.S. shameless plug: if anybody is reading this and looking for collaborative *markdown* editing with math, try https://Mathdown.net.

----

- Testing push via svn with master configured "Protect this branch", "Include administrators".
