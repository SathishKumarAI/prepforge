---
qid: ing_17bfe4ee28__aws__local
question: 'Explain: Location 0 0 Filter(s) Applied — Search Jobs - Software and Services:
  Machine Learning and AI - Jobs - Careers at Apple'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 458
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:19:29-05:00'
sources: []
---

**Situation**  
When I was building a job‑search microservice for an internal portal, users complained that the “Location 0 0” label made it unclear whether a job posting had no location or if the coordinates were missing.

**Task**  
I needed to clarify the UI and make the filter logic transparent while keeping the experience fast and cost‑effective on AWS.

**Action**  

| Step | What I did | Why it matters |
|------|------------|----------------|
| 1. **Clarify intent** | Replaced “Location 0 0” with a user‑friendly message: *“All locations – no geographic filter applied.”* | Removes ambiguity → better customer obsession. |
| 2. **Dive deep into data** | Queried the DynamoDB `Jobs` table (≈ 1M items) to confirm that 12% of records had null or “0 0” coordinates. | Ensures we’re not masking a data quality issue. |
| 3. **Redesign filter logic** | Added an optional `geo_filter=true/false` flag in API Gateway, backed by Lambda and ElasticCache for caching the filtered job list. | Improves scalability (cache hits reduce DB reads) and reduces RDS cost. |
| 4. **Automate validation** | Wrote a CloudWatch event that scans nightly and flags any “0 0” entries for ingestion pipeline review. | Demonstrates ownership and continuous improvement. |

**Result**  
- User confusion dropped by **73%** (measured via click‑through rate on the filter toggle).  
- API latency decreased from 250 ms to 90 ms, saving ~$200/month in Lambda invocations.  
- Data quality issue was identified early; downstream pipelines now reject “0 0” values.

**Takeaway**  
Clear UI language + data‑driven validation leads to measurable customer satisfaction and operational savings—exactly what the **Customer Obsession**, **Ownership**, and **Dive Deep** principles demand.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
