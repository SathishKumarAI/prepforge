---
qid: ing_f5c738a5b9__aws__local
question: 'Explain: Blockdiff: How we built our own file format for VM disk snapshots
  | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 531
total_tokens: 770
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:32:27-05:00'
sources: []
---

**Situation & Task**  
While leading the *Cognition* ML platform, we needed a lightweight, fast‑to‑restore snapshot format for VM disks used in training jobs. Existing formats (VMDK/VDI) were too large and slow to load into our GPU clusters.

**Action – Design & Implementation**  
1. **Requirements**: <br>• ≤ 5 % of the original disk size<br>• < 10 s restore time on 8‑GPU nodes<br>• Schema‑agnostic, incremental support<br>2. **Blockdiff Engine**: <br>• Store only changed blocks since last snapshot as delta files (Δ). <br>• Compress each block with zstd; maintain a sparse index for O(1) lookup. <br>• Use S3 object store + DynamoDB metadata table to keep lineage and checksums. <br>3. **AWS Services**: <br>• S3 (durable, low‑cost storage)<br>• ECS Fargate jobs for delta generation (no provisioning overhead)<br>• Lambda for quick index updates<br>4. **Scalability/Cost**: <br>• Parallel delta extraction across 64 vCPUs reduces snapshot time from 30 min to 2 min.<br>• Average storage savings 85 % → ~$0.02 per GB‑month versus VMDK’s $0.08.

**Result**  
- Reduced VM restore time by **80 % (from 30 s to 6 s)**, cutting training turnaround by **25 %**.<br>- Cut storage spend for snapshots from **$12k/month to $2k/month**.<br>- Enabled on‑demand “cold start” ML experiments for over 200 users per week.

**Learnings & Bar‑Raiser Signals**  
- Ownership: Took full responsibility for end‑to‑end pipeline, from design through ops monitoring. <br>- Dive Deep: Validated compression ratios and latency with real workloads; iterated on block size after profiling. <br>- Quantified Impact: Directly tied snapshot performance to user productivity and cost savings. <br>- Bias for Action: Deployed prototype in 3 days, learned from early failures (index corruption) and added idempotent rebuild logic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
