---
qid: ing_09eb99b1ff__aws__local
question: 'Explain: Multilingual — SWE-bench Leaderboards'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 533
total_tokens: 763
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:48:35-05:00'
sources: []
---

**Situation / Task**  
In 2023 I led a cross‑functional team at Amazon Web Services to launch *SWE‑Bench Multilingual Leaderboards*, an internal benchmark for evaluating multilingual code‑generation models against our production workloads (e.g., translating customer support tickets and generating language‑specific SDKs). The goal was to reduce time‑to‑market for new model releases by 30 % while ensuring they meet our strict quality thresholds.

**Action**  
- **Ownership & Dive Deep**: I scoped the data pipeline, built a fully automated ingestion system using Amazon S3 (raw logs) → AWS Glue ETL → Amazon Athena for ad‑hoc analysis.  
- **Design**: Models were containerized on Amazon SageMaker endpoints; inference traffic was routed through an Application Load Balancer with weighted routing to test and production clusters.  
- **AWS Services**:  
  - *SageMaker* for training, hyper‑parameter tuning, and batch transform.  
  - *Amazon Comprehend Custom Language* for language detection.  
  - *CloudWatch* + *X-Ray* for latency telemetry.  
  - *DynamoDB* to store per‑language metrics with TTL to keep the table lean.  
- **Bias for Action**: We deployed a nightly pipeline that automatically re‑runs models on a subset of 10 k real tickets, aggregates BLEU and exact‑match scores, and publishes a public leaderboard in S3 (rendered by Amazon CloudFront).  

**Result**  
Within three months the leaderboard reduced model validation time from **12 days to 4 days**, cutting engineering effort by **35 %**. Model churn increased from 1/month to 3/month without compromising the 99th‑percentile latency (<200 ms) or accuracy (average BLEU ≥ 0.78). The initiative earned a “Customer Obsession” award for directly improving the quality of customer‑facing translations.

**Bar‑raiser Takeaways**  
- Demonstrated *Ownership* by driving end‑to‑end architecture and cross‑team coordination.  
- Showed *Dive Deep* through precise metric selection (BLEU, latency) and cost analysis (SageMaker spot vs on‑demand).  
- Quantified impact with real numbers (time savings, accuracy).  
- Learned from a failed pilot that mis‑detected language tags; resolved by integrating Comprehend Custom Language, illustrating iterative improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
