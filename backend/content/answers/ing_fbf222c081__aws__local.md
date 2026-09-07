---
qid: ing_fbf222c081__aws__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 470
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:47:50-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a real‑time voice assistant for an e‑commerce platform that needed to answer customer queries in under **200 ms** end‑to‑end latency while scaling to 10k concurrent users.

**Action**  
1. **Define the latency budget** – split the 200 ms into sub‑budgets: capture (20 ms), network RTT (40 ms), ASR (60 ms), NLP inference (50 ms), response synthesis (30 ms).  
2. **Service architecture** – used Amazon Lex for intent detection (edge‑locally deployed via AWS CloudFront + Lambda@Edge to keep RTT < 20 ms), Amazon Transcribe Streaming for low‑latency ASR, and a containerized TensorFlow model on Amazon ECS Fargate with GPU‑optimized AMIs for NLP inference.  
3. **Scalability & Availability** – autoscaled ECS clusters with Spot Instances (cost × 0.2) and multi‑AZ deployment; CloudWatch metrics trigger scaling before the 200 ms budget is breached.  
4. **Cost/Trade‑offs** – chose Fargate over EC2 to avoid underutilization, accepted a slightly higher per‑request cost for guaranteed isolation and faster spin‑up.

**Result**  
- Achieved an average **170 ms** latency (95th percentile 210 ms) during load tests of 15k concurrent users.  
- Reduced response time by **65%** compared to the legacy system, leading to a **12% increase in conversion rate** for voice‑initiated purchases.

**Reflection**  
*Ownership*: I took responsibility for every layer’s performance.  
*Dive Deep*: Continuously profiled each microservice and iterated on batch sizes.  
*Learning from Failure*: Early tests revealed a bottleneck in the ASR pipeline; switching to streaming reduced latency by 30 ms, an insight that guided our final design.

---  

**Leadership Principles Highlighted**  
- **Customer Obsession** – deliver instant answers that directly improve sales.  
- **Ownership & Dive Deep** – end‑to‑end control and relentless performance tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
