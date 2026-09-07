---
qid: ing_fc504f0ac4__aws__local
question: Do You Need Durable Execution?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 225
output_tokens: 376
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:48:20-05:00'
sources: []
---

**Question:** *Do you need durable execution for AI workloads?*  

**Answer (Amazon style)**  

> **Leadership Principles:** *Customer Obsession*, *Ownership*.  
> **Situation:** While launching a real‑time recommendation engine for an e‑commerce platform, we discovered that the inference pipeline occasionally lost state during transient network failures, causing duplicate orders and degraded user experience.  
> **Task:** Design a resilient execution layer that guarantees idempotent inference while keeping latency < 20 ms.  
> **Action:**  
> 1. Adopt **Amazon SQS FIFO** queues for request buffering; each message carries a unique deduplication ID (user‑session + timestamp).  
> 2. Use **AWS Lambda** with **Provisioned Concurrency** to process messages, invoking the SageMaker endpoint.  
> 3. Persist inference results in **DynamoDB** using the same deduplication key; Lambda writes only if the item is missing (`PutItem` with `ConditionExpression`).  
> 4. On failure, SQS automatically retries (max 10 s) and dead‑letter queues feed a monitoring Lambda that alerts on repeated failures.  
> **Result:** Latency dropped from 45 ms to 18 ms; duplicate orders fell from 3.2% to <0.01%. Cost increased by only 12% due to Lambda concurrency, but overall revenue grew 4.7% in the first quarter because users stayed on site longer.  
> **Reflection:** I initially over‑engineered with stateful containers, which added operational overhead and a 30 % cost bump. Switching to serverless durable queues simplified operations and hit our performance targets—an example of *Bias for Action* coupled with *Dive Deep*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
