---
qid: ing_3b904011ef__faang__local
question: Your eval reports 82% pass on 100 examples. What does that number not tell
  you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 445
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:02:59-05:00'
sources: []
---

**Clarify**  
The metric says *“our model passes 82 % of the 100 test cases.”*  
Assumptions to confirm:  
- What “pass” means (exact match, BLEU > 0.7, human approval?).  
- The nature and distribution of those 100 examples (balanced by domain, difficulty, class).  
- Whether the dataset is representative of production traffic.

**Approach**  
1. Enumerate what the pass rate omits: variance, confidence intervals, error types, long‑tail behavior.  
2. Identify complementary diagnostics (precision/recall per class, confusion matrix, latency, resource usage).  
3. Plan to collect richer data and run statistical tests.

**Depth**  
- **Statistical uncertainty:** 82 % ± ≈ 4 % (95 % CI) for N=100; a single outlier can swing the metric by >2 %.  
- **Error spectrum:** Pass rate masks *why* failures occur—semantic drift, hallucination, or mis‑tokenization.  
- **Distribution shift:** If the 100 samples are skewed toward easy prompts, real‑world performance could be far lower.  
- **Operational factors:** Latency spikes, GPU memory limits, or inference errors aren’t reflected.

**Edge Cases**  
- A model that passes all “easy” cases but fails on rare edge prompts would still show 82 %.  
- If the test set is small, a single catastrophic failure could be missed.  
- Non‑deterministic sampling (e.g., beam search randomness) can change pass outcomes between runs.

**Optimize & Communicate**  
- Augment with *confidence‑weighted* metrics and *coverage analysis*.  
- Use bootstrapping to report tighter CIs.  
- Present a dashboard showing per‑category failure rates and drift alerts.  
Explain that the single number is a coarse proxy; richer diagnostics give actionable insights for safety, robustness, and user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
