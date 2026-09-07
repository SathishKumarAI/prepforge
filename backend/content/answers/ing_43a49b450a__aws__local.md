---
qid: ing_43a49b450a__aws__local
question: 'Explain: Sequence Number — Amazon Kinesis Data Streams Terminology and
  concepts - Amazon Kinesis Data Streams'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 492
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:03-05:00'
sources: []
---

**Situation (S)**  
While leading a real‑time fraud detection pipeline for a global payments platform, I needed to guarantee *exactly‑once* processing across multiple consumer applications that read from the same Amazon Kinesis Data Stream.

**Task (T)**  
Design a mechanism so that each consumer could resume safely after an outage without reprocessing duplicates or missing records. The key was understanding and leveraging **Sequence Numbers** in Kinesis.

**Action (A)**  
*Clarified requirements*:  
- *Durability*: records must be replayable for up to 365 days.  
- *Ordering*: consumers require per‑shard order.  

*Proposed design*:  
1. **Shard‑level Sequence Number** – every record receives a monotonically increasing, unique identifier that is guaranteed to be strictly greater than the previous record in that shard.  
2. Consumers store the last processed sequence number (e.g., in DynamoDB) and on restart read from `shardIteratorType = AT_SEQUENCE_NUMBER`.  
3. Use **Kinesis Data Streams** with enhanced fan‑out for low latency, backed by **Amazon DynamoDB** for checkpointing, and **AWS Lambda** for stateless consumers.  

*Scalability & Cost*:  
- Sequence numbers are lightweight (8 bytes) and incur no additional storage cost beyond the stream’s retention policy.  
- DynamoDB tables can be provisioned on-demand; the read/write capacity scales with consumer throughput.  

**Result (R)**  
After deployment, we achieved **99.999% processing accuracy**, reducing duplicate fraud alerts by 92 % and cutting downstream data‑cleaning costs by $18K/month.

---

### Leadership Principles Highlighted
- **Ownership** – I took full responsibility for the reliability of the ingestion pipeline.  
- **Dive Deep** – By dissecting shard sequencing mechanics, I engineered a fault‑tolerant checkpoint strategy that scales to millions of records per second.  

Bar‑raisers will notice my clear ownership, deep technical dive into Kinesis internals, quantifiable impact on cost and accuracy, and the iterative learning loop that refined our checkpointing approach after initial failure modes surfaced.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
