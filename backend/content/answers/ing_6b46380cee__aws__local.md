---
qid: ing_6b46380cee__aws__local
question: 'Explain: Q: Design a testing strategy for a tool-use agent that handles
  customer support.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 467
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:26:45-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a test harness for an AI‑driven tool‑use agent that automates customer support tickets at a 1 M‑ticket/month SaaS. The goal: guarantee zero SLA violations while keeping cost under $5k/month.

**Action (Design)**  
* **Unit & Integration** – Use *pytest* + *Moto* to mock AWS services (SQS, DynamoDB, Lambda).  
* **End‑to‑end** – Deploy a **step‑function** workflow:  
  1. SQS trigger → Lambda (`ProcessTicket`) → DynamoDB store → Bedrock chat model.  
  2. Post‑processing Lambda writes to CloudWatch Logs and SNS for failures.  
* **Chaos & Fault Injection** – `chaos-mesh` on EKS (if using containers) or *AWS Fault Injection Simulator* to drop SQS messages, delay Bedrock responses, and throttle DynamoDB throughput.  
* **Load & Performance** – Use *k6* scripts that simulate 10 k concurrent tickets over 24h, feeding into the step‑function via API Gateway. Measure cold start latency (target <200 ms) and queue depth.  
* **Observability** – CloudWatch dashboards with anomaly detection on response time, error rate, and cost per ticket.

**Result**  
After 3 iterations we reduced average response time from **1.8 s to 0.45 s** (80% improvement) and kept monthly ops cost at **$4.7k**. The system handled peak bursts of 30 k tickets without SLA breaches, meeting the *Customer Obsession* principle.  

**Reflection (Bar‑raiser focus)**  
I took full ownership: wrote reusable test modules, logged failures, and iterated based on data. I dove deep into latency bottlenecks, learning that Bedrock’s concurrency limits were the root cause of earlier slowness. This experience sharpened my bias for action—deploying chaos tests early—and reinforced the *Deliver Results* principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
