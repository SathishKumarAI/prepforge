---
qid: vq_d54026b4d5__aws__local
question: Who do various access methods compare ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 431
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:33-05:00'
sources: []
---

**Situation & Task**  
I was leading the redesign of our recommendation engine’s data store for a global e‑commerce platform that serves ~10 M users/day. The team needed to decide between *sequential scan*, *indexed lookup*, and *hash‑based access* for retrieving user profiles in real time.

**Action (Technical Design)**  
I mapped each method to AWS services:  
- **Sequential Scan** → Amazon S3 + Athena – cheap but 5–10× slower.  
- **Indexed Lookup** → DynamoDB Global Secondary Index (GSI) – 1 ms latency, ~30 % higher cost.  
- **Hash Access** → ElastiCache Redis with key‑value store – <0.5 ms, lowest read cost but required memory budgeting.

I ran a *proof of concept* on a 10 k sample set, measuring CPU, memory, and response time. I also modeled cost per 1 M reads for each option.

**Result (Data‑Driven Impact)**  
The hash approach in Redis reduced latency from 150 ms to **<0.5 ms** (300× faster) and cut read costs by **45 %** versus DynamoDB GSI, while keeping the total infrastructure cost within our $50K/month budget. The solution was deployed with zero downtime and increased click‑through rates by **12 %** in A/B tests.

**Reflection & Learning**  
I owned the decision, dug deep into each service’s pricing model, and validated assumptions through real data – a classic *Bias for Action* and *Dive Deep*. I also documented failure points (e.g., memory spikes) and built automated alerts to prevent regressions. This experience reinforced that choosing the right access method is a blend of customer‑centric latency goals, operational ownership, and cost‑aware engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
