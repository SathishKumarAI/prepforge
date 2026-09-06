---
qid: ing_dd93c85df9__fp__local
question: An enterprise customer wants to deploy your RAG system but has no labelled
  data. How do you evaluate it before and after launch?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 388
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:50:32-05:00'
sources: []
---

**Evaluating a RAG system without labelled data**

*Before launch*

1. **Intrinsic language‑model checks**  
   * Perplexity on a held‑out corpus of the target domain reveals whether the generator has learned reasonable syntax and semantics.  
2. **Retrieval quality**  
   * Compute recall@k using a synthetic “gold” set built by prompting an oracle model (e.g., GPT‑4) to generate correct answers for a hand‑crafted query list.  
3. **Proxy supervision from embeddings**  
   * Run a contrastive similarity test: for each synthetic query, rank candidate passages by cosine distance and check if the oracle‑generated passage appears in the top‑k. This yields an approximate precision estimate.

*After launch*

1. **Online A/B testing with “pseudo‑labels”**  
   * Deploy the RAG to a small cohort; capture user interactions (click‑through, dwell time). Use these signals as weak labels and compute a downstream metric such as *Normalized Discounted Cumulative Gain* (NDCG) against the synthetic oracle.  
2. **User‑feedback loop**  
   * Allow users to flag incorrect answers; aggregate this feedback to refine retrieval index or retrain the generator.  

**Non‑obvious insight**  
The key is that the RAG’s performance hinges on *retrieval relevance*, not just language fluency. By constructing a synthetic oracle and measuring recall@k, you directly quantify how often the system fetches useful context—this proxy is far more predictive of real‑world usefulness than perplexity alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
