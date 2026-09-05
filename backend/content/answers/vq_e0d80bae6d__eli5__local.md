---
qid: vq_e0d80bae6d__eli5__local
question: How to fetch common records from two tables?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 197
total_tokens: 354
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:31:34-05:00'
sources: []
---

Imagine you have two recipe books—one for desserts and one for drinks. Each page lists ingredients, but some ingredients appear in both books (like “sugar”). To find the common ingredients, you open both books side‑by‑side and look for names that show up in both pages. In databases, those “books” are tables and the “pages” are rows. The process of pulling out only the rows that exist in both tables is called an **inner join** (or a “common record fetch”). You tell the database: “Take me the rows where column A from Table 1 matches column B from Table 2.” It then walks through each row, compares the values, and keeps only the matches—just like spotting sugar in both recipe books. This gives you a clean list of records that are shared by the two tables.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
