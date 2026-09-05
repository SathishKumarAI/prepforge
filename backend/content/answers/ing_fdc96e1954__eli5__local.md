---
qid: ing_fdc96e1954__eli5__local
question: 'Explain: Non-Functional Requirements: — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 270
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:16:57-05:00'
sources: []
---

Imagine you’re running a massive relay race where each runner (a server) must pick up and hand off the baton (a job) to the next runner without dropping it or getting stuck in traffic. The *non‑functional requirements* are the rules that keep this race smooth, even if the track stretches across continents.

1. **Reliability** – If one runner slips, the baton still reaches its destination; the system must recover automatically and not lose jobs.  
2. **Scalability** – Adding more runners (nodes) should let you finish more races in the same time without slowing anyone down.  
3. **Latency** – The handoff between runners has to be quick; otherwise, the race takes too long.  
4. **Availability** – Even during a power outage at one track segment, other segments keep running so the whole event doesn’t stop.  
5. **Consistency** – Every runner knows exactly who owns which baton and when it’s finished, preventing duplicate finishes or lost work.

These rules ensure that no matter how many runners you add or where they’re located, the relay race (job scheduling) stays fast, fair, and fault‑tolerant.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
