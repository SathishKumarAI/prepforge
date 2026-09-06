---
qid: ing_a8f71a821f__fp__local
question: A shipped Copilot feature that summarises job applicants for recruiters
  is accused of working worse for some groups of candidates. How do you establish
  whether that's true, and what do you do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 555
total_tokens: 753
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:04:37-05:00'
sources: []
---

### From the Problem to a Testable Hypothesis

The feature turns raw application data into a *summary score* that recruiters read first.  
Its goal is **information compression** – reduce high‑dimensional resumes to a few decision‑relevant signals while preserving utility for hiring.  
If the algorithm favours some groups, it violates *fairness as equal opportunity*: every candidate should have the same chance that their true qualifications are recognised.

### Why Bias Must Show up in Empirical Distributions

1. **Statistical parity**: For each protected group \(g\), the distribution of summary scores \(S_g\) must be comparable to that of others, after conditioning on actual qualification \(Q\).  
2. **Conditional independence**: \(S \perp G \mid Q\). If not, the model is encoding group membership into its predictions.

Thus we test:

| Step | Action |
|------|--------|
| 1 | Gather a *representative* validation set with ground‑truth qualification labels (e.g., hiring panel ratings). |
| 2 | For each group \(g\), compute the **conditional mean** \(\mathbb{E}[S_g \mid Q]\) and variance. |
| 3 | Perform statistical tests (ANOVA, KS‑test) on these conditional distributions; a significant difference indicates bias. |
| 4 | Compute *disparate impact* metrics (e.g., ratio of qualified‑candidate representation in top‑k summaries). |

The non‑obvious insight: **bias can hide in the variance**—a model may give similar averages across groups but systematically over‑ or under‑spread scores for one group, causing unequal selection rates.

### Mitigation Strategy

1. **Re‑weighting / Adversarial Debiasing**: Add a penalty that enforces \(S \perp G\) during training while preserving performance on \(Q\).  
2. **Post‑processing Calibration**: Adjust thresholds per group to equalize true‑positive rates (equal opportunity).  
3. **Explainability & Audit Trail**: Log which features drive each summary; allow recruiters to spot and correct systematic patterns.  

Finally, iterate: re‑evaluate after adjustments, involve domain experts, and publish fairness reports so that the system remains trustworthy and compliant with anti‑discrimination law.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
