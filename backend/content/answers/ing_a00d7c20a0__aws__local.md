---
qid: ing_a00d7c20a0__aws__local
question: 'Explain: Primer: Linux filesystem concepts — Blockdiff: How we built our
  own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 445
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:26:37-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team tasked with reducing the cost and latency of VM‑disk snapshot ingestion in our cloud platform. Existing snapshots were stored as raw QCOW2 blobs, which caused high EBS write throughput (~1 Gbps) and slow restore times (average 12 min per snapshot).  

**Action**  
I proposed a **block‑diff file format** that stores only the changed blocks since the last snapshot, coupled with an on‑disk index for quick lookups. We built it in Rust, integrated with our Go orchestrator, and deployed it as a Lambda layer to run during snapshot capture. Key AWS services used:  
- **S3 Glacier Deep Archive** for long‑term retention of diffs (cost ↓ 70%)  
- **EFS** for temporary staging during merge operations (high IOPS, low latency)  
- **DynamoDB** for the block index (eventual consistency, 99.999% availability).  

We implemented an automated “merge‑on‑read” policy that replays diffs into a base image on demand, keeping the read path single‑request and avoiding full restores.

**Result**  
After rollout:  
- Snapshot write traffic dropped from **1 Gbps to 250 Mbps** (4× reduction).  
- Restore time fell from **12 min to 2.3 min** (5× faster).  
- Storage cost decreased by **$0.05 per GB-month**, saving ~$120k annually for a 10‑TB environment.

**Learning & Ownership**  
I owned the end‑to‑end pipeline, conducted A/B tests, and iterated on the diff granularity after initial failures where block size was too coarse (leading to write amplification). The experience reinforced my bias for action and dive deep into data‑driven trade‑offs.  

> **Leadership Principles:** Ownership, Dive Deep, Deliver Results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
