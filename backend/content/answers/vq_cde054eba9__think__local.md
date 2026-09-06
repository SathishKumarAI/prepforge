---
qid: vq_cde054eba9__think__local
question: What are built-in types of Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 511
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:23:24-05:00'
sources: []
---

**Metacognitive Blueprint for Answering “What are the built‑in types of Python?”**

1. **Clarify the scope & assumptions**  
   - *Scope*: “built‑in” means those available without importing modules.  
   - *Assumptions*: We’re talking about CPython 3.x (the most common implementation).  
   - *Goal*: List the categories and give concrete examples.

2. **Mental model / framework**  
   Use the official Python documentation’s “Built‑in Types” table as a reference. Group types by their purpose: numeric, sequence, mapping, set, text, binary, callable, etc. This hierarchical view keeps the answer organized.

3. **Step‑by‑step reasoning**  
   - Start with the most fundamental category (numeric) and list all sub‑types (`int`, `float`, `complex`).  
   - Move to containers: sequences (`list`, `tuple`, `range`), text (`str`), binary (`bytes`, `bytearray`, `memoryview`).  
   - Include mappings (`dict`) and sets (`set`, `frozenset`).  
   - Add other special types (`bool`, `NoneType`, `ellipsis`, `NotImplemented`).  
   - Finally, mention the callable object type (`function`, `builtin_function_or_method`), and “class” objects (`type`).  
   - After listing, note that some are *classes* (e.g., `int`) while others are *instances* of those classes.

4. **Common traps to avoid**  
   - Forgetting `bool` is a subclass of `int`.  
   - Mixing up `bytes` vs `bytearray`.  
   - Omitting special singleton types (`None`, `Ellipsis`).  
   - Assuming all “types” are user‑defined classes; some (e.g., `function`) come from the interpreter.

5. **Sanity‑check & communication**  
   - Cross‑verify each type against the official docs or an interactive REPL (`help(type)`).  
   - When explaining, use a concise bullet list and give one example for each category to keep the answer digestible.  
   - End with a brief reminder that Python’s flexibility lets you define new types via classes, but the listed ones are always available out of the box.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
