---
qid: ing_2f70a00182__star__local
question: 'Explain: Cost Optimization Opportunities — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 381
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:03:36-05:00'
sources: []
---

**Situation:**  
In my last role at a mid‑size fintech, we were piloting an enterprise Retrieval‑Augmented Generation (RAG) system to power our internal knowledge base for compliance queries. After the first month, the monthly spend on cloud storage and compute reached $12k—over 30% above our budget.

**Task:**  
I was tasked with cutting the RAG infrastructure cost by at least 25% while keeping response latency under 300 ms for 95% of user requests.

**Action:**  
1. **Vector index pruning:** I profiled query patterns and identified that only 15% of documents were ever retrieved. Using Faiss, I re‑indexed the vector store to include just those high‑frequency vectors, reducing storage by 70%.  
2. **Batching & caching:** Implemented a shared in‑memory cache for top 10 most common prompts and added request batching on the inference server, cutting GPU usage by 40%.  
3. **Model distillation:** Replaced the large LLaMA‑7B backend with a distilled 1.5B variant; accuracy dropped <2% on our validation set but inference cost fell to one‑third.  
4. **Spot instances & autoscaling:** Configured AWS Spot for GPU workers and set up auto‑scaling based on queue depth, eliminating idle capacity during off‑peak hours.

**Result:**  
Monthly spend fell from $12k to $8.2k—a 31% reduction—while maintaining <300 ms latency for 97% of queries. I learned that aggressive pruning, smart caching, and model distillation can dramatically lower RAG costs without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
