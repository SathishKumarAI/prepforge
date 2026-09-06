---
qid: ing_a5826bcdfe__think__local
question: 'Explain: Compute corrected rate — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 505
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:59:37-05:00'
sources: []
---

**Metacognitive Blueprint for “Compute Corrected Rate” (AI Evaluations)**  

1. **Clarify the Problem & Set Assumptions**  
   - Identify what *rate* refers to: accuracy, error rate, or some performance metric?  
   - Decide whether you’re correcting for class imbalance, sampling bias, or measurement noise.  
   - Assume you have raw counts (TP, FP, FN, TN) and a known bias factor (e.g., prevalence).

2. **Choose the Right Framework**  
   - Use *bias‑adjusted estimators* (e.g., Wilson score for proportions).  
   - If correcting for class imbalance, apply *reweighting* or *stratified sampling*.  
   - For measurement error, consider *error‑in‑variables* correction.

3. **Step‑by‑Step Reasoning**  
   1. Compute the uncorrected rate (e.g., accuracy = (TP+TN)/N).  
   2. Identify the bias source and quantify it (prevalence difference, sampling weight).  
   3. Apply the correction formula:  
      - *Corrected Accuracy* = (TP/ (TP+FN) – bias) / (1 – bias), or  
      - *Weighted Rate* = Σ(weightᵢ × rateᵢ)/Σ(weightᵢ).  
   4. Propagate uncertainty using bootstrapping or analytic variance formulas.

4. **Avoid Common Pitfalls**  
   - Don’t double‑count corrections (e.g., apply both reweighting and bias adjustment).  
   - Be wary of over‑fitting to a single dataset; validate on held‑out data.  
   - Ensure the correction factor is within [0,1] to keep probabilities meaningful.

5. **Sanity Check & Communicate**  
   - Verify that corrected rate lies between 0 and 1 and behaves sensibly when bias → 0 (should reduce to raw rate).  
   - Explain each step verbally: “We first measured the raw accuracy, then adjusted for the known class imbalance by reweighting predictions according to true prevalence.”  

Follow this scaffold whenever you encounter a *corrected rate* problem in AI evaluations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
