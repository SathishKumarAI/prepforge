---
qid: ing_6f8a268914__aws__local
question: 'Explain: Size-Tiered Compaction — SSTable compaction and compaction strategies
  \u00b7 scylladb/scylladb Wiki \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 523
total_tokens: 779
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:37:20-05:00'
sources: []
---

**Situation & Task**  
While leading the storage‑layer revamp at my previous company, we were forced to cut query latency by 30 % for a globally‑distributed key‑value store that used ScyllaDB’s SSTable engine. The bottleneck was the *size‑tiered compaction* (STC) strategy: as data grew, many small SSTables accumulated, causing excessive read amplification and disk I/O.

**Action & Design**  
I owned the redesign of the compaction pipeline. First, I **dive deep** into STC’s mechanics—identifying that it merges all SSTables in a tier regardless of size, leading to an exponential growth in reads. I proposed a hybrid *tiered‑plus‑size‑based* approach:

1. **Tiering by age** – keep a small number (≤ 5) of the newest SSTables unmerged.
2. **Size‑threshold merge** – only trigger merges when the total size exceeds 100 GB per tier, preventing unnecessary compactions on hot data.
3. **AWS S3 + Lambda** – offload long‑running compactions to a serverless workflow that writes merged files back to S3, reducing EC2 cost.

I evaluated trade‑offs:  
- *Scalability*: the new policy keeps read amplification < 1.5× even at 10 PB of data.  
- *Availability*: by limiting concurrent merges to one per node, we avoid disk contention and keep service uptime > 99.9%.  
- *Cost*: moving compactions to Lambda cut EC2 hours by 18 %, saving ~$12k/month.

**Result & Reflection**  
After rollout, read latency dropped from **250 ms → 170 ms** (32 % improvement) on the production cluster of 200 nodes. The team noted that my ownership and data‑driven approach turned a “one‑size‑fits‑all” policy into a fine‑tuned system. I learned that even mature engines like ScyllaDB benefit from *continuous refinement*—a key lesson I bring to any AWS product engineering role.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
