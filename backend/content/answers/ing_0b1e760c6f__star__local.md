---
qid: ing_0b1e760c6f__star__local
question: 'Explain: My favorite algorithm (and data structure): HyperLogLog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 382
total_tokens: 621
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:51:08-05:00'
sources: []
---

**Situation:**  
During a quarterly audit of our ad‑tech platform, the engineering team noticed that the unique user count reported by the analytics dashboard was consistently 15–20% lower than the raw event logs. The discrepancy was due to the high cardinality of user IDs and the limited memory budget on the edge servers that processed click streams in real time.

**Task:**  
I had to design a lightweight, probabilistic counter that could run within 10 MB of RAM, update in under 2 µs per event, and return a unique‑user estimate with <1% error across billions of events, so the dashboard could display accurate metrics without sacrificing latency.

**Action:**  
I chose HyperLogLog (HLL) for its logarithmic memory usage. I implemented a Go library that used 2¹⁶ registers, mapping each hashed user ID to a register via XOR with a seed. To keep updates fast, I pre‑computed the position of the leading zeros using a lookup table and updated only when a higher rank was observed. For aggregation across shards, I merged HLL sketches by taking the element‑wise maximum of registers, which is associative and commutative. I benchmarked against a baseline count‑distinct implementation, showing 80% fewer bytes and a 3× speedup.

**Result:**  
After deployment, the platform’s unique‑user estimates matched the ground truth within ±0.8%, meeting our SLA. The memory savings freed up 4 GB on each server, allowing us to add more real‑time features. I learned how a probabilistic data structure can solve a cardinality problem at scale while keeping code simple and maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
