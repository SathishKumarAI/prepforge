---
qid: ing_11c0baa154__aws__local
question: 'Explain: Common Mistakes and Anti-Patterns — Building Tool Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 437
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:05:50-05:00'
sources: []
---

**Situation** – While leading a product‑team that built an AI‑powered “tool agent” to auto‑generate code snippets for developers, we repeatedly hit performance & cost spikes.  
**Task** – Diagnose the root causes and redesign the workflow so it scales, stays reliable, and keeps spend under $5k/month.  
**Action**  
1. **Ownership + Dive Deep** – logged every request in CloudWatch, added latency metrics, and discovered that a single Lambda invoked a heavy PyTorch model 200 × per session.  
2. **Anti‑pattern fix** – replaced the “one‑function‑per‑tool” pattern with a **SageMaker endpoint** behind an Application Load Balancer (ALB). The endpoint uses a GPU instance (p3.2xlarge) and is scaled via SageMaker’s auto‑scale policy, keeping < 200 ms latency for 95th percentile requests.  
3. **Cost control** – introduced *step functions* to batch multiple user prompts into one inference call, reducing total invocations by 70 %. Added a CloudWatch alarm that triggers an EC2 Spot‑Fleet fallback when the endpoint is idle.  
4. **Bias for Action + Deliver Results** – rolled out A/B testing; the new architecture cut average spend from $12k to $3.8k/month while improving user satisfaction scores by 15 pts.

**Result** – The agent now handles 5,000 concurrent users with < 99.9 % availability, and we achieved a **$8.2k/month savings** in the first quarter.  
**Bar‑raiser note** – I owned the entire lifecycle, dug into telemetry to uncover hidden costs, quantified ROI, and learned that batching & autoscaling are essential when moving from prototype Lambdas to production AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
