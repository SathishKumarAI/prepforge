---
qid: ing_ef75ec3299__fp__local
question: 'Explain: Using LLMs as Rerankers — Reranking Strategies'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 590
total_tokens: 765
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:27:31-05:00'
sources: []
---

**Why re‑rank?**  
When a retrieval engine returns *k* candidates, it optimizes for **recall** under a computational budget: every document is scored by a lightweight heuristic (BM25, sparse embeddings). The objective is to ensure that the true answer lies somewhere in the set. However, the rank order inside this set is only an approximate proxy for relevance; many highly relevant passages are buried below mediocre ones because the initial scorer lacks semantic depth.

**Re‑ranking as constrained optimization**  
Let \(D=\{d_1,\dots,d_k\}\) be the retrieved set and \(s_{\text{init}}(d)\) its heuristic score. We want a new ranking \(\pi\) that maximizes expected relevance
\[
\max_{\pi} \sum_{i=1}^{k} R(d_{\pi(i)})\,,
\]
subject to the constraint that each document’s *relative* order among the top‑\(m\) (where \(m\ll k\)) must respect a *budgeted* inference cost. A large language model (LLM) can approximate \(R(\cdot)\) by conditioning on the query and the passage, but it is expensive to apply to all \(k\). Thus we formulate a two‑stage strategy:

1. **Scoring stage** – use a lightweight neural scorer (e.g., dense retrieval) to produce a *pre‑ranking*.
2. **Re‑ranking stage** – sample a small subset \(\tilde{D}\subset D\) (top‑\(m\)) and let the LLM compute exact relevance scores \(R_{\text{LLM}}(d)\).

The optimal policy is to choose \(\tilde{D}\) that maximizes the expected marginal gain:
\[
\tilde{D}^* = \arg\max_{\tilde{D}}\mathbb{E}\Bigl[\sum_{d\in\tilde{D}} R_{\text{LLM}}(d)\Bigr]
\]
under a fixed token budget. This reduces to selecting documents with high *pre‑ranking* confidence and high *uncertainty* (variance) in the LLM’s prediction, balancing exploration and exploitation.

**Non‑obvious insight:**  
Because LLMs are **contextual**, re‑ranking can exploit *cross‑document dependencies*. By feeding a small “mini‑batch” of passages to the model simultaneously, it can assign higher scores to complementary evidence that together answer the query—something single‑pass scoring cannot capture. Thus, an optimal reranker should not only rank independently but also consider **inter‑document synergy**, turning a set of weak signals into a strong composite answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
