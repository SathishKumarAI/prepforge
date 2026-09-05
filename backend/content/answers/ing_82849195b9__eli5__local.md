---
qid: ing_82849195b9__eli5__local
question: 'Explain: Load Balancing Algorithms Explained with Code'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 267
total_tokens: 424
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:03:47-05:00'
sources: []
---

Imagine you’re hosting a big party and have several friends (servers) ready to serve snacks. **Load balancing** is the way you decide which friend gets each guest’s order so that nobody gets overwhelmed while others sit idle.

*Round‑Robin* – give orders one by one in turn: A, B, C, A, B, …  
*Least‑Connection* – always hand the next order to the friend who’s currently serving the fewest guests.  
*Weighted* – if Friend B can serve twice as fast, you let them take two orders for every one of the others.

```python
# simple round‑robin in Python
servers = ['A', 'B', 'C']
def next_server(i):
    return servers[i % len(servers)]

orders = range(10)          # 10 guests
for i, _ in enumerate(orders):
    print(f"Guest {i} → Server {next_server(i)}")
```

Just like the party, a good load‑balancing algorithm keeps all servers busy and prevents any single one from becoming a bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
