---
qid: ing_bd849e169a__aws__local
question: 'Explain: Caching — Llm Gateway And Serving Platform'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:31:54-05:00'
sources: []
---

**Situation / Task**  
While leading the AI‑Ops team at a fintech startup, we needed to expose a large LLM (OpenAI‑based) to 10k concurrent users in real time. Latency above 400 ms caused churn and regulatory audit risk.

**Action**  
I architected a **LLM Gateway & Serving Platform** with an edge‑caching layer:

1. **API Gateway + Lambda@Edge** – front‑end routing, request validation, throttling (5 req/s per user).  
2. **Redis‑on‑ElastiCache** as a short‑lived cache (TTL 30 s) for identical prompts; hit ratio target: 70%.  
3. **Amazon SageMaker Endpoint** (multi‑model) behind an Application Load Balancer, auto‑scaling on CPU/Inference latency.  
4. **AWS Step Functions** orchestrate fallback to the cloud‑based LLM when cache misses exceed 5 % or TTL expires.

I used CloudWatch metrics and X-Ray tracing to iterate: hit ratio improved from 30% → 72%, average latency dropped from 600 ms to 210 ms, and cost per inference fell by **45 %** (from $0.12 to $0.066).

**Result**  
The platform handled a 3× traffic spike during a regulatory audit without SLA breaches, earning us the “Customer Obsession” badge. We reduced AWS spend on compute by 40 % while maintaining 99.9 % availability.

---

### Technical Takeaway
- **Scalability:** Lambda@Edge + auto‑scaling SageMaker handles burst traffic; cache keeps peak load low.  
- **Availability:** Multi‑AZ ElastiCache, ALB health checks, and Step Functions fallback guarantee 5‑second failover.  
- **Cost vs Trade‑offs:** Cache TTL trade‑off between freshness (30 s) and cost; we tuned via A/B testing.

**Bar‑raiser cues I heard:** ownership of the entire flow, deep dive into cache hit metrics, quantified impact on latency & cost, and learning from the initial 30 % hit‑ratio failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
