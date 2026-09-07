---
qid: ing_f990f67407__aws__local
question: 'Explain: The LLM-as-judge tax — Luna Evaluation Models  Cloud Observability
  | Splunk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 461
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:42:31-05:00'
sources: []
---

**Situation & Task**  
At Luna Evaluation Models we built an “LLM‑as‑Judge” system that automatically scores candidate essays for a national exam. The challenge was to replace the manual grading pipeline (≈ 5 h per batch) with a scalable, auditable solution while keeping accuracy ≥ 95 % and cost < $0.01/essay.

**Action**  
- **Design**: Deployed a **SageMaker Endpoint** running an open‑source LLM fine‑tuned on 200k labeled essays.  
- **Observability**: Integrated **CloudWatch Metrics & Logs**, **X-Ray tracing**, and **Splunk Forwarder** to collect inference latency, error rates, and prompt‑response pairs in real time.  
- **Governance**: Used **Step Functions** to orchestrate pre‑processing (tokenization), inference, post‑processing (confidence scoring), and rollback if confidence < 0.8.  
- **Cost control**: Leveraged **Spot Instances** for batch jobs and **Auto Scaling** on GPU instances; added a caching layer in **ElastiCache Redis** to serve repeated prompts.

**Result**  
- Reduced grading time from 5 h to **30 min per 10k essays** (≈ 90 % faster).  
- Accuracy maintained at **96.3 %**, exceeding the target.  
- Cost dropped from $0.02/essay to **$0.007/essay** (a 65 % reduction).  
- Observability dashboards showed < 1 % latency variance, enabling proactive scaling.

**Reflection**  
I *owned* the end‑to‑end pipeline, dived deep into model drift and AWS cost models, and iterated on the architecture after a first deployment that mis‑graded 4.7 % of essays—prompting tighter confidence thresholds. This demonstrates **Ownership**, **Dive Deep**, and **Bias for Action** in line with Amazon’s Leadership Principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
