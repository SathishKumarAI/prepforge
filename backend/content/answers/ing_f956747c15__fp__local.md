---
qid: ing_f956747c15__fp__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 424
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:49:35-05:00'
sources: []
---

### Why a RAG model that “works” in the lab can crumble in production

1. **Distribution shift**  
   The test set is a *sampling* of the training distribution. In production the query‑embedding distribution drifts (new vocab, slang, domain jargon). If the retriever’s similarity metric (cosine, dot) was tuned on clean embeddings, it will rank irrelevant passages once the embedding space shifts.

2. **Index freshness & coverage**  
   The retrieval index is usually built offline. In production you must keep it *incrementally* updated with new documents and remove stale ones; otherwise the top‑k returned passages are out of date or missing crucial facts.

3. **Latency‑budget mismatch**  
   Retrieval latency scales with index size. If the live system has stricter SLAs, the query may time‑out before the retriever finishes, causing fallback to a default (often empty) context and catastrophic hallucination.

4. **Safety & bias amplification**  
   The fine‑tuned generator was evaluated on neutral prompts. In real usage it encounters polarizing queries; if the retrieved documents contain biased language, the decoder will amplify it. Inspect the *coverage* of the retrieval corpus for such signals.

5. **Evaluation metric mismatch**  
   Accuracy on a static test set does not capture *fluency‑relevance trade‑offs*. In production you should monitor perplexity, hallucination rate, and user‑feedback loops.

---

#### Non‑obvious insight

**The retriever’s error budget is *not* independent of the generator’s.**  
When the retrieved passages are noisy or incomplete, the generator compensates by “inventing” facts, which can be catastrophic. Treat retrieval quality as a **regularizer** for generation: enforce that each token’s probability mass comes from at least one retrieved passage (e.g., via constrained decoding). This coupling tightens error propagation and yields more robust production performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
