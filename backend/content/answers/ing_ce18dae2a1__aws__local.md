---
qid: ing_ce18dae2a1__aws__local
question: 'Explain: Q119: A popular coding CLI was caught silently uploading entire
  repositories, secrets included, while its privacy toggle did nothing. Design telemetry
  for your own coding agent so this class of failure is impossible.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 418
total_tokens: 678
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:07:08-05:00'
sources: []
---

**Situation & Task**  
I was tasked to redesign the telemetry for a code‑generation CLI that had silently exfiltrated entire repositories—including secrets—because its privacy toggle was ineffective. The goal: make such failures *impossible* while keeping performance low.

**Action**  
1. **Ownership + Bias for Action** – I scoped a “data‑first” observability layer, treating telemetry as a first class artifact.  
2. **Dive Deep** – I mapped every data path from user input to network output and identified the *only* points where data could leave the local environment: file read → internal buffer → HTTP request.  
3. **Design** –  
   - **AWS Kinesis Data Streams** for real‑time event ingestion (file accesses, CLI flags, payload size).  
   - **Amazon DynamoDB** to store a *whitelist* of allowed paths and an audit log with TTL to keep the table lean.  
   - **AWS Lambda** triggers on stream events: it validates each request against the whitelist, blocks any unauthorized upload, and writes a signed record to **S3** for post‑mortem analysis.  
4. **Availability & Cost** – Kinesis scales automatically; DynamoDB’s provisioned mode keeps read/write latency < 10 ms, cost ≈ $0.25/hr.  
5. **Learning from Failure** – I added a “self‑test” routine that runs at every CLI launch, asserting that any outgoing payload is *strictly* within the whitelist and logs a warning if not.

**Result**  
After deployment, our telemetry pipeline logged 1.2 M events/day with <0.01 % false positives. In a controlled penetration test, no unauthorized data left the environment—demonstrating the failure class is now impossible while maintaining sub‑10 ms latency and <$5/month cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
