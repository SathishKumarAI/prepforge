---
qid: ing_4d1dd326c0__aws__local
question: 'Explain: Case Study 03: Customer Support Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 435
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:19:35-05:00'
sources: []
---

**Case Study 03 – Building an AI‑Powered Customer Support Agent**

**Situation / Task**  
I led a cross‑functional squad to replace the legacy ticketing bot that handled 12 k tickets/month with an NLP agent capable of routing, auto‑resolving, and escalating issues. The goal: reduce average handling time (AHT) by 30 % while keeping accuracy above 90 %.  

**Action**  
*Ownership & Bias for Action*: I scoped the solution in two sprints—first, a proof‑of‑concept with Amazon Comprehend and Lex; second, full deployment.  
- **Architecture**: Lambda → API Gateway → Lex (intent detection) → Step Functions (workflow orchestration) → DynamoDB (ticket state).  
- **AWS services used**: SageMaker for custom intent models, CloudWatch for real‑time metrics, IAM roles for fine‑grained access.  
- *Dive Deep*: I instrumented Lambda cold‑start counters and tuned container images; we achieved 95 % warm invocations, cutting latency from 2.1 s to 0.8 s.  

**Result**  
AHT dropped from **6.4 min to 4.5 min** (32 % reduction). First‑time resolution rose from 70 % to 82 %. Monthly operational cost fell by $3,200 due to serverless scaling and reduced manual labor.  

**Learning & Bar‑Raiser Insight**  
The bar‑raiser noted my end‑to‑end ownership—defining metrics, selecting services, iterating on model accuracy, and measuring impact with real data. I documented failure points (e.g., misclassified intents) and built a feedback loop that improved precision by 5 % in month 3. This demonstrates deep technical acumen coupled with Amazon’s focus on customer obsession and delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
