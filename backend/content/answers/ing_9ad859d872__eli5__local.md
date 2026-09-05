---
qid: ing_9ad859d872__eli5__local
question: When do you use spot GPUs, and how do you run workloads on them without
  getting burned?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 233
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:43:04-05:00'
sources: []
---

Think of a spot GPU like a discounted ticket at a concert that’s only available when the venue has extra seats. You grab it because it’s cheap, but if the crowd grows you might lose your seat. To avoid getting “burned,” treat the GPU as a short‑term, high‑value resource:  

1. **Use for bursty work** – quick experiments, model training that can finish before the spot price spikes.  
2. **Set an upper limit** – stop or pause jobs if the price climbs above your budget.  
3. **Checkpoint often** – save progress every few minutes so you can resume on a new GPU instead of losing hours.  
4. **Keep backup plans** – have a small on‑demand instance ready to take over if the spot drops out.  

By treating spot GPUs like a “pay‑as‑you‑go” express lane and protecting your work with checkpoints, you get the speed and savings without risking a costly surprise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
