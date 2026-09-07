---
qid: ing_74403e10fa__aws__local
question: 'Explain: So first we type course, then dot — Python Full Course for Beginners'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 467
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:48:45-05:00'
sources: []
---

**Behavioral (STAR)**  
*Situation*: I was leading a data‑science sprint to onboard new hires into our ML platform.  
*Task*: Create an intuitive, self‑served tutorial that lets users type “course” and instantly launch the *Python Full Course for Beginners*.  
*Action*: Using **Ownership** and **Customer Obsession**, I mapped user intent with a lightweight NLP model (Amazon Comprehend) and built a Lambda‑driven microservice. The service queries an S3 catalog of video modules, returns a presigned URL, and streams via CloudFront. I added a retry loop and circuit breaker to guarantee **Availability** (>99.9%) while keeping costs under $0.02 per request by leveraging **AWS Step Functions** for orchestration.  
*Result*: Adoption grew 4× in one month; latency dropped from 1.8 s to 350 ms, improving the user satisfaction score from 3.2/5 to 4.6/5 (NPS).  

**Technical/System Design**  
- **Requirements**: real‑time intent parsing, low‑latency video delivery, cost control, and graceful degradation.  
- **Design**:  
  - *Intent*: Amazon Comprehend → Lambda (Python) → DynamoDB cache of course metadata.  
  - *Delivery*: S3 + CloudFront with signed URLs; fallback to direct S3 if CDN edge miss.  
  - *Scalability*: Auto‑scaling Lambda (10k RPS), DynamoDB provisioned throughput, CloudFront caching.  
  - *Cost*: Serverless eliminates idle capacity; using **S3 Intelligent Tiering** for infrequently accessed archives keeps storage cheap.  

**Bar‑raiser cues**  
- Demonstrated ownership by owning the end‑to‑end pipeline.  
- Dive deep into latency budgets and cost per request.  
- Quantified impact with concrete metrics (latency, NPS).  
- Reflected on a failure: initial design caused 5 s cold starts; we migrated to provisioned concurrency, learning the value of predictive scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
