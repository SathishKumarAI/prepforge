---
qid: ing_16214fb0cf__aws__local
question: 'Explain: think about it um why would we — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 624
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:15:31-05:00'
sources: []
---

**Situation & Task**  
When I joined the OpsTech team at a regional logistics hub, we had no digital way to manage our on‑site parking. Drivers reported lost tickets and the operations cost increased by **$12 k/month** due to manual checks. My task was to build an end‑to‑end parking‑management platform that would reduce ticket loss, cut costs, and scale to 3,000 daily vehicles.

**Action & Design**  
I treated it as a *customer‑obsessed* problem: the “customers” were our drivers and the back‑office staff. I designed a microservice architecture on AWS:

| Service | Role | Why |
|---------|------|-----|
| **Amazon API Gateway + Lambda** | REST endpoints for vehicle entry/exit, ticket issuance | Serverless → zero ops, auto‑scale |
| **Amazon DynamoDB (partitioned by lot)** | Ticket & occupancy state | Low latency, 99.999% availability |
| **AWS IoT Core + Greengrass** | Edge devices on gates detect license plates via ML model | Near‑real‑time processing with minimal cost |
| **Amazon Cognito** | Driver authentication for mobile app | Secure identity, no backend DB |
| **Amazon S3 & CloudFront** | Static assets (maps, instructions) | CDN + cheap storage |
| **AWS Step Functions** | Orchestrate entry → payment → exit flows | Visibility and retry on failures |

I added a *self‑service* mobile app that scans the plate or QR code, shows real‑time slot availability, and auto‑charges the driver’s stored card. All events are logged to **Amazon CloudWatch Logs** for audit.

**Result**  
Within 3 months of launch:  

- Ticket loss dropped from 12% to <0.5%.  
- Operational cost fell by **$9 k/month** (≈75 % savings).  
- System handled 6,500 concurrent requests with <10 ms latency (99th percentile).  

The project earned a “Best Ops Automation” award and was rolled out to two additional sites.

---

### What the bar‑raiser hears

| Trait | How I Showed It |
|-------|-----------------|
| **Ownership** | Took end‑to‑end responsibility, from data model to deployment. |
| **Dive Deep** | Benchmarked IoT edge vs. cloud ML; chose Greengrass for latency savings. |
| **Quantified Impact** | Cited exact cost savings and ticket‑loss reduction. |
| **Learning from Failure** | Early prototype had 200 ms latency → migrated to Lambda@Edge, improving response time by 70 %. |

By framing the solution around Amazon’s Leadership Principles—Customer Obsession, Ownership, Dive Deep, and Deliver Results—I demonstrated both business value and technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
