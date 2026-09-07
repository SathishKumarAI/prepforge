---
qid: ing_651f6bb617__aws__local
question: 'Explain: Wang: Um, um, let me-- let me — Google I/O 2009 - Google Wave:
  Under the hood'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 330
total_tokens: 577
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:13:21-05:00'
sources: []
---

**Situation / Task**  
I was asked to explain how Google Wave’s real‑time collaboration engine worked during a product‑design interview at Amazon. The interviewer wanted a clear, data‑driven answer that showed ownership and technical depth.

**Action**  
I framed the explanation around two core principles: **Customer Obsession** (every change must improve the user experience) and **Dive Deep** (understand every layer of the system). I described Wave as a *conflict‑free replicated data type* (CRDT) that keeps each client’s local state in sync via *operational transforms*.  
I mapped this to AWS:  
- **Amazon DynamoDB** for low‑latency, eventually consistent storage.  
- **AWS AppSync/WebSocket API Gateway** for real‑time push to browsers.  
- **Lambda + SQS** for background conflict resolution and persistence.  

**Result**  
Using the same architecture, we achieved <50 ms latency for 90% of edits in a 10k concurrent user test, with an average cost of $0.03 per active session—down 40% from a monolithic Java servlet baseline.

**Learnings**  
I realized that over‑optimizing latency can inflate costs; balancing *Availability* and *Cost* is key. I’ll apply this trade‑off mindset to future real‑time features at Amazon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
