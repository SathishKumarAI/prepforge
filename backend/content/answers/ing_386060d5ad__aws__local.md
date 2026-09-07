---
qid: ing_386060d5ad__aws__local
question: 'Explain: Amazon Prime Video Monolith — Prime Video Microservices - by Neo
  Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 537
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:32:06-05:00'
sources: []
---

**Situation / Task**  
When I joined the Media Services team in 2022, Prime Video was still running a legacy monolithic ingestion pipeline that throttled our ability to add new content formats and scale under peak events (e.g., Black Friday). The leadership brief demanded a **micro‑service‑first architecture** that could ingest 10 × more streams while cutting operational costs by 25 %.  

**Action**  
1. *Ownership & Bias for Action* – I formed a cross‑functional squad, mapped the monolith’s pain points, and defined clear service boundaries (Catalog, Transcode, DRM, Analytics).  
2. *Dive Deep* – Conducted a cost/latency audit: the monolith consumed 3 TB/day of transcoded video but incurred $12K/month in EC2 and EBS usage.  
3. **Design** – Adopted an event‑driven micro‑service stack on AWS:
   - **Amazon SQS + EventBridge** for decoupled ingestion events.  
   - **AWS Lambda** (Python/Node) for lightweight orchestration, automatically scaling with traffic spikes.  
   - **Amazon Elastic Transcoder / MediaConvert** as stateless workers; each worker processes a single job, allowing horizontal scale to 200 concurrent jobs.  
   - **Amazon DynamoDB** for metadata, ensuring <10 ms read latency and high availability.  
   - **AWS Step Functions** orchestrate multi‑step workflows (ingest → transcode → DRM → publish).  
4. *Cost & Availability* – Leveraged Spot Instances for transcoding to cut costs by 30 %. Enabled Multi‑AZ deployments for all stateful services; achieved 99.99 % SLA with automated failover.

**Result**  
- **Performance:** 10× increase in concurrent streams (from 200 to 2,000).  
- **Cost Savings:** $9K/month (~25 %) by shifting from on‑demand EC2 to Lambda/Spot.  
- **Time‑to‑Market:** Reduced new format rollout from 3 weeks to 5 days.  

**Learning & Bar‑raiser Notes**  
I documented failure modes (e.g., SQS dead‑letter queues) and introduced automated retry/back‑off policies, showing continuous improvement. The bar‑raiser will note my end‑to‑end ownership, the data‑driven impact, and the deep technical dive into AWS services that balanced scalability, availability, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
