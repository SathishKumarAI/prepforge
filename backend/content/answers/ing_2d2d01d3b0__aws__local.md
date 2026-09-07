---
qid: ing_2d2d01d3b0__aws__local
question: 'Explain: Pitfall 19: Ignoring Hallucination Risk — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 489
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:07:04-05:00'
sources: []
---

**Pitfall 19 – Ignoring Hallucination Risk**

*Situation:*  
At a fast‑growing fintech, we launched an LLM‑powered customer support chatbot that answered policy queries. Within two weeks, users reported nonsensical answers (“Your policy expires on 2035‑12‑31”), leading to a 12 % spike in support tickets and a 4‑point drop in NPS.

*Task:*  
Design a production‑ready solution that mitigates hallucinations while keeping latency <300 ms and cost <$0.01 per request.

*Action:*  
1. **Validation Layer** – Implemented a deterministic rule engine (AWS Lambda) that cross‑checks model outputs against a DynamoDB knowledge base before delivery.  
2. **Re‑ranking with Retrieval Augmented Generation** – Added Amazon Kendra to fetch the top‑3 policy documents; the LLM’s response is re‑ranked using a lightweight scoring model in SageMaker Endpoint, ensuring factual consistency.  
3. **Fail‑safe fallback** – If confidence <0.7 or rule‑engine flag is set, the system returns a templated “I’m sorry… let me connect you to an agent” message.  
4. **Observability** – Deployed CloudWatch metrics (Hallucination Rate, Confidence Score) and alerts; used Amazon SageMaker Debugger for model drift analysis.

*Result:*  
- Hallucination incidents dropped from 12 % to <0.3 %.  
- Support tickets fell by 85 %, NPS recovered to baseline (+2 points).  
- Latency stayed at 280 ms, cost per request $0.008.  

**Leadership Principles:** *Ownership* – I took full responsibility for the bot’s accuracy; *Dive Deep* – I analyzed logs and model outputs to uncover root causes; *Deliver Results* – Quantified impact on tickets and NPS.  
**Bar‑raiser cues:** Demonstrated ownership, deep technical dive, data‑driven ROI, and a learning loop (continuous monitoring & retraining).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
