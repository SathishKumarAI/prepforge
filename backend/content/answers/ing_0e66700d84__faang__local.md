---
qid: ing_0e66700d84__faang__local
question: 'Explain: Tasks and Responbilities — Implementation Timeline | EU Artificial
  Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 498
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:17:20-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked how an ML team would *implement* the EU AI Act: what tasks we’d own, who’s responsible, and a realistic timeline.  
Assumptions to confirm:  
• The product is a “high‑risk” AI system (e.g., medical diagnostics).  
• We have a cross‑functional squad (ML Ops, legal, compliance, UX).  
• Regulatory deadlines are hard (EU 2025/2026).

**2️⃣ Approach**  
1. Gap audit → 3 weeks.  
2. Data & risk assessment → 4 weeks.  
3. Technical controls (explainability, bias mitigation) → 8 weeks.  
4. Documentation & CE marking prep → 4 weeks.  
5. Internal audit & stakeholder sign‑off → 2 weeks.  
6. Post‑market monitoring plan → ongoing.

**3️⃣ Depth**  
- **Audit:** Map data flows, model training pipelines, and decision points to EU risk categories.  
- **Risk Assessment:** Quantify bias, robustness, and transparency metrics; use datasets for fairness tests.  
- **Controls:** Implement counterfactual explanations, adversarial testing, and continuous monitoring dashboards.  
- **Documentation:** Maintain a “Technical File” (model card, training data provenance, performance reports) per Annex II.  
- **CE Marking Prep:** Engage an EU Notified Body; prepare conformity assessment protocol.  

Complexity: O(n) for dataset checks, O(m·log m) for model retraining iterations. Trade‑offs: heavier explainability may slow inference latency; we’ll profile and optimize.

**4️⃣ Edge Cases**  
- Data that can’t be fully anonymized → need pseudonymization or synthetic data.  
- Models that evolve post‑deployment → implement versioning + rollback procedures.  
- Multi‑jurisdictional data sources → ensure GDPR alignment before EU Act compliance.

**5️⃣ Optimize & Communicate**  
Iterate with a “Compliance Sprint” every 2 weeks, publishing status dashboards to stakeholders. Use risk‑based prioritization: focus first on safety‑critical inference paths. This structured timeline balances regulatory rigor with agile delivery—exactly what FAANG teams value in high‑stakes ML projects.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
