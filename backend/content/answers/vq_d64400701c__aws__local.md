---
qid: vq_d64400701c__aws__local
question: What is normalization? What are the types?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 421
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:42-05:00'
sources: []
---

**Situation & Task**  
I led a migration of an on‑prem legacy order system to Amazon Aurora MySQL in 2024. The monolithic schema caused duplicate product records and stale inventory counts—customers complained (NPS dropped from 75 → 58). I owned the data quality overhaul, focusing on **normalization** to eliminate redundancy.

**Action**  
1. **Dive Deep** into the current tables: identified 12 tables with overlapping `product_id`, `sku`, and `price` columns.  
2. Applied **First‑Normal Form (1NF)**—split concatenated fields; used **Second‑Normal Form (2NF)** to move non‑key attributes to product & pricing tables; enforced **Third‑Normal Form (3NF)** by removing transitive dependencies (`category_name` → `category_id`).  
3. Designed a new schema in Aurora MySQL, leveraging **partitioning** on `order_date` for fast queries and **read replicas** for reporting.  
4. Automated the migration with AWS Data Migration Service (DMS) + custom Lambda data‑cleaning scripts to preserve referential integrity.

**Result**  
- Reduced duplicate product rows by 92 % (from ~18k → 1.2k).  
- Inventory accuracy improved, cutting order errors by **48 %**, lifting NPS back to 73 in two weeks.  
- Cost savings: Aurora read replicas eliminated 35 % of on‑prem hardware spend; DMS migration ran within budget ($12k vs $20k estimate).

**Reflection**  
I learned that normalization is not just a theoretical exercise—it directly fuels **customer obsession** by ensuring data consistency. Future rollouts will include automated schema‑validation checks in CI/CD pipelines to catch regressions early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
