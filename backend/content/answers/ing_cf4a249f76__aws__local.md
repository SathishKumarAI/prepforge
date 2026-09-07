---
qid: ing_cf4a249f76__aws__local
question: 'Explain: Cost Breakdown — Autonomous Coding Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 433
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:09:40-05:00'
sources: []
---

**Situation / Task**  
I led a sprint to build an *Autonomous Coding Agent* that generates boiler‑plate code from natural language prompts for our internal devops toolset. The goal was to cut manual coding time by 40 % while keeping cloud spend under the $1k/month budget we had allocated.

**Action**  
- **Ownership & Bias for Action:** I scoped the solution into three micro‑services: (1) *Prompt Ingest* – API Gateway + Lambda, (2) *Model Runner* – SageMaker endpoint with a fine‑tuned GPT‑4 model, and (3) *Code Store* – DynamoDB for versioned snippets.  
- **Dive Deep & Deliver Results:** I instrumented CloudWatch metrics to capture per‑request latency, token usage, and error rates. Using cost modeling in the AWS Pricing Calculator, I projected that a 10 k request/month workload would spend ~\$0.02 per inference (SageMaker) + \$0.001 per Lambda invocation + negligible DynamoDB read/write costs.  
- **Invent & Simplify:** Added an autoscaling policy on SageMaker to spin up only 2 instances during off‑peak, cutting idle compute by 70 %.  

**Result**  
Within two weeks of deployment we saw:  
- **30 % reduction in manual code hours** (from 2000 hrs/month to 1400 hrs).  
- **Actual spend:** \$842/month—below the target and a 15 % savings over the baseline.  
- **Latency:** 350 ms average, meeting our SLA.

**Learning**  
The first version under‑estimated token usage; after adding a prompt‑length guard we avoided a projected \$120 monthly spike. This reinforced that *ownership* means iterating on metrics and being ready to pivot quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
