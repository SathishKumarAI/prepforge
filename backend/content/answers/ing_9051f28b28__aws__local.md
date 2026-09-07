---
qid: ing_9051f28b28__aws__local
question: 'Explain: curious uh are there different types of — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 473
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:52:14-05:00'
sources: []
---

**Situation / Task**  
During a recent System Design interview I was asked to outline how different Machine‑Learning (ML) paradigms could be leveraged to build an *intelligent parking‑garage* solution—detecting available spots, predicting peak times, and guiding drivers.

**Action**  
I mapped each ML type to a concrete component:

| ML Type | Typical Use in Parking Garage | AWS Services |
|---------|------------------------------|--------------|
| **Supervised Learning** (classification/regression) | *Spot‑availability detection* from camera feeds; *price‑prediction* based on historical demand. | SageMaker, Rekognition, Lambda |
| **Unsupervised Learning** (clustering/ anomaly) | Detecting *unusual traffic patterns* or *maintenance needs* by clustering vehicle entry times. | SageMaker, Glue |
| **Reinforcement Learning** | Optimizing *dynamic lane allocation* to minimize wait time, learning from driver feedback. | SageMaker RL, Step Functions |
| **Transfer Learning** | Fine‑tuning a pre‑trained YOLO model for spot detection on limited data. | SageMaker Pipelines |

I proposed an event‑driven architecture: cameras stream to Kinesis Video Streams → Lambda → Rekognition (spot count) → SageMaker endpoint → DynamoDB (real‑time status). A separate nightly batch job in Glue runs clustering and updates a Forecast model in SageMaker for future demand. Cost was kept under $2k/month by using spot instances for training and serverless inference.

**Result**  
Implemented a prototype that reduced average wait time by **27 %** during peak hours (validated via A/B testing) and cut camera‑processing costs by **35 %** through efficient batch jobs.  

**Reflection**  
I learned that *ownership* means anticipating edge cases—so I added fallback rules for camera failure. The bar‑raiser will note my dive deep into AWS services, quantified impact, and willingness to iterate after the initial pilot.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
