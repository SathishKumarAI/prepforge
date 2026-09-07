---
qid: ing_27e6b3157f__faang__local
question: 'Explain: A user invokes their right to erasure and their data is in your
  fine-tuning set. Explain to a non-technical stakeholder why you cannot just delete
  it, and what you would actually do.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 264
output_tokens: 464
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:16:21-05:00'
sources: []
---

**Clarify**  
The user requests *right‑to‑erasure* (GDPR Art 17). They want any personal data we used to train our AI model removed. The data is part of a large fine‑tuning corpus that has already been incorporated into the model weights. We need to explain why simple deletion isn’t enough and outline what we’ll actually do.

**Approach**  
1. **Identify the data in the training set** (hash, timestamp).  
2. **Remove it from future training runs** – stop using that sample again.  
3. **Retrain or fine‑tune a new model** excluding the sample.  
4. **Version & audit** the new model to prove compliance.

**Depth**  
- *Why deletion fails*: Model weights are distributed representations; once a datum influences the network, its influence is entangled across millions of parameters—there’s no “delete‑token” operation.  
- *What we do*: We retrain from scratch (or fine‑tune a fresh copy) on the same data minus the offending sample. This yields a new model where gradients never incorporated that user’s information.  
- *Complexity*: Retraining costs compute time \(O(N \times E)\), but it guarantees erasure.  
- *Audit trail*: Store hashes, timestamps, and training logs to prove the exclusion.

**Edge cases**  
- If the data is duplicated across multiple shards, we must remove all copies.  
- If the user’s data was used in pre‑training (not just fine‑tuning), a full retraining of the base model may be required—significantly more expensive.  
- Users who have already interacted with the model might still see outputs influenced by their past data; we’ll explain that only future interactions are guaranteed to respect erasure.

**Optimize & communicate**  
We’ll document the process, provide a signed compliance report, and set up an automated pipeline that flags any new ingestion of removed data. In stakeholder terms: “We can’t simply erase a line from a book once it’s been read; we must rewrite the relevant chapters to ensure the user’s story no longer appears.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
