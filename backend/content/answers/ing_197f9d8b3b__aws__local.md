---
qid: ing_197f9d8b3b__aws__local
question: 'Explain: Sliding Windows vs. Summarization — Short Term Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 460
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:23:56-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a feature that delivered real‑time intent extraction for a voice assistant. The challenge was to keep the model’s short‑term context window small enough for low latency while preserving accuracy.

**Action (Technical)**  
I compared **Sliding Windows** (fixed N tokens) with **Summarization** (compressing past utterances into an abstract).  
* Design:*  
- *Sliding Window* → store last 512 tokens in a **DynamoDB** cache, fetch via **Lambda**, feed to the transformer.  
- *Summarization* → run a lightweight encoder on the entire dialogue history, produce a 64‑token summary stored in **S3**; only the summary is passed downstream.  

I used **SageMaker Processing** to benchmark both pipelines, measuring throughput (tokens/sec) and inference latency.

**Result**  
Sliding Window gave *+12 %* accuracy on intent recall but doubled CPU usage (4 vCPUs vs 2). Summarization cut cost by *30 %* and kept latency under 120 ms, while still achieving *94 %* of the sliding‑window accuracy. The trade‑off was a slight drop in edge‑case detection, which we mitigated with a fallback rule.

**Reflection (Amazon Leadership)**  
- **Ownership:** I owned the end‑to‑end experiment and delivered production code.  
- **Dive Deep:** I dissected model internals and AWS cost models to justify the switch.  
- **Bias for Action & Deliver Results:** The new pipeline reduced billable hours by $15k/month while maintaining user satisfaction scores above 4.8/5.  

Bar‑raisers would note my data‑driven decision, clear trade‑off analysis, and learning loop (adding a hybrid approach for rare utterances).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
