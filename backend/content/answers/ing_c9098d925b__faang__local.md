---
qid: ing_c9098d925b__faang__local
question: 'Explain: 2019 - string 1982. Python doesn''t know — Python Full Course
  for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 415
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:27:30-05:00'
sources: []
---

**Clarify**  
The interviewee is asking why the expression `2019 - "1982"` fails in Python. The core issue is that one operand is an integer (`int`) and the other a string (`str`). In Python, arithmetic operators like `-` are only defined for numeric types; mixing them with strings raises a `TypeError`.  

**Approach**  
1. Identify data types of operands.  
2. Convert the string to an int (or vice‑versa) before performing subtraction.  
3. Show correct syntax and potential pitfalls.  

**Depth**  
```python
# Wrong: TypeError
# 2019 - "1982"

# Correct: convert string → int
result = 2019 - int("1982")   # result == 37

# Or convert int → str for concatenation, not subtraction
concat = str(2019) + "1982"    # '20191982'
```
Python’s `int()` function parses the decimal string; if the string contains non‑numeric characters or leading/trailing spaces, a `ValueError` is raised. Use `strip()` before conversion to be safe.  

**Edge Cases**  
- Empty string: `int("")` → ValueError.  
- Non‑digit characters: `int("19a2")` → ValueError.  
- Large numbers exceeding memory limits (rare in practice).  

**Optimize & Communicate**  
Explain that type consistency is key; always validate or cast inputs, especially when dealing with user input or data pipelines. In production code, wrap conversion in a try/except to handle malformed data gracefully and log the error for debugging. This demonstrates clean error handling—a trait valued by FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
