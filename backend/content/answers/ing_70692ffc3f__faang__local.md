---
qid: ing_70692ffc3f__faang__local
question: 'Explain: 1.6. Code on Demand ( Optional ) — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 484
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:04:48-05:00'
sources: []
---

**Clarify**  
The interviewer wants a concise yet deep explanation of *REST* and its typical use in “Code on Demand” (the optional server‑side logic that can be executed remotely). I’ll assume they’re looking for: the core principles of REST, how it maps to HTTP verbs, and why a client might invoke code on demand via an API.

**Approach**  
1. Define REST as an architectural style.  
2. Enumerate its constraints (statelessness, uniform interface, cacheable).  
3. Show mapping to CRUD/HTTP verbs.  
4. Explain the “code‑on‑demand” optional constraint.  
5. Give a practical example of a client calling a server‑side function.

**Depth**  
REST = *Representational State Transfer*. It treats every resource as an addressable URI and manipulates it through a uniform interface—primarily the four verbs: **GET** (read), **POST** (create), **PUT/PATCH** (update), **DELETE** (remove). Constraints:

- **Stateless** – each request contains all context; servers don’t store session state.  
- **Cache‑able** – responses must be labeled cache‑control so intermediaries can reuse them.  
- **Uniform interface** – simplifies architecture and decouples clients from services.  

*Code‑on‑Demand* (optional) lets the server send executable code to a client (e.g., JavaScript). The client executes it, allowing dynamic UI updates or custom logic without redeploying the app. For example, an e‑commerce API might expose `/widgets/price-calculator` that returns a small JS snippet; the front‑end runs it to compute discounts locally.

**Edge Cases**  
- Overuse of code‑on‑demand can break caching and increase security risk (XSS).  
- Statelessness must be respected: no hidden session cookies unless explicitly handled.  

**Optimize & Communicate**  
I’d finish by highlighting trade‑offs: REST’s simplicity vs. the flexibility of GraphQL, and how code‑on‑demand fits into progressive web apps. This demonstrates structured thinking, clear communication, and depth—key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
