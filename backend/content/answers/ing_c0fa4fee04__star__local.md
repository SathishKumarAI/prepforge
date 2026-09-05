---
qid: ing_c0fa4fee04__star__local
question: 'Explain: Design Requirements — Airbnb System Design - by Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 334
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:56:11-05:00'
sources: []
---

**Situation** – While working on a hackathon prototype for an online marketplace, my teammate and I were asked to design a scalable booking platform similar to Airbnb. The challenge was to outline clear requirements before diving into code.

**Task** – We needed to define functional specs (search, booking, payments), non‑functional goals (latency < 200 ms, 99.9% uptime), data model constraints, and security standards—all in a single sprint.

**Action** – I started by mapping user journeys: guest searches → host listings → availability calendar → payment gateway → confirmation. For each step I identified key entities—User, Listing, Reservation, Review—and drafted ER diagrams. I set performance targets based on Airbnb’s public metrics (e.g., 10 k concurrent users) and chose a micro‑service architecture with Kubernetes for auto‑scaling. To satisfy data consistency, I opted for eventual consistency in the reservation service and strong consistency for payment transactions using a two‑phase commit pattern. Security requirements included OAuth2, PCI‑DSS compliance, and rate limiting.

**Result** – The final requirement document was completed 12 hours ahead of schedule, earned approval from senior mentors, and guided our team to build a minimal viable platform that handled 1,200 concurrent searches with <180 ms latency during the demo. I learned how precise requirement scoping drives efficient architecture decisions and keeps large systems maintainable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
