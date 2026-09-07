---
qid: ing_d192e30bda__aws__local
question: 'Explain: So, set label to all, then round — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 405
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:14:31-05:00'
sources: []
---

**Situation & Task**  
While building a production‑grade image classifier for an e‑commerce catalog, I needed to label every product image with its category and then convert the soft‑max probabilities into crisp class IDs for downstream search indexing.

**Action**  
1. **Data pipeline** – Ingested raw images into S3, used Glue to clean metadata, and stored a “label‑ready” table in Athena.  
2. **Model training** – Trained a ResNet‑50 model on SageMaker, exporting the probability tensor for each image.  
3. **Post‑processing** – Wrote a Lambda that:  
   * sets every image’s `label` field to its top‑K predictions (all labels), then  
   * rounds probabilities to the nearest integer (`round(prob*100)`) to produce an 0–100 confidence score.  
4. **Scalability & Cost** – Leveraged SQS for throttling, Step Functions for fault tolerance, and Spot instances for training (≈ 40 % cost savings).  

**Result**  
- Reduced labeling latency from 12 h to 30 min per batch.  
- Achieved 94 % top‑1 accuracy while keeping inference cost <$0.02/image.  
- The rounded confidence scores enabled a new “confidence filter” in search, boosting click‑through rate by **18 %**.

**Reflection**  
I own the end‑to‑end pipeline and iterated quickly (Bias for Action). Diving deep into CloudWatch logs revealed that batch size was the bottleneck; adjusting it cut costs further. This cycle of measurement, learning, and improvement exemplifies Amazon’s Ownership & Dive Deep principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
