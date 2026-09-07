---
qid: ing_696ef7a5c3__aws__local
question: 'Explain: Action-item extraction & the faithfulness gate'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 463
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:22:24-05:00'
sources: []
---

**Situation (S)** – At my previous role I led a feature that turned meeting transcripts into actionable “next‑step” lists for a SaaN collaboration tool. The product promised to cut manual note‑taking by 70 % and boost user retention.

**Task (T)** – Build an *action‑item extraction* pipeline that reliably pulls tasks from spoken language, then apply a *faithfulness gate* so the system never mis‑labels or invents actions beyond what was said.  

**Action (A)** –  
1. **Ownership & Dive Deep**: I scoped the problem into two stages—(a) NLP inference and (b) validation.  
2. **Design**:  
   * **AWS Lambda + Amazon SageMaker Endpoint** for a fine‑tuned BERT model that tags verbs+objects as “action”.  
   * **Amazon DynamoDB** stores raw transcript, extracted items, and confidence scores.  
   * **AWS Step Functions** orchestrate the flow and trigger an *audit microservice* (Python + SpaCy) that cross‑checks each item against the original transcript using semantic similarity (>0.85 threshold). If a mismatch is detected, the gate rejects or flags it for human review.  
3. **Bias for Action & Invent & Simplify**: I added a lightweight caching layer (ElastiCache Redis) to reuse recent inference results, cutting latency from 1 s to <300 ms per transcript.  

**Result (R)** – The system achieved **96 % precision and 93 % recall** on our internal test set, reduced user‑reported errors by **40 %**, and increased daily active users by **18 %** within three months. I documented lessons learned—balancing model complexity with cost—and iterated the gate threshold based on post‑deployment analytics.

> *Bar‑raiser note*: Demonstrates ownership (lead scope), depth (model + validation logic), quantified impact, and learning from failure (threshold tuning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
