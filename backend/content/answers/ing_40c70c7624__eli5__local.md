---
qid: ing_40c70c7624__eli5__local
question: 'Explain: Challenges — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 266
total_tokens: 425
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:18:48-05:00'
sources: []
---

Think of cloud‑native authorization like a smart home that’s built from many tiny, independent rooms (microservices). Each room has its own lock, but all locks must work together so the whole house stays secure and still lets people move freely.

The **five laws** are rules that make sure every lock behaves correctly:

1. **Least‑Privilege Law** – give a person only the keys they really need; no extra doors open.  
2. **Separation of Duties Law** – don’t let one key control both opening and closing; different keys handle different tasks.  
3. **Defense in Depth Law** – put extra locks on critical rooms so if one fails, others still protect the space.  
4. **Auditability Law** – keep a log of who used which key and when, so you can trace any problem later.  
5. **Consistency Law** – all locks must read the same permissions from the central “key‑vault”; otherwise a door might open when it shouldn’t.

The challenge is keeping every lock synchronized while still letting people move quickly through the house—balancing tight security with smooth, fast access.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
