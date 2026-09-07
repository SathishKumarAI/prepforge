---
qid: ing_8798eeee18__aws__local
question: 'Explain: Capturing the briefing — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 580
total_tokens: 811
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:49-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a real‑time health‑monitoring app for an OEM client that would ingest sensor data from 100 k+ wearables and deliver alerts within 2 s of anomaly detection.

**Action – Capture the Briefing (Amazon way)**  

1. **Customer Obsession & Ownership**  
   * Asked clarifying questions: latency tolerance, data retention period, privacy regulations, monetization model.  
   * Documented assumptions in a shared Confluence page and got sign‑off from product, security, and legal.

2. **Dive Deep into Requirements**  
   * Determined that each device sends 10 kB payloads every 5 s → ~200 GB/day.  
   * Required real‑time inference on CPU‑bound devices with battery budget < 0.5 W.

3. **Proposed Architecture (AWS services)**  
   * **IoT Core** – secure MQTT ingestion, throttling per device.  
   * **Kinesis Data Streams** – buffer 200 GB/day, parallel shards for 10k concurrent writes.  
   * **Lambda@Edge** + **SageMaker Edge Manager** – lightweight inference on device; model updated via CI/CD pipeline (CodePipeline).  
   * **DynamoDB** – low‑latency state store for last known vitals per user (auto‑scaling, 99.999% availability).  
   * **SNS + SQS** – alert routing to mobile push and SMS with retry policies.

4. **Scalability & Cost Trade‑offs**  
   * Sharded Kinesis → cost ≈ $0.015/shard‑hour; 200 shards = ~$2k/month.  
   * Lambda edge reduces upstream traffic by 70% → ~30% savings on IoT Core data transfer.  
   * DynamoDB provisioned throughput auto‑scales, keeping spend below $500/month.

**Result (Quantified Impact)**  
* Reduced alert latency from 5 s to < 2 s (40% faster).  
* Cut operational cost by 35% versus a monolithic batch pipeline.  
* Achieved 99.98% ingestion success rate over 3 months; first‑time failure was an unhandled device firmware bug, which led us to add a “heartbeat” validation step—learning that edge health checks are critical.

**Bar‑raiser Takeaway**  
I demonstrated ownership (sign‑off process), deep technical dive (data rates, latency, cost modeling), quantified outcomes, and learning from the initial failure—all hallmarks of an Amazonian interview answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
