---
qid: ing_1391c9e5a4__faang__local
question: 'Explain: Pitfall 20: Security as an Afterthought — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 502
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:28:55-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to explain *Pitfall 20* from the AI “Common Pitfalls” list: treating security as an afterthought.  
Assumptions I’d confirm: (a) we’re discussing data‑centric ML pipelines, (b) the audience is familiar with basic cybersecurity concepts, and (c) the goal is to highlight why early security matters for model integrity and compliance.

**2️⃣ Approach**  
Outline:  
- Define “security as an afterthought.”  
- Explain why it’s dangerous in AI.  
- Give concrete examples (data poisoning, adversarial attacks).  
- Summarize mitigation steps (secure data storage, access controls, audit trails).

**3️⃣ Depth**  

| Issue | Why It Happens | Consequence |
|-------|----------------|-------------|
| **Data Poisoning** | Training data is sourced from unverified channels. | Models learn malicious patterns → biased predictions or sabotage. |
| **Adversarial Inputs** | Input sanitization added only post‑deployment. | Small perturbations fool the model, leading to wrong decisions in safety‑critical systems. |
| **Model Leakage** | Model weights are shared without encryption. | Competitors reverse‑engineer proprietary logic or extract sensitive training data. |
| **Compliance Gaps** | GDPR/CCPA rules added after launch. | Fines and brand damage. |

Mitigations:  
- *Secure ingestion*: validate, encrypt, tag data at collection.  
- *Access control & least privilege* for model artifacts.  
- *Continuous monitoring*: anomaly detection on predictions.  
- *Audit trails*: immutable logs of data lineage and model versions.

**4️⃣ Edge Cases**  
- Rare edge‑sample attacks that bypass standard sanitizers.  
- Insider threats where privileged users modify training sets.  
- Legacy systems lacking proper encryption but still used for inference.

**5️⃣ Optimize & Communicate**  
Start with a vivid scenario (e.g., autonomous vehicle misclassifying a stop sign). Emphasize the cost of late fixes: higher remediation effort, regulatory penalties, and reputational loss. Conclude by framing security as *integral* to the ML lifecycle, not an add‑on—much like how FAANG teams embed DevSecOps from day one.

*(≈210 words)*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
