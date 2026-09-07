---
qid: ing_74613ce2b6__faang__local
question: You are asked to ship an LLM-assisted CV screening feature. How do you approach
  fairness, and what do you tell the product team?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 374
total_tokens: 624
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:14:54-05:00'
sources: []
---

**Clarify**  
We’re building an LLM‑driven resume filter that flags candidates for hiring managers.  
Key assumptions: (1) The LLM is trained on historical resumes and interview data; (2) “Fairness” means equal qualification opportunities across protected classes; (3) We have access to demographic metadata for audit purposes but must keep it private.

**Approach**  
1. **Data audit** – Quantify bias in the training set (gender, race, age).  
2. **Pre‑processing** – Remove or obfuscate protected attributes from inputs.  
3. **Model inspection** – Use explainable AI (SHAP) to detect proxy features.  
4. **Bias mitigation** – Apply re‑weighting or adversarial debiasing during fine‑tuning.  
5. **Post‑processing** – Calibrate score thresholds separately per demographic slice to equalize true positive rates.

**Depth**  
- Fine‑tune the LLM on a balanced, de‑identified dataset; use differential privacy where possible.  
- Evaluate fairness metrics: disparate impact ratio (<0.8 acceptable), equal opportunity (equal recall).  
- Complexity stays O(N) for inference; bias checks add negligible overhead.  

**Edge Cases**  
- Missing demographic labels → treat as “unknown” and audit separately.  
- Adversarial resumes that encode protected info via uncommon words → test with synthetic noise.  

**Optimize & Communicate**  
Explain to product:  
> “We’ll ship the feature with built‑in bias monitoring dashboards. Every 1000 candidates we’ll report fairness KPIs, and thresholds will auto‑adjust to maintain equal opportunity. This protects us legally and preserves hiring quality.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
