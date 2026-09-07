---
qid: ing_bfe5f056d5__aws__local
question: 'Explain: Class — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 467
total_tokens: 695
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:37:58-05:00'
sources: []
---

**Situation / Task**  
I was asked to build a real‑time “Home” classifier for an IoT smart‑home platform that tags incoming video frames as *living room*, *kitchen*, or *bedroom* so the assistant can suggest context‑aware actions. The goal: 99 % accuracy and <200 ms inference latency while handling 10,000 concurrent streams.

**Action (Technical)**  
1. **Data pipeline:** Ingest raw video to S3 → Lambda triggers SageMaker Processing job for frame extraction & augmentation.  
2. **Model training:** Use SageMaker Ground Truth for labeling; train a ResNet‑50 on EC2 p3.8xlarge, auto‑tuned via Hyperparameter Tuning Job.  
3. **Inference:** Deploy the model to SageMaker Endpoint with multi‑model hosting (one endpoint per device type). Use Lambda + API Gateway to route frames; cache results in ElastiCache for 1 s to meet latency.  
4. **Observability:** CloudWatch metrics (latency, error rate) and SageMaker Model Monitor for drift.

**Result**  
- Accuracy reached **99.2 %** after two hyper‑parameter cycles.  
- Inference latency averaged **150 ms**, 35 % below the SLA.  
- Cost per inference dropped from $0.02 to $0.007 by switching to spot instances and auto‑scaling.

**Leadership Principles**  
- **Customer Obsession & Ownership:** Built a resilient pipeline that never fails, ensuring users always see correct context.  
- **Dive Deep & Bias for Action:** Iteratively profiled bottlenecks, applied targeted optimizations, and rolled out the solution in 4 weeks instead of the projected 8.

*Bar‑raiser notes:* I demonstrated ownership by owning end‑to‑end data flow, deep technical dive into latency sources, quantified impact (cost & latency), and learned from early drift failures to implement Model Monitor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
