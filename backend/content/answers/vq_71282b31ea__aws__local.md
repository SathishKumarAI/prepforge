---
qid: vq_71282b31ea__aws__local
question: What is the binary copy method in ADF, and when is it used?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 411
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:22-05:00'
sources: []
---

**Situation / Task**  
I was leading a migration of a legacy ETL pipeline from on‑prem Hadoop to Azure Data Factory (ADF) for a media company that had ~2 TB/day of log data. The goal was to replace the custom “copy” logic with a robust, cost‑efficient solution while keeping SLA < 30 min.

**Action**  
I evaluated ADF’s *Binary Copy* activity—designed to transfer files byte‑for‑byte without parsing or transforming the content (e.g., CSV, Parquet, JSON). I set up an ADF pipeline that:

1. **Triggers** on new blob uploads in Azure Blob Storage.
2. Uses **Binary Copy** from the source container to a destination ADLS Gen2 folder, preserving metadata and timestamps.
3. Configures **parallelism (copy count)** to 20 for high throughput.
4. Adds **Data Flow** downstream only when schema changes are detected.

I chose Binary Copy because:
- The files were already in the desired format; no transformation was needed.
- It avoided unnecessary CPU usage, reducing costs by ~35 % versus a *Delimited Text* copy that parsed every record.
- It guarantees 100 % fidelity—critical for compliance audits.

**Result**  
The migration cut processing time from 90 min to 25 min (72 % improvement) and lowered ADF run cost from $0.12/hr to $0.04/hr. The team now handles > 10 TB/day with 99.9 % availability, meeting the new SLA.

**Learnings / Ownership**  
I documented a “Binary Copy Best‑Practice” guide for future pipelines, ensuring knowledge transfer. I also automated schema drift detection so we never miss changes—a lesson that reinforced **Ownership** and **Dive Deep** in my approach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
