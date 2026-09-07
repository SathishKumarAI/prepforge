---
qid: ing_e58d854936__faang__local
question: What do you mean by strict mode in javascript and characteristics of javascript
  strict-mode?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 475
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:32:05-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a concise description of *strict mode* in JavaScript and its defining traits. I’ll assume they want the ES5+ syntax, why it matters, and how it changes language semantics.

---

**Approach**  
1. State what strict mode is (a directive that activates a stricter parsing and error‑checking).  
2. List key behavioral differences from non‑strict code.  
3. Highlight its impact on safety, performance, and tooling.  

---

**Depth**

| Feature | Non‑Strict | Strict Mode |
|---------|------------|-------------|
| **Implicit global creation** | `x = 1;` silently creates a global var. | Throws `ReferenceError`. |
| **Assignment to read‑only properties** | Silent failure. | Throws `TypeError`. |
| **Deleting undeletable names** | No error, returns false. | Throws `SyntaxError`. |
| **Duplicate parameter names** | Allowed (ignored). | SyntaxError. |
| **`this` in functions** | Defaults to global object (`window`). | Undefined. |
| **Octal literals** | Parsed as octal. | SyntaxError. |
| **`eval`/`arguments` shadowing** | Permitted. | Prohibited; accessing them throws. |
| **Function name inference** | Functions can be anonymous. | Function declarations inside blocks get names (ES2015). |

Strict mode is enabled via `"use strict";` at the top of a script or function, or by using modules (which are always strict).

---

**Edge Cases**

* Mixed‑mode files: only the parts after the directive are strict; global scope may still be sloppy.  
* Legacy code that relies on implicit globals will break—needs refactoring.  
* Browser support is universal for ES5+, but older engines may ignore the directive.

---

**Optimize & Communicate**

Explain that strict mode helps catch silent bugs early, improves minification safety, and enables better engine optimizations (e.g., faster property access). Conclude by noting that adopting strict mode is a best practice and is automatically enforced in modules, aligning with modern JavaScript development.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
