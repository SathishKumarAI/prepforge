---
qid: ing_81a90f17dd__fp__local
question: 'Explain: High-Level Architecture — Enterprise Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 446
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:40:44-05:00'
sources: []
---

**High‑level architecture of an Enterprise Retrieval‑Augmented Generation (RAG) system**

1. **Problem framing**  
   Enterprises must answer domain‑specific queries with up to‑date knowledge that is *not* captured in a static language model. The goal is to combine the generative power of LLMs with the precision of information retrieval.

2. **Data layer**  
   • **Document store (vector + lexical indices)** – Every enterprise artifact (docs, tickets, policies) is encoded as a dense vector *and* indexed by keywords.  
   • **Relevance objective**: minimize expected loss \(L = \mathbb{E}_{q}[\,\ell(\text{retrieved set}, q)\,]\). Retrieval therefore becomes an optimization problem over embeddings that best approximate the true relevance distribution.

3. **Retrieval engine**  
   • Dual‑stage retrieval (lexical + semantic) ensures *recall* and *precision*.  
   • The second stage is tuned to maximize mutual information \(I(\text{docs}; q)\), guaranteeing that selected snippets contain maximal answer‑relevant content.

4. **Fusion & generation**  
   Retrieved passages are fed into a lightweight generator (often fine‑tuned on domain data). The generator’s loss includes an *alignment penalty* that forces the output to stay within the context window, preventing hallucinations.

5. **Feedback loop**  
   User interactions generate relevance labels; these are used to re‑train both the embedding model and the generator, turning the system into a continual‑learning pipeline.

---

### Non‑obvious insight
The *true* bottleneck is not the size of the LLM but the *quality of the retrieval distribution*. Even a perfect generator will hallucinate if fed noisy passages. Thus, investing in a retrieval objective that maximizes mutual information between query and retrieved set yields disproportionate gains compared to model scaling alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
