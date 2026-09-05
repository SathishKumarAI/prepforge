---
qid: ing_498f5a655b__star__local
question: How do I evaluate an LLM or RAG system in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 294
total_tokens: 533
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:55:40-05:00'
sources: []
---

**Situation:** In my last role I was responsible for launching a customer‑support chatbot that used a retrieval‑augmented generation (RAG) model. After the first week of traffic, our SLA metrics dipped: response latency rose from 1.2 s to 3.8 s and user satisfaction fell below 80%.

**Task:** I had to evaluate the LLM/RAG pipeline in production, pinpoint bottlenecks, and bring latency back under 2 s while maintaining answer quality.

**Action:** First, I instrumented each stage—embedding generation, vector store query (Faiss), and text generation (OpenAI GPT‑4o). Using Prometheus dashboards, I measured per‑request latencies and error rates. I introduced async retrieval to overlap embedding and search, switched the vector index from flat to IVF+PQ for 10× faster queries, and added a fallback cache of top 20 answers. I also ran A/B tests with a smaller LLM (GPT‑3.5) on low‑complexity tickets to reduce compute cost.

**Result:** Latency dropped to 1.6 s average, SLA compliance rose to 95%, and we cut GPU usage by 40%. The exercise taught me that real‑world evaluation must combine observability, adaptive caching, and workload‑aware model selection.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
