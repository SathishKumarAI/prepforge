---
qid: ing_1eb365f7d3__star__local
question: 'Q2: When would you choose RAG over fine-tuning, and vice versa?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 312
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:30:56-05:00'
sources: []
---

**Situation:** While leading the upgrade of our customer support chatbot at a fintech startup, we noticed that our existing LLM‑based agent struggled with niche regulatory queries and had a response latency of ~2 s, pushing us over the SLA.

**Task:** Decide whether to fine‑tune a base model on our domain corpus or implement Retrieval‑Augmented Generation (RAG) to dynamically pull up‑to‑date policy documents during inference.

**Action:** I first benchmarked both options: fine‑tuning a 6B model with 200 k domain examples lowered perplexity by 12% but required 48 h of GPU time and increased inference cost. For RAG, I built an ElasticSearch index of our regulatory PDFs and integrated it with the LLM via vector embeddings (using FAISS). This added ~0.3 s to each query but kept model size small and allowed instant updates by re‑indexing without retraining.

**Result:** Deploying RAG cut SLA violations from 18% to 2%, improved user satisfaction scores by 15 points, and reduced operational cost by 30%. I learned that fine‑tuning is best when the domain data is stable and inference speed is critical; RAG excels when knowledge updates frequently or latency must stay low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
