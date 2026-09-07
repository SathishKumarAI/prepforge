---
qid: ing_00236cf51a__aws__local
question: 'Explain: all of those spots are full and — Amazon System Design Interview:
  Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 406
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:24:55-05:00'
sources: []
---

**Situation & Task**  
I led a cross‑functional team that built an automated parking system for a 3,000‑slot municipal complex. The client needed real‑time slot availability and a mobile app for reservations while keeping operating costs under $200k/year.

**Action – Architecture**  
*Sensors → AWS IoT Core* to stream occupancy data at 1 Hz per spot (≈10 TB/month).  
*Edge processing* on **Greengrass** nodes filters noise, aggregates per bay, and forwards only state changes.  
*Data lake* in **Amazon S3** with lifecycle policies for cost control.  
*Real‑time analytics* via **Kinesis Data Streams** → **Lambda** → **DynamoDB** (partitioned by zone) gives sub‑second updates to the web/mobile front end served from **CloudFront**.  
*Reservation queue* uses **SQS** + **Step Functions** for idempotent booking logic, preventing over‑booking.  

I performed a **cost‑vs‑performance simulation**: 1 ms latency and 99.999% availability at $165k/year versus $230k with legacy RDBMS.

**Result**  
The system achieved 0.5 ms query time, handled 30,000 concurrent users during peak hours, and reduced parking revenue loss from unbooked spots by **42%** (≈$1.2M annually).  

**Learning & Ownership**  
I drove the trade‑off between edge vs cloud processing; after a false‑positive spike in sensor data we added an anomaly‑detection Lambda that cut downstream noise by 60%. This iterative improvement earned me “Owner of the Day” recognition and reinforced Amazon’s principle of **Ownership** while demonstrating deep technical insight (**Dive Deep**).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
