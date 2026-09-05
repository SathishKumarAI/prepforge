---
qid: vq_4d0e530024__star__local
question: WHAT ARE THE DIFFERENT TYPES OF DATABASE RELATIONSHIPS?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 316
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T21:58:30-05:00'
sources: []
---

**Situation** – While leading the data migration for a fintech startup’s new credit‑risk platform, I discovered that our legacy system had over 30 tables with poorly documented foreign keys. The reporting team was getting inconsistent results because joins were being guessed at rather than defined.

**Task** – I needed to map out all database relationships, classify them into one-to-one, one-to-many, and many-to-many, and then redesign the schema so that each relationship was explicit in the ER diagram and enforced by constraints.

**Action** – I wrote a Python script using SQLAlchemy’s reflection API to pull every table’s primary key and foreign key metadata from PostgreSQL. Then I visualized the relationships with Graphviz, tagging edges with cardinality annotations. For many-to-many pairs (e.g., `users` ↔︎ `roles`) I created junction tables (`user_roles`) and added composite unique constraints. I also introduced a “soft delete” flag on all foreign keys to preserve historical data without breaking referential integrity.

**Result** – The new schema reduced join errors by 92 % and cut query latency for the risk‑score report from 4.8 s to 1.3 s. The team now has a clear ER diagram that speeds onboarding, and I learned how automated metadata extraction can turn a chaotic legacy database into a maintainable, performance‑optimized system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
