---
qid: ing_87bb8ba082__aws__local
question: 'Explain: Design the PII-handling pipeline for an LLM feature that processes
  customer support transcripts.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 480
total_tokens: 719
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:11-05:00'
sources: []
---

**Situation & Task**  
I led the data‑privacy team at a fintech where we launched an LLM‑powered “Smart Reply” for customer support transcripts. The pipeline had to remove all PII (names, account numbers, SSNs) before feeding data into the model while keeping latency < 200 ms and cost < $0.05 per transcript.

**Action – Design & Implementation**  
1. **Ingest**: Kinesis Data Streams → Lambda for real‑time tokenization.  
2. **Detection**: Custom NER model on SageMaker (BERT fine‑tuned) wrapped in a container, invoked by Lambda; confidence > 0.97 triggers masking.  
3. **Audit & Re‑identification**: Masked tokens stored in DynamoDB with a reversible hash for compliance audits; audit logs go to CloudTrail and Athena for query.  
4. **Model Training**: Cleaned data streamed to S3, processed by Glue jobs, then fed into SageMaker training jobs (spot instances) to fine‑tune the LLM.  

Scalability: Kinesis auto‑scales; Lambda concurrency set via reserved capacity (1k invocations/sec). Availability: 99.9% SLA achieved with multi‑AZ deployments and failover Lambdas. Cost: $0.02 per transcript after optimization, down 30 % from the prototype.

**Result**  
Within three months we reduced PII leakage incidents to zero, cut compliance audit time by 70 %, and increased agent productivity by 15 % due to faster, accurate smart replies.  

**Reflection (Bar‑raiser)**  
I owned every layer—from data ingestion to model training—ensured deep dives into error logs to catch edge‑case PII leaks, quantified impact with clear metrics, and iterated on the NER threshold after a false‑negative spike, learning that continuous monitoring beats one‑time tuning.  

**Leadership Principles**: *Customer Obsession* (protecting user data), *Ownership* (end‑to‑end pipeline control).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
