---
qid: ing_20543bed6b__faang__local
question: 'Explain: 4.3 Handling failure of Jobs — Design a Distributed Job Scheduler
  - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 499
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:59:48-05:00'
sources: []
---

**Clarify**  
We’re asked to design a *distributed job scheduler* that reliably runs long‑running ML training jobs and can recover from node or task failures. Assume:  
• Jobs are stateless except for checkpoints; state is persisted in S3/DB.  
• Scheduler must support millions of queued jobs, high throughput, and low latency for job start.  
• Failure modes include worker crash, network partition, and transient errors.  

**Approach**  
1. **Decouple components**:  
   - *Job Queue* (Kafka or Pulsar) → ordered stream of job descriptors.  
   - *Scheduler Service* (stateless workers) that polls the queue, assigns jobs to compute nodes.  
   - *Compute Nodes* (Kubernetes pods or EC2 instances) that execute tasks and report status via gRPC.  
   - *State Store* (DynamoDB/Redis) for job metadata and checkpoint pointers.  

2. **Job lifecycle**: submit → queued → claimed → running → succeeded/failure → retry policy.  

3. **Failure handling**:  
   - Heartbeat from workers; if missed, mark node unhealthy and re‑claim its jobs.  
   - Each job stores a *checkpoint* after every epoch; on failure the scheduler re‑queues the job with checkpoint offset.  
   - Use *idempotent* task execution (unique job ID) to avoid double processing.  

**Depth**  
- **Complexity**: Queue ops O(1); state updates O(log n).  
- **Scalability**: Horizontal scaling of scheduler pods; Kafka partitions per queue topic.  
- **Trade‑offs**: Extra checkpointing overhead vs. faster recovery.  

**Edge Cases**  
- Network partition → use consensus (Raft) on job assignment to avoid split‑brain.  
- Job starvation → priority queues or fair‑share scheduling.  
- Corrupted checkpoints → fallback to full restart after a threshold of retries.  

**Optimize & Communicate**  
Start with a minimal viable scheduler (single queue, single node pool). Instrument metrics (job latency, failure rate) and iteratively add features like autoscaling compute nodes, multi‑region deployment, and advanced retry backoff. Explain each design choice clearly to the interviewer, tying it back to reliability and throughput goals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
