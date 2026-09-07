---
qid: ing_badb251c4c__faang__local
question: 'Explain: Statistical correction with judgy — Eval Gated Cicd'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 518
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:57:21-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to explain how we apply *statistical correction* when judging AI models during a *gated CI/CD pipeline*.  
Assumptions:  
- Multiple hypothesis tests (e.g., many metrics or datasets).  
- We need to decide whether a new model version should be promoted.  

**Approach**  
1. Collect all p‑values from the evaluation suite.  
2. Apply an appropriate multiple‑testing correction (Bonferroni, Holm‑Šidák, Benjamini–Hochberg).  
3. Convert corrected p‑values into a *judgment score* that feeds the gate logic in CI/CD.  

**Depth**  
- **Bonferroni**: `α_corrected = α / m` (very conservative; ensures family‑wise error rate ≤ α).  
- **Benjamini–Hochberg**: ranks p‑values, finds largest `k` where `p_k ≤ (k/m) * q`; controls false discovery rate.  
- In CI/CD we often use BH because we tolerate a small proportion of false positives while still allowing many metrics to pass.  
- The gate evaluates the *minimum* corrected p‑value; if it’s below threshold, the PR is merged and model is promoted.  

**Edge cases**  
- Correlated tests → corrections become overly strict.  
- Very few samples → p‑values unstable.  
- Missing data → impute or skip metric.  

**Optimize & communicate**  
Explain that we can tune `q` (e.g., 0.05) and the list of metrics to balance safety vs innovation. In an interview, highlight trade‑offs: Bonferroni guarantees safety but blocks many true improvements; BH is more permissive but may let a few bad models slip through. Conclude by stressing that statistical correction turns noisy model evaluations into a reproducible gate in our CI/CD pipeline.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
