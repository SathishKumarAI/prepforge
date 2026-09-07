---
qid: ing_8756187dc3__aws__local
question: 'Explain: Latency masking — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 416
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:07-05:00'
sources: []
---

**Situation & Task (Customer Obsession / Ownership)**  
I was tasked to launch a real‑time AI voice assistant for a fintech client whose users demanded < 200 ms end‑to‑end latency. The existing ASR + NLU stack incurred 350 ms due to network hops and CPU serialization.

**Action (Dive Deep / Bias for Action)**  
1. **Redesign the flow**: split the pipeline into two microservices—*Edge ASR* on CloudFront Lambda@Edge and *NLU inference* on an EC2 Auto Scaling group behind an Application Load Balancer.  
2. **Latency masking**: implemented a predictive pre‑fetch buffer that keeps the next utterance’s context ready, so when the user speaks, the NLU is already primed.  
3. **Caching & edge compute**: used Amazon ElastiCache Redis (global replication) to store recent intent vectors; Lambda@Edge invoked it for instant lookup.  
4. **Observability**: added CloudWatch Distributed Tracing and X-Ray to capture per‑segment latency.

**Result (Deliver Results)**  
- Reduced average response time from 350 ms to **115 ms** (68 % drop).  
- User satisfaction score rose from 4.2/5 to 4.8/5, and churn fell by 12 %.  
- Cost per request dropped 22 % thanks to efficient edge caching.

**Learning & Bar‑raiser focus**  
I iterated on the pre‑fetch algorithm after a failure where cache misses caused spikes; this taught me to guard against stale data with TTL policies. The bar‑raiser would note my ownership of end‑to‑end latency, deep dive into microservice boundaries, and quantitative impact on both performance and business metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
