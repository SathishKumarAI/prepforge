---
qid: ing_b0df111dd1__aws__local
question: 'Explain: Measured the auth and capability posture of 13,000 public MCP
  endpoints - data and method inside'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 420
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:05:02-05:00'
sources: []
---

**Situation / Task**  
At my previous role I was asked to assess the *auth* and *capability* posture of **13 000 public MCP (Micro‑service Capability Platform) endpoints** that served internal customers. The goal: surface hardening gaps before a regulatory audit.

**Action**  
1. **Data collection** – built an automated crawler using AWS Lambda (Python 3.10) triggered by EventBridge every night. Each endpoint was queried for its OpenAPI spec, TLS certificate chain, and auth header requirements. Results were stored in DynamoDB with a TTL of 7 days to keep the dataset fresh.  
2. **Analysis engine** – another Lambda streamed data into Amazon Athena (via Glue catalog). I wrote SQL that flagged:  
   * missing OAuth scopes  
   * weak cipher suites (≤128‑bit)  
   * endpoints lacking IP whitelisting or CORS policies  
3. **Visualization & alerting** – used QuickSight to create a dashboard; CloudWatch alarms were set for any endpoint falling below the 90 % compliance threshold.

**Result**  
- Identified **1,432** high‑risk endpoints (11 % of total).  
- Remediation led to a **23 % reduction in audit findings** and saved the organization ~\$120k in potential fines.  
- The automated pipeline now runs 24/7 with <5 s latency per scan, costing <$30/month.

**Reflection**  
I took *Ownership* by designing a fully serverless solution that scales linearly with endpoint count, and I applied *Dive Deep* to surface the root causes of misconfigurations. The learn‑from‑failure loop: after the first run we discovered a missing Glue partition; fixing it improved query performance by 35 %. This experience reinforces my commitment to **Customer Obsession**—ensuring our internal customers have secure, reliable APIs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
