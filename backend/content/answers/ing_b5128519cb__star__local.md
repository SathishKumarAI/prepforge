---
qid: ing_b5128519cb__star__local
question: 'Explain: 1-Tier Architecture — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 317
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:42-05:00'
sources: []
---

**Situation**  
At my previous role I was tasked with launching an internal recommendation engine for the e‑commerce catalog. The team had limited budget and no dedicated servers, so we needed to prototype quickly on existing laptops.

**Task**  
Build a functional model that could ingest user click logs, train a collaborative filtering algorithm, and serve predictions—all within a single workstation while keeping latency under 200 ms for real‑time recommendations.

**Action**  
I opted for a classic one‑tier architecture: everything lived in the same process. I used Python with Pandas to parse CSV logs, scikit‑learn’s `NearestNeighbors` to build the model, and Flask wrapped around the same script to expose a REST endpoint. To avoid memory bloat, I streamed data in batches and persisted intermediate vectors on disk using joblib. For inference, I kept the nearest‑neighbors index loaded in RAM and used NumPy for fast distance calculations, ensuring sub‑200 ms response times.

**Result**  
The prototype served 1,200 concurrent users during a beta test with an average latency of 180 ms and 92% accuracy on top‑5 hit rate. It proved that a one‑tier design can be viable for small‑scale ML services, and taught me the importance of data streaming and in‑memory indexing to keep performance high without distributed infrastructure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
