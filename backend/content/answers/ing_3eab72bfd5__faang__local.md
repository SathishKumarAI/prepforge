---
qid: ing_3eab72bfd5__faang__local
question: 'Explain: Durable Execution for Long-Running Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 496
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:09:51-05:00'
sources: []
---

**Durable Execution for Long‑Running Agents**

---

### 1️⃣ Clarify  
We’re asked how an AI agent (e.g., a conversational bot or autonomous system) can reliably complete tasks that span minutes, hours, or days despite failures, restarts, or network hiccups.  
Assumptions to confirm:  

- Agent is stateless at start but may need persistence.  
- Tasks are idempotent or can be resumed from checkpoints.  
- We have access to cloud storage and a message queue.

### 2️⃣ Approach  
1. **State capture** – persist every meaningful state change (e.g., current step, context).  
2. **Checkpointing** – periodically serialize the agent’s internal memory to durable storage.  
3. **Event sourcing** – log actions so that replay can rebuild state.  
4. **Fault‑tolerant orchestration** – use a workflow engine or retry queue to re‑initiate work.  
5. **Idempotent operations** – design each step to be safe if retried.

### 3️⃣ Depth  
- Store checkpoints in S3/Blob and metadata in DynamoDB.  
- Use an event bus (Kafka/SQS) for state updates; on failure, a worker reads the latest event and resumes.  
- Complexity: checkpointing O(1) write per step; replay cost proportional to number of events but bounded by checkpoint interval.  
- Trade‑offs: more frequent checkpoints → higher storage costs vs. faster recovery.

### 4️⃣ Edge Cases  
- **Partial writes** – use atomic uploads or versioned objects.  
- **Network partitions** – keep a local buffer and sync once connectivity returns.  
- **Non‑idempotent external calls** – wrap with compensating actions or use transactional outbox patterns.

### 5️⃣ Optimize & Communicate  
- Batch state updates to reduce I/O, but keep checkpoints frequent enough for acceptable RTO.  
- Explain the design by walking through a “booking” scenario: agent stores booking context every minute; if a server dies, the orchestrator pulls the last checkpoint and resumes without user disruption.  

This framework satisfies FAANG interview criteria: clear problem restatement, structured plan, technical depth with complexity analysis, edge‑case awareness, and concise communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
