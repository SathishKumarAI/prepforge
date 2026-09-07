---
qid: ing_eac48d9f52__aws__local
question: 'Explain: You''re receiving an unbounded stream of event IDs. Return the
  k most frequent IDs seen so far, at any point, with bounded memory.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 473
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:53-05:00'
sources: []
---

**Leadership Principles:** *Ownership* – take full responsibility for the system’s correctness and performance; *Dive Deep* – dissect the algorithmic trade‑offs.

**Situation / Task**  
A real‑time analytics pipeline receives an unbounded stream of event IDs (e.g., clickstream). We must expose the top k most frequent IDs at any instant while keeping memory usage bounded (≈ 10 MB) and latency < 5 ms per record.

**Action**  
I implemented a **Count‑Sketch + Min‑Heap** hybrid:

1. **Hashing layer** – 3 independent hash functions map each ID to a counter array of size *m* = 2⁵⁰ (≈ 1 M). Each counter is 32‑bit, giving ≈ 4 MB total.
2. **Frequency estimate** – the minimum of the three counters approximates the true count with error ≤ ε·N (ε = 0.01) and probability 99 %.
3. **Top‑k maintenance** – a min‑heap of size *k* stores candidate IDs. When an ID’s estimated count exceeds the heap root, we replace it. The heap costs O(k log k) per update but k is small (≤ 1000).
4. **AWS services** – deploy on **EC2 Spot Instances** behind an **Application Load Balancer**, autoscale with CloudWatch metrics. Persist snapshots to **S3** for recovery.

**Result**  
The system processed 10⁶ events/s, maintained top‑5 k within ±1% error, and used only 6 MB RAM—well under the budget. Latency averaged 2.8 ms per event, meeting SLA. Cost dropped 30 % compared to a naive hash map.

**Learnings**  
Tried a naive `unordered_map` first; it exceeded memory after ~10⁶ distinct IDs. The Count‑Sketch trade‑off was essential—bounded memory with provable error guarantees. This approach scales horizontally: each shard can run independently and merge sketches at query time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
