---
qid: ing_8c3a2cce92__aws__local
question: 'Q: When would you use a Disk-based index (like DiskANN) over a RAM-based
  index (HNSW)?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 495
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:42:59-05:00'
sources: []
---

**Situation** – I was tasked with deploying a billion‑item product search for an e‑commerce platform that had to serve 10 k RPS while keeping latency under 100 ms. The data set (50 GB) exceeded the memory footprint of any single EC2 instance, yet we couldn’t afford to pay for a fleet of 200 GiB‑RAM instances.

**Task** – Choose an ANN structure that balances cost, scalability, and precision.

**Action** – I compared **HNSW (RAM‑based)** vs. **DiskANN (disk‑backed)**:

| Factor | HNSW | DiskANN |
|--------|------|---------|
| RAM requirement | 3× data size → 150 GB | ~10 % of data in memory → 5 GB |
| Latency (avg) | 30 ms on 16‑core | 70 ms (disk seek + cache hit) |
| Accuracy (recall@k=10) | 0.98 | 0.97 |
| Cost (p2.xlarge vs r6i.large) | $3.4/h | $1.1/h |

I deployed a **Hybrid Tier**: an HNSW index on a high‑memory instance for the top 5 % of popular items, and a DiskANN index on a cost‑efficient storage‑optimized instance for the remaining 95 %. This yielded a **30 % reduction in total infrastructure spend** while maintaining <100 ms latency for 99.9 % of queries.

**Result** – The hybrid strategy saved $45k annually, improved query throughput by 25%, and met SLA requirements without over‑provisioning memory.

---

### Leadership Principles Highlighted
- **Ownership & Deliver Results** – I owned the end‑to‑end cost–performance trade‑off.
- **Dive Deep** – Conducted a rigorous benchmark of index types under realistic traffic.
- **Bias for Action** – Implemented the hybrid solution within two sprints.

Bar‑raiser cues: clear ownership, data‑driven impact (cost & latency numbers), deep technical rationale, and an iterative approach that learned from initial HNSW-only trials.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
