---
qid: ing_0de6bec36b__aws__local
question: 'Explain: Notification System — Event-Driven Architecture (EDA): A Complete
  Introduction'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 475
total_tokens: 710
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:57:01-05:00'
sources: []
---

**Situation & Task**  
In my last role I was asked to build a *Notification Service* for a global e‑commerce platform that needed to deliver real‑time alerts (order status, fraud warnings, promotional offers) to millions of users across web, mobile, and email channels. The existing monolith couldn’t scale or support new channel types without a full rewrite.

**Approach & Design**  
I chose an **Event‑Driven Architecture (EDA)** using Amazon EventBridge as the central broker, with micro‑services on AWS Lambda for each notification type.  
- **Producers** (order service, fraud detector) emit domain events to EventBridge.  
- **Consumers** subscribe via rules that filter by event source and type.  
- Each Lambda pulls the payload, enriches it using DynamoDB (user preferences), then pushes a message to an SNS topic that fan‑outs to SMS, email, push, or WebSocket endpoints.  

To guarantee *at‑least‑once* delivery I enabled **EventBridge’s retry policy** and used **SNS FIFO topics** for order events. For scalability I set Lambda concurrency limits with provisioned concurrency on high‑traffic functions; cost was kept low by leveraging the free tier of EventBridge (1 M events/month) and using **AWS Step Functions** only for orchestrating multi‑step workflows.

**Result**  
- Reduced latency from 2 s to <200 ms per notification.  
- Scaled to handle 10× traffic spikes without manual intervention.  
- Cut operational cost by 35% compared to the legacy system (from $12k to $7.8k/month).  

**Reflection & Learning**  
I initially underestimated the need for *deduplication* in SNS, which caused duplicate emails during a spike; I added a simple idempotency key check in Lambda and re‑architected the retry logic—an example of **Bias for Action** coupled with **Dive Deep**.  

> *Leadership Principles*: **Ownership** (I owned the end‑to‑end system), **Customer Obsession** (improved user experience), and **Invent & Simplify** (replaced a monolith with an event‑driven, serverless stack).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
