---
qid: vq_620f4440eb__aws__local
question: What’s your favorite type of weather for outdoor activities?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 476
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:16-05:00'
sources: []
---

**Situation (S)**  
While leading a cross‑functional team that built an on‑prem outdoor gear e‑commerce platform, we needed to launch a “Summer Adventure” promotion. The success of the campaign depended heavily on real‑time weather data so that we could push personalized offers when customers were likely to be outdoors.

**Task (T)**  
I was responsible for designing and implementing a scalable system that ingested live weather feeds, computed customer readiness scores, and triggered targeted notifications—all within 5 seconds of a weather change.

**Action (A)**  
1. **Requirements & Design** – I mapped the flow: *Weather API → Lambda → DynamoDB (score cache) → SNS Topic → Mobile Push*.  
2. **AWS Services** – Used **Amazon Kinesis Data Streams** for ingesting NOAA feeds, **Lambda** for stateless processing, **DynamoDB Global Tables** for low‑latency read/write across regions, and **SNS + Pinpoint** for push notifications.  
3. **Scalability & Availability** – Auto‑scaling Lambda ensured 99.9 % availability; DynamoDB’s on‑demand mode handled traffic spikes during sudden weather shifts.  
4. **Cost Control** – Adopted a *pay‑as‑you‑go* model; cost per notification < $0.0005, total monthly spend <$1k.

**Result (R)**  
The campaign ran for 30 days with a 12% lift in conversion on days with favorable weather, translating to $350K incremental revenue—up from the baseline $280K. The system processed over 10M events/day with < 200 ms latency, meeting SLA and earning a “Customer Obsession” commendation.

**Reflection**  
I learned that *ownership* means owning the end‑to‑end customer journey, while *Dive Deep* required me to iterate on data models until latency dropped below threshold. The success reinforced my bias for action—prototyping in days instead of weeks—and taught me how to balance cost with performance at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
