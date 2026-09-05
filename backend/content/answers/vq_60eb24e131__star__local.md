---
qid: vq_60eb24e131__star__local
question: SQL basics concepts such as Rank, Dense Rank, Row Number?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 310
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:01:14-05:00'
sources: []
---

**Situation** – In my last role I was tasked with building a monthly performance dashboard for the sales team. The raw data had millions of transaction rows per month, and we needed to surface the top 10 performers by revenue, but also show their relative position within each region.

**Task** – My goal was to generate a clean, ranked list that highlighted both overall rank (across all regions) and regional rank, while ensuring ties were handled correctly so that tied salespeople received the same rank without gaps.

**Action** – I wrote a single SQL query using three window functions: `ROW_NUMBER()` for the absolute ordering across the entire dataset, `RANK()` to give each salesperson a rank that skips numbers when there are ties, and `DENSE_RANK()` to assign tied salespeople the same regional rank without gaps. I also added a partition by region clause so the dense ranking reset per region, and used a CTE to filter only the last month’s data before applying the window functions.

**Result** – The dashboard now displays the top 10 overall performers in under 0.5 seconds, with accurate regional rankings that handle ties gracefully. User feedback improved by 35%, and I learned how subtle differences between RANK, DENSE_RANK, and ROW_NUMBER can dramatically affect business insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
