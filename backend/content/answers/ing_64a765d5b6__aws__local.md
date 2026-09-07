---
qid: ing_64a765d5b6__aws__local
question: 'Q: How do you handle "Memory Fatigue" where an agent brings up too many
  irrelevant past details?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 394
total_tokens: 635
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:12:25-05:00'
sources: []
---

**Customer Obsession | Ownership**

*Situation*:  
In a production chatbot that serves 1 M daily users, I noticed the LLM‑based “Memory” module was pulling in ~30 KB of past context per turn, inflating GPU usage by 35 % and causing >200 ms latency spikes during peak hours.

*Task*:  
Reduce irrelevant memory retrieval without hurting user satisfaction (target < 90 % NPS).

*Action*:  
1. **Dive Deep** – logged every retrieval event; discovered that 80 % of fetched facts were older than 48 h or had a relevance score < 0.2.
2. **Invent & Simplify** – replaced the naive key‑value store with an **Amazon DynamoDB Global Secondary Index (GSI)** keyed on `userId|timestamp`. Added a *relevance* attribute and used DynamoDB’s **FilterExpression** to fetch only items with relevance > 0.3 and timestamp within 48 h.
3. Implemented a **Lambda layer** that runs a lightweight TF‑Lite model to re‑rank the candidates before passing them to the LLM, reducing context size from ~30 KB to ~8 KB per turn.
4. Deployed changes via **AWS CodePipeline** with canary traffic shifting; monitored latency and GPU usage.

*Result*:  
- Latency dropped 60 % (from 350 ms to 140 ms).  
- GPU cost fell 28 % annually (~$48k).  
- NPS improved from 82 % to 89 %.  

**Bar‑raiser takeaways** – I took full ownership, performed data‑driven analysis, engineered a scalable AWS solution, quantified impact, and iterated based on real user metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
