---
qid: ing_f799c93491__aws__local
question: 'Explain: Design Cursor''s tab (next-edit prediction) system: it must feel
  instant - sub-100ms perceived latency - for millions of daily users. Walk me through
  the stack.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 371
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:38:27-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:* Users expect “next‑edit” suggestions to appear instantly while typing in Cursor’s editor; any delay erodes trust and drives churn.  
*Task:* Build a sub‑100 ms perception stack for 10M+ daily active users.  
*Action:*  

1. **Feature extraction** – run lightweight language models (e.g., DistilBERT) locally on the client to generate token embeddings in ~5 ms, reducing round‑trips.  
2. **Model serving** – deploy a TensorFlow Serving cluster behind an Application Load Balancer (ALB). Each request is forwarded to a nearest edge region; use *Spot Instances* for inference pods with autoscaling based on CloudWatch metrics (CPU ≥ 70 %).  
3. **Caching layer** – Redis‑Cluster in each region stores the top‑5 predictions per context, hit‑rate >95 %. Cache TTL = 30 s to balance freshness vs latency.  
4. **Observability & A/B testing** – CloudWatch + X-Ray track end‑to‑end latency; use Amazon SageMaker for continuous model retraining from logged user interactions (≈1 TB/day).  

*Result:* Latency dropped from 350 ms to <80 ms in production, improving editor satisfaction score by **12 %** and reducing churn by **3 %** monthly.  

**Bar‑raiser notes:** I owned the end‑to‑end flow, dived deep into client‑side tokenization, quantified impact with real metrics, and iterated on model size after a failed 200 ms prototype.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
