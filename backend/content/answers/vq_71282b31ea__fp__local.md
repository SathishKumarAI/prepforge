---
qid: vq_71282b31ea__fp__local
question: What is the binary copy method in ADF, and when is it used?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 387
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:40:27-05:00'
sources: []
---

**Why a “binary copy” exists**

When data moves between two storage systems A and B that already contain the same binary format (e.g., an Azure Blob → another Blob, or an HDFS file → ADLS Gen2), the only thing we need is *exact byte‑for‑byte fidelity*.  
The fundamental problem is **data integrity with minimal cost**: we must preserve every bit while avoiding the overhead of parsing, serializing, and re‑serializing the payload.  

**How it works**

ADF’s binary copy uses a *stream‑copy* pipeline:

1. **Read stream** from source as a raw byte buffer (no schema inference).  
2. **Transfer** the buffer through Azure’s internal networking (e.g., Data Lake Gen2 “Hierarchical Namespace” copy or blob block transfer).  
3. **Write stream** to destination with identical metadata (content‑type, checksum).

Because no transformation occurs, the operation is essentially a *zero‑copy* from the perspective of CPU and I/O: the network stack simply forwards blocks.

**When it’s used**

- Same format & codec on source/destination (parquet → parquet, csv → csv).  
- Large blobs where parsing would double read/write time.  
- “Lift‑and‑shift” migrations or archival moves that demand exact replicas.  

**Non‑obvious insight**

Binary copy is *not* a performance trick; it’s an **information‑theoretic optimality guarantee**. By avoiding any re‑encoding, the entropy of the data remains unchanged, so you never pay extra for compression or decompression bandwidth—something that most people overlook when they think “copy” means “transform.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
