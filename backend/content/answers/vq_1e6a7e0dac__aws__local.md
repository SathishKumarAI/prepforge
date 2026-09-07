---
qid: vq_1e6a7e0dac__aws__local
question: What’s your opinion on electric vehicles?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 404
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:41:42-05:00'
sources: []
---

**Situation & Task (S)**  
When I was leading a product‑marketing team at a mid‑size automotive tech startup, we were asked to create a go‑to‑market strategy for an electric vehicle (EV) infotainment platform that would integrate with OEMs’ CAN bus and provide over‑the‑air updates.

**Action (A)**  
I first *dove deep* into customer interviews and telemetry data from 1,200 test‑driven vehicles to surface pain points: long OTA windows (>30 min), limited battery capacity for high‑bandwidth services, and a fragmented regulatory landscape. I then proposed an architecture that leveraged **AWS IoT Core** for secure device connectivity, **AWS Greengrass** to run lightweight edge functions during power‑constrained periods, and **Amazon CloudFront** for low‑latency content delivery. To validate the design, I built a proof‑of‑concept using **AWS Lambda** to handle OTA manifests and **S3** for asset storage, achieving a 99.9 % success rate on simulated over‑the‑air updates.

**Result (R)**  
The MVP was adopted by two OEM partners, cutting their update cycle time from 45 min to 12 min—an 73 % improvement—and reducing the average data cost per vehicle by $0.15/month, saving roughly **$1.2M annually** for a fleet of 10,000 cars.

**Leadership Principles Reflected**  
- **Customer Obsession**: We built directly on real‑world pain points.  
- **Ownership & Dive Deep**: I led the technical design and quantified every metric to demonstrate impact.  

*Bar‑raiser cue*: ownership of cross‑functional teams, deep technical validation, and a clear, data‑driven outcome.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
