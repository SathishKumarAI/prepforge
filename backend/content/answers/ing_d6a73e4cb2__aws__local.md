---
qid: ing_d6a73e4cb2__aws__local
question: 'Explain: Data types supported — Elasticsearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 648
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:24:47-05:00'
sources: []
---

**Answer (Amazon style)**  

During my last role at a SaaS company I led the migration of our search stack from legacy Lucene to **Elasticsearch** to support real‑time product discovery. The interview question—“What data types does Elasticsearch support?”—is a proxy for understanding how you map business needs to technical solutions, so I framed my response around *Customer Obsession* and *Dive Deep*.

---

### Technical Overview (STAR)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| **SaaS catalog** needed multi‑faceted search across millions of listings. | Design an index schema that supports fast, accurate queries for users on mobile & web. | 1️⃣ Created a dynamic mapping with the following field types: <br>• **`keyword`** – exact match tags (e.g., brand, color). <br>• **`text`** – analyzed fields for full‑text search (title, description) using custom analyzers (stemming + synonym filters). <br>• **`numeric`** (`integer`, `float`) – price, rating. <br>• **`date`** – listing creation and last update timestamps. <br>• **`geo_point`** – store latitude/longitude for proximity filtering. <br>2️⃣ Leveraged **nested objects** for complex structures (e.g., product variants). <br>3️⃣ Implemented **runtime fields** to compute derived values on‑the‑fly (e.g., discounted price). | Index size: 4 TB; query latency < 120 ms for 95th percentile. Traffic grew 2× in 6 months, yet cost per search remained below $0.0003 due to efficient shard allocation and the use of **Amazon OpenSearch Service** (managed Elasticsearch). |

### Design Rationale

* **Scalability:** Partitioned indices by region; used `shard` size ~32 GB and replicated across 3 AZs for high availability.  
* **Cost:** Chose on‑demand EC2 instances with spot pricing for non‑critical shards, saving ~30 %.  
* **Trade‑offs:** Opted for `text` analyzers over custom scoring to keep the cluster simple; later we added a custom **boosting script** when A/B testing revealed lower conversion on keyword‑only searches.

### Bar‑raiser Takeaway

- **Ownership & Dive Deep:** I owned the full lifecycle—from schema design to production tuning—while digging into shard allocation logs and query plans.  
- **Quantified Impact:** 40 % lift in click‑through rate, $1M incremental revenue over three quarters.  
- **Learning from Failure:** Early attempts with a flat mapping caused OOM errors; pivoting to nested objects resolved the issue and improved query semantics.

> *“I designed an Elasticsearch schema that balances rich data types with operational efficiency, delivering measurable business value while staying within cost constraints.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
