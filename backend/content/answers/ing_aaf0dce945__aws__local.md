---
qid: ing_aaf0dce945__aws__local
question: 'Explain: Coding - SWE Questions — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 637
total_tokens: 876
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:53:07-05:00'
sources: []
---

**Context – 2026 Perplexity AI interview (Amazon style)**  
*Leadership Principles:* **Customer Obsession**, **Dive Deep**  

---

### Situation
I was preparing for a senior SWE role at Perplexity AI where the team builds a generative‑search engine that must answer user queries in < 200 ms while handling 10M RPS.

### Task
The interview panel asked me to design the core *query‑to‑response* pipeline, explain my coding choices, and walk through a recent production bug I fixed.

### Action (Technical Design)
1. **Architecture**  
   - *Service Layer*: API Gateway → Lambda (Python 3.12) for request validation.  
   - *Model Serving*: Amazon SageMaker endpoint (Multi‑model). Uses **TensorRT** for inference, auto‑scales with GPU instances (`g5.xlarge`).  
   - *Cache*: Elasticache Redis cluster (cluster mode) to store top‑k embeddings; eviction policy `LFU`.  
   - *Data Store*: DynamoDB for user metadata, S3 for model artifacts.  

2. **Scalability & Availability**  
   - Lambda concurrency set to 10 000, auto‑scales on CloudWatch alarms (error rate > 5 %).  
   - SageMaker endpoint behind an Application Load Balancer with *warm* containers (10% of traffic).  
   - Multi‑AZ deployment; cross‑region read replicas for DynamoDB.  

3. **Cost & Trade‑offs**  
   - Estimated $0.02/req for Lambda + $1.20 per 100 k inference requests on SageMaker.  
   - Trade‑off: Using Redis reduces latency by ~30 % but adds 5 % memory cost.

### Result (Data‑driven)
Implemented the design in 3 sprints; reduced average latency from **420 ms** to **190 ms**, cut RPS capacity from **1M** to **10M**. Cost increased by only **12 %** versus projected $0.35/req, while SLA improved to **99.99 %**.

### Learnings & Bar‑raiser Signals
- **Ownership**: Took full responsibility for end‑to‑end performance; wrote automated health checks that preempted 40 % of outages.  
- **Dive Deep**: Traced a latency spike back to a memory leak in Lambda, fixed it with a GC tuning flag—demonstrated depth.  
- **Quantified Impact**: Showed concrete metrics (latency, RPS, cost).  
- **Learning from Failure**: After an initial 15 % error burst, I performed post‑mortem and iterated the cache strategy.

---

*This response showcases ownership, deep technical understanding, data‑backed impact, and a growth mindset—exactly what Amazon’s interviewers look for.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
