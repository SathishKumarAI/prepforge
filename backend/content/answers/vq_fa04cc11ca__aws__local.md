---
qid: vq_fa04cc11ca__aws__local
question: How can you CALL Reports from Forms4.0 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 459
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:23:32-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the migration of a legacy Windows Forms 4.0 application to modern cloud‑native reporting. The client needed every user‑generated report (Sales, Inventory, Finance) to be called directly from the Forms UI while keeping data latency under 2 s and cost < $0.05/report.

**Action**  
I introduced **Microsoft.Reporting.WinForms.ReportViewer** as a lightweight embedded viewer and wrapped it in a reusable `ReportService` class. The service pulls pre‑compiled RDLC templates stored in an **S3 bucket** (immutability + versioning) and fetches data via **AWS Lambda** that queries our **Aurora Serverless** cluster, returning JSON to the .NET client.  
Key design choices:  
* **Stateless Lambda** → auto‑scales with burst traffic, cost ≈ $0.0000167 per 100 ms.  
* **S3 for templates** → 99.999% durability, minimal latency (< 10 ms).  
* **ReportViewer caching** (2‑min TTL) reduces repeated Lambda invocations.

**Result**  
Post‑deployment, report load time dropped from 5 s to **1.8 s** on average (30 % improvement), and monthly reporting cost fell from $120 to **$22**. User satisfaction rose by 42 % as measured in the quarterly NPS survey.  

**Learnings & Ownership**  
I conducted a post‑mortem after an initial spike error: mis‑configured IAM role caused Lambda timeouts. I fixed it, added CloudWatch alarms for latency > 3 s, and created a playbook that reduced future incidents by 90 %. This demonstrates *Ownership* (fixing the root cause) and *Dive Deep* (profiling each layer).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
