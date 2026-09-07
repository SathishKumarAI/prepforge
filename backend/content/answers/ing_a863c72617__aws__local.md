---
qid: ing_a863c72617__aws__local
question: 'Explain: We''re going to walk through your take-home. Start by telling
  me the biggest weakness in what you submitted.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 417
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:47:34-05:00'
sources: []
---

**Biggest Weakness – Lack of End‑to‑End Monitoring & Auto‑Scaling**

*Situation:*  
In my prototype I built a single‑instance SageMaker endpoint that served a fine‑tuned BERT model for intent classification. The code ran locally and on an EC2 instance, but the submission didn’t include observability or elasticity.

*Task:*  
I should have exposed metrics (latency, error rate, inference throughput) to CloudWatch, set up alarms, and enabled **SageMaker Model Monitor** so that drift in input distribution would trigger a retraining pipeline. Moreover, I’d need an autoscaling strategy: use the **Inference Scheduler** with a target utilization of 70 % on CPU/GPU, backed by a Lambda that adjusts the number of instances based on CloudWatch metrics.

*Action:*  
1. Instrumented the endpoint with Prometheus‑style exporters and pushed to CloudWatch.  
2. Added Model Monitor jobs (frequency: hourly) to capture predictions and compare against a baseline dataset stored in S3.  
3. Configured SageMaker Inference Scheduler + Lambda for dynamic scaling, backed by an **Application Load Balancer** to distribute traffic across multiple instances.

*Result:*  
With these changes, the system achieved 99.9 % availability during a 24‑hour load test that hit 10× the expected traffic, while keeping cost down by 35 % through autoscaling. The monitoring stack also reduced mean time to detect (MTTD) model drift from days to minutes.

**What the Bar‑raiser looks for**

- **Ownership:** I identified the missing observability as a critical flaw and took initiative to design a solution.  
- **Dive Deep:** I quantified latency, error rates, and cost impact, showing deep understanding of AWS services.  
- **Impact & Learning:** The redesign cut costs, improved reliability, and taught me that monitoring is as essential as model accuracy in production AI workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
