---
qid: ing_8d46b9ffc7__aws__local
question: 'Q: What is the "Indirect Prompt Injection" risk in RAG systems?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 554
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:21-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“Indirect Prompt Injection” in Retrieval‑Augmented Generation (RAG) is when a malicious user subtly manipulates the retrieval stage so that the LLM ingests biased or false documents, leading to hallucinated or harmful outputs—even if the prompt itself looks innocuous.*  

---

## Behavioral (STAR)

**Situation** – I led the security review for an internal RAG product used by 3 M users.  
**Task** – Identify and mitigate hidden injection vectors that could corrupt downstream generation.  
**Action** – Implemented a *retrieval‑audit layer* that:  
1. Scores each fetched document with a “trust score” (based on source reputation, recency, and cross‑validation).  
2. Uses **AWS GuardDuty** + **Amazon Macie** to flag anomalous query patterns.  
3. Wraps the retrieval API in an AWS Lambda that enforces rate limits and logs every request to **CloudWatch Logs** for forensic analysis.  
**Result** – Reduced injection incidents by 92 % (from 5 per day to <0.4), lowered mean time to recovery from 12 h to 30 min, and cut cost of manual reviews by $18k/month.

---

## Technical/System

| Component | AWS Service | Reasoning |
|-----------|-------------|-----------|
| Retrieval filtering | **Amazon Kendra** (semantic search) + custom trust scoring | Scales to billions of docs; built‑in relevancy |
| Anomaly detection | **GuardDuty** + **Macie** | Detects abnormal query spikes, credential misuse |
| Orchestration | **AWS Lambda** (stateless) | Low latency, auto‑scaling, cost‑effective |
| Logging & Alerting | **CloudWatch Logs** + **SNS** | Real‑time alerts to ops team |

*Trade‑offs:* Adding a trust layer increases retrieval latency (~15 ms), but this is acceptable for user experience while significantly boosting security posture.

---

### What a bar‑raiser listens for  
- **Ownership:** Took end‑to‑end responsibility, from threat modeling to production rollout.  
- **Dive Deep:** Quantified impact (92 % reduction) and dissected failure modes.  
- **Learning from Failure:** Iterated on the trust score after a false‑positive incident, improving precision by 8 %.  

This showcases Amazon’s principles: **Customer Obsession**, **Ownership**, and **Bias for Action** while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
