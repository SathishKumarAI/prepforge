---
qid: ing_82e96dfc64__fp__local
question: 'Explain: MaxSim: The Core Scoring Mechanism — Late Interaction Colbert'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 469
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:43:35-05:00'
sources: []
---

**MaxSim – the heart of late‑interaction retrieval**

The fundamental problem is *matching a query \(q\) with a passage \(d\) when both are encoded as dense vectors*.  
Let \(\{u_i\}_{i=1}^m\subset\mathbb R^k\) be the token embeddings for \(q\), and \(\{v_j\}_{j=1}^n\subset\mathbb R^k\) those for \(d\).  
A naïve dot‑product score averages all pairwise similarities, but this smears out fine‑grained evidence: a single query token may be highly relevant to only one passage token.  

**MaxSim formalises “the best match per query term”**:

\[
S(q,d)=\sum_{i=1}^m \max_{j}\langle u_i, v_j\rangle .
\]

*Why must we take the maximum?*  
Consider the retrieval objective as an *information‑gain* problem: each query token \(u_i\) should contribute its strongest evidence in the passage. The max operator implements a *winner‑take‑all* policy that is convex in \(q\)’s representation and linear in \(d\)’s, enabling efficient indexing of \(\{v_j\}\) via inverted lists of nearest neighbours.

**Geometric insight:**  
MaxSim projects each query token onto the hyperplane spanned by passage tokens and records the highest cosine similarity. This is equivalent to measuring the *closest point* from a set of query rays to the convex hull of passage vectors, yielding an upper bound on relevance that respects local alignment rather than global overlap.

**Non‑obvious takeaway:**  
Because MaxSim depends only on pairwise maxima, it is **non‑commutative**: swapping query and passage changes the score. This asymmetry allows *late interaction*—the model can pre‑index passages cheaply but must recompute the max for each query, striking a balance between scalability and expressivity that pure dot‑product cannot achieve.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
