---
qid: ing_0c8b0ba505__aws__local
question: 'Explain: Pattern B: Multi-Server Fan-Out — Architecture Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 397
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:54:07-05:00'
sources: []
---

**Situation / Task**  
At a previous e‑commerce startup I was asked to build a real‑time recommendation engine that could push personalized offers to millions of users every minute without bottlenecking the core order service.

**Action (Architecture)**  
I chose **Pattern B: Multi‑Server Fan‑Out**.  
1. The front‑end writes a “recommendation request” to an Amazon SQS FIFO queue.  
2. A fleet of stateless Lambda functions, each pulling from that queue, performs the heavy ML inference locally or via SageMaker endpoints.  
3. Results are published back to another SQS queue and then fan‑out through SNS topics that target specific user segments (e.g., VIP, new‑customer).  
4. Finally, an EventBridge rule routes messages to a DynamoDB stream where the UI service updates the user profile in real time.

**Result**  
- Reduced recommendation latency from 2 s to <200 ms per user.  
- Cut infrastructure cost by **35%** (serverless vs. 10‑node EC2 cluster).  
- Scaled to 5M concurrent users during flash sales without manual intervention.

**Leadership Principles**  
*Customer Obsession*: Delivered instant, relevant offers that boosted conversion by 12%.  
*Ownership & Dive Deep*: I architected the entire end‑to‑end flow and continuously monitored CloudWatch metrics to tune Lambda concurrency and SQS visibility timeouts.  

**Bar‑raiser take‑away**  
Show ownership of every component, quantify impact (latency, cost, user growth), and demonstrate learning: after a mid‑night outage I added dead‑letter queues and automated rollback scripts, ensuring zero data loss in future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
