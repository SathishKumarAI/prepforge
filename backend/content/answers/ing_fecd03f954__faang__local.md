---
qid: ing_fecd03f954__faang__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 653
total_tokens: 897
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:32:31-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked to sketch a rough “back‑of‑the‑envelope” estimate for building a messaging app like WhatsApp: how many servers, bandwidth, storage, latency, and cost would be needed? Key assumptions:  
- 1 billion active users, 10 messages/sec per user on average.  
- Messages are ~200 bytes (text + metadata).  
- 99th‑percentile latency < 100 ms.  
- 30 % of traffic is multi‑party group chats (larger payloads).  

**2️⃣ Approach**  
1. **Compute traffic** → users × msg/s × size = total data per second.  
2. **Bandwidth & storage** → multiply by retention period (e.g., 90 days).  
3. **Server count** → estimate CPU/memory per request, then divide total load.  
4. **Redundancy** → add 20‑30 % overhead for failover/replication.  
5. **Cost** → use cloud pricing (compute, storage, network) to get rough dollars.

**3️⃣ Depth**  
- Traffic: \(1e9 \times 10 \text{ msg/s} \times 200\text{B} = 2\times10^{12}\text{ B/s} ≈ 16\text{ Tbps}\).  
- Bandwidth per region (say 5 regions) → ~3 Tbps each.  
- Storage: \(2\times10^{12}\text{ B/s} \times 86400\text{s/day} \times 90 = 1.55\times10^{19}\text{B} ≈ 15\,\text{PB}\).  
- Servers: Assume 1 kmsg/s per server → \(2\times10^{12}/1000 = 2\times10^9\) servers; realistic clustering and load‑balancing reduce this to ~200k active nodes.  
- Cost (AWS estimate): EC2 m5.large @ $0.096/h ≈ $720M/yr for compute, S3 storage ~$0.023/GB → $345M/yr, network ~$100M/yr → total ~$1.2 B/yr.

**4️⃣ Edge Cases**  
- Sudden spikes (e.g., viral event) → auto‑scale to 10× baseline.  
- Offline message delivery → need persistent queues (Kafka).  
- Data locality for low latency; cross‑region replication lag.

**5️⃣ Optimize & Communicate**  
- Use CDN + edge caching for static assets.  
- Compress payloads, batch acknowledgments.  
- Highlight trade‑offs: higher storage costs vs. user experience.  
- Summarize: Roughly 200k servers, 15 PB storage, ~3 Tbps regional bandwidth → ~$1–2 B/yr. This gives interviewers a clear, structured view of scaling assumptions and cost drivers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
