---
qid: ing_aca51fd50a__aws__local
question: 'Explain: You own an LLM feature in production. What does on-call actually
  look like for it, and tell me about a page you took.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 377
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:56:14-05:00'
sources: []
---

**Answer (Amazon style)**  

When I own the LLM inference pipeline in production, *on‑call* is a blend of real‑time monitoring and rapid incident response that keeps latency < 200 ms for 99.9 % of requests.  
- **Setup**: CloudWatch dashboards track per‑token cost, GPU queue depth, and error rates. A Lambda function pulls the latest GPU utilization from AWS Sagemaker endpoints every minute and pushes alerts to PagerDuty if the average exceeds 80 % or latency spikes > 50 ms.  
- **Incident (P2)**: Yesterday a sudden surge in traffic caused the SageMaker endpoint to throttle, raising error rates to 12 %. I immediately executed the run‑book:  
  1. Scaled the endpoint from 4 to 8 inference instances (cost up by only 15 % for that hour).  
  2. Updated the model’s batch size in the Lambda configuration to match the new capacity.  
  3. Triggered a CloudWatch metric alarm that auto‑reverts scaling after 30 min of stable traffic.  

**Result**: The error rate dropped back to <1 % within 4 minutes, and we logged a total cost increase of $120 for the day—well below our SLA budget of $500.  
**Leadership Principles**: *Ownership* (I took full responsibility for the incident) and *Dive Deep* (I analyzed GPU metrics to pinpoint the root cause). The bar‑raiser will hear my proactive scaling strategy, data‑driven impact, and willingness to iterate on the run‑book after the event.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
