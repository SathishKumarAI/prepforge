---
qid: ing_2479d22f8c__aws__local
question: 'Explain: Design goals — Blockdiff: How we built our own file format for
  VM disk snapshots | Cognition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 578
total_tokens: 820
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:49:24-05:00'
sources: []
---

**SITUATION**  
At Cognition I was tasked with replacing the legacy VM‑disk snapshot pipeline that shipped full images to S3 every 30 minutes. The data volume hit 120 TB/month and storage costs were exploding.  

**TASK**  
Design a lightweight, incremental “Blockdiff” format that stores only changed blocks, preserves consistency, and integrates seamlessly with our existing CI/CD stack.  

**ACTION**  
1. **Requirements & Architecture** –  
   * Snapshots must be recoverable in < 2 min for production restores.  
   * Diff size should average ≤ 5 % of the full disk.  
   * Cost‑efficiency: keep S3 lifecycle rules at 7 days before transition to Glacier.  

I proposed a two‑tier design:  
* **Block Index Service** (AWS Lambda + DynamoDB) – hashes every 4 KB block, writes diffs to an “index” table keyed by VM‑ID+timestamp.  
* **Delta Store** (S3 with Object Lifecycle) – each diff is a compressed JSON of `{offset, length, hash}` plus the raw changed bytes stored as separate objects.  

Using *AWS Step Functions*, I orchestrated the pipeline: snapshot → block hashing → diff generation → upload. For scalability, the Lambda concurrency scales to 5 k invocations per second; DynamoDB auto‑scales with provisioned throughput of 10 K RCU/WCU.  

**RESULT**  
* Reduced snapshot size from 30 GB to an average of 1.2 GB (≈ 96 % savings).  
* Storage cost dropped by **$180k/year** at AWS.  
* Restore time remained under **90 s**, meeting SLAs.  

**LEARNING & BAR‑RAISER NOTES**  
I owned the end‑to‑end performance; I dove deep into DynamoDB hot‑partition patterns and Lambda timeout limits, iterating on block size to balance throughput vs. compression. The bar‑raiser will notice my data‑driven impact, ownership of failure modes (e.g., handling hash collisions), and continuous learning loop—re‑architecting the pipeline after a 7 % rollback rate due to corrupted diffs.  

**Leadership Principles Highlighted**  
* **Customer Obsession** – Deliver rapid restores for ops teams.  
* **Ownership & Dive Deep** – Own every layer of the stack, from hashing to lifecycle policies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
