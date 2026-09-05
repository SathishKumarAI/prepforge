---
qid: ing_34b2f6b9c1__star__local
question: 'Explain: CAP theorem — GitHub - donnemartin/system-design-primer: Learn
  how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 299
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:50-05:00'
sources: []
---

**Situation:** While leading the backend redesign for a new code‑hosting platform similar to GitHub, our data store was experiencing inconsistent performance: user profile lookups lagged during peak hours while the commit history remained fast.

**Task:** I needed to decide how to structure the distributed database so that we could keep latency low for read‑heavy operations (profile views) without sacrificing availability when nodes failed.

**Action:** I applied the CAP theorem by mapping our priorities: consistency was less critical for profile data, but availability and partition tolerance were essential. We chose a CRDT‑based key‑value store for profiles, allowing eventual consistency across shards while keeping reads local. For commit history we used a strongly consistent relational cluster with synchronous replication, because any stale version could break CI pipelines. I also introduced a read‑replica layer behind a load balancer to keep latency under 50 ms and wrote a monitoring script that auto‑shifts traffic away from nodes flagged as partitioned.

**Result:** Read latency dropped from 350 ms to 45 ms during peak loads, uptime stayed above 99.9%, and developers reported fewer merge conflicts. I learned that the CAP theorem is not just theoretical—it guides concrete trade‑offs in real systems design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
