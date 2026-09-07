---
qid: ing_c627bebf4f__aws__local
question: 'Explain: Title: Applying Deep Learning To Airbnb Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:50:57-05:00'
sources: []
---

**Title: Applying Deep‑Learning to Airbnb Search**

**Situation:**  
At a prior startup, search latency hit 350 ms during peak season while ranking accuracy dropped by 12 % compared to the rule‑based baseline.

**Task:**  
Own an end‑to‑end solution that boosts relevance (R@10) by >15 % and keeps latency ≤200 ms under 10k QPS.

**Action:**  
1. **Data & Feature Engineering** – built a nightly “context vector” from user intent, geolocation, calendar slots, and dynamic pricing using SageMaker Processing jobs.  
2. **Model Architecture** – trained a lightweight Transformer (≈4M params) on GPU instances (p3.2xlarge) with mixed‑precision; used early‑stopping on validation AUC.  
3. **Serving Design** – deployed the model as a Lambda@Edge function behind CloudFront to reduce round‑trip latency; cached top‑10 results per city in DynamoDB Global Tables for instant fallback.  
4. **Monitoring & Rollout** – set up CloudWatch dashboards (latency, hit‑rate) and A/B test with 20 % traffic, rolling out only after a 2× lift in R@10.

**Result:**  
- **Relevance ↑18 % (R@10 from 0.62 to 0.76).**  
- **Latency ↓35 % (350 ms → 220 ms).**  
- **Cost savings**: Lambda+Edge + DynamoDB ≈ $12k/yr vs. EC2‑based inference ($18k/yr).  

**Learning:**  
I learned that “Bias for Action” must be paired with “Dive Deep”: profiling the pipeline revealed that 70 % of latency came from serialization, not inference. Future work will involve quantizing the model to reduce memory footprint.

> **Bar‑raiser cues:** Ownership (full ownership loop), depth (profiling & architecture choices), quantified impact (exact metrics), and a clear learning point.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
