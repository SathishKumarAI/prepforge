---
qid: ing_2bef999354__fp__local
question: 'Explain: Latency Budget — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 467
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:38:11-05:00'
sources: []
---

**Latency Budget in Hybrid Search**

The core problem is to answer a user query within a strict time limit (the *latency budget*) while maximizing relevance. A hybrid system splits the search into two stages:

1. **Fast, deterministic retrieval** – e.g., an inverted index or vector‑based ANN that can return top‑k candidates in milliseconds.
2. **Slow, generative refinement** – a large language model (LLM) or deep reranker that can produce highly accurate answers but costs tens of milliseconds per token.

Let  
\(T_{\text{budget}}\) be the total allowed time,  
\(t_f(k)\) the time to fetch \(k\) candidates,  
\(t_g(m)\) the time for the generative stage given \(m\) tokens.

We must choose \(k\) and \(m\) such that  
\(t_f(k)+t_g(m) \le T_{\text{budget}}\).

Because \(t_f(k)\) grows sublinearly (often \(O(\log k)\)) while \(t_g(m)\) is linear in tokens, the optimal strategy is to **adaptively route**: use a coarse retrieval to narrow the search space and then invoke the LLM only on the most promising subset. This balances two deeper principles:

- **Optimization:** The objective is a convex trade‑off between recall (proportional to \(k\)) and latency, solvable by Lagrange multipliers.
- **Information theory:** Each retrieval step reduces entropy; the hybrid model allocates computational budget proportional to remaining uncertainty.

**Non‑obvious insight:** In practice, *early stopping* in the generative phase—terminating when the confidence of a generated answer surpasses a threshold—can shave off 30–50 % latency without hurting quality. Many systems treat the LLM as a black box and wait for full token streams; dynamic truncation exploits the diminishing returns of later tokens, aligning with the convex cost structure above.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
