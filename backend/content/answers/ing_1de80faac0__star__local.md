---
qid: ing_1de80faac0__star__local
question: 'Explain: Audit Logging and Compliance — Safety And Governance'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 318
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:29:34-05:00'
sources: []
---

**Situation:**  
In my last role as a platform engineer at a fintech startup, we were rolling out a new AI‑driven fraud detection model that processed credit card transactions in real time. The regulatory team flagged that our system needed end‑to‑end audit trails to meet PCI‑DSS and GDPR requirements.

**Task:**  
I was tasked with designing an immutable audit log that captured every input, model inference, decision, and downstream action while keeping latency under 15 ms so the transaction pipeline wouldn’t stall.

**Action:**  
I chose Kafka with a compacted topic for event sourcing, coupled with AWS Kinesis Firehose to stream records into S3 Glacier for long‑term retention. Each log entry was signed with an HMAC using a rotating key stored in AWS KMS, ensuring tamper evidence. I added a lightweight sidecar that intercepted every inference call, logged the payload hash, model version, and decision outcome to the Kafka topic. For compliance reporting, I built a Lambda function that aggregated logs into Athena tables, exposing them via QuickSight dashboards for auditors.

**Result:**  
The audit system achieved <10 ms overhead per transaction, keeping our overall latency at 12 ms. We passed the PCI‑DSS audit with no findings and reduced manual log reviews by 90%. I learned how to balance strict compliance needs with real‑time AI workloads by leveraging event‑driven architecture and cryptographic integrity checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
