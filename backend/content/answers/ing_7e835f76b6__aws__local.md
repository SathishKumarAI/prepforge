---
qid: ing_7e835f76b6__aws__local
question: What is an AI agent? — Faq
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 435
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:27-05:00'
sources: []
---

**Answer (Amazon style)**  

> **Situation:** I was asked to explain what an “AI agent” is during a product‑design interview for a new AWS AI service.  
> **Task:** Deliver a concise, data‑driven definition that also hints at how we’d build one on AWS.  
> **Action:**  
> 1. *Definition:* An AI agent is an autonomous software entity that perceives its environment (via sensors or APIs), processes observations with ML models, and takes actions to maximize a reward signal—think of it as a self‑driving “robot” in the cloud.  
> 2. *Design sketch:*  
>    - **Sensors:** EventBridge + Kinesis for real‑time telemetry.  
>    - **Model inference:** SageMaker endpoints behind an Application Load Balancer, autoscaling on CPU/GPU metrics.  
>    - **Decision loop:** Step Functions orchestrating policy evaluation (policy in DynamoDB) → Lambda to trigger actions (e.g., modify EC2 Spot requests).  
> 3. *Metrics:* In a pilot with 10k daily events, we reduced manual intervention by 73 % and cut average response time from 4.2 s to 0.9 s, yielding $1.8M in annual cost savings for the client.  
> **Result:** The agent achieved 99.7 % uptime (using Route 53 latency routing) while keeping per‑request costs under $0.003 by leveraging spot instances and serverless compute.  

**Leadership Principles:** *Customer Obsession*—tailoring response time to user needs; *Ownership*—designing end‑to‑end flow with measurable impact.  

Bar‑raiser cues: clear ownership, deep dive into AWS services, quantified ROI, and reflection on how the pilot’s failures (initially mis‑estimated latency) led to adding a caching layer in ElastiCache.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
