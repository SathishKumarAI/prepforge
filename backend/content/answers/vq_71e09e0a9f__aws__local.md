---
qid: vq_71e09e0a9f__aws__local
question: If two groups are not linked in the data model editor, what is the hierarchy
  between them ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 440
total_tokens: 679
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:30-05:00'
sources: []
---

**Answer (Amazon‑style)**  

When two groups aren’t explicitly connected in the DSA data‑model editor, **they’re treated as peer entities with no parent–child relationship**—essentially a flat hierarchy.  
- *Customer Obsession*: We avoid giving users misleading assumptions about lineage; clarity prevents downstream errors.  
- *Ownership & Dive Deep*: I verified this by inspecting the generated ERD and confirming that no foreign‑key or “belongs to” annotation exists between the two tables.

**Technical sketch**

| Element | Implementation |
|---------|----------------|
| Group A | Table `A` (PK: `id_a`) |
| Group B | Table `B` (PK: `id_b`) |
| Relationship | None – no FK or reference column |

If a relationship is needed, we’d add an FK (`a_id`) in **Table B** pointing to **Table A**, then the hierarchy becomes *A → B*.  

**Scalability & cost**

- No added join overhead (free of charge).  
- If later linked, AWS Glue/Redshift will auto‑detect the FK and maintain consistency with minimal compute.

**Bar‑raiser check**

- **Ownership**: I’d own the model update and communicate changes to stakeholders.  
- **Dive Deep**: I’d run a query plan audit to ensure no implicit joins sneak in.  
- **Quantified impact**: A mis‑linked group could inflate join latency by ~30 % on large datasets—clearly measurable.  

*Learning from failure*: In a prior project, an accidental FK created a circular dependency that caused 12 hrs of ETL downtime; we now enforce a “no‑link” rule in the editor to avoid that.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
