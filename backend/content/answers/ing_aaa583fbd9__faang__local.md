---
qid: ing_aaa583fbd9__faang__local
question: 'Explain: Out of Scope — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 494
total_tokens: 733
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:21:19-05:00'
sources: []
---

**Clarify**  
You’re asked to explain why “Out‑of‑Scope” is a valid response when designing an Instagram clone in a system‑design interview. I’ll assume the interviewer wants you to demonstrate judgment on feature trade‑offs, scalability limits, and realistic MVP boundaries.

**Approach**  
1. Define what “out of scope” means (features beyond the core user story).  
2. Map high‑level components: feed service, storage, CDN, notifications.  
3. Identify optional or future‑able features: AR filters, in‑app shopping, live streaming, AI‑driven moderation.  
4. Explain criteria for exclusion: latency impact, data volume, engineering effort vs business value.

**Depth**  
- **Core MVP**: upload, feed, likes/comments, basic profile.  
- **Out‑of‑Scope Features**:
  - *Live video*: requires real‑time transcoding, CDN edge scaling—significant ops cost.  
  - *Advanced search/filters*: complex indexing, machine‑learning pipelines that add latency.  
  - *AR filters*: GPU‑heavy, low‑bandwidth devices struggle.  
  - *E‑commerce integration*: introduces payment gateway compliance and fraud detection layers.  
- **Trade‑offs**: Including live video would double read/write traffic; adding AR filters forces a redesign of the media pipeline (GPU vs CPU). By deferring these, we keep the system simpler, reduce risk, and focus on core engagement metrics.

**Edge Cases**  
- A sudden spike in user base could expose hidden bottlenecks in the MVP.  
- If the business pivots to live commerce, our “out‑of‑scope” list would need revisiting.  
- Regulatory changes (GDPR) might force adding data‑retention features we initially omitted.

**Optimize & Communicate**  
Explain that “out of scope” is a strategic decision: it keeps the architecture lean, ensures faster delivery, and allows iterative refinement. I’d narrate this by showing a simple diagram, labeling core vs optional services, and quantifying expected load/latency differences. This demonstrates structured thinking, prioritization skills, and an understanding of real‑world constraints—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
