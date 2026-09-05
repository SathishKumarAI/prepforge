---
qid: vq_c0af3363b7__star__local
question: ;How can I interpret a two-digit year after 2000?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 341
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:17:38-05:00'
sources: []
---

**Situation** – In late 2019, my team was migrating an on‑prem legacy billing system to a new microservices architecture. The legacy data had dates stored as two‑digit years (e.g., “23” for 2023) in the customer subscription tables. During load testing we discovered that the ETL job was incorrectly parsing these into the 1900s, causing all future renewal calculations to be off by a century.

**Task** – I needed to design a robust solution that would correctly interpret any two‑digit year as 2000‑2099 during data migration, without affecting existing code or creating new bugs.

**Action** – I added a helper function in the ETL pipeline using Python’s `datetime.strptime` with a custom century offset. The function checked if the parsed year was <100; if so, it added 2000 before converting to a full `date`. I also wrote unit tests covering edge cases (e.g., “00” → 2000, “99” → 2099) and updated the documentation in Confluence. During deployment, we ran a staged migration on a subset of data, verified the dates with SQL queries, and then rolled out to production.

**Result** – The migration completed two days ahead of schedule, and post‑migration analytics showed that renewal revenue projections were now accurate within 0.01%. I learned the importance of defensive parsing for legacy systems and documented a reusable century‑bias pattern for future projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
