---
qid: ing_fe9ce17c4e__fp__local
question: Your product has several distinct corpora - docs, tickets, code, CRM. How
  do you route queries?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 396
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T01:01:13-05:00'
sources: []
---

## From the problem to a principled router

When a user submits a query, the system must decide **which corpus contains the most informative evidence**.  
The fundamental trade‑off is *information gain vs. computational cost*: we want the answer that maximizes expected utility while spending minimal resources.

1. **Represent each corpus as a probability space**  
   • Build a language model \(P_c(\text{doc}\mid q)\) for each corpus \(c\).  
   • Estimate these from term frequencies or embeddings; they capture how likely a query’s intent aligns with that domain.

2. **Compute an expected utility score**  
   For each corpus,
   \[
   U_c = \sum_{d\in c} P_c(d\mid q)\, V(d)
   \]
   where \(V(d)\) is the value of retrieving document \(d\) (e.g., relevance, recency).  
   The corpus with maximal \(U_c\) is the most promising.

3. **Adaptive budget allocation**  
   Allocate retrieval cost proportionally to \(U_c\); low‑utility corpora receive a shallow pass (index lookup only), high‑utility ones undergo full ranking.

4. **Feedback loop**  
   After presenting results, update corpus priors with user clicks or dwell time—reinforcing the Bayesian belief that this corpus is indeed relevant.

### Non‑obvious insight
Treating each corpus as an *information source* turns routing into a stochastic decision problem. The optimal strategy isn’t “pick the most similar embedding” but “pick the source whose posterior over relevance, weighted by its retrieval cost, maximizes expected value.” This yields a principled, data‑driven routing policy that automatically adapts to shifting content distributions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
