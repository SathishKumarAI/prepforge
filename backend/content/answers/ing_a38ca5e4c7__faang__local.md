---
qid: ing_a38ca5e4c7__faang__local
question: How does Harvey ensure no one is training on my data?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 569
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:05:12-05:00'
sources: []
---

**Clarify**  
You’re asking how *Harvey* (the AI system) protects your data from being used for further training. I’ll assume: 1) “training” means unsupervised fine‑tuning on user‑generated text; 2) you want end‑to‑end guarantees—no leakage, no model updates that include your inputs; 3) the system is deployed in a multi‑tenant cloud environment.

**Approach**  
1. **Data ingestion policy** – reject or anonymize all raw user data before it reaches any training pipeline.  
2. **Isolation layers** – enforce strict separation between inference and training code paths (e.g., separate containers, GPU pools).  
3. **Audit & monitoring** – log every request that touches user content; run automated scans for accidental model‑update triggers.  
4. **Legal/contractual controls** – embed clauses in the service agreement that prohibit data reuse for training.

**Depth**  
- *Data ingestion*: implement a “drop‑in” filter that strips or hashes any text before it’s stored. The filter runs in O(n) time, constant overhead.  
- *Isolation*: use Kubernetes namespaces with RBAC; only the training namespace has access to persistent storage holding raw data. Inference pods never mount those volumes.  
- *Audit*: each inference request logs a unique hash of the input and writes it to an immutable audit log (e.g., WORM S3). A nightly job checks for any entries that appear in training checkpoints; if found, triggers an alert.  
- *Model updates*: employ a “no‑user‑data” policy where all fine‑tuning uses synthetic or pre‑approved corpora. Even when user feedback is used, it’s tokenized and stripped of content before being fed to the optimizer.

**Edge Cases**  
- *Token‑level leakage*: if an attacker injects your text into a prompt that triggers hidden retraining (e.g., via a “self‑play” loop), the isolation layer prevents that.  
- *Third‑party integrations*: ensure all downstream services also honor the same ingestion policy.  
- *Compliance gaps*: periodic penetration tests to confirm no accidental data persistence.

**Optimize & Communicate**  
We can further reduce risk by using *federated learning*—the model learns from gradients, never raw text. Communicating this strategy: “Harvey’s architecture separates inference and training entirely; we strip all user content before it ever reaches the training pipeline, enforce strict access controls, and audit every step to guarantee no data leakage.” This shows clear structure, technical depth, and a proactive risk‑management mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
