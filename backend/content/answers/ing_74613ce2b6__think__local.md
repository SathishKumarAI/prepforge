---
qid: ing_74613ce2b6__think__local
question: You are asked to ship an LLM-assisted CV screening feature. How do you approach
  fairness, and what do you tell the product team?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 389
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:43:22-05:00'
sources: []
---

**1️⃣ Clarify Scope & Assumptions**  
Start by asking: *Which bias dimensions matter (gender, race, age, disability)?* Assume the dataset is a mix of historical resumes and synthetic data; we’ll need to know the target market and legal constraints (EEO, GDPR).  

**2️⃣ Adopt a Fairness Framework**  
Use a two‑step model: **Pre‑processing** (de‑identification, re‑weighting) + **Post‑processing** (equalized odds or calibration). Tie each step to a concrete metric (demographic parity, equal opportunity) that the product can monitor.  

**3️⃣ Step‑by‑Step Reasoning**  
1. Audit training data for representation gaps.  
2. Define protected attributes and target outcomes (e.g., “invite to interview”).  
3. Train a baseline model; compute bias metrics per group.  
4. Apply mitigation (reweight, adversarial debiasing).  
5. Re‑evaluate; iterate until metrics hit acceptable thresholds or trade‑offs are documented.  

**4️⃣ Avoid Common Traps**  
- Don’t assume “fairness ≈ accuracy”; improving one can worsen the other.  
- Beware of *proxy variables* (e.g., zip code ≠ race).  
- Don’t treat bias as a single number; context matters.  

**5️⃣ Communicate & Iterate**  
Explain to product: “We’ll deliver a CV filter that meets defined fairness thresholds, with an audit log and continuous monitoring dashboard.” Emphasize that fairness is a moving target—regular re‑audits are mandatory, and user feedback loops will be built in. This keeps the team aligned on expectations and legal compliance while delivering a responsible feature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
