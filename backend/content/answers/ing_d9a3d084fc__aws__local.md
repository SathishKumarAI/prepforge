---
qid: ing_d9a3d084fc__aws__local
question: 'Explain: Design a system that finds driving segments similar to a given
  one across the entire fleet archive.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 430
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:30:56-05:00'
sources: []
---

**Situation & Task**  
When I joined the Autonomous Vehicles team, we had >3 M recorded trips (≈2 TB/day). The product owner asked for a “similar‑segment finder” so drivers could see how their driving compared to peers during a specific 30‑second window. The goal was real‑time similarity scoring with <5 s latency and <10 % cost per query.

**Approach & Design**  
1. **Feature extraction** – Ingest raw CAN + GPS into Kinesis Data Streams; Lambda transforms each trip into a feature vector (speed, acceleration, steering angle, throttle).  
2. **Vector store** – Persist vectors in Amazon Neptune as graph nodes; create an adjacency list of “time‑coincident” segments via time‑windowed joins.  
3. **Similarity search** – Deploy an Amazon SageMaker endpoint using FAISS for approximate nearest neighbors (ANN) on the feature space.  
4. **Scalability/Availability** – Use auto‑scaling Lambda, multi‑AZ Neptune, and SageMaker Multi‑Model endpoints; cache hot queries in ElastiCache Redis to hit 1 ms latency for 90 % of traffic.  
5. **Cost control** – Batch pre‑compute embeddings nightly (Spot instances) and purge vectors older than 6 months.

**Result**  
Within three months, similarity search served 15 k daily queries with <4 s latency; churn dropped by 12 %, and we reduced query cost from $0.08 to $0.02 per request—an 75 % savings.  

**Reflection (Bar‑raiser)**  
I owned the end‑to‑end pipeline, dived deep into FAISS tuning, and iterated on feature engineering after a false positive spike in early tests. The next step is to integrate reinforcement learning for dynamic weighting of driving contexts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
