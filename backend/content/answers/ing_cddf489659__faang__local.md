---
qid: ing_cddf489659__faang__local
question: 'Explain: Amazon EventBridge — Serverless Computing \u2013 Amazon Web Services'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 478
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:39:12-05:00'
sources: []
---

**Clarify**  
You want a concise, interview‑ready explanation of **Amazon EventBridge** and its role in serverless AWS architecture. I’ll assume the audience knows basic AWS services but may not know EventBridge’s specifics.

---

### Approach
1. Describe what EventBridge *is* (a managed event bus).  
2. Explain how it fits into a serverless stack (Lambda, Fargate, Step Functions).  
3. Highlight key features: source‑based routing, schema registry, integration with SaaS & custom apps.  
4. Touch on cost and scalability.  

---

### Depth
- **EventBridge** is a fully managed event bus that ingests events from AWS services, SaaS partners, or custom applications.  
- It decouples producers and consumers; any number of subscribers (Lambda functions, Step Functions, SNS topics, SQS queues) can react to the same event.  
- Events are routed via **rules** using JSON path filters—no polling required.  
- The built‑in **Schema Registry** stores event schemas and auto‑generates SDKs, ensuring type safety across services.  
- Serverless integration: a Lambda triggered by an EventBridge rule runs only on demand, eliminating idle compute. Step Functions can orchestrate multi‑service workflows, all powered by the same event stream.  
- Pricing is per event (≈$1 M events/month free tier, then $0.10/1k events). No infrastructure to manage; scales automatically to millions of events per second.

---

### Edge Cases
- **Duplicate events**: use idempotent processing or EventBridge’s deduplication feature.  
- **Schema drift**: enable schema validation to reject malformed events.  
- **Cold starts**: mitigate by warming Lambda functions if latency is critical.

---

### Optimize & Communicate
Emphasize that EventBridge removes the need for custom polling loops, reduces operational overhead, and provides a single source of truth for event flow. In an interview, I’d conclude with a quick example—“When a new customer signs up in Cognito, an EventBridge rule triggers a Lambda that writes to DynamoDB and starts a Step Function to onboard them,” illustrating the serverless synergy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
