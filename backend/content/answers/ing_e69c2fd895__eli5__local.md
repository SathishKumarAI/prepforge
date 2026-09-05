---
qid: ing_e69c2fd895__eli5__local
question: 'Explain: Heartbeat with Quorum — How to Detect Node Failures in Distributed
  Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 234
total_tokens: 398
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:40:17-05:00'
sources: []
---

Imagine a group of friends standing around a campfire. Each friend carries a tiny lantern that must be lit for the fire to stay bright. They agree: as long as at least **half** (a *quorum*) of the lanterns are on, the fire is safe; if fewer than half are glowing, someone’s lantern has gone out and the group knows something is wrong.

In a distributed computer system, every server (“node”) plays the role of a friend. Each node sends a short “heartbeat” message to everyone else at regular intervals—like turning its lantern on. The system keeps track of how many heartbeats it receives from each node in a given window. If fewer than the quorum number of heartbeats arrive for a particular node, the system concludes that node has failed or become unreachable and takes action (such as rerouting work).

So, just as the campfire’s safety depends on enough lanterns staying lit, a distributed system relies on a quorum of timely heartbeats to detect failures reliably.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
