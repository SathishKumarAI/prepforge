---
qid: ing_6d5d15b537__fp__local
question: 'Explain: 3.2 AP: Availability + Partition Tolerance'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 382
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:48-05:00'
sources: []
---

**Availability + Partition‑Tolerance → Consistency loss**

In a replicated database each node can answer queries (availability) and the system keeps working even if a network link breaks (partition tolerance).  
If two replicas are isolated, they may receive conflicting updates. To preserve *consistency* both nodes would have to agree on which value is final; that requires exchanging information across the partition. But during the split no such exchange is possible, so at least one replica must refuse or delay a request—contradicting availability.  

Formally, let \(R\) be read‑latency and \(W\) write‑latency. For a system to be **consistent** we need \(R+W \leq T_{\text{part}}\), the time until the partition heals. If \(T_{\text{part}}=\infty\) (partition never resolves), then either \(R=0\) or \(W=0\) must hold, meaning one of the two operations cannot be served—i.e., availability is sacrificed.  

**Non‑obvious insight:**  
The trade‑off is not a choice between *consistent* and *available*; it’s a statement about *information flow*. Consistency requires that all replicas possess the same state vector \(S\). Partitioning cuts off the communication channel carrying \(\Delta S\), so the system cannot update \(S\) coherently. Thus, availability+partition tolerance inevitably forces *eventual* consistency: the only way to keep nodes alive is to let them diverge temporarily and reconcile later when the partition heals.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
