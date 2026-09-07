---
qid: ing_f4638f48db__faang__local
question: 'Explain: When do you tell a customer that AI is the wrong tool? Give a
  concrete case and how you''d handle the conversation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 351
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:07:55-05:00'
sources: []
---

**Clarify**  
You’re asked to identify when AI is *not* the right solution for a client’s problem, give an example, and describe the conversation flow. I’ll assume the customer has a business need that they think could be solved with automation or predictive modeling.

**Approach**  
1. Identify the core requirement (e.g., legal compliance, nuanced human judgment).  
2. Map AI capabilities against that requirement.  
3. If mismatch → explain why AI is unsuitable and propose an alternative workflow.  

**Depth**  
*Concrete case:* A law firm wants to automatically flag “confidential” documents in a large contract repository.  
AI (NLP classifiers) can mislabel or miss context‑dependent clauses, risking regulatory penalties. Instead, a hybrid process—human review for flagged items plus rule‑based extraction—ensures compliance and mitigates risk.

**Edge cases**  
- Highly regulated domains (finance, healthcare).  
- Tasks requiring empathy or cultural nuance.  
- Situations where data quality is too low to train a reliable model.  
Test by running a pilot on a small dataset; if precision < 95 %, recommend human‑in‑the‑loop.

**Optimize & communicate**  
Explain that AI excels at pattern recognition but not at interpreting intent or context. Offer a phased approach: start with a rule‑based prototype, evaluate outcomes, then consider incremental AI integration if accuracy improves. Summarize the trade‑offs (speed vs. risk) and align on measurable KPIs before proceeding. This demonstrates structured reasoning, clear communication, and depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
