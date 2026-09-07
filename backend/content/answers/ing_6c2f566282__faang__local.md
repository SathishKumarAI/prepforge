---
qid: ing_6c2f566282__faang__local
question: 'Explain: Capacity Planning — Spotify System Design - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 560
total_tokens: 798
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:55:01-05:00'
sources: []
---

**Capacity Planning – Spotify System Design (Neo Kim & Hayk)**  
*FAANG‑style interview response*

---

### Clarify
We’re asked how Spotify scales its music streaming service to millions of concurrent users while keeping latency < 200 ms and cost under control. Key assumptions:  
- Peak traffic ≈ 5 M active listeners, 10 % simultaneous streams → 500 k requests/sec.  
- Data is read‑heavy (song metadata, playlists) with occasional writes (likes, shares).  
- Service must be highly available (99.95%) and globally distributed.

---

### Approach
1. **Load estimation** – quantify peak QPS per region.  
2. **Horizontal scaling** – stateless micro‑services behind load balancers.  
3. **Caching strategy** – CDN + in‑memory cache for hot tracks.  
4. **Database tiering** – NoSQL (Cassandra) for write‑heavy logs, SQL (PostgreSQL) for metadata.  
5. **Auto‑scaling & spot instances** – adjust compute per demand curve.  
6. **Monitoring & capacity alerts** – use Prometheus + Grafana.

---

### Depth
- **Compute:** Each streaming node runs 2 CPU cores; with 500 k QPS, we need ~ 2500 nodes → ~ 5 M vCPUs.  
- **Storage:** Hot tracks cached in 1 TB SSD per region; cold data on object store (S3).  
- **Network:** Edge CDN handles 70 % of traffic, reducing origin load by factor 10.  
- **Cost:** Spot instances + reserved capacity ≈ $0.05/instance‑hour → ~$20k/month for compute, $5k/month for storage.

---

### Edge Cases
- Sudden viral releases → traffic spikes > ×10; test with chaos engineering (simulate CDN outage).  
- Data consistency during playlist updates – use eventual consistency with conflict resolution.  
- Regulatory constraints (GDPR) → data residency per region.

---

### Optimize & Communicate
- **Performance:** Add HTTP/2 multiplexing, prefetching playlists to cut round‑trips.  
- **Cost:** Shift more cache to user device via progressive download; use tiered storage for rarely played tracks.  
- Narrate trade‑offs: higher cache hit → lower origin cost but higher memory usage; spot instances reduce cost but risk eviction.  

This structured plan balances scalability, latency, and budget while meeting Spotify’s global service goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
