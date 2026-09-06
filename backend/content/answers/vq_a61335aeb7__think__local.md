---
qid: vq_a61335aeb7__think__local
question: How to write a Unicode string in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 446
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:08:39-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants to know how to create *Unicode* text in Python code.  
   - Assume they’re using modern Python (≥ 3.x) where all strings are Unicode by default; if they use Python 2, we need a different approach.

**2. Mental model / framework**  
   - In Python 3: `str` objects hold Unicode code points; you simply write the literal or prefix it with `u`.  
   - In Python 2: `unicode` literals are prefixed with `u`; normal string literals (`bytes`) need a `# -*- coding: utf-8 -*-` header and may be encoded.

**3. Step‑by‑step reasoning**  
   1. Show the simplest form: `"text"` (Unicode in Py 3).  
   2. Mention the optional `u"…"`, which is harmless but still valid.  
   3. If they need non‑ASCII characters, explain that source files must be UTF‑8 encoded and optionally declare it with a coding comment.  
   4. For Python 2: illustrate `u"…"` and note the need for a `# -*- coding: utf-8 -*-` header to avoid syntax errors.  
   5. If they want to build Unicode from code points, show `chr()` or `'\uXXXX'` escape sequences.

**4. Common traps to avoid**  
   - Assuming Python 3 needs a `u` prefix; it’s optional but harmless.  
   - Forgetting the source file encoding comment in Python 2 (or when using non‑ASCII).  
   - Mixing byte strings (`b"…"`) with Unicode literals without proper decoding.

**5. Sanity check & verbalize**  
   - Verify that the examples run unchanged in a recent interpreter.  
   - Explain the difference between text (`str`) and binary (`bytes`).  
   - Conclude with a quick note: “In modern Python, just write the string; it’s already Unicode.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
