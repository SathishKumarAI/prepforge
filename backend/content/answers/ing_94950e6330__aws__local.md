---
qid: ing_94950e6330__aws__local
question: 'Explain: Action Success Rate (ASR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 497
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:01:52-05:00'
sources: []
---

**Situation – Task**  
I led a cross‑functional team that built an AI‑driven customer support chatbot for a fintech client. The key metric was **Action Success Rate (ASR)**—the proportion of user intents that the agent resolved without escalation. Our baseline ASR was 68 % after launch, below the target of 80 %.  

**Action – Design & Execution**  
*Data‑driven requirement*: Capture intent success per conversation turn, aggregate in real time, and feed back into model retraining.  
1. **Event ingestion**: Amazon Kinesis Data Streams streamed chat logs (≈10 k messages/day) to Lambda for parsing.  
2. **Metric calculation**: AWS Step Functions orchestrated a state machine that queried DynamoDB for intent tags, computed ASR per batch, and stored the result in Amazon CloudWatch Metrics.  
3. **Model update pipeline**: S3 + SageMaker training jobs were triggered by CloudWatch alarms when ASR fell below 75 %. The new model was deployed via SageMaker Endpoint with an A/B split controlled by AWS AppConfig.  

*Scalability*: Kinesis scales horizontally; Lambda concurrency limits handled burst traffic.  
*Availability*: All services are multi‑AZ; the endpoint uses a weighted round‑robin load balancer to maintain 99.9 % uptime.  
*Cost*: Roughly $0.15 per 1,000 messages for Kinesis + $0.10 per training job, keeping monthly spend <$2k.

**Result – Impact**  
Within three months, ASR rose from 68 % to **83 %**, a 27 % relative improvement, reducing human agent escalations by 35 %. We also cut average resolution time from 4.8 min to 3.1 min.  

**Learning & Bar‑raiser cues**  
I took full ownership of the metric lifecycle, dove deep into the data to identify failure modes (e.g., misclassified intents), and iterated quickly—demonstrating *Ownership*, *Dive Deep*, and *Bias for Action*. The quantifiable lift in ASR is evidence that our solution delivered tangible business results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
