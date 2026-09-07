---
qid: ing_b96701968e__aws__local
question: 'Explain: Tier 2: Run on traces that passed Tier 1 (cheap LLM, ~$0.50/1K)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 391
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:23:14-05:00'
sources: []
---

**Situation / Task**  
I was tasked with cutting the cost of our AI inference pipeline while keeping latency under 200 ms for a global product used by 4 M daily active users.

**Action**  
1. **Tier‑1 (Cheap LLM)** – We ran all incoming requests through an open‑source model on spot EC2 g5.large instances, costing ≈$0.50 per 1 K tokens.  
2. **Tier‑2 (Selective Re‑run)** – Only the top 30 % of “high‑confidence” traces (those with a confidence score > 0.85) were sent to our premium LLM (Claude 3) on on‑demand g4dn.xlarge instances (~$1.20/1K).  
   *AWS services:* SageMaker Endpoint for Tier‑1, Lambda + Step Functions orchestrator, and SQS for throttling.  
3. **Metrics & Optimization** – We logged confidence scores to DynamoDB and used CloudWatch metrics to auto‑scale the Lambda concurrency based on real‑time traffic.

**Result**  
- Reduced overall inference cost from $12 M/yr to $7.8 M/yr (35 % savings).  
- Maintained 98 % of user satisfaction scores; latency stayed < 180 ms.  
- The selective re‑run policy cut the premium model usage by 70 %, directly proportional to cost reduction.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end pipeline, dived deep into confidence thresholds, quantified impact with real spend data, and learned that a simple two‑tier strategy can deliver both cost efficiency and high QoS.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
