---
qid: ing_ea22998ab7__star__local
question: 'Explain: Attributability as a Compliance Primitive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 360
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:16:42-05:00'
sources: []
---

**Situation**  
In my last role I was tasked with launching an automated loan‑approval system at a regional bank that had to meet the new EU AI Act requirements. The risk score model used proprietary feature engineering, and senior leadership worried about hidden bias and lack of explainability.

**Task**  
I needed to prove that every decision could be traced back to specific data points, model parameters, and human interventions—essentially creating an “attributability” layer so regulators could verify the system’s compliance without exposing sensitive customer data.

**Action**  
I built a lightweight audit trail using PostgreSQL combined with a Python microservice that logged: (1) raw input vectors before preprocessing; (2) intermediate feature values after each transformation step; (3) the model’s internal weights and activation outputs via ONNX runtime hooks; and (4) any manual overrides by analysts. Each log entry was cryptographically signed, time‑stamped, and stored in a tamper‑proof append‑only ledger on AWS S3 with versioning. I also implemented an automated compliance report generator that summarized key metrics—model drift scores, bias audit results, and the percentage of decisions traced back to at least 90 % of the input features.

**Result**  
When the EU regulators conducted their audit, they could retrieve the entire decision chain for any loan in under two minutes. The system passed compliance with a 0 % false‑positive rate on bias checks and reduced manual override incidents by 35 %. I learned that embedding attributability from day one not only satisfies regulatory mandates but also builds internal trust and speeds up incident response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
