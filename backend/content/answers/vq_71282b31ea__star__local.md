---
qid: vq_71282b31ea__star__local
question: What is the binary copy method in ADF, and when is it used?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 312
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:04:10-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with migrating a petabyte‑scale log archive from an on‑premises HDFS cluster to Azure Blob Storage while keeping the ingestion window under 48 hours. The logs were already compressed in Parquet and required no schema changes, just a straight move.

**Task**  
I had to design a pipeline that could transfer the files reliably at high throughput, minimize latency, and avoid unnecessary serialization/deserialization overhead that would inflate costs and processing time.

**Action**  
I chose Azure Data Factory’s **Binary Copy** activity. I set up a self‑contained linked service for HDFS using SSH/SFTP and another for Azure Blob Storage with SAS authentication. The pipeline read each Parquet file as a binary stream, applied minimal validation (checksum), and wrote it directly to the target container in parallel with a batch size of 10 GB per copy run. I also leveraged ADF’s data flow mapping to track progress and retry failed chunks.

**Result**  
The migration completed in 36 hours, 25% faster than the initial estimate, and cost $1,200 less than the alternative Spark‑based approach. I learned that binary copy is ideal when source and sink share format/encoding and no transformation is needed—maximizing speed while keeping resource usage low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
