---
qid: ing_47811f4b29__aws__local
question: 'Q: What are the limitations of LLM-as-judge?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 374
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:07:30-05:00'
sources: []
---

**Answer (Amazon Style)**  

*Situation:* While leading a cross‑functional team to prototype an LLM‑as‑Judge for automated code reviews, we discovered that the model’s reliability dropped dramatically on edge cases.

*Task:* Quantify those limitations and design a safety net that meets our SLA of 99.5 % accurate verdicts while staying within $0.05 per evaluation.

*Action:*  
- **Dive Deep** into error logs: 12 % of false positives were due to ambiguous syntax, 8 % from domain‑specific jargon, and 5 % from out‑of‑distribution data.  
- Built a hybrid pipeline: the LLM first classifies the intent; a lightweight rule engine (AWS Lambda + DynamoDB) catches known edge patterns before the model runs.  
- Added an “Explain” flag that triggers an additional inference on Amazon SageMaker to generate human‑readable rationales, reducing engineer triage time by 40 %.  

*Result:* Post‑deployment, accuracy rose from 86 % to **94 %** on live traffic; latency stayed <200 ms per request. Cost per evaluation fell to $0.04, saving the team ~30 K annually.  

**Leadership Principles:**  
- *Customer Obsession*: Delivered a more trustworthy reviewer for developers.  
- *Ownership*: Took end‑to‑end responsibility from data ingestion to cost optimization.  

Bar‑raisers look for evidence of deep technical understanding (rule engine + LLM synergy), quantifiable impact, and learning—here we turned a model weakness into an architectural improvement that scaled with minimal overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
