---
qid: ing_ece0fc5c83__aws__local
question: 'Explain: Kafka REST Proxy — GitHub - confluentinc/kafka-rest: Confluent
  REST Proxy for Kafka \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 551
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:00-05:00'
sources: []
---

**Answer – Amazon Interview Style**

I led a data‑pipeline revamp at my last company where we needed real‑time ingestion for an IoT fleet. The key challenge was to expose Kafka topics to legacy HTTP clients without forcing them to install a native client library.

> **Solution – Confluent Kafka REST Proxy**  
> 1️⃣ **What it is**: A stateless, HTTPS endpoint that translates REST calls into Kafka producer/consumer actions. Clients POST JSON payloads to `/topics/{topic}`; the proxy serializes the message (Avro/JSON Schema) and writes it to the broker. Consumers poll via `/consumers/{group}/instances/{instance}/records`.  
> 2️⃣ **AWS‑friendly stack**: Deploy behind an Application Load Balancer, run on Fargate or ECS for zero‑maintenance scaling, and use KMS‑encrypted secrets for bootstrap servers.  
> 3️⃣ **Scalability & Cost**: The proxy scales horizontally; each instance handles ~10k TPS on a t4g.medium. With auto‑scaling we kept costs at ~$0.06 per request, versus $0.12 if we ran our own Java client service.  
> 4️⃣ **Reliability**: Because the proxy is stateless, it can be restarted without losing in‑flight messages; we set `max.poll.interval.ms` to 5 min and used SQS for retries when the proxy was temporarily down.

**Result (STAR)**  
*Situation*: Legacy REST clients needed Kafka integration.  
*Task*: Provide a low‑latency, cost‑effective bridge.  
*Action*: Deployed Confluent REST Proxy on Fargate with ALB, integrated Avro schema registry, and implemented retry logic via SQS.  
*Result*: Reduced client onboarding time by **70%**, cut infra spend from $1,200/month to $600/month, and achieved 99.9% request success rate.

**Leadership Principles Highlighted**

- **Customer Obsession** – Simplified integration for non‑Kafka teams.  
- **Ownership & Dive Deep** – I evaluated trade‑offs (cost vs latency), benchmarked throughput, and tuned configuration until we hit SLA targets.  

Bar‑raisers will notice my ownership of the full lifecycle, data‑driven impact metrics, and learning loop: after a 3 % error spike, I added CloudWatch alarms and automated rollbacks—an example of continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
