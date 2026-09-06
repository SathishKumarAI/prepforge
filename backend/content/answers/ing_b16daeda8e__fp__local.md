---
qid: ing_b16daeda8e__fp__local
question: 'Explain: 7.3 Durability — Design Instagram | System Design Interview |
  AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 371
total_tokens: 550
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:21:20-05:00'
sources: []
---

### Durability in a Social‑Media Feed

**Problem to solve:**  
When a user posts an image, the platform must guarantee that *once* the API returns success, the data is permanently stored and will survive any subsequent failures (crash, power loss, network glitch). If durability fails, users see lost content or broken links—an intolerable UX flaw.

**Why it must work this way:**  
Durability is an axiom of reliable storage. Think of a distributed write as a *commit* in a database transaction: after the client receives “OK,” the system has irrevocably logged the mutation so that recovery can replay or reconstruct it. Without this guarantee, a single node crash could erase data, breaking consistency for all replicas.

**Underlying principle:**  
It is a manifestation of **strong persistence** in *distributed consensus* (e.g., Raft/ Paxos). The system must *replicate* the write to a majority of nodes before acknowledging success. This guarantees that at least one surviving node holds the data even if others fail, making recovery deterministic.

**Non‑obvious insight:**  
Durability is not just about copying bytes; it’s also about **timing** relative to failure modes. A “write‑to‑disk” guarantee alone can be fooled by a power outage that truncates the log. The *append‑only* log pattern, combined with *checkpointing*, ensures that even if a crash occurs mid‑write, the next recovery will replay only fully committed entries. Thus, durability hinges on *atomicity of log writes*—a subtle but critical detail often omitted in high‑level designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
