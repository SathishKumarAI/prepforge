---
qid: ing_a90e31ce0b__aws__local
question: 'Explain: Intra-Service Messaging — System Design Resources'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 539
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:47-05:00'
sources: []
---

**Situation (S)** – In my last role I led the redesign of a micro‑service stack that shipped AI model predictions to downstream analytics pipelines. The existing “in‑process” callbacks caused tight coupling and slowed the API response by 3 s on average, hurting our **Customer Obsession** for low latency.

**Task (T)** – Build an *intra‑service messaging* layer that decouples prediction services from consumers, preserves order per user, and scales to >10k requests/sec without adding cost or complexity.

**Action (A)** –  
1. Adopted **Amazon SQS FIFO** queues for guaranteed ordering per correlation ID; each service writes a lightweight message (`{userId, modelVersion, payloadHash}`) instead of the full result.  
2. Implemented an **AWS Lambda** consumer that pulls from SQS, aggregates results, and writes to **Amazon DynamoDB** (partition key `userId`, sort key `timestamp`).  
3. Used **AWS Step Functions** for orchestrating retry logic (back‑off + dead‑letter queue) – ensuring *Ownership* of error paths.  
4. Employed **CloudWatch Metrics** (`ApproximateAgeOfOldestMessage`) to monitor latency; set an alarm to auto‑scale Lambda concurrency via **Application Auto Scaling**.

**Result (R)** – Latency dropped from 3 s to <200 ms for API responses, throughput increased by 4×, and cost decreased by 35% due to serverless compute. The system now handles burst traffic (up to 50k req/s) with 99.999% availability.

---

### Bar‑raiser cues  
- **Ownership**: Took full responsibility for end‑to‑end latency and error handling.  
- **Dive Deep**: Chose FIFO SQS + DynamoDB after profiling message size & ordering needs; avoided complex pub/sub (SNS) that would have introduced duplicate risks.  
- **Quantified Impact**: 200 ms latency, 35% cost savings, 4× throughput.  
- **Learning from Failure**: Initial prototype with standard SQS caused out‑of‑order deliveries; switched to FIFO after analyzing the correlation matrix in CloudWatch logs.

> *AWS services used*: SQS FIFO, Lambda, DynamoDB, Step Functions, CloudWatch, Application Auto Scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
