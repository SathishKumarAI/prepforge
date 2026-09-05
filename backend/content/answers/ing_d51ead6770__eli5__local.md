---
qid: ing_d51ead6770__eli5__local
question: 'Explain: AI Infrastructure Design — System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 278
total_tokens: 435
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:12:25-05:00'
sources: []
---

Imagine you’re building a gigantic library that can read and answer questions about any book instantly. In an **AI infrastructure design** interview, the interviewer asks you to explain how you would build that library so it’s fast, reliable, and cheap.

Think of the *books* as data, the *reading room* as a machine‑learning model, and the *library staff* as software services.  
1. **Data storage (the shelves)** – choose databases or object stores that let you pull huge volumes quickly.  
2. **Processing power (the reading desks)** – decide whether to use GPUs, TPUs, or CPUs, and how many for training vs. inference.  
3. **Model serving (the librarians)** – design stateless APIs so new requests never wait on a single server.  
4. **Scaling (adding more floors)** – use load balancers, auto‑scaling groups, and caching to handle traffic spikes.  
5. **Monitoring & cost (maintenance budget)** – set alerts for latency or errors and track usage to keep bills predictable.

By mapping each part of the system to a familiar library component, you show you understand how data, compute, networking, and economics all fit together in an AI stack.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
