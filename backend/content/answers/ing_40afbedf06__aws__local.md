---
qid: ing_40afbedf06__aws__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 457
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:52:13-05:00'
sources: []
---

**Situation & Task**  
While launching a new language‑model for medical exam prep, I needed to prove that the updated model improved the pass rate by at least **3 %** (from 82 % to 85 %). To do this convincingly, I had to determine how many evaluation examples were required and then reduce that number without compromising statistical power.

**Action & Design**  
1. **Power analysis**: Using a two‑tailed test (α=0.05, β=0.20) with baseline p₀=0.82 and target p₁=0.85, the sample size ≈ 2 000 per group.  
2. **Reduce via active learning & transfer learning**  
   * Run a quick pilot on 200 labeled samples (SageMaker Ground Truth).  
   * Train a lightweight teacher‑student model; use uncertainty sampling to pick the next 300 most informative examples.  
3. **Statistical pruning**: Apply Bayesian A/B testing in SageMaker Experiments, stopping early when posterior probability > 0.99 that p₁>p₀.  

**Result**  
The pilot identified a 4 % lift with only **1 200** final evals—saving ~$3k in annotation costs and cutting time from 4 weeks to 2 weeks. The Bayesian test stopped after 800 samples, giving us high confidence while staying within budget.

**Leadership Principles**  
- *Customer Obsession*: Delivered a faster, cheaper validation process for clinicians relying on our tool.  
- *Ownership & Dive Deep*: I owned the end‑to‑end experiment, dug into statistical assumptions, and iteratively refined the sampling strategy.  

**Bar‑raiser takeaways** – Ownership of data quality, deep dive into power calculations, quantifiable cost savings, and learning from early pilot failures to iterate quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
