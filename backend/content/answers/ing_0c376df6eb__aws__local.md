---
qid: ing_0c376df6eb__aws__local
question: 'Q: Walk me through the consolidation policy you would design for episodic-to-semantic
  transition. When does an episode become a fact?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 474
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:53:20-05:00'
sources: []
---

**Situation & Task**  
At my last role I led the data‑quality team for a conversational AI platform that captured millions of user interactions (episodes). The product vision required us to turn those raw, noisy episodes into high‑confidence facts for downstream recommendation and analytics. My goal: design an automated consolidation policy that guarantees *exact* fact extraction while keeping latency < 200 ms per episode.

**Action – Policy Design**  
1. **Trigger & Windowing** – An episode is considered “ready” once the user has finished speaking or a timeout of 5 s occurs.  
2. **Confidence Scoring** – Each utterance gets an NLU confidence score (AWS Comprehend). We compute a weighted average; if > 0.92, we flag the whole episode as *candidate fact*.  
3. **Temporal Consistency Check** – Using DynamoDB Streams, we compare consecutive episodes for the same user. If semantic entities repeat within 30 s and their timestamps differ by < 2 s, we merge them (AWS Lambda).  
4. **Versioning & Audit** – Consolidated facts are stored in a “Facts” table with a version counter; all raw episodes remain in S3 for rollback.

**Result**  
- Fact precision rose from 78 % to **94 %**, measured against manual QA on 10k samples.  
- Latency stayed below 190 ms, meeting SLA.  
- Cost savings of ~30 % by reducing downstream storage (AWS S3) and compute (Lambda invocations).

**Reflection & Learnings**  
I owned the end‑to‑end pipeline, diving deep into AWS metrics to tune thresholds. A failed pilot taught me that hard‑coded confidence cutoffs were brittle; introducing a lightweight ML model for dynamic scoring improved robustness by 12 %.  

**Leadership Principles**  
- **Customer Obsession** – Delivered cleaner data for our product users.  
- **Ownership & Dive Deep** – Took full responsibility, iterated on metrics until results met business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
