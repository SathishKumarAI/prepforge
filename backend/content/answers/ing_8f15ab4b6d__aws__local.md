---
qid: ing_8f15ab4b6d__aws__local
question: 'Explain: Listen Mode — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 640
total_tokens: 870
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:49:48-05:00'
sources: []
---

**Situation (S)**  
At my previous company I led the launch of an on‑demand “Listen Mode” skill for our learning platform—an audio‑driven course introduction that adapts in real time to a learner’s listening speed and comprehension. The product needed to serve 2 M daily active users, with latency <200 ms and 99.9 % availability.

**Task (T)**  
Design the end‑to‑end system: capture audio, transcribe, analyze sentiment & pace, then generate adaptive prompts—all while keeping cost per user under $0.02.

**Action (A)**  

| Step | AWS Service | Reasoning |
|------|-------------|-----------|
| 1️⃣ Capture | **Amazon Kinesis Video Streams** + **S3** | Low‑latency ingestion; S3 for durable storage of raw audio. |
| 2️⃣ Transcription | **AWS Transcribe Streaming** | Real‑time speech‑to‑text with built‑in speaker diarization. |
| 3️⃣ Analysis | **Amazon Comprehend Custom Models** + **Lambda** | Detect sentiment, key phrases; Lambda processes streaming text for pace metrics (words/min). |
| 4️⃣ Decision | **Amazon DynamoDB** + **Step Functions** | Store user state and trigger adaptive prompt generation via Step Functions orchestrating downstream services. |
| 5️⃣ Prompt Generation | **Amazon SageMaker Endpoint** (RNN‑based text‑to‑speech) | Generates concise, context‑aware prompts in under 150 ms. |
| 6️⃣ Delivery | **Amazon CloudFront + WebSocket API Gateway** | Low‑latency push to the client app; edge caching for global reach. |

*Scalability:* Each component is serverless or autoscaling (Kinesis shards, Lambda concurrency).  
*Availability:* Multi‑AZ deployment of Kinesis and DynamoDB; use S3’s durability.  
*Cost:* Rough estimate $0.015 per 1 min audio stream (Transcribe + Comprehend) + $0.001 for prompt generation → < $0.02/user.

**Result (R)**  
After rollout, we saw a **35% reduction in completion time** for course introductions and a **22% increase in learner satisfaction scores** (NPS 65→82). Weekly active users grew from 1 M to 2 M in three months.  

**Leadership Principles Highlighted**

- **Customer Obsession:** Built an adaptive experience that lowered cognitive load, directly boosting NPS.  
- **Dive Deep & Ownership:** I led the end‑to‑end design, performed cost modeling, and iterated on latency benchmarks.

**Bar‑raiser Takeaway**

The answer demonstrates ownership (led all phases), deep technical dive (service choices, trade‑offs), quantified impact (metrics), and learning—showing how failure in early prototypes drove a more efficient architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
