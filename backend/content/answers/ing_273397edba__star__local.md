---
qid: ing_273397edba__star__local
question: 'Explain: Distance Metrics — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 314
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:46:55-05:00'
sources: []
---

**Situation:**  
At my last company we were building a recommendation engine for an e‑commerce platform that needed to suggest similar products in real time. The catalog had over 3 million items, each represented by a 512‑dimensional embedding from a transformer model.

**Task:**  
I was tasked with designing the similarity search layer so that a user could get top‑10 recommendations within 50 ms while keeping memory usage under 8 GB on our existing servers.

**Action:**  
First I benchmarked several distance metrics—Euclidean, cosine, and Manhattan—against the dataset. Cosine gave the best semantic alignment but was expensive to compute at query time. I implemented an approximate nearest neighbor index using FAISS with HNSW graphs, tuning the `efSearch` parameter for a trade‑off between latency and recall. To reduce memory, I compressed the vectors to 128 bit float16 and applied product quantization, which cut storage from 6 GB to 2 GB while maintaining >92% recall of exact neighbors. I also added a cache layer that kept the most frequently queried items in RAM.

**Result:**  
The system returned recommendations in an average of 32 ms, meeting our SLA. Recall stayed above 90%, and we reduced infrastructure costs by 30%. I learned how to balance metric choice, index configuration, and compression to meet strict latency and budget constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
