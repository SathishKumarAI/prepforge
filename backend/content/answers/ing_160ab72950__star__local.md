---
qid: ing_160ab72950__star__local
question: 'Explain: Points of Presence — AWS-Services/AWS-Global-Architecture-Region-AZ.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 335
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:28-05:00'
sources: []
---

**Situation** – In late‑2023 I led the rollout of a real‑time fraud detection service for an online marketplace that operates globally. Our latency SLA was 150 ms end‑to‑end, but our initial tests showed a 250 ms average from users in Asia to our primary US‑East region.  

**Task** – Reduce round‑trip time below the SLA by leveraging AWS Points of Presence (PoPs) and multi‑region architecture while keeping cost under $120K/month.

**Action** – I mapped user traffic using CloudWatch metrics, then added a second PoP in the Asia‑Pacific zone via Amazon Global Accelerator. I deployed stateless Lambda@Edge functions at that PoP to pre‑process events, cache common lookup tables on CloudFront, and route only suspicious transactions to our main Fargate cluster in US‑East. For cross‑region replication I used DynamoDB Global Tables with a write‑once‑read‑many pattern, ensuring eventual consistency without extra API calls.

**Result** – End‑to‑end latency dropped from 250 ms to 110 ms for Asian users, meeting the SLA. Monthly traffic cost increased by only 12% ($13K), and we saw a 35% reduction in fraud‑related false positives due to faster rule evaluation. I learned that strategically placing PoPs can dramatically improve user experience while keeping architecture simple.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
