---
qid: vq_71282b31ea__faang__local
question: What is the binary copy method in ADF, and when is it used?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 473
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:16:18-05:00'
sources: []
---

**Clarify**  
The interviewer asks: *“What is the binary copy method in Azure Data Factory (ADF) and when would you use it?”*  
Assumptions to confirm: we’re dealing with ADF’s Copy Activity, not a custom script; the data source/destination support binary format; and performance or schema preservation matters.

**Approach**  
Explain that “binary copy” refers to copying files *as‑is* without transformation. Then discuss typical use cases (large blobs, media, log archives). Finally, touch on prerequisites (source supports binary, destination storage type).

**Depth**  
- **Definition:** In ADF’s Copy Activity, selecting *Binary* as the source/ sink data format tells the engine to stream the file bytes directly from the source to the destination without parsing or re‑serializing.  
- **When used:**  
  - Moving large objects (images, videos, PDFs) where no schema change is needed.  
  - Copying compressed archives (.zip, .tar.gz) that must remain intact.  
  - Replicating logs or backups where fidelity and speed outweigh transformation needs.  
  - Inter‑storage replication (Blob ↔ Blob, ADLS Gen2 ↔ ADLS Gen2).  
- **Benefits:** Minimal CPU overhead, lower latency, reduced cost, and avoidance of schema drift.

**Edge Cases**  
- Binary copy can’t be used if you need to filter or map columns.  
- It fails on sources that require authentication per file unless credentials are supplied.  
- If the destination has constraints (e.g., row‑level security), binary copy won’t enforce them.

**Optimize & Communicate**  
I’d recommend using *binary* when transfer speed and data integrity trump transformation. For large volumes, enable *parallel copy* and set *max concurrent connections* to 32–64 to fully saturate bandwidth while staying within ADF limits. If later you need to transform the content, switch to a structured format (Parquet/JSON) and re‑run the pipeline. This shows clear trade‑offs: speed vs flexibility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
