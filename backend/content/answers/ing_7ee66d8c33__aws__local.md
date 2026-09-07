---
qid: ing_7ee66d8c33__aws__local
question: 'Explain: When to Use Each — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 639
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:11:59-05:00'
sources: []
---

**When to Build a Tool Agent – An AWS‑centric Lens**

| **Agent Type** | **Use Case** | **Key AWS Services** | **Scalability / Cost Notes** |
|----------------|--------------|----------------------|-----------------------------|
| *Task‑oriented (Rule‑based + LLM)* | Repetitive, high‑volume tasks that require a deterministic workflow (e.g., auto‑tagging of S3 objects). | Amazon SageMaker for fine‑tuning, Step Functions for orchestration, DynamoDB for state. | Stateless Lambda functions keep costs low; Step Functions enable horizontal scaling with parallel branches. |
| *Conversational (Chatbot + Retrieval Augmented Generation)* | Customer support or internal help desks where context matters and the agent must remember prior turns. | Amazon Lex, Bedrock (LLM), RDS for conversation logs. | Lex scales to thousands of concurrent users; Bedrock pricing is per token—optimize prompt length. |
| *Autonomous (RL/Planning)* | Complex logistics or resource allocation that needs continual learning and adaptation (e.g., fleet routing). | SageMaker Reinforcement Learning, SQS for event streams, ECS/EKS for compute clusters. | Requires GPU instances; use spot to cut costs; autoscaling based on queue depth. |
| *Hybrid (LLM + External Tool API)* | Tasks needing external domain knowledge (e.g., pulling latest stock prices). | Bedrock + AWS SDK calls, Secrets Manager for credentials. | Each external call adds latency; batch calls in Lambda layers to reduce overhead. |

**Behavioral Highlight – STAR**

- **Situation:** Our support team handled ~12k tickets/month; SLA drifted to 18 min.
- **Task:** Reduce resolution time while maintaining accuracy.
- **Action:** Deployed a conversational agent (Amazon Lex + Bedrock) with retrieval‑augmented generation. Trained on the last 3 years of ticket logs stored in S3 and indexed via Amazon OpenSearch.
- **Result:** SLA improved to 8 min (45% reduction), cost per ticket dropped from $2.50 to $1.10, and we processed 30 % more tickets without hiring staff.

**Bar‑raiser Lens**

- *Ownership:* I scoped the problem, led cross‑functional data collection, and owned post‑launch monitoring.
- *Dive Deep:* Used OpenSearch metrics to identify cold starts; tuned Bedrock prompt length from 2000 → 1200 tokens, saving $300/month.
- *Quantified Impact:* 45% SLA improvement + $1.40 saved per ticket.
- *Learning:* Initial model mis‑classified “billing” tickets; added a fine‑tune layer on top of Bedrock to correct this—iterative learning loop.

*Amazon Leadership Principles:* **Customer Obsession, Ownership, Dive Deep, Deliver Results**

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
