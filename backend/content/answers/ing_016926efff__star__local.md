---
qid: ing_016926efff__star__local
question: What Is Cardinality in a Database? — What Is Cardinality in a Database?
  - SolarWinds Blog
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 350
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:31:05-05:00'
sources: []
---

**Situation** – While leading the migration of our customer‑support ticketing system from Oracle to PostgreSQL, we discovered that the “status” column in the tickets table had a huge number of distinct values (over 10 000) compared to other columns like “priority” or “product”. This skew caused slow index scans and increased query latency during peak support hours.

**Task** – I needed to identify the root cause, quantify how cardinality was affecting performance, and redesign the schema so that lookups on status were efficient without sacrificing data integrity.

**Action** – First, I ran `SELECT COUNT(DISTINCT status) FROM tickets;` to confirm the high cardinality. Then I created a lookup table (`ticket_status`) with a primary key and added a foreign key from tickets to this table. Using PostgreSQL’s partial indexes and a compressed “status_id” integer column, I reduced row size by ~30 %. I also updated our ETL scripts to map legacy status strings to the new IDs. Finally, I ran query plans before and after, showing index scan time drop from 120 ms to 15 ms on a typical `SELECT * FROM tickets WHERE status = 'In Progress';`.

**Result** – Query latency for status‑based filters fell by 87 %, SLA compliance improved from 93 % to 99.8 %. I learned that cardinality isn’t just a number; it’s a performance lever, and normalizing high‑cardinality columns can deliver massive speed gains when paired with proper indexing strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
