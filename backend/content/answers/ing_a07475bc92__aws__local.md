---
qid: ing_a07475bc92__aws__local
question: 'Explain: Understand what your agent is doing, where it’s failing, and how
  to fix it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 472
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:58-05:00'
sources: []
---

**Situation (Customer Obsession & Ownership)**  
In my last role I built a generative‑AI agent that answered customer queries in real time. Within the first month we saw a 35 % drop in CSAT because the model was hallucinating facts.

**Task (Dive Deep & Bias for Action)**  
I needed to identify why the agent failed, quantify the impact, and deliver a fix without breaking existing traffic.

**Action (Invent & Simplify)**  

| Step | What I did | AWS Services | Rationale |
|------|------------|--------------|-----------|
| 1️⃣ Log & trace | Instrumented every prompt‑response cycle with CloudWatch Logs + X-Ray. | CloudWatch, X-Ray | Gives end‑to‑end latency and error paths. |
| 2️⃣ Data audit | Extracted top‑10 hallucination cases, labeled them, and calculated precision (78 % → 92 %) after a new prompt‑engineering rule. | S3, Athena | Enables SQL‑based analysis at scale. |
| 3️⃣ Model guardrail | Added a post‑generation validation Lambda that cross‑checks facts against DynamoDB knowledge base before returning to the user. | Lambda, DynamoDB | Low‑latency, serverless guardrails cost ~$0.05 / 1k invocations. |
| 4️⃣ Continuous monitoring | Set up CloudWatch Alarms on hallucination rate; auto‑trigger retraining pipeline via SageMaker Pipelines when threshold >5 %. | CloudWatch, SageMaker Pipelines | Keeps the model in sync with real data without manual intervention. |

**Result (Deliver Results)**  
After deployment, CSAT rose from 78 % to **92 %** within two weeks and hallucination rate fell below 2 %. The cost of the new guardrail was < $10/month versus a projected $3k/month in lost revenue.

**Bar‑raiser check** – I owned the end‑to‑end issue, dove deep into logs & metrics, quantified the impact with real numbers, and learned that lightweight validation can outperform heavyweight retraining when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
