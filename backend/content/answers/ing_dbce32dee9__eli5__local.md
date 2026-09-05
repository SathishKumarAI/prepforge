---
qid: ing_dbce32dee9__eli5__local
question: You need to serve a Llama-class 70B+ model to hundreds of millions of assistant
  users. What does the serving stack look like and where does the money go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 282
total_tokens: 464
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:22:06-05:00'
sources: []
---

Imagine your AI is a gigantic library that can answer any question in seconds.  
**Serving stack**:  

1. **Hardware “bookshelves”** – super‑fast GPUs or TPUs that hold the model’s weights (the brain).  
2. **“Librarians”** – inference servers that load those weights into memory and wait for visitors.  
3. **“Book‑tellers”** – a lightweight service that takes user questions, splits them into tokens, asks the librarians, then stitches the replies back together.  
4. **“Crowd‑control”** – an autoscaler that spins up more librarians when traffic spikes, and pulls them down when it eases.

**Where the money goes**:  

- **Hardware** (GPUs/TPUs) – usually a large upfront cost plus ongoing electricity for cooling.  
- **Cloud or on‑prem servers** – rent or power costs for the inference machines.  
- **Networking & storage** – bandwidth and disk to keep model files available.  
- **People & ops** – engineers who build, monitor, and tune the whole system.

In short, you’re paying mainly for the powerful “bookshelves” and the people who keep the library open 24/7.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
