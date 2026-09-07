---
qid: ing_5fc321515a__aws__local
question: 'Explain: Choose UDP When — TCP vs UDP | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 556
total_tokens: 788
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:02:40-05:00'
sources: []
---

**Situation & Task (S)**  
I was leading a team that built an IoT telemetry platform for a smart‑factory client. The device fleet generated ~10 GB of sensor data per day and the system had to deliver near‑real‑time alerts with < 200 ms latency while keeping cost under $50k/month.

**Action (A)**  
After scoping the requirements, I compared TCP vs UDP:

| Criterion | TCP | UDP |
|-----------|-----|-----|
| **Reliability** | Guarantees delivery & order | No guarantee – drops packets if network is congested |
| **Overhead** | Handshake + retransmissions → ~10–15 % overhead | Minimal header (8 B) → < 1 % overhead |
| **Latency** | Higher due to ACKs and congestion control | Lower, ideal for real‑time alerts |
| **Scalability** | Connection per device → 100k connections hit OS limits | Stateless, scales to millions of packets |

I chose **UDP** for the telemetry ingestion layer, wrapping it with a custom acknowledgment scheme that only required *at least one* successful receipt per batch. I paired this with:

- **Amazon Kinesis Data Streams** (shards tuned to 5 MB/s) for buffering.
- **AWS Lambda** for lightweight de‑duplication and transformation.
- **Amazon DynamoDB** (partition key = device ID) for idempotent deduplication.

The design delivered < 180 ms latency, handled a 4× traffic spike during a factory upgrade without packet loss, and reduced ingestion cost by 32 % compared to a TCP‑based solution.  

**Result (R)**  
We achieved a 99.8 % on‑time alert rate, cut operational costs from $70k to $48k/month, and received a client testimonial praising the “real‑time responsiveness” that enabled proactive maintenance.

---

### Leadership Principles Reflected
- **Customer Obsession** – Prioritized low latency and cost savings for the factory’s uptime.  
- **Dive Deep & Ownership** – Conducted side‑by‑side protocol analysis, built custom ack logic, and continuously monitored metrics to iterate on design.  

### What a Bar‑Raiser Listens For
- Clear ownership of trade‑offs (reliability vs latency).  
- Quantified impact (latency, cost, alert accuracy).  
- Learning from failure: the fallback TCP path we added for critical commands after an early production incident where a UDP packet was lost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
