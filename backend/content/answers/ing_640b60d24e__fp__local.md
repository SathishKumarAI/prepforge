---
qid: ing_640b60d24e__fp__local
question: 'Explain: What We Collect — GitHub - getzep/graphiti: Build Real-Time Knowledge
  Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 365
total_tokens: 556
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:37:54-05:00'
sources: []
---

**What We Collect – the Core of *graphiti*’s Knowledge Graph**

At its heart, *graphiti* turns streams of raw observations into a **probabilistic graph** that an AI agent can query in real time.  
1. **Event tuples** – Each incoming record is parsed into a `(subject, predicate, object)` triple plus a timestamp and source identifier.  
2. **Contextual metadata** – We attach provenance (URL, API endpoint), confidence scores from the extraction model, and optional schema annotations.  
3. **Temporal snapshots** – Every update is stored as a delta; the graph itself is a versioned time‑series so that inference can be performed on any historical slice.

Why this design?  
- **Optimization**: The graph is an index of *conditional independencies*. By storing only edges that survive a confidence threshold, we keep the search space small for message‑passing algorithms.  
- **Information theory**: Each triple reduces entropy about the world state; the timestamp allows us to compute information flow rates and detect concept drift.  
- **Geometry**: The graph’s adjacency matrix can be embedded into low‑dimensional latent spaces (e.g., via random walk embeddings), enabling continuous‑time reasoning with geometric regularization.

**Non‑obvious insight:**  
The *delta‑based storage* not only saves space but also lets us compute *temporal centrality* online. By aggregating the influence of a node over sliding windows, we can detect emerging topics before they surface in aggregate statistics—an edge case that traditional batch pipelines miss.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
