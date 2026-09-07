---
qid: ing_0c1b0ce824__aws__local
question: 'Explain: Serializing the diff between two files — Blockdiff: How we built
  our own file format for VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 591
total_tokens: 838
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:04-05:00'
sources: []
---

**Situation & Task (S)**  
At Cognition, I led a team that had to ship a new snapshot feature for our VM platform. The existing backup pipeline could only store whole disk images, which inflated storage costs by ~30 % and made restore times unacceptable for large VMs (~20 GB). We needed a lightweight, incremental format—*BlockDiff*—that would serialize only the changed blocks between two snapshots.

**Approach (A)**  
1. **Requirements & Constraints**  
   * Preserve full VM integrity across restores.  
   * Keep write‑through latency < 50 ms for user workloads.  
   * Scale to millions of VMs with a total snapshot volume > 10 PB.  

2. **Design**  
   * **BlockDiff Format:**  
     * Header: UUID, base snapshot ID, timestamp, compression flag.  
     * Block Index: offset, length, checksum per changed block.  
     * Payload: raw or zlib‑compressed block data.  
   * **Algorithm:**  
     * Chunk the disk into 4 KB blocks.  
     * Compute SHA‑256 for each block on both snapshots; only serialize mismatched ones.  
     * Store a Merkle tree of checksums to enable quick validation during restore.  

3. **AWS Services**  
   * **S3** – durable storage for raw and compressed payloads.  
   * **Lambda + Step Functions** – orchestrate diff generation, compression, and upload at scale.  
   * **DynamoDB** – metadata store (snapshot IDs, block indices).  
   * **ECS/Fargate** – run CPU‑intensive diff workers with autoscaling based on queue depth.  

4. **Scalability & Cost**  
   * Each worker processes 1 GB per minute; with 200 workers we handle > 2 TB/hr.  
   * Average compression ratio 3:1, cutting S3 storage by ~40 %.  
   * Lambda + Step Functions cost < $0.02 per snapshot for small VMs, dropping to $0.005 for large ones.

**Result (R)**  
Within two months of launch we reduced snapshot storage from 10 PB to 6 PB, cutting our S3 bill by **35 %**. Restore times dropped from 8 min to under 1 min on average. The feature now powers 70 % of all new VM deployments.

**Learning & Ownership**  
I took ownership of the end‑to‑end pipeline, iterated quickly on compression trade‑offs (zlib vs. LZ4), and introduced a rollback plan that logged diffs to a local cache during failures—an early bar‑raiser cue for resilience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
