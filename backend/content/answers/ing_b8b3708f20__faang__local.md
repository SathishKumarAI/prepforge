---
qid: ing_b8b3708f20__faang__local
question: 'Explain: Classification Signals — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 427
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:52:39-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise explanation of how *Classification Signals* are produced and consumed in a large‑scale production environment (e.g., “Rag” meaning real‑world data). I’ll assume we’re dealing with an online recommendation or fraud detection system that ingests millions of events per day, labels them via a model, and stores the signals for downstream consumers.

**Approach**  
1. **Ingest & Preprocess** – stream raw logs → feature extractor (e.g., Spark/Beam).  
2. **Batch Model Inference** – schedule nightly jobs that run the classification model on new data.  
3. **Signal Generation** – each inference outputs a probability or class label; we serialize this as a lightweight record.  
4. **Persist & Serve** – write to a distributed store (Kafka topic → Kinesis → Cloud Storage) and expose via an API/feature‑store for real‑time use.

**Depth**  
- *Scalability*: Use partitioned streams; keep records small (<1 KB).  
- *Latency*: Separate “online” (low‑latency inference) from “offline” (batch re‑training).  
- *Consistency*: Employ idempotent writes, versioned schemas (Avro/Protobuf).  
- *Observability*: Log throughput, error rates, and model drift metrics.  
Complexity: Ingestion O(N), inference O(M × model_size), storage linear in N.

**Edge Cases**  
- Missing features → fallback to default score.  
- Model updates causing label flips → maintain lineage for auditing.  
- Data skew → re‑partition or use reservoir sampling.

**Optimize & Communicate**  
We can reduce cost by caching recent predictions, compressing signals (gzip), and using approximate inference (e.g., distillation). I’d explain that this pipeline ensures high throughput, low latency, and robust governance—exactly what a FAANG production system demands.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
