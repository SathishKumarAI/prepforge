---
qid: ing_adf53913e2__faang__local
question: 'Explain: Explain passed by value and passed by reference.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 484
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:27:58-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain *pass‑by‑value* vs *pass‑by‑reference*—a classic concept that surfaces in ML libraries (e.g., NumPy arrays vs Python lists) and when tuning model hyperparameters. I’ll assume we’re talking about function/method arguments in a language like C++/Java/Python, not just ML code semantics.

**Approach**  
1. Define each term succinctly.  
2. Contrast memory handling (copy vs pointer).  
3. Highlight implications for mutability and performance.  
4. Relate to ML contexts (e.g., data pipelines, model training).  

**Depth**  
- **Pass‑by‑value**: The caller’s argument is copied into the callee’s local variable. Modifications inside the function don’t affect the original object. In C++, primitives and small structs are typical; in Python, immutable types (`int`, `tuple`) behave this way. Complexity: O(n) copy time for a data structure of size *n*.  
- **Pass‑by‑reference**: The callee receives a reference (pointer/alias) to the caller’s object. Changes mutate the original. In C++, references or pointers; in Python, all objects are references but mutation depends on mutability (`list`, `dict`). Complexity: O(1) since no copy is made.  

In ML, passing large tensors by value would be prohibitive; frameworks use reference semantics (e.g., PyTorch’s autograd tracks tensor references). However, for hyperparameters (scalars), pass‑by‑value ensures safety.

**Edge Cases**  
- Immutable objects passed by reference still appear “pass‑by‑value” because mutation isn’t possible.  
- Deep copies vs shallow copies: a referenced object that contains nested mutable structures can still be altered unintentionally if not carefully handled.  

**Optimize & Communicate**  
I’d emphasize the trade‑off: safety (value) vs performance (reference). In practice, ML code opts for reference to avoid memory bloat, but developers must guard against accidental side‑effects using `copy.deepcopy` or immutable wrappers when needed. This demonstrates understanding of both low‑level mechanics and high‑level ML workflow implications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
