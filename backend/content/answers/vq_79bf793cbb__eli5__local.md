---
qid: vq_79bf793cbb__eli5__local
question: How will you capitalize the first letter of a string?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 231
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:58-05:00'
sources: []
---

Imagine a sentence is like a line of dominoes that all fall in one direction.  
A **string** is just a chain of those dominoes – each letter is one piece.  
If you want the first domino to stand upright while the rest can be anywhere, you “capitalize” it: make its shape the same as an uppercase letter.

In Python, think of a small tool called `upper()` that flips a single domino into its tall version.  
You give the whole chain (`"hello world"`) to the tool and ask only for the first piece:

```python
s = "hello world"
capitalized = s[0].upper() + s[1:]
```

` s[0] ` pulls out the first letter, `.upper()` turns it into “H”, and then you glue the rest of the chain back on.  
Result: `"Hello world"`.  

So you’re simply replacing the first domino with its uppercase cousin while leaving the rest unchanged.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
