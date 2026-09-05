---
qid: ing_a8f71a821f__star__local
question: A shipped Copilot feature that summarises job applicants for recruiters
  is accused of working worse for some groups of candidates. How do you establish
  whether that's true, and what do you do about it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 344
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:48-05:00'
sources: []
---

**Situation**  
At my last company we launched a Copilot feature that auto‑summarises job applicants for recruiters. Within the first month, internal advocacy groups reported that the summaries were less accurate for candidates from underrepresented backgrounds, citing higher rates of omitted key skills.

**Task**  
I had to determine if the bias was real and, if so, design a corrective plan without delaying future releases or compromising recruiter workflow.

**Action**  
First, I set up an audit pipeline: pulled 5,000 random résumé‑summary pairs, tagged by demographic data (self‑reported ethnicity, gender, language background). Using Python’s pandas and scikit‑learn, I calculated precision/recall per group. The metrics revealed a 22 % lower recall for non‑English speaking candidates. Next, I ran an ablation study on our NLP model—comparing embeddings from BERT versus multilingual XLM-R—and found that XLM-R improved recall by 15 % across all groups. I also introduced a feedback loop: recruiters could flag “missing skill” errors in real time; those tags were fed back into the training data nightly.

**Result**  
After deploying the updated model and retraining with the new data, overall recall rose from 68 % to 84 %, while the disparity dropped from 22 % to 5 %. Recruiters reported smoother workflows, and we logged a 30 % reduction in review time. I learned that systematic bias detection requires granular metrics, diverse training data, and continuous feedback—principles now baked into our AI governance process.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
