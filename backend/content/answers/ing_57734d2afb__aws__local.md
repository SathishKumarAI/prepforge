---
qid: ing_57734d2afb__aws__local
question: 'Explain: Company context — Hugging Face'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 421
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:43:31-05:00'
sources: []
---

**Situation / Task**  
I joined Hugging Face during the rollout of their open‑source model hub, which served ~3 M monthly users and 1 k concurrent inference requests per day. The goal was to scale the inference API so that latency stayed <200 ms while keeping costs under $10k/month.

**Action**  
*Ownership & Bias for Action*: I built a micro‑service architecture on AWS: an API Gateway + Lambda (Python) fronting a SageMaker endpoint running a distilled BERT model.  
*Dive Deep*: I instrumented CloudWatch to capture per‑request latency, error rates, and GPU utilization. Using the data, I identified that 35 % of traffic came from a handful of “heavy” requests (>1 M tokens).  
I introduced autoscaling on SageMaker with a target utilization of 70 % and added an Edge Lambda cache (DynamoDB TTL) for repeated prompts.  

*Invent & Simplify*: Replaced the monolithic model with a modular transformer pipeline that could swap in newer weights without redeploying, reducing deployment time from 30 min to <5 min.

**Result**  
- Latency dropped from 550 ms to **180 ms** (68 % reduction).  
- Monthly cost fell from $18k to **$8.7k**, a 51 % savings.  
- Uptime improved to 99.97 %.  

**Bar‑raiser takeaways**  
- Demonstrated *ownership* by driving the full cycle from metrics to production changes.  
- Showed *deep dive* into telemetry, turning raw data into actionable insights.  
- Quantified impact with clear KPI improvements and cost savings.  
- Learned that caching was a low‑cost win; future work will focus on dynamic model selection for even greater efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
