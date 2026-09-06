---
qid: ing_fecd03f954__think__local
question: 'Explain: Back-of-the-Envelope Estimation — Design WhatsApp | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 516
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:50:22-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - Identify what “back‑of‑the‑envelope” means: a quick, ball‑park calculation using simple rules of thumb.  
   - Assume we’re designing WhatsApp at scale (hundreds of millions of users, millions of messages per second).  
   - Decide on key metrics to estimate: storage per message, bandwidth, latency, server count.

**2️⃣ Adopt a layered mental model**  
   - **Data flow**: User → client → edge proxy → regional data center → global sync.  
   - **Core services**: Messaging API, presence, media storage, push notifications.  
   - **Infrastructure layers**: Compute, network, storage, caching.

**3️⃣ Reason step‑by‑step**  
   1. **User count** → pick a target (e.g., 2 B).  
   2. **Message rate** → assume 10 msg/s per user → total ≈ 20 M msg/s.  
   3. **Payload size** → average 500 bytes → bandwidth ≈ 10 GB/s.  
   4. **Storage** → 1 year of history at 5 B messages × 500 bytes ≈ 2.5 PB.  
   5. **Servers** → use a rule like “1 server per 50 k msg/s” → ~400 servers for handling traffic.  
   6. **Latency target** → keep within 200 ms; estimate network hops and edge cache size.

**4️⃣ Watch out for common traps**  
   - Mixing up average vs peak loads.  
   - Forgetting overhead (headers, encryption).  
   - Ignoring replication/multi‑region latency costs.  
   - Assuming linear scaling of cost with traffic.

**5️⃣ Sanity‑check & verbalize**  
   - Cross‑compare each estimate against known benchmarks (e.g., Twitter’s 1 GB/s traffic).  
   - Check that storage/compute numbers are realistic for a large cloud provider.  
   - Explain assumptions aloud: “If we double users, bandwidth doubles but storage per user stays constant.”  

Follow this loop—clarify → model → compute → guard against traps → validate—to produce a credible back‑of‑the‑envelope design for WhatsApp.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
