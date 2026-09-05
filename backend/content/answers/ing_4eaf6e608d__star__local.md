---
qid: ing_4eaf6e608d__star__local
question: 'Explain: For Employees — Careers | Harvey'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 373
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:05:45-05:00'
sources: []
---

**Situation**  
At a mid‑size fintech firm, the HR analytics team noticed that our promotion pipeline was stuck: only 12 % of eligible engineers were moving up each year, and many reported feeling “unaware” of what skills they needed to advance.

**Task**  
I was tasked with building an internal recommendation engine that would surface personalized learning paths and project opportunities for employees based on their current skill set, past performance, and career aspirations.

**Action**  
First, I gathered a labeled dataset from the last three years: employee profiles (tech stack, certifications), project assignments, peer reviews, and promotion outcomes. Using a supervised classification model (Gradient‑Boosted Trees in XGBoost) I trained a predictor for promotion likelihood. Then I built an unsupervised clustering step (t‑SNE + K‑Means) to group employees by latent skill vectors derived from their code commits and ticket histories. Finally, I integrated the model into our internal portal via Flask, exposing two REST endpoints: one that returns a ranked list of learning resources, and another that suggests upcoming projects aligned with each employee’s cluster profile.

**Result**  
Within six months of launch, promotion readiness scores increased by 35 % (from 12 % to 16.5 %) and the time‑to‑promotion dropped from an average of 28 months to 21 months. Employees reported a 4.2/5 satisfaction rating on the new career guidance tool. I learned that combining predictive analytics with actionable recommendations can bridge skill gaps while keeping data bias in check by regularly auditing model outputs against diversity metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
