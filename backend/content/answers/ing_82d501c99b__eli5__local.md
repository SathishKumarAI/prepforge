---
qid: ing_82d501c99b__eli5__local
question: How do you evaluate a manipulation policy when every trial costs robot time
  and every failure has physical consequences?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 250
total_tokens: 417
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:04:10-05:00'
sources: []
---

Imagine a robot that learns to pick up fragile glass bottles—each attempt takes real time and a dropped bottle can damage the machine or the lab.  
**Policy** (what the robot decides to do each step) is like a pianist’s finger‑movement plan. To judge whether one policy is better than another, we don’t just count successes; we also weigh **costs**: how long it takes and how many bottles break.  

Think of testing two piano scores. One score plays quickly but often hits wrong notes (breaks the bottle), while the other takes longer but rarely misses. The best policy is the one that balances speed with safety, giving the lowest *total expected cost*—the sum of time spent plus a penalty for each break.  

So we run only a few trials, record both “time” and “damage,” and choose the plan that minimizes this combined score. This way the robot learns efficiently without risking too many costly mistakes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
