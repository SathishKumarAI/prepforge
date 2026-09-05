---
qid: vq_6b2c8049ce__eli5__local
question: How Python module is imported?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 153
output_tokens: 238
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:14:34-05:00'
sources: []
---

Think of a Python module as a toolbox in your house.  
When you want to use a tool (a function or class), you first **open** the toolbox and pull it out. In code that “opening” is called *importing*.

```python
from math import sqrt   # open the math toolbox, take only sqrt
```

The word *module* means the whole toolbox file (`math.py` in this case).  
When you write `import math`, Python puts the entire toolbox into a special place called **namespace**—a storage area where all the tools are labeled by their names. You then use them with the toolbox name as a prefix:

```python
import math
x = math.sqrt(9)   # math is the toolbox, sqrt is the tool inside
```

If you only need one tool, `from … import …` saves space and lets you call it directly.

So importing is just like pulling a toolbox from your closet into the kitchen so you can use its tools whenever you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
