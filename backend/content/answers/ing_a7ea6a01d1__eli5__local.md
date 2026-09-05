---
qid: ing_a7ea6a01d1__eli5__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 301
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:04:07-05:00'
sources: []
---

Imagine building a gigantic, world‑wide hotel that anyone can book in minutes—Airbnb.  
The **non‑functional requirements** are the invisible rules that keep that hotel running smoothly, like the plumbing and elevators in a skyscraper. They don’t describe what guests can do (that’s the “functional” part), but they dictate how fast, reliable, and safe everything must be.

Think of them as a set of “traffic lights” for the system:

| Light | What it controls | Why it matters |
|-------|------------------|----------------|
| **Speed** (latency) | How quickly a page loads | Guests want instant answers. |
| **Capacity** (throughput) | Number of simultaneous bookings | The hotel must handle peak holiday traffic. |
| **Reliability** (availability) | Uptime and fault tolerance | A booking should never be lost because the server crashed. |
| **Security** | Protecting user data | Keeps guests’ passwords, credit cards, and reviews safe. |
| **Scalability** | Growing with demand | Adding new cities without redesigning the whole system. |

These lights must all stay green for Airbnb to feel like a real‑time, trustworthy marketplace. The design team builds servers, databases, caching layers, and monitoring tools so each “traffic light” never turns red.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
