---
qid: vq_c3824e4b47__eli5__local
question: What is the definition scope in Python?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 225
total_tokens: 380
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:26:46-05:00'
sources: []
---

Think of a **scope** as a fenced‑in playground inside your code where only certain kids (variables or functions) are allowed to play.  
When you *define* something—say a variable `x` or a function `g()`—you place it in the nearest fence that encloses its line of definition.  

- **Local scope**: Inside a function, only variables created there live; they’re invisible outside.  
- **Global scope**: Outside any function (at the top level), everything you define lives here and can be seen by the whole program.  
- **Enclosing (non‑local) scope**: If one function is inside another, the inner one can see variables from the outer one but not vice versa.

So “definition scope” means *where a name becomes visible* after it’s created. It’s like assigning a toy to a particular playground; only kids in that playground can pick it up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
