---
qid: vq_79bf793cbb__fp__local
question: How will you capitalize the first letter of a string?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 403
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:42:15-05:00'
sources: []
---

In Python the task is: **transform a string so that its first code‑point becomes “uppercase” while every other code‑point becomes “lowercase.”**  
The language offers two idioms:

```python
s = s[0].upper() + s[1:].lower()
```

and

```python
s = s.capitalize()
```

Both implement the same semantics, but `capitalize()` is a *single* call that internally performs three operations:

1. **Unicode normalization** – it converts the string to NFC so that composed and decomposed forms are treated consistently.
2. **Case mapping** – using the Unicode case‑mapping tables, the first code point is mapped via `toUpper`, all others via `toLower`.  
   This guarantees correct behaviour for non‑ASCII letters (e.g., “ß” → “Ss”, “ı” → “I”).
3. **Return a new string** – because strings are immutable.

Why not just use slicing? Because the slicing approach fails on Unicode strings that contain combining marks or characters that change case in a locale‑dependent way. `capitalize()` encapsulates these edge cases, ensuring **idempotence** (`s.capitalize().capitalize() == s.capitalize()`) and compliance with the Unicode Standard.

*Non‑obvious insight:* The `capitalize()` method is **not** equivalent to `" ".join(word.capitalize() for word in s.split())`.  
The latter capitalises every word; the former only touches the first code point of the entire string. This subtle distinction matters when normalising multi‑word titles or dealing with languages where the concept of “first letter” differs from the English notion.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
