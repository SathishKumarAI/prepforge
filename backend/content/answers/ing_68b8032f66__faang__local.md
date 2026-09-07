---
qid: ing_68b8032f66__faang__local
question: 'Explain: Anti-Patterns to Avoid'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 478
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:47:15-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** *What are common anti‑patterns in AI projects and why should we avoid them?*  
Assumptions:  
- Audience knows basic ML concepts but may not have deep deployment experience.  
- Focus on practical pitfalls rather than theoretical issues.

## 2️⃣ Approach  
I’ll list high‑level anti‑patterns, explain each’s impact, then suggest mitigations. The answer will be concise (~200 words) and structured for quick digestion in an interview setting.

## 3️⃣ Depth  

| Anti‑pattern | Why it hurts | Quick fix |
|--------------|-------------|-----------|
| **Data Snooping / Leakage** | Model learns from future info → over‑optimistic metrics. | Strict train/validation split; feature engineering only on training data. |
| **Feature Explosion (Curse of Dimensionality)** | Too many features degrade generalization and increase cost. | Feature selection, regularization, dimensionality reduction. |
| **“Black‑box” Models without Explainability** | Hard to trust, audit, or comply with regulations. | Use interpretable models where possible; add SHAP/ LIME explanations. |
| **Monolithic “Train‑Once, Deploy‑Forever”** | Neglects data drift → model performance falls over time. | Continuous monitoring, retraining pipelines, versioned datasets. |
| **Ignoring Business Context** | Achieving statistical accuracy but delivering no value. | Define clear KPIs early; involve stakeholders in metric selection. |

## 4️⃣ Edge Cases  
- *Small datasets*: feature explosion is especially dangerous.  
- *Regulated domains (healthcare, finance)*: explainability becomes mandatory.  
- *Real‑time inference*: black‑box models may be too slow or opaque.

## 5️⃣ Optimize & Communicate  
I would emphasize that avoiding these anti‑patterns not only boosts accuracy but also reduces time‑to‑market and compliance risk. In an interview, I’d conclude with a quick recommendation: **start with data hygiene, enforce modular pipelines, and always align model goals with business metrics**. This shows structured thinking, depth, and practical awareness—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
