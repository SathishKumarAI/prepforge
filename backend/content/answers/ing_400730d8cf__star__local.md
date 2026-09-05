---
qid: ing_400730d8cf__star__local
question: 'Explain: 4.2 Requirement 2: Music Search — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 389
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:36:17-05:00'
sources: []
---

**Situation**  
While interning at a startup that built a podcast discovery app, we noticed our recommendation engine was missing an instant “search‑by‑audio‑clip” feature. Users were frustrated because the current keyword search only returned titles or tags, not songs that matched a short hummed sample.

**Task**  
I was tasked to design a low‑latency music search system that could take a 5‑second audio clip and return the top 10 matching tracks from our catalog of 2 M songs, keeping query latency under 200 ms on average.

**Action**  
I broke the problem into three layers: (1) **feature extraction**—used MFCCs with librosa to generate a 128‑dim vector per clip; (2) **indexing**—built an IVF‑Flat index in Faiss, clustering the feature space into 10 k centroids so nearest‑neighbor lookups were sub‑millisecond; (3) **retrieval & ranking**—queried the index, then applied a lightweight neural re-ranker (a 2‑layer MLP) that weighted metadata (artist popularity, release year) and user context. I deployed the service behind an NGINX reverse proxy with rate limiting, and used Redis for caching recent queries.

**Result**  
The prototype returned results in 150 ms on a single GPU server, reducing user search friction by 35% as measured by A/B testing (click‑through rose from 12.4% to 16.7%). I learned the importance of balancing feature fidelity with indexing speed, and that adding a lightweight re‑ranker can significantly boost relevance without breaking latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
