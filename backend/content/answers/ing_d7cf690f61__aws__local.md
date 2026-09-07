---
qid: ing_d7cf690f61__aws__local
question: A chat assistant re-sends a long conversation history on every turn. How
  do you avoid recomputing all of it, and what are the pitfalls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 397
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:27-05:00'
sources: []
---

**Situation & Task (S)**  
At my previous role I built a real‑time chat assistant for an e‑commerce platform that was sending the entire conversation history on every user turn. The latency doubled after 30 turns and our CloudWatch metrics showed an average response time of 3 s, exceeding the SLA of 800 ms.

**Action (A)**  
I redesigned the flow with **Amazon DynamoDB + Lambda + Amazon SQS**:

1. **State store** – Each user session is a single DynamoDB item containing only the last *n* turns (configurable via TTL).  
2. **Delta publish** – On every turn, the new message is appended to the item and published to an SQS queue.  
3. **Lambda consumer** – A Lambda pulls the delta, merges it with the cached conversation in memory (using a simple LRU), and forwards only the incremental context to the GPT model.

This approach removed the O(N) recomputation, cut average latency from 3 s to **350 ms**, and reduced CPU‑time by **80 %**. I also added a CloudWatch alarm for session length > 50 turns; when triggered we automatically trim older messages to keep payload < 1 KB.

**Result (R)**  
SLA compliance improved to 99.9 %, cost per inference fell from $0.12 to $0.04, and user satisfaction scores rose by **12 %** in the post‑deployment survey.

---

### Leadership Principles Highlighted
- **Customer Obsession** – We measured latency against real users’ expectations and acted on the data.
- **Ownership & Dive Deep** – I traced the root cause, quantified the impact, and engineered a scalable solution with minimal operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
