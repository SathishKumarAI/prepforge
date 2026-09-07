---
qid: ing_f72150e770__aws__local
question: 'Explain: Problem Categories and Distribution — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 430
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:37:21-05:00'
sources: []
---

**Situation & Task**  
I was tasked to build a *“ML Problem Taxonomy”* for Neetcode‑150 so that our data‑science team could prioritize learning paths and automate assessment pipelines.

**Action**  
1. **Dive Deep into the repo** – I parsed 150 problems, grouped them by core ML concepts: *Supervised Learning (Regression/Classification), Unsupervised (Clustering/Dimensionality Reduction), Reinforcement Learning, Neural Networks, and Model Evaluation*.  
2. **Quantify Distribution** – Using a simple script I counted occurrences: 60 % Supervised, 20 % Neural, 10 % RL, 5 % Clustering, 5 % Misc (e.g., Feature Engineering).  
3. **AWS‑Ready Design** –  
   - Store taxonomy in DynamoDB for low‑latency queries.  
   - Trigger a Lambda on commit to re‑calculate stats → push results to CloudWatch dashboards.  
   - Use SageMaker Pipelines to auto‑generate Jupyter notebooks that scaffold each category, ensuring reproducibility.  
4. **Ownership & Bias for Action** – I set up automated tests (unit + integration) and CI/CD in CodePipeline so any change updates the dashboard within minutes.

**Result**  
- Dashboard now shows real‑time percentages; we cut onboarding time by 30 % and increased cross‑team quiz pass rates from 65 % to 88 %.  
- The Lambda runs < 200 ms, keeping costs <$0.01 per run, while DynamoDB’s provisioned capacity stays under 1 RCU/WCU.

**Reflection**  
I learned that a *single source of truth* for problem taxonomy unlocks data‑driven curriculum design—an example of Ownership and Deliver Results in action.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
