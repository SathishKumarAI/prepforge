---
qid: ing_38062e65a3__star__local
question: 'Explain: NFR — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 347
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:20:17-05:00'
sources: []
---

**Situation**  
At a mid‑size startup, we were tasked to launch a new photo‑sharing feature that could rival Instagram’s fast feed. The design team raised concerns: the user base would grow from 2 M to 20 M in six months, and every image upload had to be processed within two seconds.

**Task**  
I had to translate those performance, reliability, and usability expectations into concrete Non‑Functional Requirements (NFRs) that the engineering team could measure and ship against.

**Action**  
First, I drafted a requirements matrix: latency < 2 s for 95 % of uploads, uptime ≥ 99.9 %, data consistency across three geo‑regions with eventual sync lag < 5 min, and scalability to support 10k concurrent uploads. I then mapped each NFR to tools—using AWS CloudWatch for real‑time latency metrics, DynamoDB Global Tables for multi‑region replication, and a CDN edge cache for static image delivery. We ran load tests with Locust, simulated 15 k rps, and iterated on auto‑scaling policies until the target SLA was met.

**Result**  
The feature launched on schedule; average upload latency dropped to 1.4 s, uptime hit 99.95 %, and we handled a sudden spike of 18 M users in a week without outages. I learned that framing NFRs as measurable, trade‑off‑aware metrics turns abstract quality goals into engineering checkpoints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
