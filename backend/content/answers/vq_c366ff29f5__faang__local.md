---
qid: vq_c366ff29f5__faang__local
question: What are the types of Measures?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 564
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:32:17-05:00'
sources: []
---

**Clarify**  
The interviewer asks for “types of measures” in a data‑engineering context—i.e., how we quantify business or system metrics. I’ll assume they mean *business intelligence/analytics* measures (dimensions vs. aggregates) rather than statistical measurement theory.

**Approach**  
1. List the canonical categories: **Metric, KPI, Composite, Derived, and Raw**.  
2. Explain each with an example.  
3. Note how we store & compute them in a warehouse (e.g., fact tables, aggregated views).  

**Depth**  
| Type | Definition | Typical Use | Storage Pattern |
|------|------------|-------------|-----------------|
| **Metric (Measure)** | Raw numeric value that can be summed or averaged (e.g., revenue, click‑through rate). | Daily sales, page views. | Fact table rows; optional pre‑aggregated grain. |
| **KPI** | Business‑critical metric tied to a target (e.g., 95 % uptime). | Service level objectives. | Same as metrics but often stored in dashboards with thresholds. |
| **Composite Measure** | Combination of two or more base measures using arithmetic (e.g., conversion rate = conversions / visits). | ROI, cost‑per‑acquisition. | Derived columns in ETL; can be materialized for speed. |
| **Derived/Calculated Measure** | Computed on‑the‑fly from raw data (e.g., moving average of last 7 days). | Trend analysis. | Stored as views or computed in queries; may use window functions. |
| **Raw / Source Measure** | Unaggregated, source‑system value (e.g., individual transaction amount). | Auditing, lineage. | Fact table at lowest grain; often retained for compliance. |

**Edge Cases**  
- **Skewed data**: Metrics like revenue can be heavily influenced by outliers—use median or trimmed mean.  
- **Dimensionality explosion**: Composite measures across many dimensions can lead to combinatorial blow‑up; materialized views help.  
- **Time‑series drift**: Derived measures that assume stationarity may mislead if underlying patterns shift.

**Optimize & Communicate**  
To scale, pre‑aggregate metrics at daily or hourly grain and store them in a columnar format (e.g., Redshift, Snowflake). Use incremental ETL to avoid full reloads. Explain trade‑offs: higher latency vs. storage cost. Conclude by stressing the importance of clear naming conventions (“Revenue_Q4_2025”) so downstream teams can reliably consume measures without ambiguity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
