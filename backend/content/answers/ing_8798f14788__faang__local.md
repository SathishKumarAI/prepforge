---
qid: ing_8798f14788__faang__local
question: 'Explain: Q42: Design an evaluation system for comparing two LLMs on open-ended
  tasks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 487
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:59:25-05:00'
sources: []
---

**Clarify**  
We’re asked to build a system that fairly compares two large language models (LLMs) when the target tasks are *open‑ended* (e.g., essay writing, creative storytelling). The goal is to produce an objective ranking while acknowledging subjectivity and scale. Key assumptions:  
- Both LLMs can generate text for any prompt.  
- Human evaluators are available but costly; we want to minimize their load.  
- We have access to a set of prompts covering the task space.

**Approach**  
1. **Prompt pool & stratification** – Curate a diverse, representative prompt set and group by difficulty/genre.  
2. **Automated pre‑filters** – Run each model through plagiarism, profanity, and length checks; flag anomalies.  
3. **Human evaluation workflow** – Use a 5‑point Likert scale on relevance, coherence, creativity, factual accuracy, and style.  
4. **Aggregation & weighting** – Compute weighted averages per prompt group; use Bayesian calibration to account for evaluator variance.  
5. **Statistical testing** – Apply paired t‑tests or Wilcoxon signed‑rank tests to determine significance of score differences.

**Depth**  
- *Complexity*: O(N · M) where N is number of prompts and M the number of evaluators; linear in data volume, negligible for modern compute.  
- *Trade‑offs*: More prompts → better coverage but higher cost; more evaluators → lower variance but higher expense.  
- *Calibration*: Fit a Bayesian hierarchical model to learn each evaluator’s bias, then adjust raw scores accordingly.

**Edge Cases**  
- Models generating identical outputs → need tie‑breaking criteria (e.g., novelty score).  
- Evaluator fatigue leading to inconsistent ratings; mitigate with random restarts and attention checks.  
- Prompts that are too ambiguous; flag for manual review.

**Optimize & Communicate**  
Iterate by adding active learning: after each round, identify prompts where model performance diverges most and recruit more evaluators there. Present results via dashboards showing per‑dimension heatmaps and confidence intervals, ensuring transparency to stakeholders. This structured pipeline balances rigor, scalability, and human insight—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
