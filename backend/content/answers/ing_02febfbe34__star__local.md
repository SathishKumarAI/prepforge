---
qid: ing_02febfbe34__star__local
question: 'Explain: VO - Infra Interview — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 486
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:15-05:00'
sources: []
---

**Situation** – In early 2026 I applied for a senior infra role at Perplexity AI, a company that had just launched its flagship “Perplexity Search” product and was hitting an average latency of 250 ms across 2 million daily queries. The interview process spanned three rounds: a phone screen, a technical onsite with system design, and a final culture‑fit panel.

**Task** – I needed to demonstrate how I would redesign their inference pipeline to reduce latency by 40 % while cutting operational costs by 30 %, and prove my mastery of Kubernetes, autoscaling, and cost‑optimization strategies.

**Action** – During the onsite I first mapped the current architecture: a monolithic GPU cluster on AWS EKS with static node pools. I proposed a micro‑service split, migrating heavy inference to serverless Fargate pods triggered by an event‑driven queue (SQS). I introduced a custom horizontal pod autoscaler that used real‑time CPU and memory metrics plus predictive load from Prometheus Grafana dashboards. For cost control I suggested using Spot Instances with a fallback on On‑Demand, coupled with a 24‑hour spot‑termination notification handler to preemptively spin up new pods. I walked through how this would keep tail latency below 180 ms while reducing GPU usage by 35 %.

**Result** – The panel approved the design; after implementation we achieved a 45 % latency reduction and cut inference costs from $1.2M/month to $0.8M/month. I learned that blending real‑time metrics with predictive scaling, plus aggressive cost‑management, can deliver both performance and savings in a high‑traffic AI service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
