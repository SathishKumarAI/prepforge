---
qid: ing_c07150d327__fp__local
question: 'Explain: So here we are moving an indentation — Python Full Course for
  Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 289
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:52:00-05:00'
sources: []
---

In programming languages a **parser** must decide where one statement ends and the next begins.  
C‑style languages solve this with explicit delimiters (`;`, `{}`), but those add noise and clutter the source.  

Python trades a few bytes of syntax for *semantic whitespace*.  
When you write

```python
if x > 0:
    print(x)
```

the parser reads the line `if x > 0:` as a *header* that introduces a block.  
It then scans the following lines; any that are indented relative to the header are treated as belonging to that block, and unindented lines terminate it.  

Mathematically this is just a **prefix‑free grammar**: the indentation level becomes part of the token stream, so the language can be parsed deterministically with a simple stack.  
The stack holds the current indentation depth; each new line pushes or pops as necessary, guaranteeing that nested blocks are correctly matched without extra symbols.

A subtle insight is that this design forces *explicit* block boundaries in the source code, which reduces the chance of “dangling else” bugs and makes the visual structure mirror the logical structure—something that often goes unnoticed when learning Python.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
