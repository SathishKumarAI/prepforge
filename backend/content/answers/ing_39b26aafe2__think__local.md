---
qid: ing_39b26aafe2__think__local
question: Glean's ranking leans on a knowledge graph of people, content and activity.
  How would you build that graph, and how does it improve retrieval beyond embedding
  similarity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 212
output_tokens: 461
total_tokens: 673
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:42:08-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • Define what “people, content, activity” means in Glean’s context (users, documents, interactions).  
   • Assume we have structured logs and some unstructured text; we’ll need a scalable graph database.  

**2️⃣ Mental model: Knowledge‑Graph + Retrieval pipeline**  
   • Treat the system as two stages: *graph construction* (entity extraction, relationship inference) → *query answering* (semantic search + graph traversal).  

**3️⃣ Step‑by‑step reasoning**  
   1. **Entity extraction & disambiguation**: run NLP on documents and logs to pull names, topics, actions; link them via a canonical ID store.  
   2. **Relationship inference**: add typed edges (e.g., `AUTHORED`, `LIKED`, `COLLABORATED_WITH`) from activity logs; enrich with co‑occurrence statistics or ML‑predicted links.  
   3. **Weighting & temporal decay**: attach scores to edges based on recency and interaction frequency.  
   4. **Index for retrieval**: build hybrid indices—vector embeddings for surface similarity, plus graph adjacency lists for relational jumps.  
   5. **Query handling**: first embed the query, retrieve top‑N candidates, then re‑rank using graph‑based scores (e.g., proximity to highly relevant entities).  

**4️⃣ Common traps to avoid**  
   • Over‑loading the graph with noisy edges—apply confidence thresholds.  
   • Ignoring scalability—use a distributed graph store and incremental updates.  
   • Relying solely on embeddings—forget that embeddings can miss long‑range relational cues.

**5️⃣ Sanity checks & communication**  
   • Verify that adding an edge (e.g., `Alice → Document X`) actually improves recall in a held‑out test set.  
   • Explain to stakeholders: “The graph lets us surface documents linked through shared authors, topics, or recent interactions—things embeddings alone can’t capture because they ignore explicit relationships.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
