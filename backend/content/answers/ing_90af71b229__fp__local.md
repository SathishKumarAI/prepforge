---
qid: ing_90af71b229__fp__local
question: 'Explain: MCP architecture ​ — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 384
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:51-05:00'
sources: []
---

**MCP (Massive Contextual Pipeline) in Glean**

*Fundamental problem*:  
Search engines must retrieve the *right* result for a query that lives inside an ever‑growing knowledge graph. The naïve approach—scanning every node and edge—is O(N), impossible at scale. We need a system that can *contextually prune* the search space while still honoring user intent.

*Why MCP works*:  
1. **Contextual embeddings**: Every document, field, or link is projected into a high‑dimensional vector space where semantic similarity equals dot product. This transforms discrete graph traversal into continuous optimization.  
2. **Approximate nearest‑neighbour (ANN) indexes**: By indexing these vectors with locality‑sensitive hashing, we get sub‑linear query time while preserving top‑k relevance.  
3. **Graph‑aware re‑ranking**: The ANN step supplies a *candidate set*. A lightweight graph neural network then re‑scores candidates by considering the local topology (e.g., edge types, co‑occurrence patterns), ensuring that structural relationships are respected without full traversal.

*Deeper principle*:  
MCP turns the combinatorial search problem into a **low‑dimensional optimization** over embeddings, leveraging the *curse of dimensionality* in reverse: high dimensions make similarity easier to capture, while ANN tricks keep computation tractable.  

*Non‑obvious insight*:  
The *edge type* is treated as an additional embedding dimension rather than a separate lookup. This allows the same ANN machinery to handle heterogeneous relations (author ↔ article, topic ↔ tag) uniformly, dramatically simplifying the pipeline and improving cache locality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
