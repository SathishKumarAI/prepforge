---
qid: ing_89feacedce__aws__local
question: 'Explain: Running the example application and interpreting the results'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 427
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:37:58-05:00'
sources: []
---

**Situation / Task**  
I was asked to demo a sample image‑classification model that ships with SageMaker Studio, show how to launch it on an EC2 spot fleet, and interpret the inference latency and accuracy metrics.

**Action**  
1. **Launch & Deploy** – I used *Amazon SageMaker* `CreateEndpointConfig` with a multi‑AZ deployment (1 primary + 1 standby). For cost control I spun up an `ml.m5.large` on spot instances (`maxPrice=0.10`).  
2. **Run the Example** – I invoked the endpoint from a Jupyter notebook, sending 10 000 validation images in batches of 64.  
3. **Collect Metrics** – I captured *latency* (mean = 48 ms, 95th percentile = 120 ms) and *accuracy* (top‑1 = 92.4 %).  
4. **Interpretation** – The latency is well below the SLA of 200 ms, but the 5 % drop at the 95th percentile indicates a tail caused by spot instance preemptions. Accuracy meets our baseline of >90 %, validating the model.

**Result**  
By automating the deployment with CloudFormation and using Spot Instances I reduced infrastructure spend by **35 %** while keeping performance within SLA, and I documented the tail‑latency mitigation strategy (adding a small on‑demand buffer).  

**Learnings & Bar‑raiser cues**  
*Ownership*: I owned the full CI/CD pipeline from notebook to CloudFormation.  
*Dive Deep*: I drilled into CloudWatch metrics to isolate the preemption cause.  
*Quantified Impact*: 35 % cost savings + <200 ms latency.  
*Learning*: Next iteration will add a *Lambda* warm‑up function to smooth tail latency, showing continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
