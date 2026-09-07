---
qid: ing_7a208bebcf__aws__local
question: 'Explain: Currency — How to Design a System for Internationalization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 428
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:01:27-05:00'
sources: []
---

**Situation / Task**  
While leading the ML‑ops team at a global fintech, we had to deploy a real‑time fraud model that served customers in 30+ currencies. The challenge was to keep inference latency under 10 ms while respecting each region’s regulatory and compliance constraints.

**Action**  
I owned the solution architecture:  
1. **Data Layer** – Use Amazon S3 for raw logs, Athena for on‑demand ETL, and Glue to create a *Currency‑Normalized* catalog.  
2. **Model Layer** – Train separate models per currency in SageMaker, then bundle them into a single Lambda@Edge function that routes requests by `Accept-Language` header.  
3. **Serving Layer** – Deploy the Lambda behind API Gateway with regional edge caching; fall back to an EC2 Auto Scaling group running TensorFlow Serving for high‑throughput bursts.  
4. **Observability** – CloudWatch metrics per currency, X-Ray tracing for latency, and Athena dashboards for cost/usage.

**Result**  
Within 3 weeks we reduced inference latency from 28 ms to 8 ms globally, cut infrastructure spend by 18 % (thanks to serverless), and achieved a 99.9 % compliance score across all regions. The system now scales linearly with traffic spikes in any currency without manual intervention.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivered instant fraud detection worldwide, improving user trust.  
- **Ownership & Dive Deep** – Took full responsibility for end‑to‑end pipeline and iterated on performance bottlenecks.  

*Bar‑raiser cue*: The answer demonstrates ownership, a data‑driven impact (latency, cost savings), deep technical depth (AWS services, trade‑offs), and learning from the initial monolithic approach to a modular, scalable design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
