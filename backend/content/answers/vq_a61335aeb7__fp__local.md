---
qid: vq_a61335aeb7__fp__local
question: How to write a Unicode string in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 406
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:49:48-05:00'
sources: []
---

**Why you need a special notation**

Python 3’s `str` type stores Unicode code points; the interpreter has to know *how* a literal in your source file should be mapped to those code points.  
When you write `"é"` the bytes that make up the source file (usually UTF‑8) are first decoded by the interpreter into characters. If the file contains non‑ASCII symbols, the interpreter must be told what encoding the file uses; otherwise it falls back to ASCII and raises a `SyntaxError`.  

**How it works**

```python
# -*- coding: utf-8 -*-
msg = "Hello, 世界"          # literal is decoded from UTF‑8 into Unicode code points
```

* The line at the top (`coding:`) declares the source file’s encoding.  
* The interpreter reads each byte sequence, decodes it using that encoding, and stores the resulting characters in a `str`.  

If you omit the declaration, Python assumes ASCII; any non‑ASCII byte triggers an error. If you want to embed Unicode programmatically, use escape sequences:

```python
msg = "Hello,\u4e16\u754c"   # same as above but explicit code points
```

**Non‑obvious insight**

The *only* reason Python needs a `coding:` line is that the source file itself may be encoded in *any* byte sequence. Once decoded, the string object is just Unicode; no special “Unicode literal” syntax (like `u"…"`) is required in Python 3—`str` always holds Unicode. Thus the prefix exists only for historical compatibility with Python 2 where `unicode` and `bytes` were distinct.  

In practice: declare the file encoding, write your text directly, and you’re done.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
