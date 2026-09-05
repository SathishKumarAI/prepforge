---
qid: ing_89e3fcfdc6__eli5__local
question: 'Explain: Token Bucket — Rate Limiting Algorithms Explained with Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 238
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:15:14-05:00'
sources: []
---

Imagine you’re at a lemonade stand that only wants to serve a few customers per minute so the sugar doesn’t run out.  
A **token** is like a “ticket” that lets someone buy a cup. The stand has a small bucket that can hold, say, 5 tickets. Every time a customer arrives, they need one ticket (token) to get lemonade. If the bucket is empty, the customer must wait until new tickets appear.

Tickets are added to the bucket at a steady **rate** (e.g., 1 per second). The bucket never holds more than its capacity; extra tickets that would overflow simply disappear. When a customer buys a cup, one ticket is removed. If a burst of customers comes in, they can use all the tickets already in the bucket, but after that, they must wait for new ones to replenish.

This “token bucket” keeps traffic smooth: it allows short bursts (the bucket’s capacity) while enforcing an overall average limit (the refill rate).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
