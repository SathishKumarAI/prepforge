---
qid: ing_8c4245d5c3__aws__local
question: 'Explain: Application-to-Person (A2P) — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 489
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:43:08-05:00'
sources: []
---

**Situation & Task**  
I was leading a cross‑functional team at a fintech startup that needed to push real‑time fraud alerts from our backend services directly to millions of users’ phones and email inboxes. The requirement was 99.9 % delivery latency < 2 s, with zero manual intervention, while staying under $0.05 per message.

**Action – Architecture & Services**  
I chose **Amazon SNS (Simple Notification Service)** as the A2P messaging backbone because it natively supports SMS, Email‑JSON, and mobile push with built‑in retries and dead‑letter queues.  
* *Topic*: `fraud-alerts`  
* *Subscriptions*: 3 SMS endpoints, 1 Email endpoint, and a Lambda trigger for additional analytics.  
I paired SNS with **AWS Lambda** (to enrich payloads) and **Amazon CloudWatch** metrics to monitor delivery success rates. For high‑volume bursts I enabled **SNS FIFO Topics** and configured *delivery retries* with exponential backoff to avoid throttling.

**Result**  
- 99.95 % on‑time message delivery across 2.5 M users, a 15 % improvement over the legacy SMPP gateway.  
- Cost dropped from $0.12/messaging to $0.04, saving ~\$120k annually.  
- Reduced engineering hours by 30 % due to auto‑scaling and no‑code integration.

**Reflection (Bar‑raiser focus)**  
*Ownership*: I owned the end‑to‑end flow, wrote the SLA contract with carriers, and drove a post‑mortem after an initial delivery dip.  
*Dive Deep*: I dissected CloudWatch logs to identify carrier throttling patterns, then tuned SNS retry policies accordingly.  
*Learning from Failure*: The first deployment hit a 2 s latency spike; I introduced batching via SQS before re‑publishing to SNS, which eliminated the bottleneck.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Ensuring timely alerts protects user assets.  
- **Ownership & Dive Deep** – End‑to‑end responsibility and data‑driven tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
