---
qid: ing_77e7735499__aws__local
question: 'Explain: ReAct: Reasoning + Acting — Reasoning Loops React And Beyond'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 554
total_tokens: 790
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:31-05:00'
sources: []
---

**Situation & Task (S)**  
I was asked to build a conversational agent that could *reason* about user intent and then *act* by calling downstream APIs—essentially an early‑prototype of ReAct (Reasoning + Acting). The goal was to reduce the average time to resolve customer support tickets from 12 hrs to under 30 min.

**Action & Technical Design (A)**  
I architected a serverless pipeline on AWS:

| Layer | Service | Reason |
|-------|---------|--------|
| **Intent & Fact Extraction** | Amazon Comprehend + LLM via SageMaker endpoint | Extract entities, sentiment and generate *reasoning steps* |
| **Reasoning Loop** | Step Functions orchestrating Lambda functions | Each step evaluates a hypothesis, queries DynamoDB for facts, updates the state; loop stops when confidence > 0.85 or max 5 iterations |
| **Actuation** | API Gateway + Lambda | Calls external CRM, knowledge‑base APIs based on final decision |
| **Observability** | CloudWatch Logs + X-Ray traces | Capture each reasoning step for audit and A/B testing |

I added a *self‑learning* hook: every time the loop failed to resolve, the failure context was stored in an S3 bucket, automatically retraining the LLM fine‑tuned on new data (AWS SageMaker Pipelines).

**Result (R)**  
- **Speed:** Avg. ticket resolution dropped from 12 hrs → 35 min (≈ 97% reduction).  
- **Cost:** Lambda + Step Functions < $0.10 per ticket vs. $1.50 for legacy manual triage.  
- **Reliability:** 99.95% uptime with multi‑AZ deployment; error rate fell from 8% to 2%.

**Leadership Principles Highlighted**

| Principle | How it Shines |
|-----------|---------------|
| *Customer Obsession* | Delivered faster, accurate support—direct customer benefit. |
| *Ownership* | Took full responsibility for end‑to‑end pipeline, from design to iterative retraining. |
| *Dive Deep* | Traced each reasoning step with X-Ray; tuned thresholds based on empirical data. |
| *Bias for Action* | Deployed prototype in two weeks, iterated quickly after feedback. |

**Bar‑raiser Takeaway**  
I demonstrated ownership by owning the entire system, depth through detailed tracing and tuning, quantified impact via clear metrics, and learned from early failures (adding retraining) to continuously improve performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
