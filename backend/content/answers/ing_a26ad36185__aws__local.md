---
qid: ing_a26ad36185__aws__local
question: 'Explain: F5: Audit-log gap — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 510
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:32:11-05:00'
sources: []
---

**Situation (S)**  
In my last role I managed the *Computer‑Use Agent* (CUA) that automatically runs diagnostic scripts on thousands of Linux hosts. A recent audit uncovered a **missing audit‑log window**: any script execution between 02:00–04:00 UTC was not captured, violating SOC2 controls.

**Task (T)**  
I had to close the gap within one sprint while keeping uptime > 99.9 % and cost < $200/month.

**Action (A)**  

| Step | AWS Service | Design Choice |
|------|-------------|---------------|
| 1 | **Amazon CloudWatch Logs & Kinesis Data Firehose** | Stream every CUA log entry to a dedicated Log Group with *retention=365 days*. |
| 2 | **AWS Lambda** (triggered by CloudWatch Events) | Validate timestamps, flag gaps, and publish alerts to SNS. |
| 3 | **Amazon DynamoDB** (TTL table) | Persist “last‑logged‑time” per host; a scheduled Lambda checks for > 4 h inactivity and auto‑runs a lightweight audit script. |
| 4 | **AWS Systems Manager Run Command** | Re‑execute missing scripts in the gap, capturing outputs to CloudWatch Logs. |

- **Scalability:** Firehose shards scale automatically with log volume; DynamoDB handles millions of hosts with < 1 ms latency.  
- **Availability:** All services are multi‑AZ and backed by S3 for durable storage.  
- **Cost:** 100 GB/month of logs + Lambda invocations ≈ $35; DynamoDB TTL table < $5.

**Result (R)**  
Within 48 h the audit gap was closed; subsequent SOC2 audit found zero non‑compliance events. Uptime remained at 99.97 %. The automated system reduced manual review time by **80 %**, saving ~10 engineer‑hours/month.

**Bar‑raiser cues:** I demonstrated *Ownership* (end‑to‑end fix), *Dive Deep* (log‑level inspection, DynamoDB TTL logic), quantified impact (0 infractions, 80 % labor savings), and learned that pre‑emptive gap detection is cheaper than post‑hoc remediation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
