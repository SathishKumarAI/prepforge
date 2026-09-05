---
qid: ing_e58d854936__eli5__local
question: What do you mean by strict mode in javascript and characteristics of javascript
  strict-mode?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 290
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:30-05:00'
sources: []
---

Imagine a school classroom where everyone follows the same rules so no one can sneak around or make excuses later.  
In JavaScript, **strict mode** is that set of rules you turn on by writing `"use strict";` at the top of a file or function. It forces the code to behave “cleanly” and catches many common mistakes early.

Key characteristics (the classroom rules):

| Rule | What it does |
|------|--------------|
| **No silent errors** | Things that would normally fail quietly now throw an error, so you see problems right away. |
| **Disallow duplicate property names or parameter names** | Prevents accidental overwriting of values. |
| **`this` is `undefined` in plain functions** | Avoids the confusing default binding to the global object. |
| **No octal literals (e.g., `010`)** | Keeps numbers clear and predictable. |
| **`eval()` and `arguments` are restricted** | Reduces potential for code injection or accidental variable leaks. |

Think of strict mode as a “teacher’s eye” that watches every line, making sure students don’t cheat, mix up names, or forget to check their homework before moving on. It makes your JavaScript safer, easier to debug, and future‑proof.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
