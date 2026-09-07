---
qid: ing_05a869ac77__faang__local
question: 'Explain: 2028 — Implementation Timeline | EU Artificial Intelligence Act'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 659
total_tokens: 895
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:25-05:00'
sources: []
---

**Clarify**

The EU AI Act will classify AI systems by risk (minimal, limited, high‑risk, prohibited). The question asks for a realistic rollout plan for a company to be compliant by **2028**—covering technical, governance, and legal milestones.

*Assumptions:*  
- The product uses ML in a “high‑risk” domain (e.g., medical diagnostics).  
- We have internal data science, legal, and compliance teams.  
- No prior certification framework exists.

---

**Approach**

| Phase | Goal | Deliverable |
|-------|------|-------------|
| **2024 Q1–Q2** | Gap analysis & risk mapping | Risk register, compliance matrix |
| **2024 Q3–Q4** | Data & model governance | Data‑protection SOPs, model card templates |
| **2025 Q1–Q2** | Technical controls | Explainability pipelines, bias mitigation modules |
| **2025 Q3–Q4** | Documentation & audits | Internal audit reports, external certification prep |
| **2026 Q1–Q2** | Stakeholder engagement | Public‑facing transparency portals |
| **2026 Q3–Q4** | Certification | Submit to EU notified body (if required) |
| **2027–2028** | Continuous monitoring | Real‑time compliance dashboards, post‑market surveillance |

---

**Depth**

- **Data Governance:** Implement GDPR‑aligned data catalog; enforce purpose limitation and minimisation.  
- **Model Lifecycle:** Adopt MLOps with versioned artifacts, deterministic training pipelines, and automated drift detection (≤0.5% performance drop triggers retraining).  
- **Explainability:** Use SHAP or LIME for every inference; store explanations in the model card.  
- **Bias & Fairness:** Run protected‑attribute audits quarterly; apply re‑weighting if disparity >2%.  
- **Documentation:** Model cards + System requirements specs per EU Annex I; keep audit logs immutable (append‑only).  

**Complexity:** Training‑pipeline automation is O(N) per dataset; drift alerts run in O(1) per inference. Overall system overhead ≈ 3–5 % CPU, negligible latency.

---

**Edge Cases**

- **Data scarcity** → synthetic augmentation with differential privacy guarantees.  
- **Rapid regulatory changes** → maintain a legal‑tech watchlist; adjust risk matrix quarterly.  
- **Model failure in edge devices** → fallback rules and human‑in‑the‑loop alerts.

---

**Optimize & Communicate**

1. **Iterative compliance:** Parallelize technical controls with governance to avoid bottlenecks.  
2. **Stakeholder dashboards:** Visualise KPI trends (bias score, drift) for executives.  
3. **Narration style:** “By 2025 we will have a fully auditable ML pipeline that meets the Act’s transparency and safety requirements; by 2028 we’ll be certified, ready to launch in the EU market.”  

This structured plan balances regulatory rigor with agile delivery—key to impressing FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
