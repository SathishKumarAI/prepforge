---
qid: ing_39b26aafe2__fp__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 484
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:07:32-05:00'
sources: []
---

**Why a knowledge‑graph matters for AI ranking**

The core problem is *disambiguating intent* and *contextual relevance*.  
Embedding similarity treats every entity as a point in Euclidean space; it captures surface co‑occurrence but ignores **structured causal relations** (e.g., “author → book”, “user → liked”). A knowledge graph encodes these relations explicitly, turning the ranking objective into an *inference* task rather than a nearest‑neighbour search.

1. **Constructing the graph**  
   - **Nodes**: users, documents, tags, actions.  
   - **Edges**: typed (e.g., `AUTHORED`, `LIKED`, `RELATED_TO`) with timestamps and confidence scores derived from activity logs.  
   - **Incremental update**: use a streaming ETL pipeline that normalizes new events into RDF triples, merges duplicates via canonicalization, and propagates weights using Bayesian smoothing.

2. **Inference‑driven ranking**  
   The score for a query \(q\) and candidate \(c\) becomes  
   \[
   S(q,c)=\sum_{r}\alpha_r\,P(r|q)\,P(c|r),
   \]
   where \(r\) are intermediate relations (e.g., “popular authors”). This factorization exploits the *Markov property* of the graph: relevance propagates along typed edges instead of raw vector distance.

3. **Beyond embeddings**  
   - Captures **heterogeneous semantics** (user intent vs. content attributes).  
   - Handles **long‑tail entities** that lack sufficient co‑occurrence data, because their links provide indirect evidence.  
   - Enables *explainability*: a path in the graph can be surfaced as “because you liked X, we recommend Y”.

**Non‑obvious insight:**  
A well‑weighted graph turns relevance into a **probabilistic program**; learning the edge weights is equivalent to optimizing a variational lower bound on the joint likelihood of user actions. Thus, ranking quality improves not just from more data but from *better modeling* of how information flows through the system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
