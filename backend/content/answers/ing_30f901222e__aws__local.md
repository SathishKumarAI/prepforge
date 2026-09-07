---
qid: ing_30f901222e__aws__local
question: 'Design a hybrid architecture: some requests on-device, some to the cloud.
  How does the router decide?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 516
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:16:03-05:00'
sources: []
---

**Leadership Principles:**  
*Customer Obsession – we want the best latency and privacy for each request.*  
*Dive Deep & Ownership – I own the routing logic and its metrics.*

**Situation / Task**  
I was tasked to design a hybrid inference system for a mobile health app that runs ML models both on-device (for privacy) and in the cloud (for heavy‑weight tasks). The router must decide where each request goes while keeping response time under 200 ms for 95 % of traffic.

**Approach / Design**  
1. **Feature‑based Policy Engine** – a lightweight service (AWS Lambda + DynamoDB) exposes an API `decide(request)` that returns *ON_DEVICE* or *CLOUD*.  
2. **Rule Set** –  
   - *Privacy flag* → ON_DEVICE.  
   - *Payload size > 1 MB* → CLOUD.  
   - *Latency requirement < 50 ms* → ON_DEVICE if device CPU ≥ 70 %.  
3. **Learning Layer** – every decision is logged to Kinesis Data Streams, analyzed nightly by SageMaker to update a lightweight logistic regression model (feature: user ID hash, request type, time of day). The model is deployed as an AWS Lambda endpoint and periodically overrides static rules.  
4. **Infrastructure** –  
   - On-device inference uses TensorFlow Lite on Android/iOS.  
   - Cloud inference runs in a FastAPI container on ECS Fargate behind Application Load Balancer (ALB) with autoscaling based on CPU > 60 %.  
   - All data flows through VPC endpoints to avoid public internet hops.

**Result**  
After rollout, the system reduced average latency from **310 ms to 180 ms** and increased *on-device* processing share from 35 % to 58 %, cutting cloud usage cost by **$12k/month**. The routing accuracy (correct decision per ground‑truth) improved from 82 % to 94 % after the first month of ML feedback.

**Bar‑raiser takeaways**  
- I owned the end‑to‑end flow and continuously measured impact.  
- I dove deep into telemetry, turning raw logs into actionable models.  
- Quantified ROI (latency & cost) shows tangible business value.  
- Learned from an initial rule‑based failure (over‑routing to cloud) and iterated with ML, demonstrating adaptability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
