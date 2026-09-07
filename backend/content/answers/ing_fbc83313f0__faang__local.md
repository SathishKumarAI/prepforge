---
qid: ing_fbc83313f0__faang__local
question: 'Q: How do you handle the case where a RAG system retrieves irrelevant documents
  but the LLM generates a plausible-sounding answer anyway?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 441
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:25:27-05:00'
sources: []
---

**Clarify**  
The problem: a Retrieval‑Augmented Generation (RAG) pipeline pulls documents that don’t actually contain the needed facts, yet the downstream LLM still outputs an answer that sounds correct. I’d confirm whether the issue is due to retrieval bias, hallucination, or both, and ask for metrics on recall vs precision of the retriever, as well as the LLM’s confidence calibration.

**Approach**  
1. **Audit the retriever** – check BM25/FAISS scoring, query expansion, document embeddings.  
2. **Add a verification layer** – after generation, run an evidence‑scoring module that cross‑checks the answer against the retrieved snippets.  
3. **Reweight the LLM** – feed the top‑k documents with explicit relevance tags or use a retrieval‑guided prompt to constrain hallucination.

**Depth**  
- Implement a *relevance classifier* (e.g., RoBERTa fine‑tuned on “answer–document match”) that outputs a probability `P(rel|doc,ans)`.  
- If the weighted sum across docs falls below a threshold, flag the answer for re‑retrieval or human review.  
- Complexity: retrieval O(log N), classifier inference O(k·d). Trade‑off: extra latency vs higher factuality.

**Edge Cases**  
- Sparse knowledge domains where no document matches; fallback to LLM’s internal knowledge.  
- Ambiguous queries that legitimately have multiple correct answers; ensure the verifier accepts any valid evidence.  
- Adversarial documents purposely misleading; hard‑coded sanity checks (e.g., fact‑checking against a trusted KB).

**Optimize & Communicate**  
I’d prototype with a small dataset, measure recall@k and hallucination rate before/after adding the verification layer. In an interview I’d explain that this hybrid approach keeps latency low while mathematically grounding the answer’s credibility, aligning with FAANG’s focus on scalable, reliable AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
