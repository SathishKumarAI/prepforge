---
qid: ing_c08512bb7e__eli5__local
question: 'What exactly is a Heartbeat? — HeartBeats: How Distributed Systems Stay
  Alive'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 192
total_tokens: 357
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:53-05:00'
sources: []
---

**Heartbeat in a distributed system**

Imagine a group of friends who are planning to meet at a café every morning. Each friend keeps a watchful eye on the others: if one friend is late, they send a quick text saying “I’m still here.” If no message arrives for a while, the rest assume that friend has gone missing and may try to find them or cancel the plan.

In computing, a *heartbeat* works the same way.  
- **Heartbeat** (term): a tiny, regular signal sent from one computer (or node) to another to say “I’m alive.”  
When a node stops sending heartbeats, other nodes know it’s down and can re‑route work or alert someone.

So, a heartbeat is simply a friendly check‑in that keeps the whole distributed system coordinated and healthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
