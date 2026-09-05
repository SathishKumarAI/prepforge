---
qid: vq_71282b31ea__eli5__local
question: What is the binary copy method in ADF, and when is it used?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 246
total_tokens: 410
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:15:40-05:00'
sources: []
---

**Binary copy in Azure Data Factory (ADF)**  
Think of copying a photo from one cloud folder to another. ADF can hand‑pick the photo’s pixels and reassemble them on the other side—that’s a *structured* copy. The binary copy method, however, is like taking the whole photo file as it is—just a block of data—and sliding that block straight into the new folder without looking inside.

**When to use it?**  
Use binary copy when you need speed and your source and destination are essentially the same format (e.g., an Azure Blob to another Blob, or a file in S3 to another bucket). It skips any parsing or transformation, so the data arrives exactly as it was stored. This is handy for large files, logs, or backups where the content doesn’t need tweaking.

*Key terms:*  
- **ADF (Azure Data Factory)**: Microsoft’s cloud tool for moving and transforming data.  
- **Binary copy**: Copying a file or stream of bytes without inspecting its structure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
