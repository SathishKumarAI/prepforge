---
qid: ing_18ca79e3ba__aws__local
question: 'Explain: Example alert — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 390
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:21:56-05:00'
sources: []
---

**Situation & Task**  
In my last role, the data‑science team needed a unified way to benchmark LLM outputs for our multilingual chatbot. The existing manual evals were slow (≈4 hrs per batch) and inconsistent.

**Action**  
I built an automated pipeline with **LangWatch** (for real‑time monitoring) and **LangFuse** (for structured evaluation).  

1. **Requirements** – 10 k prompts, 5 LLMs, 3 metrics (accuracy, fluency, bias).  
2. **Design** – Lambda functions triggered by SQS queue → LangWatch captures raw outputs; results sent to DynamoDB and a SageMaker endpoint that runs the LangFuse scoring script.  
3. **AWS services** – SQS, Lambda, DynamoDB, SageMaker, CloudWatch, SNS for alerts.  

I set up daily dashboards in QuickSight; if any metric dropped below 0.92, an SNS alert triggered a Slack channel.

**Result**  
- **Speed:** reduced evaluation time from 4 hrs to 15 min (≈97% faster).  
- **Accuracy:** detected a drift in Model‑B’s bias score by 12%, leading to immediate retraining and a 5% lift in user satisfaction.  
- **Cost:** <$200/month vs $1,500 for the legacy system.

**Reflection**  
I owned the end‑to‑end solution (Ownership), dove deep into latency trade‑offs between Lambda vs EC2, and iterated on metric thresholds based on stakeholder feedback (Dive Deep). The data‑driven outcome shows tangible impact—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
