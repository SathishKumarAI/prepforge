---
qid: ing_a340d60242__aws__local
question: 'Explain: Polling — Polling vs Webhooks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 420
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:15-05:00'
sources: []
---

**Situation (S)**  
I led a data‑science platform that ingested real‑time model predictions for fraud detection. The legacy system used **polling** every minute to fetch new events from the message queue, causing latency spikes and unnecessary compute.

**Task (T)**  
Reduce end‑to‑end latency by 70 % while cutting AWS costs by at least 30 %.

**Action (A)**  
I proposed switching from polling to **webhooks** via an API Gateway + Lambda integration:

1. **Design** – Each producer sends a POST to an HTTPS endpoint (`/notify`) when new data arrives.  
2. **AWS services** – API Gateway throttles to 5 k req/s, triggers Lambda (Python) that writes the event to DynamoDB and publishes to SNS for downstream workers.  
3. **Scalability & Availability** – API Gateway is fully managed; Lambda scales horizontally with zero provisioning overhead.  
4. **Cost trade‑offs** – Polling incurred ~$0.04 per request *× 10,000* = $400/month in invocations and idle compute. Webhooks eliminated 90 % of those calls, cutting spend to ~$40/month.

**Result (R)**  
Latency dropped from 45 s to <2 s (80 % improvement). Cost fell by **92 %**, freeing budget for model training. The new webhook flow also reduced error rates because the system only processed real events, not stale polls.

> *Leadership Principles:* **Ownership** – I owned the end‑to‑end pipeline; **Dive Deep** – I quantified latency and cost before and after.  
> *Bar‑raiser cues:* Clear ownership, data‑driven impact, deep technical reasoning, and learning: “If we had kept polling, we’d have hit a throttling wall earlier.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
