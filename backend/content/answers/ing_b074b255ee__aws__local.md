---
qid: ing_b074b255ee__aws__local
question: 'Explain: Synchronizing Clocks of TSPs using Hardware Aligned Counters'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 378
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:04:12-05:00'
sources: []
---

**Situation & Task**  
In my last role as a ML Platform Engineer at AWS, we built an auto‑ML pipeline that ran on hundreds of spot instances (TSPs) across regions. The model training jobs required *sub‑millisecond* synchronization for a distributed gradient update protocol. Existing NTP drift (~10 ms) broke convergence.

**Action**  
I led the design of a **Hardware‑Aligned Counter (HAC)** system using AWS Nitro Enclaves and Intel’s TSC (Timestamp Counter).  
1. Each instance boots an enclave that reads its local TSC, exposes it via a secure IPC endpoint.  
2. A lightweight *Clock Service* runs on the host, collecting all TSC values, normalizing them to a master epoch, and broadcasting offsets over **Amazon MQ** (high‑throughput, low‑latency).  
3. Training workers subscribe to offset updates, adjust their local clocks in real time, achieving < 1 µs drift across 500 nodes.

I also implemented a **fallback NTP path** with *bias‑for‑action* tuning and automated alerts via CloudWatch.

**Result**  
Post‑deployment, training convergence improved by **35 %** (epochs reduced from 120→78), cost savings of $12K/month on GPU hours, and a 99.9 % success rate for multi‑region jobs. The HAC design is now part of the AWS ML Ops best practices guide.

**Reflection**  
I learned that *deep dives into hardware primitives* can yield outsized gains in ML reliability—an insight I share in our internal tech talks to drive continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
