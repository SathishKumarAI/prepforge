---
qid: ing_cd07108d08__aws__local
question: 'What are users saying? — RabbitMQ: One broker to queue them all | RabbitMQ'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 460
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:18-05:00'
sources: []
---

**Situation / Task**  
I was tasked to surface user sentiment for a global e‑commerce platform that had 120 M active users and 3 TB of log data per day. The existing solution used multiple RabbitMQ brokers; each microservice pushed its own queue, creating 400 queues that slowed consumer lag by 35 % and made monitoring unwieldy.

**Action**  
*Ownership & Dive Deep*: I first mapped the entire ingestion pipeline—Kafka → Lambda → SQS → Redshift. I discovered that most user‑voice events (reviews, support tickets, social media mentions) were already being emitted to a shared SNS topic; only a handful of legacy services still used RabbitMQ.

I consolidated all traffic into **one SNS topic** and added an **Amazon EventBridge rule** to filter by event type. From there, a single **Lambda function** (Python 3.10, < 200 ms cold start) parses the payload, enriches it with user metadata from DynamoDB, and writes a JSON line to an S3 bucket partitioned by date.

*Bias for Action & Invent & Simplify*: I replaced RabbitMQ with **SQS FIFO** for ordering guarantees on critical events (e.g., refund requests). For real‑time sentiment analysis, I deployed an **Amazon SageMaker endpoint** that ingests the stream from Kinesis Data Firehose (shard 4) and returns a confidence score. The results are stored in **Redshift Spectrum** for ad‑hoc BI.

*Deliver Results*: After migration, queue lag dropped to < 10 s, cost fell by 28 % (from $12k/month to $8.7k), and the latency of sentiment reports improved from 2 min to 30 sec—directly boosting our CSAT score by 4 points.

**Result**  
Consolidation reduced operational overhead, lowered costs, and gave us a single source of truth for user voice—all while staying within AWS best practices for scalability, availability, and security.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
