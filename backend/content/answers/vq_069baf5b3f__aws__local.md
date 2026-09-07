---
qid: vq_069baf5b3f__aws__local
question: Can one read/write files from PL/SQL?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 738
total_tokens: 968
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:37:12-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership** – I took full responsibility for ensuring secure, scalable file handling inside an Oracle database; **Dive Deep** – I dissected PL/SQL capabilities and AWS integrations to deliver a robust solution.

---

### Behavioral (STAR)

- **Situation:** Our e‑commerce order system ran on Amazon RDS for Oracle. The legacy batch job had to ingest CSV files from the vendor every night but was failing due to file‑system access restrictions in the managed environment.
- **Task:** Build a self‑contained, secure method to read/write files without exposing the underlying OS.
- **Action:**  
  1. Created an **Oracle external table** pointing to S3 via **AWS Glue Data Catalog** and **S3 Select** for efficient querying.  
  2. Wrote PL/SQL stored procedures using `UTL_FILE` that read/write to a **mounted EFS** (via AWS FSx for Lustre) only when the database instance was in *stand‑by* mode, ensuring no performance hit.  
  3. Implemented an **AWS Lambda** orchestrator (Python) that triggers nightly, copies files from S3 to EFS, and calls the PL/SQL procedure via `sqlplus` over SSH, logging outcomes to CloudWatch.
- **Result:** Reduced batch runtime by **35 %** (from 2h30m to 1h30m), cut storage costs by **$4K/month** by using S3 Select instead of full‑file scans, and achieved **99.9 % availability** during peak traffic.

---

### Technical Design

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| File source | Amazon S3 (object storage) | Durable, scalable, cost‑effective for CSVs |
| Metadata catalog | AWS Glue Data Catalog | Enables external tables without manual schema changes |
| Fast query access | S3 Select + Oracle external table | Avoids loading entire file into DB |
| Temporary write buffer | Amazon FSx for Lustre (EFS) | Low‑latency, POSIX‑compatible storage for PL/SQL `UTL_FILE` |
| Orchestration | AWS Lambda + EventBridge | Serverless, scales with load; no EC2 overhead |
| Monitoring | CloudWatch Logs & Metrics | Real‑time alerting and audit trail |

**Trade‑offs:** Using EFS adds a small latency (~10 ms) but is offset by the simplicity of `UTL_FILE`. The Lambda approach incurs cold‑start costs, yet overall savings from reduced RDS I/O outweigh them.

---

### Bar‑raiser Takeaway

- **Ownership:** I delivered end‑to‑end automation and documented rollback procedures.  
- **Dive Deep:** I evaluated multiple file‑access strategies (direct DBFS, external tables, Lambda) and chose the most cost‑effective.  
- **Quantified Impact:** 35 % faster processing, $4K/month saved, 99.9 % uptime.  
- **Learning from Failure:** Initial attempts using `UTL_FILE` on RDS failed due to file‑system limits; pivoting to EFS resolved the issue and informed future architecture choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
