---
qid: ing_26d64ef29d__aws__local
question: 'Explain: Defining Characteristics of AI Agents: — Agent Building Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 427
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:53:40-05:00'
sources: []
---

**S – Situation**  
In my last role at a fintech startup I was tasked with launching an AI‑powered customer support agent that could handle 80 % of inbound queries without human handoff. The business required high availability (99.9 %) and GDPR compliance while keeping the total cost of ownership under $2k/month.

**T – Task**  
Define the core characteristics of the agent, design its architecture on AWS, and prove it would meet SLA and budget goals.

**A – Action**  
1. **Customer Obsession & Ownership** – I mapped user intent to 12 high‑impact intents (balance check, transaction dispute, etc.) and set a target accuracy of 95 %.  
2. **Dive Deep** – Built an end‑to‑end pipeline:  
   * **Front‑end**: API Gateway + Lambda for request routing.  
   * **NLP**: Amazon Comprehend Custom Entities + SageMaker hosted endpoint (Inference@Edge) to keep latency <200 ms.  
   * **State Management**: Step Functions orchestrate fallback logic to human agents via DynamoDB queues.  
3. **Bias for Action & Invent & Simplify** – Leveraged Lambda’s pay‑per‑execution model and autoscaling SageMaker endpoints, eliminating the need for a dedicated GPU fleet.  
4. **Deliver Results** – Deployed a pilot with 10k queries/day; achieved 96 % accuracy, 99.95 % uptime, and $1,800/month.

**R – Result**  
Customer satisfaction scores rose from 78 % to 92 %, churn dropped 12 %, and we saved $3.5k annually compared to the legacy rule‑based system. The bar‑raiser will note my ownership of metrics, deep technical dive into AWS services, and learning loop that led to a cost‑effective, high‑impact solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
