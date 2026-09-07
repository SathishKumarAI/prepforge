---
qid: ing_85acd3323e__aws__local
question: 'Explain: Public API and HTML Caching — Content Delivery Network (CDN) |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 635
total_tokens: 874
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:27:07-05:00'
sources: []
---

**Scenario:**  
At my last role I led the redesign of a public ML‑model inference API that served millions of requests per day. The team was asked to expose the model results via an HTTP endpoint while keeping latency < 50 ms and cost <$0.10/1,000 calls.

---

### **S – Situation**  
The existing monolith delivered predictions through a single EC2 cluster behind ELB. Each request triggered a full inference pipeline, causing 200 ms tail latency during traffic spikes. Users complained about slow page loads when embedding the results in HTML dashboards.

### **T – Task**  
Build a scalable public API with CDN‑based HTML caching so that end‑users receive near‑instant responses while keeping operational costs low.

### **A – Action**  

| Component | AWS Service | Design Rationale |
|-----------|-------------|------------------|
| Inference | **Amazon SageMaker Endpoint (Multi‑Model)** | Handles GPU/CPU scaling automatically; reduces 30 % compute cost vs. custom EC2. |
| API Layer | **API Gateway + Lambda** | Serverless, auto‑scales to 10k RPS; 0.5 µs cold start via provisioned concurrency. |
| CDN | **Amazon CloudFront** with *Cache Policy* set to `max-age=60` and *Origin Request Policy* that forwards only the `model_id`. | Caches identical HTML snippets for 1 minute, cutting downstream API calls by ~70 %. |
| Monitoring | **CloudWatch + X-Ray** | Tracks latency per edge location; triggers Lambda alarms if 95th percentile > 80 ms. |

- **Scalability:** CloudFront scales globally; API Gateway caps at 10k RPS per region; SageMaker endpoints auto‑scale based on CPU utilization.
- **Availability:** Multi‑AZ deployment, 99.99 % SLA; failover to a read‑only replica for the inference model.
- **Cost:** Reduced EC2 hours by 40 %, API calls dropped from 5M to 1.5M per day → ~$250/month saved.

### **R – Result**  
Latency dropped from 200 ms to 45 ms (95th percentile). Page load time improved by 3×, boosting user engagement metrics by 18 % YoY. The CDN cache hit ratio reached 72 %, directly translating to the cost savings above.

---

**Leadership Principles Highlighted**

- **Customer Obsession:** Prioritized end‑user experience through latency reduction and faster page loads.  
- **Ownership & Dive Deep:** Architected every layer (ML, API, CDN), continuously profiled, and iterated on caching policies until hitting target metrics.  

*Bar‑raiser cues:* clear ownership of cost vs. performance trade‑offs, data‑driven impact, and lessons learned from the initial monolith failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
