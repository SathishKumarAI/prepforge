---
qid: ing_db02af471b__faang__local
question: 'Q: How do you ensure the *quality* of a synthetic dataset of 10 million
  rows?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 412
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:38-05:00'
sources: []
---

**Clarify**  
We need to guarantee that a 10‑M row synthetic table is useful for downstream ML/analytics. I’d confirm:  
* What data schema and distributions must be preserved?  
* Which fidelity metrics matter (e.g., marginal, joint, temporal)?  
* Are privacy constraints (DP, k‑anonymity) in play?

**Approach**  
1. **Define validation criteria** (statistical similarity, domain rules, privacy).  
2. **Generate with a controlled model** (GAN/CTGAN or differential‑private synthesis).  
3. **Audit**: sample‑based statistical tests + full‑dataset checks.  
4. **Iterate**: adjust generator hyperparameters until thresholds met.

**Depth**  
*Statistical Fidelity*: compute KS / chi‑square for each column, and pairwise mutual information on a stratified sample (≈1 % of rows).  
*Rule Compliance*: run domain constraints (e.g., age > 0) via SQL or pandas.  
*Privacy*: evaluate ε‑DP leakage using the accountant from the synthesis library; ensure ε < desired bound.  
Complexity: O(N log N) for sorting in KS tests, manageable at 10 M with parallelization.

**Edge Cases**  
*Rare categories* may be under‑represented → oversample or enforce minimum counts.  
*High‑dimensional interactions* can break joint distributions → use conditional generation or post‑processing.  
*Missing values* – check that synthetic missingness matches original rates.

**Optimize & Communicate**  
I’d document the pipeline in a Jupyter notebook, expose metrics via a dashboard (Grafana), and provide an API for on‑demand validation. For interviewers: highlight how I balance statistical rigor with scalability, and how iterative feedback loops reduce manual inspection time. This structured process ensures reproducible quality at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
