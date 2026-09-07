---
qid: ing_e6c1c5b104__aws__local
question: 'Explain: Your PM wants AI-powered summarization in the app. Walk me through
  the on-device vs cloud decision.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 496
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:59:52-05:00'
sources: []
---

**Situation / Task**  
The product manager asked for an AI‑powered summarization feature in our news app. I had to decide whether to run the model on-device or in the cloud while keeping user privacy, latency and cost in mind.

**Action**  
I scoped two options:  

| Option | Key AWS services | Scalability | Availability | Cost | Trade‑offs |
|--------|-----------------|-------------|--------------|------|------------|
| **On‑device** | Amazon SageMaker Edge, TFLite, AWS IoT Device Management | Linear to device count; no server bottleneck | 100 % independent of network | One‑time edge model upload + minimal storage | Higher per‑device memory/CPU usage |
| **Cloud** | Amazon SageMaker Endpoint (GPU), Lambda, API Gateway, CloudFront | Autoscale with Spot Instances | 99.99 % SLA | Pay‑per‑invoke; higher latency (~200 ms) | Requires stable internet & exposes user data |

I performed a cost‑benefit analysis: For 10 M monthly active users, on-device saves ~$3.5 M/year in inference costs versus cloud ($9.8 M). Latency tests showed on-device <30 ms vs cloud ~250 ms, improving engagement by ~12 %. Privacy audit confirmed that keeping data offline meets GDPR/CCPA.

**Result**  
We chose on‑device deployment. After rollout, the feature’s click‑through rate rose 18 %, and churn dropped 4 % in the first quarter. I also built a monitoring pipeline (CloudWatch + Athena) to track model drift, achieving a 30 % reduction in retraining cycles.

**Reflection – Amazon Lens**  
*Ownership*: I led cross‑team effort, owned cost & privacy metrics. *Dive Deep*: I ran latency and cost simulations, validated with real traffic data. *Bias for Action*: Delivered the feature within two sprints instead of waiting for a cloud‑only solution. *Learned from Failure*: Initial on-device version had a 5 % accuracy drop; we iterated quickly by fine‑tuning the model locally, demonstrating continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
