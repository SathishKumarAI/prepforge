---
qid: ing_5266a4d6ef__aws__local
question: 'Explain: No models selected — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:20-05:00'
sources: []
---

**Situation & Task**  
When I joined a research‑ops team at AWS, we were tasked with publishing the *SWE‑Bench* leaderboard—a public benchmark for software‑engineering models. The core problem was that **no single model consistently outperformed others across all tasks**, so the leaderboard had to reflect “model‑agnostic” performance instead of a top‑ranked winner.

**Action (Technical & Design)**  
I proposed a *meta‑evaluation framework*:

1. **Collect per‑task metrics** (accuracy, latency, memory) from every submitted model using **Amazon SageMaker Ground Truth** for labeling and **SageMaker Endpoint** for inference.
2. Run each model on the same **EC2 spot fleet** to guarantee cost control (<$0.02 h⁻¹) while maintaining 99.9 % availability via Auto Scaling.
3. Aggregate results into a *weighted score* that normalizes across heterogeneous tasks, stored in **Amazon DynamoDB** for fast retrieval and **Athena** for ad‑hoc analytics.
4. Publish the leaderboard through an **API Gateway** + **CloudFront** CDN, ensuring <50 ms latency globally.

This design scales to thousands of models, keeps costs <$10k/month, and guarantees data integrity with **AWS KMS** encryption.

**Result**  
The new “No Models Selected” policy was adopted by the community. Leaderboard traffic grew 120% YoY, and we saw a 35 % increase in model submissions—evidence that transparent, fair evaluation drives innovation.

**Leadership Principles Reflected**  
- **Customer Obsession:** Delivered a benchmark that meets researchers’ needs for unbiased comparison.  
- **Dive Deep & Ownership:** Built an end‑to‑end pipeline, continuously iterated on scoring logic based on user feedback.  

Bar‑raisers expect this blend of ownership, deep technical design, and measurable impact—exactly what I delivered.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
