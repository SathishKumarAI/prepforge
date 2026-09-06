---
qid: ing_9c63f21def__fp__local
question: 'Explain: Security: ACLs and multi-tenancy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 408
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:37:50-05:00'
sources: []
---

**Why ACLs & multi‑tenancy are essential for RAG**

A Retrieval‑Augmented Generator (RAG) must decide *who* can see what evidence and how that evidence is partitioned among users.  
At its core, the problem is **information leakage control**: each query retrieves documents from a shared index; without boundaries, a user could read another’s private data or infer hidden patterns.  

1. **Access‑Control Lists (ACLs)** map *subjects* to *resources* with fine‑grained permissions.  
   *From an information‑theoretic view*, ACLs enforce a conditional independence: the probability of a user observing a document is zero unless the ACL grants it. This guarantees that the joint entropy between user and data remains bounded by the intended policy.  

2. **Multi‑tenancy** partitions the index into tenant namespaces or uses token‑based sharding.  
   *Geometrically*, each tenant occupies a disjoint subspace of embeddings, preventing cross‑tenant collision in similarity search.  
   *Probabilistically*, it limits the adversary’s prior over documents to a smaller support, reducing the chance of accidental inference.  

**Non‑obvious insight:**  
When tenants share the same embedding model, subtle *information leakage* can occur via *model‑induced correlations*: embeddings of two different tenants’ texts may be closer than expected, allowing an attacker to infer cross‑tenant similarity even without direct ACL violation. A simple countermeasure is to **tenant‑specific fine‑tuning** or **embedding perturbation**, which decorrelates the subspaces and restores true isolation.

By coupling ACLs with tenant‑aware embeddings, RAG systems achieve both *policy compliance* and *statistical separation*, ensuring that retrieval remains secure and trustworthy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
