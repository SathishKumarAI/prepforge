---
qid: ing_76b7ebaf59__star__local
question: 'Explain: Replication with Consistent Hashing — Consistent Hashing | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 309
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:15-05:00'
sources: []
---

**Situation:**  
In my last role, we were scaling a distributed recommendation engine that served millions of users. Our cache layer was becoming stale and inconsistent because new nodes kept being added or removed during traffic spikes.

**Task:**  
I had to design a replication strategy that would keep the cache highly available while minimizing data movement when the cluster topology changed—essentially implement consistent hashing for replication.

**Action:**  
First, I mapped each cache node onto a virtual ring using a hash function (MD5 over node ID). Then, I assigned every key to the first node clockwise on the ring. To achieve fault tolerance, I replicated each key across the next three nodes in the ring, creating a replication factor of four. When nodes joined or left, only the keys that fell between the affected node’s predecessor and itself had to be moved—usually under 5% of the total dataset. I also added a lightweight gossip protocol so replicas could quickly detect failures and trigger re-replication without manual intervention.

**Result:**  
After deployment, cache hit rates improved from 78 % to 92 %, and data migration dropped from 30 % of traffic during scaling events to under 2 %. The system handled 200k requests per second with negligible latency spikes. I learned that careful choice of hash function, virtual node count, and replication factor can turn a complex distributed problem into a smooth, self‑healing architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
