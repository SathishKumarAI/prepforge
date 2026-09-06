---
qid: vq_a61335aeb7__faang__local
question: How to write a Unicode string in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 447
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:26:30-05:00'
sources: []
---

**Clarify**

You want to create a text value that can represent any character from the Unicode set in Python.  
Assumptions:  
* You’re using Python 3 (Python 2’s `unicode` type is gone).  
* The string will be stored, printed, or written to a file.

**Approach**

1. Declare a literal with a leading `u` or just use a plain string (`''`).  
2. Ensure the source file is encoded in UTF‑8 (the default for Python 3).  
3. If the text comes from an external source, decode bytes using the proper codec.  
4. When writing to disk, specify `encoding='utf-8'`.

**Depth**

```python
# 1. Literal Unicode string
s = "Café"          # UTF‑8 encoded source file

# 2. Bytes → Unicode
raw_bytes = b'Caf\xc3\xa9'
s_decoded = raw_bytes.decode('utf-8')

# 3. Write to a file
with open("out.txt", "w", encoding="utf-8") as f:
    f.write(s)
```

Python’s internal representation is Unicode; all `str` objects are Unicode sequences.  
Complexity: O(n) for operations like concatenation or slicing, where *n* is string length.

**Edge cases**

* Non‑UTF‑8 source files → syntax errors or incorrect characters.  
* Mixing `bytes` and `str` without explicit conversion → `TypeError`.  
* Writing to a file with the wrong encoding (e.g., ASCII) will raise `UnicodeEncodeError`.

**Optimize & communicate**

Explain that in Python 3 you *don’t need* a special `unicode()` constructor; just use plain strings. Emphasize source‑file encoding and explicit decoding/encoding when interfacing with external data, and note that the default UTF‑8 handling keeps code simple and robust. This demonstrates clear problem framing, technical depth, and awareness of pitfalls—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
