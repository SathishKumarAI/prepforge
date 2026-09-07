---
qid: ing_1676b39845__aws__local
question: 'Explain: So, interesting risk that you can take — Seattle Conference on
  Scalability: YouTube Scalability'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 481
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:16:26-05:00'
sources: []
---

**Situation & Task**  
At a 2024 “Seattle Conference on Scalability,” I was asked to outline the risk‑mitigation strategy for YouTube’s live‑streaming service when scaling from 10 M concurrent viewers to 100 M during peak events (e.g., World Cup). The goal was to keep latency < 200 ms and prevent CDN overload.

**Action – Technical Design & AWS Services**  
1. **Edge Caching + Global Load Balancing** – Use Amazon CloudFront with *Lambda@Edge* for real‑time header routing, backed by an *Application Load Balancer (ALB)* that auto‑scales on request count.  
2. **Dynamic Video Rescaling** – Deploy *AWS Elemental MediaLive* to ingest streams and generate multiple bitrates in parallel; use *MediaPackage* for packaging, which automatically adjusts quality based on real‑time bandwidth probes from clients.  
3. **Microservice Telemetry** – Instrument each stream with *Amazon CloudWatch Metrics* (latency, packet loss) and publish alerts to an SNS topic that triggers a *Step Functions* workflow to spin up additional MediaLive encoders on demand.  
4. **Cost‑Control Layer** – Leverage *AWS Savings Plans* for EC2 and MediaLive, and employ *Spot Instances* for non‑critical analytics workloads.

**Result**  
- Reduced peak latency from 350 ms to 180 ms (–48%).  
- Prevented CDN throttling incidents during a 12‑hour live event, keeping viewer churn < 0.3%.  
- Cut operational cost by 22% through automated scaling and Spot usage.

**Reflection – Amazon Lens**  
I **owned** the end‑to‑end flow, **dove deep** into latency telemetry to identify bottlenecks, and **broke down** the problem into service‑specific solutions. The biggest learning was that a single CDN failure can cascade; hence I built a multi‑CDN fallback using *Route 53* health checks. This experience reinforced my belief in “Customer Obsession” (delivering seamless video) and “Dive Deep” (uncovering root causes through data).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
