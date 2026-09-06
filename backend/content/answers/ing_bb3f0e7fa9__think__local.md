---
qid: ing_bb3f0e7fa9__think__local
question: 'Explain: Why we do not use a single composite quality score'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 190
output_tokens: 423
total_tokens: 613
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:18:29-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What is “a single composite quality score” referring to?* Assume it means aggregating all AI‑system performance metrics (accuracy, latency, fairness, robustness) into one number.  
   - *Why might someone propose a single score?* Simplicity, benchmarking convenience, or regulatory compliance.  

**2️⃣ Mental model: multi‑criteria decision analysis (MCDA)**  
   - Treat each metric as a dimension in a vector space.  
   - Recognize that AI quality is inherently multidimensional; trade‑offs exist between dimensions.

**3️⃣ Step‑by‑step reasoning**  
   1. Identify the stakeholders and their priorities (e.g., safety vs. speed).  
   2. Map each metric to those priorities.  
   3. Evaluate whether a weighted sum or other aggregation preserves stakeholder preferences.  
   4. Check for **non‑linearity**: e.g., a small drop in fairness can be unacceptable even if overall accuracy rises.  
   5. Test the composite score on edge cases—does it still reflect real risk?  

**4️⃣ Common traps to avoid**  
   - *Over‑simplification*: ignoring that some metrics are mutually exclusive (e.g., interpretability vs. performance).  
   - *Weight bias*: assigning weights arbitrarily or based on one stakeholder group.  
   - *Aggregation paradoxes*: a composite may hide violations of individual constraints.

**5️⃣ Sanity‑check & communication**  
   - Run counter‑examples: show that two systems with identical scores can differ drastically in real‑world impact.  
   - Explain to the audience that multi‑dimensional dashboards are more informative and defensible than a single number, especially for safety‑critical AI deployments.  

By following this framework you’ll consistently recognize why a single composite score fails to capture the nuanced trade‑offs inherent in AI quality assessment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
