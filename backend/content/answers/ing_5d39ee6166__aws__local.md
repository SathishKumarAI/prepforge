---
qid: ing_5d39ee6166__aws__local
question: How do you evaluate a RAG pipeline? Why evaluate components separately from
  the end-to-end system?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 464
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:56:36-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the rollout of a Retrieval‑Augmented Generation (RAG) service that powers our customer‑support chatbot. The goal was to lift answer accuracy from **68 %** to **>90 %** while keeping latency under 200 ms.

**Action – Component‑wise Evaluation**  
1. **Retriever** – I benchmarked BM25, DPR, and a fine‑tuned ElasticSearch index on a held‑out query set (10k real support tickets). Metrics: *Recall@5* and *Latency per query*.  
2. **Generator** – I ran GPT‑3.5‑Turbo vs. a distilled T5 model, measuring *BLEU*, *ROUGE-L*, and CPU/GPU cost per token.  
3. **Fusion Layer** – I compared simple concatenation vs. weighted re‑ranking (based on BM25 score) using A/B tests.

I chose this modular approach because each component has distinct failure modes: a weak retriever yields irrelevant context, while an over‑complex generator inflates compute costs. Isolating them lets us tune hyperparameters and swap services (e.g., S3 for storage, Lambda for lightweight inference, SageMaker for heavy models) without cascading impacts.

**Result**  
After iteratively refining each module, we achieved **92 %** answer accuracy with a 140 ms average latency, cut compute cost by **35 %**, and reduced monthly spend from $12k to $7.8k. The end‑to‑end test confirmed the gains were additive, not emergent.

> *Leadership Principles:*  
> • **Customer Obsession** – delivering higher quality answers directly improves user satisfaction.  
> • **Dive Deep & Ownership** – dissecting components uncovered bottlenecks and empowered cross‑team ownership of fixes.  

**Bar‑raiser takeaway**: Demonstrate ownership by isolating root causes, quantify impact with real metrics, and iterate based on data rather than assumptions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
