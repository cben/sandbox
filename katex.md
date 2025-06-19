---
layout: katex
---

{::options math_engine="katex" /}

Test kramdown math -> KaTeX rendering
=====================================

Processed by Jekyll into https://cben.github.io/sandbox/katex

KaTeX loaded in output via Jekyll template `_layouts/katex.html`.

Delimiters [recognized by kramdown](http://kramdown.gettalong.org/syntax.html#math-blocks):

inline $$ \frac{kram}{down} \sum_0^\infty $$ text.

$$ \frac{kram}{down} \sum_0^\infty $$

The second is display math because it occurs alone in a block.

### Test literals

Are math-like sequences inside literals correctly left alone?  Or did https://github.com/gettalong/kramdown/issues/626 break that?
`dollar: $ x^y $ dollars: $$ a^b $$ backslash-paren: \( c^d \)`

```
backslash-bracket: \[ e^f \]
dollars alone:

$$ g^h $$
```
