---
qid: ing_f37cf7b60f__aws__local
question: 'Explain: will retain the integrity of the document'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 420
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:26:59-05:00'
sources: []
---

**Situation / Task**  
In my last role I led a fraud‑detection model that ingested 3 TB of transactional PDFs per day. The data had to stay *exactly* as the customer sent it—no accidental alteration could invalidate downstream analytics or legal audit trails.

**Action**  
I built an end‑to‑end ingestion pipeline on AWS that preserved document integrity by:

| Step | AWS Service | Why |
|------|-------------|-----|
| 1. Receive uploads | Amazon S3 (Object Lock, Glacier Deep Archive) | Immutable storage + compliance retention |
| 2. Verify checksum | Lambda + SHA‑256 | Detect corruption before processing |
| 3. Copy to compute layer | S3 Select + SageMaker Processing Jobs | Process only the needed fields, keep original unchanged |
| 4. Store audit metadata | DynamoDB with versioning | Provenance record (hash, timestamp, user) |

The Lambda checksum function ran in parallel across all uploads, guaranteeing *O(1)* latency per file. I added a CloudWatch alarm that triggered if any checksum mismatch occurred—zero tolerance.

**Result**  
After deployment:

- **Integrity incidents dropped from 4 % to 0 %.**
- The pipeline processed 2× the volume with <5 % cost increase (thanks to S3 Select reducing data transfer).  
- Audit logs met SOC‑2 Type II requirements, passing quarterly audits without remediation.

**Reflection (Bar‑raiser perspective)**  
I owned the end‑to‑end flow, dived deep into storage options, quantified impact with clear metrics, and learned that *immutable* storage is cheaper than “repairing” errors later. This aligns with **Customer Obsession** (customers trust data fidelity) and **Ownership** (taking full responsibility for the pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
