---
qid: ing_1604315814__think__local
question: 'Explain: Don’t just hack it together — Designing Data-Intensive Applications
  (DDIA) \u2014 an O\u2019Reilly book by Martin Kleppmann (The Wild Boar Book)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 222
output_tokens: 486
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:10:55-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - The user wants an *explanation* of why one should not “hack it together” when building ML systems, referencing Martin Kleppmann’s book *Designing Data‑Intensive Applications* (DDIA).  
   - Assume they have basic ML knowledge but may not know the book’s core themes.  
   - Aim: connect DDIA’s principles to practical ML architecture decisions.

**2. Mental model / framework**  
   - Use a **three‑layer view** from the book: *data modeling*, *storage & replication*, and *processing pipelines*.  
   - Overlay the ML lifecycle (feature engineering → training → serving).  
   - Highlight “hacking” as ad‑hoc, monolithic solutions that ignore these layers.

**3. Step‑by‑step reasoning**  
   1. Summarize DDIA’s thesis: scalable apps need *robust* data pipelines, not quick hacks.  
   2. Map each ML phase to a DDIA layer:  
      - Feature extraction ↔ data modeling & ingestion.  
      - Model training ↔ batch processing & checkpointing.  
      - Online inference ↔ low‑latency serving and state management.  
   3. Illustrate pitfalls of hacking (e.g., single‑file feature store, no versioning, brittle model reload).  
   4. Show how DDIA’s patterns—partitioning, schema evolution, event sourcing—solve those issues.

**4. Common traps to avoid**  
   - Over‑generalizing the book: it’s about data apps, not ML per se; keep focus on data handling.  
   - Ignoring domain constraints (e.g., real‑time vs batch).  
   - Forgetting that “hacking” may be acceptable in prototyping but not production.

**5. Sanity‑check & communicate clearly**  
   - Re‑read the answer to ensure each bullet ties back to DDIA concepts.  
   - Use concrete examples (e.g., using Kafka for feature streams, Delta Lake for versioned data).  
   - Conclude with a concise takeaway: “Designing ML systems with DDIA principles turns fragile hacks into maintainable, scalable pipelines.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
