---
qid: ing_30d4e90c02__aws__local
question: 'Explain: Sliding Window Attention (SWA) — Attention Mechanisms'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 465
total_tokens: 697
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:15:46-05:00'
sources: []
---

**Sliding‑Window Attention (SWA)**  
*Leadership Principles: Customer Obsession & Ownership*

**Situation / Task** – While leading a cross‑functional NLP team at Amazon, we had to accelerate the inference latency of our recommendation engine’s transformer model from 350 ms per request to <80 ms on edge devices. The bottleneck was the global self‑attention that scales as *O(n²)* with sequence length.

**Action** – I introduced Sliding‑Window Attention (SWA), a locality‑aware mechanism that limits each token’s attention span to a fixed window *k* (e.g., 64 tokens).  
- **Design:** Replace full‑matrix dot‑product with a masked attention tensor; use AWS Inferentia chips + SageMaker Neo for quantization.  
- **Services:** Deploy on **Amazon SageMaker Endpoint** with **Elastic Inference** to provision GPU/Inference Accelerator instances on demand, ensuring 99.9 % availability.  
- **Scalability:** SWA reduces memory from *O(n²)* to *O(nk)*; with k=64 and n=512 we cut memory by ~8×, enabling batch inference of 1,000 requests per second at a cost saving of ~$0.12/instance‑hour vs. baseline.

**Result** – Latency dropped from 350 ms → 72 ms (≈80% reduction), throughput doubled to 2k QPS, and monthly inference spend fell by 35 %.  
The experiment also revealed that for certain long‑tail queries we could dynamically increase *k* without impacting overall SLA, a lesson in balancing accuracy vs. efficiency.

**Learning & Bar‑Raiser Insight** – Ownership surfaced through end‑to‑end responsibility: from algorithmic change to deployment pipeline. The bar‑raiser looked for deep dive into the O(n²) cost, concrete metrics (latency, throughput, cost), and evidence that we iterated on failure modes (dynamic *k* tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
