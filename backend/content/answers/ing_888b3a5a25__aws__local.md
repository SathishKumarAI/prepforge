---
qid: ing_888b3a5a25__aws__local
question: 'Explain: Model Selection Criteria — Embedding Models'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 493
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:33:01-05:00'
sources: []
---

**Situation / Task**  
At my previous company we built a recommendation engine that had to rank product embeddings in real‑time for millions of users. The challenge was to choose the right embedding model—dense vs sparse, transformer‑based vs Word2Vec—while keeping latency < 50 ms and cost under $0.02 per inference.

**Action**  
1. **Define metrics**: *Mean Reciprocal Rank (MRR)* for relevance, *CPU/GPU utilization*, *cost per request*, and *model size* (for edge deployment).  
2. **Benchmark pipeline**: Using SageMaker Experiments I trained 6 candidate models on an 80/20 split of 10 M interactions stored in S3. Each training job ran on `ml.p3.8xlarge` for 12 h, costing $1,200 total.  
3. **Dive deep into trade‑offs**: The transformer (BERT‑style) achieved MRR = 0.42 but required 256 MB GPU memory and incurred $0.025 per inference. Word2Vec had MRR = 0.35 with 32 MB CPU usage, costing $0.008.  
4. **Decision & deployment**: We adopted a hybrid strategy—Word2Vec for cold‑start users (low cost) and the transformer for warm users, orchestrated via Lambda@Edge + SageMaker endpoint (`ml.c5.xlarge`). This lowered average latency to 38 ms and saved ~35% on inference spend.

**Result**  
Post‑deployment, click‑through rate increased by **12%**, and we reduced monthly inference costs from $48k to $31k. The model lifecycle is now automated with SageMaker Pipelines, ensuring continuous ownership of quality.

> *Bar‑raiser cue*: I quantified impact (CTR lift, cost savings), demonstrated deep dive into performance vs. economics, and showed ownership by automating the pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
