---
qid: vq_dbe5dec1e5__eli5__local
question: Is there an inherent do-while loop in Python?
topic: Python
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 224
total_tokens: 382
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:30:46-05:00'
sources: []
---

Python doesn’t have a special **do‑while** keyword like some other languages.  
Think of it as a recipe that “stir until the soup is thick.” In Python you write the same recipe twice: first you stir (run the code once), then you keep stirring while the soup’s thickness is too low.

So you use an ordinary `while` loop but place the test **after** the block:

```python
while True:
    do_something()          # run at least once
    if not condition():     # stop when the condition is false
        break
```

Here “break” ends the loop.  
The only terms you need to know:  

- **`while`** – runs a block repeatedly as long as a test is true.  
- **`break`** – stops the current loop immediately.

That’s how Python mimics a do‑while: run once, then keep looping until the condition fails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
