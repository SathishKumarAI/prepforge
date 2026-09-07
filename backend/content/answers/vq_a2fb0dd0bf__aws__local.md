---
qid: vq_a2fb0dd0bf__aws__local
question: How do you implement data masking in ADF for sensitive data?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 455
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:07:05-05:00'
sources: []
---

**Answer – Amazon Interview Style**

> **Situation:**  
> In my last role I led a migration of the customer‑analytics pipeline from on‑prem to Azure. The new lake stored PII—SSNs and credit cards—that had to be masked before downstream BI tools consumed it.

> **Task:**  
> Implement end‑to‑end data masking in Azure Data Factory (ADF) while keeping latency < 5 min for nightly loads, cost <$200/month, and ensuring compliance with GDPR.

> **Action:**  
> 1. *Define masking logic* – used deterministic hash (`HASHBYTES('SHA2_256', SSN)` → first 6 chars + “****”) and a lookup table for credit‑card prefixes.  
> 2. *ADF pipeline design* – added an `Azure Function` activity that receives the raw blob, applies the masking rules via a C# Lambda (stateless, serverless), and writes back to a secured “masked” container.  
> 3. *Security & cost* – the function runs in a private‑endpoint VNet, so no public internet exposure; billed by execution time (~$0.000016 per GB processed).  
> 4. *Monitoring* – configured Azure Monitor alerts for failures and an SLA metric (90 % of jobs finish within 5 min).

> **Result:**  
> Masking completed in < 3 min on a 10 GB dataset, reducing downstream storage costs by 15 %. Compliance audit passed with zero data‑leak incidents.  

**Leadership Principles Highlighted**

- **Ownership & Deliver Results:** I owned the migration end‑to‑end and delivered compliant masking within budget.  
- **Dive Deep:** Chose deterministic hashing over randomization to maintain referential integrity, evaluated cost trade‑offs of Azure Functions vs. Databricks.

*Bar‑raiser check:* clear ownership, data‑driven metrics, deep technical rationale, learning loop (audit feedback → improved hash algorithm).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
