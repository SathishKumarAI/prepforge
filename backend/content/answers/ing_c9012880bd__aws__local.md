---
qid: ing_c9012880bd__aws__local
question: 'Explain: Time-to-first-token for your on-device feature is 1.8 s. Walk
  me through diagnosing and fixing it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 426
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:56:19-05:00'
sources: []
---

**Situation & Task**  
I was leading the on‑device recommendation engine for our mobile shopping app. Users complained that the first recommendation appeared after **1.8 s**, pushing them to abandon the feature (NPS dropped 12 pts). My goal: cut latency below 800 ms while keeping cost < $0.05 per request.

**Action**  
*Customer Obsession & Dive Deep* – I first profiled the pipeline on-device and in the cloud.  
1. **Profiling**: Using Android Profiler + Firebase Performance, I identified that model inference (TensorFlow Lite) took 1 s and the network round‑trip to fetch context data added 0.8 s.  
2. **Edge Optimization** – Converted the model to TensorRT with INT8 quantization; inference dropped to 350 ms on a Snapdragon 888.  
3. **Pre‑fetch & Caching** – Implemented an LRU cache for user context, eliminating the network call for 70 % of requests. For remaining calls, switched to Amazon CloudFront + Lambda@Edge (cold start < 200 ms).  
4. **Cost Control** – Deployed the edge functions on AWS Fargate Spot with auto‑scaling; cost reduced from $0.12 to $0.04 per request.

**Result**  
Latency fell from **1.8 s → 600 ms** (66 % reduction). NPS rose by **15 pts**, and monthly active users increased by 18 k, generating an estimated $120 k incremental revenue in Q3.  

**Bar‑raiser takeaway** – Ownership: I owned the entire stack from device to cloud; Dive Deep: I measured every component; Quantified Impact: concrete latency and revenue metrics; Learned: pre‑fetching + quantization are game‑changers for on-device AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
