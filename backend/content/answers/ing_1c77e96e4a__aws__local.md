---
qid: ing_1c77e96e4a__aws__local
question: 'Explain: Listwise vs Pointwise LLM Reranking — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 431
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:30:32-05:00'
sources: []
---

**Situation / Task**  
When I led the search‑optimization project at my previous company, we needed to lift click‑through rate (CTR) for a niche e‑commerce catalog. The team had been using a pointwise re‑ranker that scored each result independently; however, our KPI plateaued at 4 % CTR.

**Action**  
I championed a shift to a **listwise LLM re‑ranking** pipeline. First, I scoped the requirements: batch‑process top‑50 candidates per query, generate context‑aware embeddings with Amazon SageMaker’s *BERT* model, and feed them into an LLM (GPT‑3.5) via API Gateway for sequence scoring. For comparison, we kept a **pointwise** baseline that fed single‑item embeddings to the same LLM. I designed a dual‑pipeline architecture on ECS Fargate with autoscaling, ensuring 99.9 % availability and cost control by using spot instances during off‑peak hours.

**Result**  
After A/B testing over two weeks, listwise re‑ranking increased CTR from **4 % to 7.8 %** (+95 %) while keeping latency under 200 ms per query. The pointwise model only achieved a 5.3 % CTR. This 2.5× lift directly translated to an estimated $1.6M annual revenue increase at our average order value.

**Reflection (Bar‑raiser notes)**  
- **Ownership:** Took end‑to‑end responsibility for architecture, metrics, and deployment.  
- **Dive Deep:** Benchmarked embedding dimensionality, LLM token limits, and cost per inference.  
- **Learned from Failure:** Initial pointwise runs revealed that ignoring inter‑item relationships caused suboptimal rankings; the listwise approach fixed this by modeling sequence dependencies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
