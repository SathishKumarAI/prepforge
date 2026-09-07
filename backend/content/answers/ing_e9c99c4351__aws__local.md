---
qid: ing_e9c99c4351__aws__local
question: 'Q: Your RAG evaluation pipeline costs $500/day in LLM judge calls. How
  do you reduce it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 400
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:06:51-05:00'
sources: []
---

**Situation:**  
At my last role we ran a Retrieval‑Augmented Generation (RAG) pipeline that scored candidate answers against a gold standard using an LLM “judge.” The daily cost hit $500 because each judge call consumed 3 GB‑hrs of GPU time on SageMaker, and we processed ~2000 queries per day.

**Task:**  
Cut the LLM‑judge spend to <$100/day without sacrificing accuracy (≤1 % drop in F1).

**Action:**  
1. **Model Distillation & Quantization** – Trained a 4‑bit distilled T5 on the judge’s outputs, reducing GPU memory from 16 GB to 2 GB and inference latency by 70 %.  
2. **Batching & Caching** – Implemented a Lambda layer that batches 32 queries per request and caches top‑k retrievals in DynamoDB (TTL = 24 h), cutting redundant calls by 45 %.  
3. **Cost‑aware Orchestration** – Switched from SageMaker endpoints to EC2 Spot GPU instances (p4d.xlarge) with an Auto Scaling group, saving ~60 % on compute costs.  
4. **Monitoring & A/B Tests** – Used CloudWatch dashboards to track F1 and latency; ran 7‑day rollouts to confirm <0.5 % metric drift.

**Result:**  
Daily spend fell from $500 to $78 (84 % reduction). Accuracy stayed at 99.2 % F1, and end‑to‑end latency dropped from 3.4 s to 1.8 s per query.  

*Leadership Principles:* **Ownership** – I owned the cost & performance; **Dive Deep** – I dissected every inference step to find savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
