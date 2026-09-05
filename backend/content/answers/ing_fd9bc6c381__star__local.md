---
qid: ing_fd9bc6c381__star__local
question: 'Explain: Paging — Paging vs Segmentation'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 345
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:56:01-05:00'
sources: []
---

**Situation:**  
At my last company we were migrating a legacy inventory system to a micro‑service architecture on Kubernetes. The new services ran in Docker containers with 2 GB of RAM each, but the database layer kept growing, and our query latency started creeping past the SLA.

**Task:**  
I had to redesign how data was loaded into memory so that the DB engine could keep critical tables hot without exceeding container limits—essentially deciding between paging or segmentation for the in‑memory cache.

**Action:**  
First, I profiled access patterns with Prometheus and saw that 70 % of queries touched a handful of columns, but those columns were scattered across many rows. Paging (fixed block size) would bring entire rows into memory, wasting space on unused columns. Segmentation (variable‑size chunks based on logical groupings) let me cache only the relevant column groups. I implemented a segmented LRU cache in Go, using Redis as the backing store and leveraging its native hash structures to map segment keys to values. We set a 200 MB memory cap per container and used a custom eviction policy that prioritized frequently accessed segments.

**Result:**  
Cache hit rate jumped from 48 % to 92 %, cutting average query latency from 350 ms to 75 ms—well under our SLA of 100 ms. Memory usage stayed within limits, allowing us to run more replicas without additional cost. I learned that choosing the right abstraction (paging vs segmentation) depends on data access locality; segmentation can dramatically reduce memory waste when queries target sparse subsets of a large dataset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
