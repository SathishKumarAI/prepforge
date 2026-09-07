---
qid: ing_a8f71a821f__aws__local
question: A shipped Copilot feature that summarises job applicants for recruiters
  is accused of working worse for some groups of candidates. How do you establish
  whether that's true, and what do you do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 400
total_tokens: 658
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:48:31-05:00'
sources: []
---

**Situation / Task**  
When the Copilot summary feature was flagged for bias, I owned the investigation because “Ownership” and “Bias for Action” drive rapid resolution.

**Action**  
1. **Define fairness metrics** – built a test harness in Python that runs the summarizer on a stratified sample of 10 k resumes (gender, ethnicity, age groups).  
2. **Collect ground truth** – recruited a panel of recruiters to rate summary quality (score 0‑5) and calculated *Average Precision* per group.  
3. **Root‑cause analysis** – instrumented the NLP pipeline on AWS Lambda, logged token usage with CloudWatch, and used Amazon SageMaker Debugger to trace embedding weights that differed by demographic signal.  
4. **Remediation** – fine‑tuned the transformer model on a balanced dataset (≈ 200 k resumes) and added an *adversarial debiasing* layer in SageMaker training jobs.  
5. **Validation & deployment** – ran A/B tests with 1 % of traffic; post‑fix precision improved from 0.62 to 0.78 across all groups, achieving a 20 % lift in recruiter satisfaction (measured by NPS).  

**Result**  
- Reduced bias score variance from 0.12 to < 0.05.  
- Cut API latency by 15 % and cost per inference by $0.0003 using SageMaker endpoints with spot instances.  
- Earned a “Best Practices” badge in the internal AI ethics audit.

**Reflection**  
I learned that bias surfaces early when data is imbalanced; continuous monitoring (CloudWatch dashboards) prevents recurrence. This experience reinforced the principle that owning a feature means owning its ethical footprint as well as its performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
