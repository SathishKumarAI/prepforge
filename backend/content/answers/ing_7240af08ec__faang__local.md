---
qid: ing_7240af08ec__faang__local
question: 'Q: How would you select a model for a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 459
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:12-05:00'
sources: []
---

**Clarify**  
You need to pick an LLM that can be paired with a Retrieval‑Augmented Generation (RAG) pipeline and run at scale. Key assumptions:  

* What latency budget per request?  
* How much storage and compute are available for index creation & query time?  
* Do you have labeled data for fine‑tuning or only open‑source weights?  
* Is the system read‑heavy, write‑heavy, or balanced?

**Approach**  
1. **Define business constraints** (latency, cost, compliance).  
2. **Benchmark candidate models** on a representative query set: measure accuracy (BLEU/F1), latency, and inference cost.  
3. **Profile retrieval component** (vector index size, query throughput).  
4. **Prototype end‑to‑end** with the top model(s) to validate integration points.  

**Depth**  
*Choose an LLM that balances size vs. speed*: e.g., `Llama-2 70B` for high‑quality answers if GPU budget allows; otherwise `Phi‑3-mini` or `Mistral-7B`.  
*Quantization & pruning* (e.g., GPTQ) can reduce latency by ~30 % with <1 % loss in perplexity.  
*Index choice*: HNSW for high recall, Faiss‑IVF for lower memory.  
*Pipeline*: embed query → nearest‑neighbor search → concatenate top‑k passages → feed to LLM + prompt template.  

**Edge Cases**  
*Cold start*: pre‑warm GPU kernels and warm the cache.  
*Model drift*: schedule periodic re‑embedding of index when training data changes.  
*Security*: enforce input sanitization to avoid injection into retrieved docs.

**Optimize & Communicate**  
Iteratively reduce k‑value until latency meets SLA; use A/B tests to confirm no loss in user satisfaction. Explain trade‑offs: larger models → richer context but higher cost; smaller models → cheaper but may miss nuanced facts. Conclude with a decision matrix summarizing performance vs. cost, ready for stakeholder review.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
