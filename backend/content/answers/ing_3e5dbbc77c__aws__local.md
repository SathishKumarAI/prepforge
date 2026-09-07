---
qid: ing_3e5dbbc77c__aws__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 426
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:47:02-05:00'
sources: []
---

**Scenario (S)**  
At my previous role I led the rollout of a real‑time inference platform for a multimodal AI product that served millions of requests per day. The team debated whether to share GPUs across model instances or keep them isolated.

**Task (T)**  
I had to decide on an architecture that maximized throughput while ensuring consistent latency and avoiding cache contamination between users’ sessions.

**Action (A)**  
1. **Dive Deep into Metrics** – I collected per‑request latency, GPU memory pressure, and KV‑cache hit rates from the last 30 days. The average KV‑cache hit ratio dropped by 18 % when two tenants shared a GPU, directly impacting response time.  
2. **Design Decision** – Adopted *GPU isolation* with one model per GPU instance (using AWS **EC2 G4dn**). For KV cache I used **Amazon Elasticache Redis** per tenant to guarantee session‑level isolation and zero cross‑tenant leakage.  
3. **Cost & Availability Trade‑off** – Calculated that the isolation cost was 12 % higher but reduced SLA violations from 4.6 % to <0.5 %. Leveraged **AWS Auto Scaling** for GPU fleets and used Spot Instances with on‑demand fallback to keep availability >99.9 %.

**Result (R)**  
- Latency improved from 350 ms to 210 ms (40 % reduction).  
- Cache hit ratio rose to 92 %.  
- Customer churn dropped by 3 %, correlating with the higher reliability.

**Reflection**  
I learned that *Customer Obsession* drives us to look beyond raw cost; *Ownership* demanded a data‑driven solution, and *Bias for Action* forced rapid deployment of the isolated architecture. This outcome remains a bar‑raiser in our team’s design reviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
