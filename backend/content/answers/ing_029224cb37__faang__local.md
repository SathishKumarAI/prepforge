---
qid: ing_029224cb37__faang__local
question: Why LLM for Explanation, Not SHAP/LIME? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 452
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:02-05:00'
sources: []
---

**Clarify**

The interview asks why a large language model (LLM) would be chosen to generate explanations for fraud‑detection predictions instead of established local explainers like SHAP or LIME.  
Assumptions:  
1. The fraud system outputs a binary score per transaction.  
2. Stakeholders need human‑readable, contextual narratives.  
3. Real‑time inference and model‑agnosticism are required.

**Approach**

*Compare capabilities*:  
- SHAP/LIME quantify feature importance locally but produce terse, numeric lists.  
- LLMs can ingest the same feature vector and output a full paragraph that references business rules, compliance language, and potential next steps.  

*Outline evaluation criteria*: accuracy of explanation fidelity, user comprehension, deployment latency.

**Depth**

LLMs preserve model‑agnosticism while mapping features to domain terms (e.g., “merchant category” → “retail”). They can embed regulatory constraints (“PCI DSS”), produce conditional statements (“if amount > $X and location = Y…”), and suggest actions. SHAP/LIME, though mathematically grounded, lack this semantic richness; their attributions may mislead if features are correlated or non‑linear. LLMs can also summarize multiple explanations across a batch, aiding auditors.

**Edge Cases**

- **Model drift**: LLM explanations might lag behind new fraud patterns unless retrained.  
- **Adversarial inputs**: Manipulated feature vectors could produce misleading narratives.  
- **Explainability guarantees**: LLMs lack the formal proofs that SHAP provides; must validate fidelity via sampling.

**Optimize & Communicate**

Start with a hybrid pipeline: use SHAP for rapid, numeric insight in production, and trigger an LLM only when compliance or user‑facing dashboards require narrative. Cache recent explanations to reduce latency. Communicate trade‑offs clearly: “LLMs give richer context at the cost of formal guarantees; we mitigate by coupling them with SHAP’s fidelity checks.” This balances human interpretability, regulatory needs, and system performance—exactly what FAANG interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
