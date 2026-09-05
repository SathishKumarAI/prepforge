---
qid: ing_c354265d79__eli5__local
question: 'Explain: Message Throughput — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 184
total_tokens: 349
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:45:37-05:00'
sources: []
---

**Message throughput** is how many chat messages a system can move from one user to another every second.  
Think of it like a busy post office: each envelope (message) must be sorted, sent on the right truck, and delivered before the next rush of mail arrives. If the sorting desk is too slow or the trucks are few, the mail backs up—messages pile up, users see delays, and the app feels sluggish.

When you design WhatsApp, you need enough “sorting desks” (servers) and “trucks” (network connections) to keep the flow steady even when millions of people send a flurry of texts at once. This capacity is what we call message throughput; it tells us how many messages per second our system can handle without breaking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
