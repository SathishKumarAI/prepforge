---
qid: ing_c57adc45e3__faang__local
question: 'Explain: Pattern: Corrective RAG (CRAG) — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 472
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:19:57-05:00'
sources: []
---

**Clarify**  
You’re asking for an explanation of the *Corrective Retrieval‑Augmented Generation* (CRAG) pattern, a recent design pattern in generative AI pipelines that interleaves retrieval with generation and uses a corrective loop to improve factuality. I’ll assume we’re working with LLMs exposed via APIs, external knowledge bases, and a need for auditability.

**Approach**  
1. Outline the pipeline: prompt → retrieval → generation → evaluation → correction.  
2. Highlight key components (retriever, generator, evaluator, retrier).  
3. Discuss how CRAG differs from vanilla RAG (single pass) and why the corrective loop matters.

**Depth**  
- **Retrieval** pulls top‑k documents based on query similarity or embeddings.  
- **Generation** conditions on both prompt and retrieved snippets, producing a draft answer.  
- **Evaluation** uses either a separate LLM (fact‑checking) or rule‑based checks against the source to flag hallucinations.  
- **Correction** triggers a second retrieval pass with refined queries (e.g., adding “verify”), then re‑generates only the flagged sections, optionally blending original and corrected outputs.  
Complexity: each round adds O(k·L) token cost; typical CRAG runs 2–3 rounds → ~1.5× baseline RAG latency. Trade‑off: higher accuracy vs. latency.

**Edge Cases**  
- Retrieval returns no relevant docs → fallback to pure generation or external API.  
- Evaluation misclassifies correct content as hallucinated → leads to unnecessary re‑retrieval.  
- Infinite corrective loop if the evaluator never converges; enforce a max retry count.

**Optimize & Communicate**  
- Cache retrieved documents per user session to reduce repeated calls.  
- Parallelize evaluation and retriever for lower latency.  
- Provide an audit trail (retrieved IDs, scores) so stakeholders can trace corrections.  
When explaining this pattern, I’d narrate it as a “fact‑check loop” that gives the model a safety net, emphasizing its role in regulated domains where hallucinations are costly. This showcases structured thinking, clear communication, and depth—key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
