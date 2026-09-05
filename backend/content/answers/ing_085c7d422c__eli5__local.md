---
qid: ing_085c7d422c__eli5__local
question: 'Explain: How It Works : — Load Balancing Algorithms Explained with Code
  (and Visuals)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 302
total_tokens: 468
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:48:57-05:00'
sources: []
---

Imagine a bustling pizza shop that receives orders all the time. The *load balancer* is like the manager who decides which oven each order goes into so every pizza finishes around the same time and no oven sits idle. In computing, a load‑balancing algorithm does exactly this for incoming requests to a server farm.

**Common “oven” rules**

1. **Round‑Robin** – hand the next request to the next server in line, just like passing each new order to a different oven one after another.  
2. **Least‑Connections** – send the request to the oven with the fewest pizzas already baking, keeping all ovens busy.  
3. **Weighted Round‑Robin** – give bigger ovens (more powerful servers) more turns, so they handle more orders.

A simple Python example shows how Round‑Robin chooses the next server:

```python
servers = ["s1", "s2", "s3"]
i = 0

def next_server():
    global i
    srv = servers[i]
    i = (i + 1) % len(servers)
    return srv
```

When a request arrives, `next_server()` tells you which server should process it. Visualizing this as a rotating wheel or a conveyor belt helps see how the load spreads evenly and keeps everything running smoothly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
