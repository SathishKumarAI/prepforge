---
qid: vq_9f9fad08c1__star__local
question: What is one-dimensional indexing?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 388
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:12:23-05:00'
sources: []
---

**Situation:**  
During a data‑science sprint at my previous company we were building an image classification model that had to serve predictions for millions of users per day. The raw dataset was stored in a distributed parquet store, and each image was represented as a 1 × 784 flattened vector (28 × 28 pixels). When we started training, the training pipeline was stalling because our batch loader kept performing expensive random look‑ups across the cluster.

**Task:**  
I needed to redesign the data ingestion so that the loader could fetch whole batches in a single read, minimizing network traffic and latency while keeping memory usage under 8 GB per worker.

**Action:**  
I introduced one‑dimensional indexing: instead of storing each image as a separate record with its own key, I concatenated all pixel values into a long array and built a linear index mapping the start offset of every sample. Using Apache Arrow’s `ChunkedArray` we could slice any contiguous range in O(1) time. I also added a simple cache layer that prefetched the next batch while processing the current one. This reduced random disk seeks from hundreds per epoch to just two sequential reads.

**Result:**  
Training throughput jumped from 50 images/sec to 280 images/sec on a single node, cutting epoch time from 15 minutes to under 3 minutes. The model’s accuracy remained unchanged (91% top‑1), but the reduced latency allowed us to deploy the service at scale with a 40% lower cost per inference. I learned that thoughtful data layout—especially linear indexing for high‑dimensional vectors—can be as powerful as algorithmic optimizations in AI pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
