---
qid: ing_4092d68e2f__star__local
question: 'Explain: Business Recruiter — Careers | Sierra'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 306
total_tokens: 541
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:29-05:00'
sources: []
---

**Situation:**  
When I joined a mid‑size SaaS company, the HR team was drowning in résumé data—over 12,000 applicants per quarter—and could only shortlist candidates manually, which took an average of three days per hire and left us missing top talent.

**Task:**  
I was tasked with building a machine‑learning pipeline to automate candidate scoring, reduce screening time by 70%, and improve quality of hires (measured by first‑year performance scores).

**Action:**  
First, I gathered labelled data from past hiring cycles and used TF‑IDF embeddings on résumé text. I trained a gradient‑boosted tree model in Python (XGBoost) to predict fit scores, tuning hyperparameters with Bayesian optimization. The model was deployed as an API via FastAPI, integrated into our ATS, and set up to flag top 10% candidates for immediate interview. I also built an A/B test harness to compare manual vs. automated pipelines.

**Result:**  
Screening time dropped from three days to 12 hours, cutting hiring costs by $15K per hire. The first‑year performance of new hires increased by 18%, and we filled roles 40% faster. I learned that end‑to‑end ML projects require close collaboration with domain experts, continuous monitoring, and a clear success metric from the outset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
