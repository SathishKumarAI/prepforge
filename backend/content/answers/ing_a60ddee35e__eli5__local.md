---
qid: ing_a60ddee35e__eli5__local
question: 'Explain: 2.4 Memory Requirements — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 300
total_tokens: 469
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:01:19-05:00'
sources: []
---

Imagine you’re running a busy pizza shop that can only bake a few pies at once, but customers are ordering from all over town. The **load balancer** is like the shop’s front‑door manager who decides which oven (server) each new order goes to.

### Memory Requirements
The manager needs to keep two simple pieces of information in mind:

1. **Current load on each oven** – How many pies are already baking or about to bake?  
2. **Oven capacity limits** – Each oven can only hold a certain number of doughs before it’s full.

When a new order arrives, the manager looks at this “memory” snapshot and picks an oven that still has room. If all ovens are full, the manager may have to tell the customer to wait or queue the order.

So, in designing a load balancer for a system interview:

- **Store** a lightweight record of each server’s current request count (or CPU/memory usage).  
- **Check** that adding one more request won’t exceed the server’s capacity.  
- **Rebalance** by moving new requests to less‑busy servers.

Just like the pizza shop manager, the load balancer keeps a quick mental note of who’s busy and who can take another job—no heavy math needed, just clear, up‑to‑date memory of current loads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
