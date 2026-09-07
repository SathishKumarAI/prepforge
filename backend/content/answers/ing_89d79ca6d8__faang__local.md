---
qid: ing_89d79ca6d8__faang__local
question: 'Explain: When is an LLM the wrong tool? Give me real examples where you''d
  push back on a PM.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 406
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:04:59-05:00'
sources: []
---

**Clarify**  
The interviewer wants concrete scenarios where a large language model (LLM) is unsuitable and how you’d justify refusing its use to product‑management (PM). Assume the PM proposes an LLM for a new feature—e.g., automated legal document drafting, medical diagnosis support, or high‑stakes financial advice.

**Approach**  
1. Identify the core constraints: accuracy, interpretability, compliance, user safety.  
2. Map each constraint to LLM weaknesses (bias, hallucination, opaque reasoning).  
3. Propose an alternative stack that meets those constraints.  

**Depth**  
- *Legal drafting*: LLMs can produce plausible‑looking contracts but risk omitting jurisdiction‑specific clauses or misinterpreting statutes. A rule‑based engine + human review pipeline guarantees compliance and auditability.  
- *Medical triage*: Hallucinations could lead to incorrect symptom interpretation; regulatory bodies (FDA, CE) require deterministic logic and traceable evidence. A decision tree with evidence‑based guidelines is safer.  
- *Financial risk scoring*: LLMs lack the reproducible, explainable models required for KYC/AML compliance; a supervised ML model with feature importance reporting satisfies auditors.  

**Edge cases**  
- Extremely low‑data domains where fine‑tuning isn’t feasible → no reliable LLM.  
- Real‑time latency constraints (e.g., high‑frequency trading) → inference overhead unacceptable.  

**Optimize & communicate**  
Explain that while LLMs excel at natural language understanding, their probabilistic nature and lack of regulatory certification make them a poor fit for domains demanding precision, traceability, and compliance. Offer to prototype a hybrid: use the LLM only for user‑friendly prompts, feeding its output into a vetted rule engine. This shows you respect the PM’s vision but protect the product’s integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
