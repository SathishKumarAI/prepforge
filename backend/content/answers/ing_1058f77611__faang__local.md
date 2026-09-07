---
qid: ing_1058f77611__faang__local
question: 'Explain: Hardware Failures — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 504
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:21:14-05:00'
sources: []
---

**Hardware Failures – Ensuring Availability in a Distributed AI System**

| Stage | What to do |
|-------|------------|
| **Clarify** | • *Problem*: A fleet of GPUs/TPUs may fail; how does that affect model training / inference? <br>• *Assumptions*: We have stateless compute nodes, persistent parameter store (e.g., S3 or a distributed KV‑store), and a job scheduler. |
| **Approach** | 1. **Redundancy & Replication** – keep multiple replicas of critical data (parameter shards) on different racks.<br>2. **Health Checks & Heartbeats** – monitor node liveness via lightweight probes.<br>3. **Automatic Re‑spawning** – a controller restarts failed workers and re‑assigns their tasks.<br>4. **Checkpointing** – periodically persist model state to durable storage so work can resume from the last checkpoint. |
| **Depth** | • *Failure detection*: exponential backoff heartbeats; after N misses, node is marked dead.<br>• *Task reassignment*: use a partitioned queue (e.g., Kafka) where each task has a timeout and can be re‑queued.<br>• *Checkpoint granularity*: trade‑off between storage cost and recovery time. <br>Complexity: O(1) for health checks, O(k log n) to rebalance k failed workers across n nodes; overall system stays **O(1)** per node in steady state. |
| **Edge Cases** | • *Simultaneous rack failure*: rely on multi‑zone replication.<br>• *Corrupted checkpoints*: verify checksums before loading.<br>• *Partial failures (e.g., network split)*: use consensus (Raft) for critical metadata. |
| **Optimize & Communicate** | • Use erasure coding to reduce storage overhead while keeping read latency low.<br>• Log all failure events and run post‑mortem analysis to improve thresholds.<br>Explain that this design keeps the *mean time to recover* below the SLA, even under correlated hardware faults. |

This structured plan demonstrates clear problem framing, a robust fault‑tolerance strategy, complexity awareness, edge‑case handling, and a focus on maintainable communication—all key signals for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
