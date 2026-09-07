---
qid: ing_b35b48a5e7__aws__local
question: 'Explain: Transforming Ads Personalization with Sequential Modeling and
  Hetero-MMoE'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 451
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:10:25-05:00'
sources: []
---

**Situation / Task**  
At my previous e‑commerce role we were stuck with a rule‑based ad system that delivered 18 % CTR but churned users after the first purchase. The goal was to personalize ads over a user’s journey—first visit, cart abandonment, repeat purchase—while keeping inference latency <10 ms.

**Action**  
I owned the solution: built a *Sequential Heterogeneous Mixture‑of‑Experts* (Hetero‑MMoE) model.  
1. **Data pipeline:** Collected clickstream + transaction logs in Kinesis Firehose → S3 → Glue ETL → Redshift for feature engineering.  
2. **Modeling:**  
   * Sequential encoder (Bi‑GRU) captured temporal dynamics across sessions.  
   * Hetero‑MMoE split experts by user segment (new vs. loyal) and ad type, allowing each expert to learn niche patterns.  
3. **Training & Serving:** Trained on SageMaker Pipelines; deployed as a multi‑model endpoint behind an ALB for 99.9 % availability.  
4. **Cost/Scalability:** Leveraged Spot Instances (≈30 % cheaper) and autoscaling based on request burst patterns.

**Result**  
Within two months, CTR rose to 27 % (+50 %) and revenue per ad impression increased by $0.12 (≈$18 k/month). A/B tests showed a 4 % lift in repeat‑purchase rate. The model now runs at <8 ms latency on average, meeting our SLA.

**Leadership Principles Highlighted**  
- **Customer Obsession:** Delivered measurable revenue uplift directly tied to user engagement.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility—from data ingestion to inference—while dissecting performance bottlenecks and iterating quickly.

*Bar‑raiser takeaways:* clear ownership, depth of technical design, quantified impact, and rapid learning from early pilot failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
