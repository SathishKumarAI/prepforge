---
qid: ing_472550bc87__think__local
question: 'Explain: Q115: Your team''s eval scores keep improving but production complaints
  are flat. Diagnose the eval gaming problem and redesign the eval system.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 407
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:12:00-05:00'
sources: []
---

**1️⃣ Clarify the problem & state assumptions**  
- Confirm what “eval scores” actually measure (e.g., accuracy, BLEU, ROUGE) versus real‑world complaints (user satisfaction, latency).  
- Assume the team optimizes for the metric, possibly neglecting other dimensions like robustness or fairness.  

**2️⃣ Adopt a mental model: “Evaluation–Reality Gap”**  
- Think of evaluation as a *simulation*; production is an *environment* with noise, distribution shifts, and human feedback loops.  
- The gap widens when metrics ignore aspects that drive complaints (e.g., hallucinations, privacy leaks).  

**3️⃣ Step‑by‑step diagnostic reasoning**  
1. **Collect data**: compare eval set distribution vs production traffic (feature statistics, user segments).  
2. **Identify mismatches**: look for over‑represented easy cases in evals or missing edge cases.  
3. **Probe model behavior**: run ablation tests—remove the feature that’s most correlated with complaints and see if scores drop.  
4. **Check human feedback loops**: are complaints being acted upon? Is there a lag between complaint spikes and retraining?  

**4️⃣ Common traps to avoid**  
- *Metric‑centric bias*: trusting a single score without considering multi‑dimensional trade‑offs.  
- *Overfitting to the eval set*: tailoring the model to pass tests rather than generalize.  
- *Ignoring data drift*: assuming production distribution stays static.  

**5️⃣ Sanity‑check & communicate clearly**  
- Verify that changes in the eval (e.g., adding harder cases) actually reduce complaints in a controlled rollout.  
- Explain to stakeholders: “We’re shifting from a narrow accuracy metric to a composite score—robustness, latency, and user sentiment—to align evaluation with real‑world impact.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
