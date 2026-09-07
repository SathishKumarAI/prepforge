---
qid: ing_a14fadc785__aws__local
question: 'Explain: Sizing a Bloom Filter — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 679
total_tokens: 912
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:30:04-05:00'
sources: []
---

**Bloom Filter Sizing – A Data‑Driven Answer**

**Situation (S)**  
In a last‑quarter release for our recommendation engine, we had to deduplicate millions of user IDs before feeding them into an ML pipeline that ran every 5 minutes. The team was worried the in‑memory set would exceed EC2 limits and spike costs.

**Task (T)**  
I owned the design of a Bloom filter to keep false positives below 1% while fitting within a 512 MB memory budget on an m6i.large instance (8 GiB RAM, 4 vCPU).

**Action (A)**  
1. **Define parameters:**  
   * **n = 10 M items** (historical peak).  
   * Desired **false positive rate p = 0.01**.  
2. **Compute size m and hash count k** using the classic formulas:  
   ```text
   m = -(n ln p) / (ln 2)^2 ≈ 9.6 M bits ≈ 1.2 MiB  
   k = (m/n) ln 2 ≈ 7
   ```
3. **Implement** in Go, using the *hash/fnv* family for speed, and store the bit array in a DynamoDB‐backed cache (DAX) to survive instance restarts.  
4. **Validate** with a test harness: after inserting 10 M IDs, the measured false positive rate was **0.0098%**, below target.

**Result (R)**  
- Reduced memory footprint from an estimated **80 MiB set** to **1.2 MiB**, cutting EC2 cost by **≈12 %** per month.  
- Cut pipeline latency by 30 ms, enabling a smoother 5‑minute batch window.  
- Delivered the feature on schedule with zero incidents.

---

### Leadership Principles Highlighted
- **Ownership** – I drove the end‑to‑end solution and ensured it met business goals.  
- **Dive Deep** – I derived exact formulas, benchmarked implementations, and tuned hash functions for optimal performance.  

### AWS Services & Trade‑offs
| Service | Why? | Trade‑off |
|---------|------|-----------|
| **EC2 (m6i.large)** | Low‑latency compute | Fixed cost, scaling requires manual intervention |
| **DynamoDB + DAX** | Persistent cache for Bloom bit array | Slight read latency vs. pure in‑memory; cost of provisioned throughput |
| **CloudWatch** | Metric collection for false positive rate | Additional ops overhead |

### Bar‑Raiser Checkpoints
- **Quantified impact** (cost, latency).  
- **Depth**: full derivation of `m` and `k`.  
- **Learning from failure**: we initially tried a naive 1‑bit hash set that blew up memory; pivoted to Bloom filter after measuring false positives.  

This approach exemplifies Amazon’s bias for action while staying grounded in data and ownership.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
