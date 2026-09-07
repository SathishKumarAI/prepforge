---
qid: ing_f1027af66a__faang__local
question: 'Explain: 1.1. Requirements Notation and Conventions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 506
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:59:53-05:00'
sources: []
---

**1. Clarify**  
The interviewer asks for a concise explanation of *Requirements Notation and Conventions* in the context of machine‑learning projects.  
- What level of formality is expected (e.g., natural language vs. formal models)?  
- Which stakeholders (data scientists, ML engineers, product owners) will consume these notations?  
- Are we focusing on functional requirements (model behavior), non‑functional (latency, fairness), or both?

**2. Approach**  
I’ll:  
1. Define what a *requirement* is in ML.  
2. Survey common notational styles (UML use‑cases, IEEE 830, CRISP‑DM templates).  
3. Highlight conventions that map domain goals to technical artifacts (metrics, data pipelines, validation protocols).

**3. Depth**  
- **Functional requirements:** *“The model must predict churn with ≥ 0.85 AUC.”*  
  - Notation: Use *IEEE 830* style numbered statements or a *feature‑matrix* table.
- **Non‑functional requirements:** *Latency < 50 ms, GDPR compliance, interpretability via SHAP values.*  
  - Conventions: *Goal–Metric mapping*, *quality attributes chart*.  
- **Traceability:** Link each requirement to data sources, feature sets, and evaluation scripts using a *requirement ID* (e.g., REQ‑ML‑001).  
- **Change management:** Adopt *versioned requirement documents* (Git + Markdown) to capture evolution.

**4. Edge Cases**  
- Ambiguous wording (“fast predictions”) → define concrete latency numbers.  
- Conflicting requirements (high accuracy vs. interpretability) → use a *trade‑off matrix*.  
- Missing data assumptions → explicitly state “Assume 80 % coverage of user demographics.”  

**5. Optimize & Communicate**  
- Use **visual dashboards** (e.g., Confluence pages) to keep stakeholders aligned.  
- Automate requirement validation: tie CI pipelines to check that metrics meet stated thresholds.  
- When explaining, start with the business goal → translate into measurable requirements → show how notation enforces traceability and reduces risk.

By structuring requirements this way, we ensure clarity for all roles, enable automated compliance checks, and make future model iterations auditable—exactly what FAANG teams expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
