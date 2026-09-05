---
qid: vq_4bba3a236d__eli5__local
question: How do you unpack a Python tuple object?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 233
total_tokens: 389
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:10:48-05:00'
sources: []
---

Imagine a toy box that holds two toys—one red ball and one blue cube. If you want each toy separately, you open the box and put the first toy in your left hand and the second in your right hand.  
In Python, a **tuple** is like that box: an ordered collection of values that never changes. **Unpacking** means taking those values out into separate variables at once.

```python
# A tuple with two items
pair = (5, "hello")

# Unpack into two names
number, word = pair   # number becomes 5, word becomes "hello"
```

You can also unpack more than two items:

```python
point = (1, 2, 3)
x, y, z = point
```

If the tuple has more or fewer items than variables, Python will raise an error.  
Unpacking is just a quick way to split a fixed set of values into individual names, like pulling each toy out of the box with one gesture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
