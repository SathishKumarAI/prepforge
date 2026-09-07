---
qid: ing_2a7a006289__aws__local
question: 'Explain: Data Transfer — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 494
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:01:21-05:00'
sources: []
---

**Situation / Task**  
While redesigning our real‑time recommendation engine (≈ 4 M events/s), I had to decide whether the ingestion layer should use **TCP** or **UDP** for data transfer between edge collectors and our Kafka cluster.

**Action**  
I mapped out key requirements:  
* **Reliability** – every click must be processed; no loss.  
* **Latency** – < 50 ms end‑to‑end to feed the ML model.  
* **Throughput** – 4 M events/s across 200 collectors.

Using AWS, I compared:

| Protocol | Service Fit | Cost | Trade‑offs |
|----------|-------------|------|------------|
| TCP (Kinesis Data Streams) | Managed, auto‑scaling, exactly‑once | $0.015/GB + PUT requests | Higher per‑packet overhead but guarantees delivery |
| UDP (S3 Transfer Acceleration) | Low latency, bursty traffic | Lower per‑byte cost | No delivery guarantees; would need custom ACK logic |

I **drove the decision** to use **TCP via Kinesis Data Streams**. I added a lightweight retry layer on collectors and leveraged Kinesis’ sharding for horizontal scaling. This ensured **exactly‑once** semantics while keeping latency under 30 ms.

**Result**  
Post‑migration, we achieved **99.999% event capture** (vs 98.7% with UDP), reduced downstream ML error rates by **12 pp**, and maintained cost at $0.32M/month—10 % lower than the UDP+custom ACK approach.  

---

### Leadership Principles Anchored
- **Customer Obsession** – ensured every user action is captured for accurate recommendations.  
- **Ownership** – led cross‑functional design, risk assessment, and rollout.

### What a Bar‑Raiser Listens For
- Deep dive into trade‑offs (latency vs reliability).  
- Quantified impact with real metrics.  
- Clear learning: “If we had chosen UDP, we’d have needed an expensive custom reliability layer.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
