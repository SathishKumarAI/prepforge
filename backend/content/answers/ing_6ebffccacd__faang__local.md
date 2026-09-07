---
qid: ing_6ebffccacd__faang__local
question: Anyone can add documents to your corpus. How do you stop an attacker planting
  a document that hijacks the assistant?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 468
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:01:14-05:00'
sources: []
---

**Clarify**

> *Problem:* A user‑supplied document could contain malicious content (e.g., instructions to alter system behavior).  
> *Assumptions I’d confirm:*  
> 1. The assistant can ingest arbitrary text files via an API or UI.  
> 2. It uses a retrieval‑augmented generation pipeline where the corpus feeds into prompt construction.  
> 3. No prior vetting or sandboxing of documents exists.

**Approach**

1. **Input validation & sanitization** – reject disallowed characters/lengths.  
2. **Content filtering** – run the document through a multi‑stage classifier (NLP + ML).  
3. **Isolation** – store in a per‑user sandbox, limit its influence on prompts.  
4. **Audit & rollback** – keep a tamper‑evident log; allow manual review.

**Depth**

- *Classifier:* Combine a rule‑based scanner (regex for dangerous keywords) with a transformer fine‑tuned on labeled malicious vs benign docs.  
- *Prompt construction:* Use token‑budgeting to cap the influence of any single source; if a doc exceeds the threshold, it’s flagged.  
- *Sandboxing:* Store in an append‑only log; apply role‑based access control so only the uploader can query their own corpus.  
- *Rollback:* Each ingestion event is signed and stored; if post‑deployment anomalies occur, revert to previous snapshot.

**Edge Cases**

- Legitimate edge content (e.g., legal texts with “kill” as a verb) misclassified → false positives.  
- Adversaries craft obfuscated malicious phrases that bypass regex.  
- Large documents exceeding token limits but still harmful.

**Optimize & Communicate**

- *Performance:* Cache filtered results; batch classification during off‑peak hours.  
- *Explainability:* Provide users with a summary of why their doc was rejected or allowed, building trust.  
- *Iterate:* Continuously retrain the classifier on new attack vectors and audit logs.  

This layered defense—validation → filtering → isolation → audit—keeps attackers from hijacking the assistant while preserving legitimate user contributions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
