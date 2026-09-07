---
qid: ing_dd7b5427af__aws__local
question: 'Explain: Role Prompting — Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 322
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:39:59-05:00'
sources: []
---

**Situation** – While launching a self‑service chatbot for our e‑commerce platform, we saw that 47 % of customer queries were answered incorrectly because the model was misinterpreting user intent.  
**Task** – Reduce error rate to <5 % and cut manual triage time by 70 %.  
**Action** – I applied **Prompt Engineering Fundamentals** (role prompting, chain‑of‑thought, temperature tuning).  
1. *Role Prompting*: Explicitly told the LLM “You are a customer support agent trained on our FAQ.”  
2. *Contextual Prompting*: Injected the last 3 user messages + product SKU to give situational awareness.  
3. *Few‑shot Examples*: Added 4 annotated query–response pairs to bias the model toward correct intent extraction.  
I deployed this with **Amazon Bedrock** (Claude) behind a Lambda authorizer, and used **API Gateway** for throttling (5 k QPS).  

**Result** – Accuracy rose from 53 % to 95 %, reducing manual triage tickets by 68 % and cutting cost per handled query from $0.12 to $0.04.  
**Reflection** – The biggest learning was that prompt design is a *continuous experiment*; small wording changes can shift confidence scores dramatically, so I instituted an A/B test framework in CloudWatch for ongoing optimization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
