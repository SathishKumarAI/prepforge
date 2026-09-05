---
qid: ing_c0fa4fee04__eli5__local
question: 'Explain: Design Requirements — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 280
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:42:29-05:00'
sources: []
---

**Designing an Airbnb‑style app is like building a bustling city of short‑term homes, but with the twist that everyone can be both tenant and landlord at once.**

*The main “design requirements” are:*

1. **Functionality** – guests must browse listings, book dates, pay, and review; hosts must list rooms, set prices, and manage calendars.
2. **Scalability** – the system should handle millions of users and bookings without slowing down (think a city that can grow without traffic jams).
3. **Reliability** – if a host’s listing goes offline or a payment fails, the app still works for everyone else (like having backup power in every house).
4. **Performance** – search results appear instantly; booking confirmation is almost immediate.
5. **Security & Privacy** – user data and payments are protected, just as a city guards its residents’ safety.

*In practice, you’d split the app into services—search, booking, payment, reviews—and connect them with APIs, use caching for quick lookups, and run each service on many servers so that even if one crashes, the rest keep running. That’s the essence of Airbnb’s design requirements.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
