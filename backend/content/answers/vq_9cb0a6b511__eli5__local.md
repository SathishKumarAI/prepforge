---
qid: vq_9cb0a6b511__eli5__local
question: What is _init_?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 207
total_tokens: 360
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:21:55-05:00'
sources: []
---

Think of a class as a **blueprint for a robot**.  
When you build a robot from that blueprint, the factory needs to give it its name, color, and power level so it can start working right away. In Python, that “factory setup” is the `__init__` method.

`__init__(self)` runs automatically every time you create an instance (`my_robot = Robot()`).  
- **`self`** refers to the new robot itself.  
- Inside `__init__`, you set attributes like `self.name = "R2-D2"` or `self.battery = 100`.  

Without `__init__`, a robot would come out of the factory empty and useless; with it, each robot starts ready for its job. It’s just Python’s way of saying “when I make an object, give it these initial properties.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
