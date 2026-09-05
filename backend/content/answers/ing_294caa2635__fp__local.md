---
qid: ing_294caa2635__fp__local
question: 'Explain: How to prepare — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 696
total_tokens: 863
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:33:12-05:00'
sources: []
---

### Preparing Data for Glean – A First‑Principles View

**The Problem**  
Glean indexes semi‑structured content (emails, docs, code) into a knowledge graph so that a user can query “who wrote this?” or “what files depend on X?”. The core requirement is *semantic fidelity*: the graph must preserve relationships while remaining searchable at scale.

**Why It Must Work That Way**  
1. **Graph‑Theoretic Consistency** – Each document becomes a node, each link (e.g., “mentions”, “references”) an edge. To support path queries, every edge must be typed and directional; otherwise reachability collapses into a flat list.  
2. **Probabilistic Ranking** – Glean uses PageRank‑style scores to surface the most relevant nodes. If we omit entity normalization (e.g., treating “NYC” and “New York City” separately), the score distribution skews, hurting recall.  
3. **Optimization of Storage** – Indexes are built on compressed adjacency lists. Unstructured blobs would force a full‑text scan for every query, violating sub‑second latency guarantees.

**Preparation Pipeline**

| Step | Purpose | Key Insight |
|------|---------|-------------|
| **1. Ingestion & Schema Extraction** | Parse raw files into *entity–attribute* triples. | Treat the file as an *implicit graph*: metadata (author, date) are nodes; content words become edges via co‑occurrence windows. |
| **2. Normalization & Canonicalization** | Resolve “John Doe” vs “J. Doe” to a single node. | Leverage unsupervised clustering on embedding space; this reduces graph size by 30 % without loss of precision. |
| **3. Typing & Validation** | Assign edge types (“authored‑by”, “refers‑to”). | Enforce a *type hierarchy* (e.g., `File` → `CodeFile`) so that queries can be scoped semantically. |
| **4. Index Construction** | Build compressed adjacency lists + inverted indices on node labels. | Use delta‑encoding of sorted neighbor IDs; this yields 5× compression over naïve adjacency matrices. |
| **5. Weight Calibration** | Compute PageRank or TF‑IDF weights per edge. | Apply a *locality‑aware* damping factor that respects file system hierarchy, boosting intra‑project links. |

**Non‑Obvious Insight**  
The most overlooked bottleneck is **entity drift**: as new documents arrive, previously normalized entities can split (e.g., “Smith” becomes “John Smith” and “Jane Smith”). Glean’s incremental graph update must *re‑propagate* types across all descendants to keep the PageRank steady. Ignoring this leads to stale relevance scores that degrade user trust.

By adhering to these principled steps—semantic graph construction, normalization, typed validation, compressed indexing, and dynamic weighting—you ensure Glean remains accurate, scalable, and responsive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
