---
qid: ing_5f9946b4e2__fp__local
question: 'Q: How do you design for high availability in LLM systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 552
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:29:00-05:00'
sources: []
---

**Why “high‑availability” matters for an LLM**

A language model is a *service* whose value decays the moment it stops answering.  
Formally, availability \(A\) is the probability that a request reaches a live instance.  
If every request has cost \(c\) and downtime loss is \(\lambda\), the expected loss per unit time is  

\[
L = c(1-A)+\lambda (1-A).
\]

Minimising \(L\) forces us to maximise \(A\) while keeping costs low—a classic **resource‑allocation trade‑off**.

---

### 1. *Redundancy by design*

- **Stateless inference nodes**: The model weights are immutable; any node can serve any request.  
- **Sharded replicas**: Distribute the same checkpoint across \(k\) machines so that a single failure removes at most \(1/k\) of capacity.

*Insight*: Sharding reduces *per‑node memory* but also introduces *model‑parallelism* overhead; balancing the two is key.

---

### 2. *Elastic orchestration*

- **Health‑check + auto‑scale**: Use a liveness probe that queries a lightweight forward pass (e.g., a reduced‑precision token).  
- **Kubernetes or custom scheduler** places new pods on nodes with spare GPU memory, ensuring no overcommit.

*Insight*: The health check must be *stateless* itself; otherwise it becomes a single point of failure.

---

### 3. *Checkpoint‑based failover*

- Store the checkpoint in a highly durable object store (S3/Blob).  
- On node crash, a new instance pulls the latest snapshot and resumes serving without re‑training.

*Insight*: The checkpoint size dictates recovery time; compressing it to “tensor‑shards” speeds restores while keeping fidelity.

---

### 4. *Probabilistic request routing*

- Route each request to \(r\) replicas (e.g., \(r=2\)) and return the first response that satisfies a latency SLA.  
- If all fail, retry with exponential backoff.

*Insight*: This “latency‑aware redundancy” turns variance in inference time into an *availability buffer* rather than extra cost.

---

**Bottom line:** High availability is achieved by **statelessness + sharded replicas + elastic health checks + rapid checkpoint recovery + probabilistic routing**. The hidden gem: designing the health probe as a miniature model pass eliminates a secondary failure mode that many overlook.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
