---
qid: ing_ec1893ad17__aws__local
question: 'Explain: The Agent Formula — Agent Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 458
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:12:31-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Situation:** While leading a cross‑functional team at my last company, we were tasked with building a conversational AI that could handle 30 k queries/day for our e‑commerce platform without manual intervention.  
> **Task:** I had to design the *Agent Formula*—the core architecture that turns raw intent into actionable workflows—while keeping latency <200 ms and cost <$0.01/query.  
> **Action:**  
> 1. **Model Layer** – Trained a fine‑tuned BERT on our product catalog (≈5 M utterances) using SageMaker, achieving 94 % intent accuracy.  
> 2. **Orchestration** – Wrapped the model in an AWS Lambda proxy and chained it to Step Functions that route intents to DynamoDB for stateful context or to EventBridge for external API calls.  
> 3. **Scaling & Availability** – Deployed Lambda with provisioned concurrency (200) and enabled *function warming* via CloudWatch events, guaranteeing sub‑100 ms cold starts.  
> 4. **Cost Control** – Leveraged Spot Instances for training and reserved capacity for inference; overall spend dropped from $3k/month to $1.2k/month.  
> **Result:** The agent handled 30 k/day with 98 % success, reducing ticket volume by 62 % (≈$45k/year in support savings).  

**Leadership Principles Highlighted**

- *Customer Obsession* – Delivered instant answers, boosting NPS from 78 to 87.  
- *Ownership & Dive Deep* – Took full responsibility for end‑to‑end performance and cost; iterated on the Lambda cold‑start problem until resolved.  

Bar‑raisers look for clear ownership, deep technical decisions (e.g., choosing Step Functions over raw queues), quantified impact (cost savings, NPS lift), and lessons learned from early failures (cold‑start mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
