---
qid: ing_a8f71a821f__think__local
question: A shipped Copilot feature that summarises job applicants for recruiters
  is accused of working worse for some groups of candidates. How do you establish
  whether that's true, and what do you do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 217
output_tokens: 435
total_tokens: 652
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:12:09-05:00'
sources: []
---

**1. Clarify the claim & set assumptions**  
- *What does “working worse” mean?* Define concrete metrics (e.g., recall of qualified candidates, bias in scores).  
- *Which groups are implicated?* Identify protected classes (race, gender, age, disability, etc.).  
- Assume we have access to logs, training data, and the model’s outputs for a representative sample.

**2. Adopt an evidence‑based audit framework**  
- Use statistical parity / disparate impact tests.  
- Apply fairness metrics (Equal Opportunity, Demographic Parity, Calibration).  
- Leverage interpretability tools (feature importance per group) to see if certain signals drive bias.

**3. Step‑by‑step reasoning**  
a. **Data audit** – Examine the distribution of applicant attributes in training data; check for under‑representation or label noise.  
b. **Model evaluation** – Run inference on a held‑out, demographically balanced test set. Compute metrics per group.  
c. **Statistical testing** – Perform hypothesis tests (e.g., chi‑square) to see if differences are significant.  
d. **Root cause analysis** – If bias is found, trace whether it originates from data imbalance, feature engineering, or model architecture.

**4. Avoid common traps**  
- Don’t conflate correlation with causation; a demographic feature may be proxy for another factor.  
- Beware of “fairness‑through‑awareness” that masks bias by adding protected attributes without proper handling.  
- Don’t rely solely on aggregate metrics—check subgroup performance to catch hidden disparities.

**5. Sanity‑checking & communicating**  
- Re‑run the audit after any fixes to confirm improvements.  
- Prepare a clear report: what was measured, results per group, identified causes, and remedial actions taken.  
- Present findings to stakeholders with actionable next steps (data augmentation, re‑training, bias mitigation techniques).  

This systematic approach turns an accusation into a measurable investigation and guides concrete remediation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
