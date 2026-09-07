---
qid: ing_2406888800__aws__local
question: 'Explain: Interview questions — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 439
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:48:13-05:00'
sources: []
---

**Prompt Engineering & Context Management – A Design‑Driven Response**

> **Leadership Principles:** *Customer Obsession* (understand user intent), *Ownership* (own the end‑to‑end experience), and *Dive Deep* (examine every layer of the prompt pipeline).

### Situation
At my previous role, we built a conversational AI that served 200 k monthly users. Users complained that the bot “forgot” prior context after five turns, leading to a 30 % drop in satisfaction scores.

### Task
I was tasked with redesigning the prompt‑engineering workflow so the system could maintain coherent dialogue across long sessions while keeping latency < 300 ms and cost <$0.02 per user request.

### Action
1. **Context Layer** – Persisted conversation state in a *Redis* cluster (high‑throughput, low‑latency).  
2. **Prompt Composition** – Built a templating engine that injects the last 3 turns + key metadata into the prompt sent to an *Amazon Bedrock* foundation model.  
3. **Scalability & Cost** – Used *AWS Lambda@Edge* to pre‑fetch context from Redis, reducing round‑trip time; leveraged *SageMaker Neo* for edge inference when latency spikes.  
4. **Monitoring** – Implemented CloudWatch metrics (prompt size, latency) and automated alerts.

### Result
- Context fidelity improved by 75 % (measured via a custom “context retention” score).  
- User satisfaction rose from 68 % to 91 %.  
- Operational cost dropped 18 % due to efficient prompt sizing.  

**Bar‑raiser takeaways:** I demonstrated *ownership* by owning the entire data flow, *dive deep* into latency and cost trade‑offs, quantified impact with clear metrics, and iterated on failures (initially over‑fetching context caused memory spikes).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
