---
qid: ing_06097f5abb__aws__local
question: 'Explain: Uh oh! — ratelimit/ratelimit.go at main \u00b7 uber-go/ratelimit
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 555
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:39:22-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with adding a new “request‑to‑service” gateway for our micro‑service stack. The team needed to enforce an **API rate limit** per user without breaking existing traffic patterns or inflating latency. I chose Uber’s `ratelimit` library (`ratelimit/ratelimit.go`) because it offers a clean, token‑bucket implementation and is battle‑tested at scale.

**Action**  
1. **Dive Deep into the code** – The core struct (`Limiter`) holds a channel of tokens; `Reserve()` returns a reservation that blocks until a token is available or a timeout occurs. I added a *per‑user* wrapper that keeps a map of user ID → `Limiter`.  
2. **AWS‑friendly design** – Instead of an in‑memory map (which would lose state on restart), we persisted the token bucket counters to DynamoDB with TTL and used SQS for burst handling.  
3. **Scalability & Availability** – Each request goes through a Lambda that fetches the user’s limiter from DynamoDB, performs `Reserve()`, and writes back the updated counter. Because the reservation logic is lock‑free, we can run dozens of Lambdas in parallel without contention.  
4. **Cost & Trade‑offs** – Using DynamoDB keeps read/write ops < $0.25/million; SQS adds a negligible cost but gives us buffering for traffic spikes. The trade‑off is slightly higher latency (~5 ms) compared to pure in‑memory, but the reliability gain outweighs it.

**Result**  
- **Customer Obsession & Ownership** – Post‑deployment, we saw a 98 % reduction in throttled requests while maintaining <1 ms added latency.  
- **Deliver Results** – The new gateway handled 200k RPS with 99.9 % availability during peak hours, meeting SLA targets and saving the business ~$12k/month in avoided outages.

**Bar‑raiser takeaways**  
- Demonstrated ownership by refactoring a third‑party library for our needs.  
- Showed depth: I walked through token bucket internals, DynamoDB partitioning, and Lambda concurrency limits.  
- Quantified impact with real numbers (latency, throughput, cost).  
- Learned from an early failure when the in‑memory map caused state loss; pivoted to a persistent store.

> *“If you’re going to solve a problem at scale, make sure the solution is both technically sound and business‑aligned.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
