---
qid: ing_51d9a62b16__fp__local
question: 'Q: What is the "Asymmetric Retrieval" problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 418
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:08-05:00'
sources: []
---

**The Asymmetric Retrieval Problem**

Imagine a search engine that must answer two very different kinds of queries:  
1) *Sparse, precise* requests (“Show me the 42nd paragraph in the 2018 report on X.”).  
2) *Dense, fuzzy* requests (“Find documents about X with a tone similar to Y”).  

In both cases we want a *retrieval system* that can map an input query \(q\) to a set of relevant items \(\mathcal{R}\subseteq\mathcal{D}\).  
The challenge is that the *cost functions* for the two query types are fundamentally different: sparse queries demand exact matching, while dense queries reward semantic similarity.  

Mathematically we need a representation space \(E\) and an encoder \(f:E_{\text{input}}\to \mathbb{R}^d\) such that:

- For any *sparse* query \(q_s\), the distance \(||f(q_s)-f(d)||_2\) is minimized only for the exact target document \(d\).  
- For any *dense* query \(q_d\), the same distance metric must rank semantically related documents highly, despite noise and paraphrasing.

This duality forces us to treat the retrieval problem as a *bi‑objective optimization*: we simultaneously minimize two loss terms that are often conflicting. The solution is to learn *two complementary embeddings* (or an embedding with a *directional margin*) that satisfy both objectives without sacrificing one for the other.  

**Non‑obvious insight:**  
Because distance metrics are symmetric, the only way to encode asymmetry is through **learned directional penalties**—e.g., adding a vector bias that pulls sparse queries toward a narrow cone while letting dense queries spread out. This subtle shift turns an inherently symmetric metric into an asymmetric retrieval engine.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
