---
qid: vq_d4ead15b22__aws__local
question: How do you handle exception in ADF ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 518
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:16:26-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*  
**Behavioral (STAR):**  

- **Situation:** In a quarterly sales‑reporting pipeline on Azure Data Factory (ADF), an upstream blob store introduced corrupt JSON files, causing 12 % of daily runs to fail.  
- **Task:** I had to design a fault‑tolerant flow that keeps downstream analytics available while isolating bad data.  
- **Action:**  
  1. Added a *Self‑Hosted Integration Runtime* with a **retry policy** (max 5 attempts, exponential back‑off) on the Copy activity.  
  2. Implemented an **error dataset**: on failure, ADF writes the problematic file path and error message to an Azure Storage table via a *Stored Procedure Activity*.  
  3. Created a **Data Flow** that validates JSON schema; invalid rows are routed to a separate “bad‑records” sink (Blob + Event Grid notification).  
  4. Configured **Monitoring alerts** in Log Analytics, triggering an SNS topic for ops and a Lambda function that auto‑moves corrupt files to quarantine.  
- **Result:** Pipeline success rate rose from 88 % to 99.7 %, daily processing time dropped by 18 %, and incident tickets decreased by 70 %.  

**Technical / System Design:**  
- Uses ADF pipelines, Data Flow, Integration Runtime, Azure Storage, Event Grid, Log Analytics, SNS, Lambda.  
- **Scalability:** Parallel copy with self‑hosted IR scales horizontally; data flow uses Spark clusters managed by ADF (auto‑scale).  
- **Availability:** All services are in an Azure Region with 99.95 % SLA; retries provide transient fault tolerance.  
- **Cost:** Retained existing infra, added minimal storage for logs and quarantine; Lambda invocations cost < $0.02/day.  

**Bar‑raiser cues:** Ownership (I redesigned the flow), depth (schema validation & retry logic), quantified impact (99.7 % success), learning from failure (turned corrupt data into actionable alerts).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
