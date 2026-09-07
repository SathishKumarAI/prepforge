---
qid: ing_22af6405fe__aws__local
question: 'Explain: 3.3 Realistic Constraints and Assumptions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 438
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:45:01-05:00'
sources: []
---

**S**ituation – While leading a cross‑functional team to launch an AI‑powered recommendation engine for our e‑commerce platform, I had to define the realistic constraints and assumptions that would guide architecture decisions.

**T**ask – My goal was to create a production‑ready model pipeline that could ingest 10 M user events per day, deliver predictions in <200 ms, and stay under $3 k/month while remaining fully compliant with GDPR.

**A**ction –  
1. **Data constraints**: I assumed the training data would be stored in S3 (object size ≤5 GB) to keep EFS costs low; we used Athena for ad‑hoc analysis, limiting queries to 500 rows/second.  
2. **Compute assumptions**: We opted for SageMaker endpoints on `ml.m5.xlarge` instances, expecting a peak traffic of 200 concurrent requests (≈4 k WPM).  
3. **Latency assumption**: To guarantee <200 ms, we placed the endpoint in a single AZ and enabled Auto Scaling with a target utilization of 70 %.  
4. **Cost constraint**: By setting a daily budget cap of $100 for SageMaker and leveraging Spot Instances for training, we projected monthly spend ≈$2.8 k.

I documented these constraints in a living spec and updated them after each sprint. The result was a production model that handled 12 M events/day, maintained 99.9 % uptime, and stayed within budget—achieving a 15 % lift in conversion with a $1.2 M incremental revenue increase.

**R**esult – The exercise sharpened ownership (I owned the spec), deepened my technical dive (evaluated S3 vs EFS, Spot vs On‑Demand), and taught me to iterate assumptions based on real telemetry—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
