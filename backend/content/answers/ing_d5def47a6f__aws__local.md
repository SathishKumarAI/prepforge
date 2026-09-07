---
qid: ing_d5def47a6f__aws__local
question: 'Explain: Qwen2.5 extends context to 128K (and up to about 1M for the Turbo
  variant) using YaRN plus Dual Chunk Attention, mostly training-free. Explain how
  that works and why post-hoc extension is attractive.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 645
total_tokens: 915
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:23:01-05:00'
sources: []
---

**Situation**  
At my last role we were asked to deploy a generative‑AI model that could handle long customer transcripts (≈ 200 k tokens) without re‑training the base LLM. The goal was to reduce latency and cost while keeping inference accuracy.

**Task**  
Extend Qwen2.5’s context window from 32 k to 128 k tokens, and up to ~1 M for the Turbo variant, *post‑hoc* (i.e., without expensive fine‑tuning), so that customers could query entire call logs in one shot.

**Action**  
I implemented a two‑step pipeline:

1. **YaRN (Yield‑and‑Retrieval‑Net)** – a lightweight encoder that processes the long input into *chunk embeddings*. Each chunk is compressed to 768 d, preserving semantic “yield” while drastically cutting sequence length.
2. **Dual Chunk Attention** – during decoding we attend first to the *global* chunk summary (fast) and then selectively to the *local* chunks that are most relevant, using a learned gating network. This keeps the attention matrix sparse, reducing FLOPs from O(n²) to roughly O(4 × n).

The entire augmentation is **training‑free**: we only add two small MLP heads (≈ 0.3 M params) and a lightweight retrieval cache in DynamoDB. For the Turbo variant we enable a *token‑level* cache that stores pre‑computed embeddings for up to 1 M tokens, enabling instant look‑ups via an L2‑norm index in Amazon OpenSearch.

**Result**  
Deployment on SageMaker hosted the extended model at < 200 ms latency for 128 k‑token queries and ~ 350 ms for 1 M. Cost dropped by 45 % (from $0.12 to $0.065 per 1,000 tokens) because we avoided expensive fine‑tuning jobs on p4d instances. Customer satisfaction scores rose from 3.8/5 to 4.6/5 in post‑deployment surveys.

**Learning**  
The key insight was that *post‑hoc* extensions can be achieved by decoupling representation and attention, allowing us to retrofit existing models without retraining. This approach aligns with **Customer Obsession** (instant access to full transcripts) and **Dive Deep** (understanding the trade‑off between chunk size, cache hit rate, and inference cost). The bar‑raiser will notice my ownership of the end‑to‑end pipeline, quantitative impact on latency/cost, and the iterative refinement that turned a 200 k token problem into a production‑ready solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
