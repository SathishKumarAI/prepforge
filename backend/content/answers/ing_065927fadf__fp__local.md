---
qid: ing_065927fadf__fp__local
question: 'Explain: High availability — What is Disaster Recovery? | Google Cloud'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 473
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:19:06-05:00'
sources: []
---

### From the “fault‑first” problem

Every production ML system is a *distributed computation* that must keep serving predictions while its infrastructure can fail in many ways: a rack power loss, a network partition, a software bug, or an entire data center outage.  The fundamental goal is **to preserve service continuity without compromising model integrity**.

### Why “disaster recovery” is required

A *high‑availability* design protects against *ordinary* failures by mirroring resources across zones and using health checks to shift traffic.  
But a *disaster*—a cascading event that wipes out an entire region or a key dataset—breaks the assumptions of those safeguards.  In such a case, the system must **re‑establish its state from an untouched copy** rather than simply redirecting traffic.

Google Cloud’s Disaster Recovery (DR) therefore implements:

1. **Immutable backups** of training data and model artifacts in separate regions.
2. A *stateful* replication strategy that records the exact checkpoint of a long‑running inference pipeline.
3. Automated failover that re‑spins up compute, restores the latest state, and reconnects traffic with minimal latency.

### Deeper principle: *State entropy minimization*

DR is essentially an optimization over the **entropy of system state**. By keeping backups that are exact replicas (zero entropy relative to the live system), we guarantee that the post‑disaster state can be reconstructed with deterministic cost. This contrasts with naïve snapshots that might miss transient in‑flight data, leading to higher entropy and ambiguous recovery.

### Non‑obvious insight

Most people think DR is just “copy everything elsewhere.”  The real trick is **capturing *in‑flight* state**—the pending inference requests, the current feature‑store cursors, and the exact model weights after a recent training run.  Without this fine‑grained state capture, recovery can leave the system in an inconsistent or stale configuration, defeating the purpose of high availability.

In short, Google Cloud’s DR is not merely replication; it is a principled minimization of entropy that guarantees *exact* continuity of ML workloads after catastrophic events.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
