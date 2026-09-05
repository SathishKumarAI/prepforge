---
qid: ing_34ad5a53b2__star__local
question: What is Parallelism? — Concurrency vs Parallelism - by Ashish Pratap Singh
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 367
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:13:51-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked with training a transformer‑based language model on a proprietary legal corpus (~5 TB). The single GPU pipeline took roughly 12 hours per epoch, and we had to hit an accuracy target before the next regulatory review.

**Task:**  
Reduce training time by at least 50% without compromising validation loss, while keeping costs within budget.

**Action:**  
I re‑engineered the data loader to use **data parallelism** across a cluster of 8 NVIDIA A100 GPUs. First, I split the dataset into shards and used PyTorch’s `DistributedDataParallel` to synchronize gradients after each mini‑batch. To avoid I/O bottlenecks I employed a dedicated high‑speed SSD array with async prefetching via `torch.utils.data.DataLoader`. I also tuned the learning rate schedule using cosine decay, which helped stabilize training when scaling batch size from 32 to 256 across devices. Finally, I monitored GPU utilization with NVIDIA Nsight Systems and iteratively reduced inter‑node communication overhead by adjusting the NCCL backend settings.

**Result:**  
Training time dropped from 12 hours to 4 hours per epoch— a 66% reduction. Validation loss improved slightly (from 0.58 to 0.55), and we stayed under the $3,000 monthly GPU budget. The exercise taught me that true parallelism in ML is about *data sharding + gradient synchronization*, whereas concurrency would have meant overlapping unrelated tasks like data augmentation with training, which didn’t yield the same speedup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
