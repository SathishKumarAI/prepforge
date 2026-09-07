---
qid: ing_f7153ea5dd__aws__local
question: 'Explain: Real-time performance without cost runaway'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 419
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:35:33-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led a team that needed to deploy a recommendation model for a global e‑commerce site. The requirement was < 200 ms inference latency while keeping monthly spend under $50k.  

**Action**  
I architected a serverless pipeline:  
* **Model training** – SageMaker Training jobs on spot instances (cost 70% lower).  
* **Model packaging** – Docker container stored in ECR, versioned with GitHub Actions.  
* **Real‑time inference** – SageMaker Endpoint configured as a *Multi‑Model Endpoint* behind an Application Load Balancer. This lets us swap models without downtime and scales automatically to 10k RPS.  
* **Caching** – Redis (ElastiCache) for the top 1M item embeddings, reducing 30% of endpoint hits.  
* **Observability** – CloudWatch Alarms on latency & error rate; Lambda auto‑scales cache based on traffic patterns.

I added a *cost‑guard* Lambda that snapshots Endpoint metrics and stops the instance if spend > $45k/month, ensuring we never exceeded budget.

**Result**  
Latency dropped to 180 ms (≤ 200 ms target) while inference cost was $42k/month—10% under budget. Monthly churn decreased by 4%, directly tied to faster recommendations.  

**Learning & Bar‑raiser cues**  
I took ownership of both performance and cost, diving deep into SageMaker’s pricing model. I quantified impact (latency, spend, churn) and iterated after a failed cache warm‑up that taught me the importance of warm‑start strategies. This demonstrates *Ownership*, *Dive Deep*, and *Deliver Results*—the qualities a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
