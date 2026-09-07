---
qid: ing_61fe7572f2__aws__local
question: 'Explain: Publish-Subscribe Architecture — Using the Publish-Subscribe Model
  for Applications'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 584
total_tokens: 819
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:07:11-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to enable real‑time analytics for a global e‑commerce platform where 200k users generate events every minute. The goal was to decouple event ingestion from downstream consumers (fraud detection, recommendation engine) while keeping latency < 500 ms.

**Task (T)**  
Design a publish‑subscribe architecture that scales horizontally, guarantees at‑least‑once delivery, and is cost‑effective for both peak traffic (50k events/sec) and low‑traffic periods.

**Action (A)**  

1. **Event Bus** – Use **Amazon EventBridge** as the broker; it natively supports schema registry, filtering, and dead‑letter queues.  
2. **Publishers** – Microservices emit JSON events to a dedicated EventBridge bus via SDK calls.  
3. **Subscribers** –  
   * *Fraud Service* → **AWS Lambda** (concurrency 10k) triggered by filtered rules; processes each event in < 200 ms, writes to DynamoDB for audit.  
   * *Recommendation Engine* → **Amazon Kinesis Data Streams** (shards = 20 during peak). An EMR cluster consumes the stream and updates a SageMaker model every minute.  
4. **Scaling & Availability** – EventBridge is managed; auto‑scales, offers high availability across AZs. Lambda scales instantly; Kinesis shards can be added/removed via APIs to match load.  
5. **Cost Trade‑offs** – Pay per event (~$0.10k for 100M events) vs. running a persistent broker like RabbitMQ on EC2 (fixed $1k/month). EventBridge provides lower TCO and eliminates ops overhead.

**Result (R)**  
After launch, event latency dropped from 1.3 s to 0.35 s (70% reduction), throughput increased by 4× during peak hours, and operational cost decreased by 55% compared with the legacy RabbitMQ solution. The architecture now supports 500k events/sec projected for next‑year growth.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Delivered instant insights to improve user trust (fraud detection).  
- **Ownership & Dive Deep**: Architected end‑to‑end flow, tuned shard counts, and iterated on cost models.  

*Bar‑raiser note*: I demonstrated ownership by owning the full lifecycle, depth through shard tuning, quantified impact via latency/cost metrics, and learned from an initial 30 % under‑provisioning of shards during a traffic spike.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
