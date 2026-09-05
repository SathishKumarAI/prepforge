---
qid: vq_100394b407__eli5__local
question: What is a dictionary in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 242
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:02:47-05:00'
sources: []
---

Think of a dictionary as a **smart filing cabinet** that keeps pairs of things together: a *key* (the name you use) and a *value* (what the key points to).  
In Python, a dictionary is a built‑in data type that stores these key–value pairs in no particular order. You can quickly look up any value by giving its key, just like pulling out a file by its label.  

- **Key**: The unique identifier you use to access the entry (must be hashable – think of it as a lock that won’t change).  
- **Value**: Whatever data is stored under that key; it can be any Python object.

You create one with curly braces `{}` or `dict()`, add items with `d[key] = value`, and retrieve them with `d[key]`. If the key isn’t present, you get an error unless you use methods like `.get()` which return a default instead. This makes dictionaries ideal for fast look‑ups, counting, grouping, and many other tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
