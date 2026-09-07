---
qid: ing_4eae65a836__aws__local
question: 'Explain: Amazon EventBridge — Event-Driven Architecture'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 508
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:23:03-05:00'
sources: []
---

**Situation & Task**  
I was tasked with modernizing a legacy monolith that processed e‑commerce orders and needed real‑time inventory updates across multiple microservices. The goal was to decouple components, reduce latency, and scale linearly as traffic grew.

**Action – EventBridge Architecture**  
1. **Publishers**: Order service, payment gateway, and shipment tracker each emit domain events (`OrderCreated`, `PaymentCompleted`, `ShipmentDispatched`) to a single *EventBus*.  
2. **EventBridge Rules**:  
   - *Inventory* rule filters `OrderCreated` → triggers an `UpdateStock` Lambda.  
   - *Analytics* rule captures all events → writes to Kinesis Data Firehose for real‑time dashboards.  
3. **Consumers**:  
   - Stock Lambda updates DynamoDB, then publishes `StockUpdated`.  
   - Notification service listens for `OrderCreated` & `PaymentCompleted` via EventBridge and sends SNS push notifications.  

**Technical Choices**  
- **EventBridge** for managed, scalable event routing (99.999% availability).  
- **Lambda** for zero‑maintenance compute; cold starts < 200 ms due to provisioned concurrency.  
- **DynamoDB** with on‑demand capacity handles >10k events/sec without provisioning.  
- **Kinesis Firehose** buffers and batches writes to Redshift, keeping costs low while providing near‑real‑time analytics.

**Result – Quantified Impact**  
- *Latency* from order placement to stock update dropped from 2 s (polling) to <300 ms.  
- *Throughput* scaled from 500 orders/min to 10k orders/min without code changes, with cost per event <$0.0003.  
- *Operational overhead* reduced by 70%—no manual scaling or patching of services.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Faster inventory updates improve customer experience and reduce out‑of‑stock complaints.  
- **Ownership / Dive Deep**: I designed the entire event flow, tuned Lambda concurrency, and monitored metrics with CloudWatch, learning that a single EventBus can replace dozens of REST endpoints.

This demonstrates ownership, deep technical insight, measurable results, and continuous improvement—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
