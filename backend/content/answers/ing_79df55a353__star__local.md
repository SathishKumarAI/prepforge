---
qid: ing_79df55a353__star__local
question: 'Explain: Capacity Estimation — How to Ace System Design Interviews'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 449
total_tokens: 687
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:37:27-05:00'
sources: []
---

**Situation:**  
At my previous company we were launching a real‑time recommendation engine for an e‑commerce platform that already handled 2 M page views per day. Our data science team had built a gradient‑boosted model with 1,000 trees, but the engineering lead asked us to estimate how many GPU instances would be needed to serve predictions within 50 ms latency during peak traffic (10% of daily traffic spikes to ~200 k requests/min).

**Task:**  
I needed to provide a realistic capacity plan: calculate expected inference load per instance, determine batch size trade‑offs, and propose autoscaling thresholds that keep CPU/GPU utilisation between 60–80 % while staying within the $3 USD/hour GPU budget.

**Action:**  
1. Benchmarked the model on a single NVIDIA T4 using TensorRT; measured 0.8 ms per inference at batch size 32, scaling linearly to 25 ms for batch 128.  
2. Calculated peak request rate: 200 k/min ≈ 3,333 req/s → with batch = 64 gives ~52 batches/s.  
3. Derived that one T4 could handle ~1,300 req/s at 70 % utilisation, so we’d need ~3 GPU instances for the peak window plus a buffer of 2 spare nodes for burstiness.  
4. Designed an autoscaler that spawns additional GPUs when average queue latency >30 ms and scales down after 5 min of steady <25 ms latency.

**Result:**  
The deployment used 5 T4s (3 active + 2 spare), keeping latency under 45 ms during the peak hour. The cost stayed below $1,500/month, a 15 % savings over an initial conservative estimate of 10 GPUs. I learned that profiling at realistic batch sizes and tying autoscaling to queue metrics gives a tight balance between performance and budget in ML inference systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
