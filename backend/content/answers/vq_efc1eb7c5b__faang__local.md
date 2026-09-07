---
qid: vq_efc1eb7c5b__faang__local
question: How do you reverse a string without using REVERSE (‘string’) ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 391
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:43-05:00'
sources: []
---

**Clarify**  
We need to return the same characters in reverse order, but we cannot call a built‑in `REVERSE(string)` or equivalent. The input is a single string (ASCII/Unicode) and we should handle empty strings and nulls gracefully.

**Approach**  
1. Convert the string into a character array (or use indexing).  
2. Iterate from the end to the start, appending each character to a new buffer.  
3. Return the buffer as a string.  
This is O(n) time, O(n) auxiliary space (the output itself).

**Depth**  
```python
def reverse_string(s: str | None) -> str:
    if s is None:
        return ""
    chars = list(s)
    rev = []
    for i in range(len(chars)-1, -1, -1):
        rev.append(chars[i])
    return "".join(rev)
```
In Java/C#, use `StringBuilder` instead of a Python list.  
The algorithm uses only the input length and a simple loop; no recursion or extra data structures beyond the output.

**Edge Cases**  
- Empty string → returns empty.  
- Single‑char string → unchanged.  
- Unicode grapheme clusters: this method reverses code points, not user‑visible graphemes (e.g., “🇺🇸” becomes “🇸🇺”). Handling graphemes would require a Unicode library.

**Optimize & Communicate**  
If memory is tight, we can reverse in place on a mutable array (`char[]`) to avoid the extra list. In languages with immutable strings, the output string itself is unavoidable. I’d explain this trade‑off and confirm whether an in‑place mutation is acceptable before proceeding.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
