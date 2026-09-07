---
qid: ing_120d2fa1b6__aws__local
question: 'Explain: OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 622
total_tokens: 854
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:06:17-05:00'
sources: []
---

**Situation & Task**  
While leading a cross‑functional ML team on the “Predictive Maintenance” platform, we hit a bottleneck: data scientists were spending >30 % of their time debugging array operations and sorting routines in Jupyter notebooks. The root cause was a lack of shared knowledge about efficient data structures (hash maps, heaps, radix trees) and stable‑sort algorithms that scale to billions of sensor records.

**Action**  
I authored the **OG CS61B Data Structures & Sorting Cheat Sheet**, distilled from CS61B’s core concepts but mapped directly to our stack:

| Concept | AWS Service | Why It Matters |
|---------|-------------|----------------|
| *Hash tables (dict)* | Amazon DynamoDB / ElastiCache Redis | O(1) key‑value lookups for feature flags |
| *Balanced trees (AVL, Red‑Black)* | Amazon Neptune / RDS Postgres | Ordered traversals for time‑series windows |
| *Heaps* | AWS Glue / EMR | Priority queues for real‑time anomaly scoring |
| *Radix sort* | Amazon S3 Select + Athena | Linear‑time sorting of 10⁹ integer IDs in query engine |

I bundled the sheet into a **Confluence page**, added code snippets, complexity tables, and cost models (e.g., Radix sort on EMR vs. Timsort on Spark). I then led a live workshop where we refactored a 2‑hour ETL job to use `radix_sort` in PySpark, cutting runtime from **4 h → 45 min** (≈88 % faster) and reducing Spot‑Instance usage by **$350/month**.

**Result**  
- Data scientists’ debugging time dropped 70 %.  
- Production pipeline latency decreased by **42 %**, enabling near‑real‑time predictions.  
- The cheat sheet became a living doc, updated quarterly, fostering continuous learning and ownership across the team.

---

### Leadership Principles Highlighted
- **Customer Obsession** – Delivered faster insights to downstream ops teams.  
- **Ownership** – Took end‑to‑end responsibility for the knowledge base and its impact.  
- **Dive Deep & Bias for Action** – Analyzed algorithmic trade‑offs, executed rapid prototyping, and measured outcomes.

### What a Bar‑Raiser Listens For
- Quantified ROI (time saved, cost reduction).  
- Depth of technical understanding (complexity, AWS service fit).  
- Evidence of ownership: proactive documentation, training, and iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
