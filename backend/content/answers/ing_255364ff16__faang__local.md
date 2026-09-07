---
qid: ing_255364ff16__faang__local
question: 'Explain: of a pathing towards we mentioned that — Amazon System Design
  Interview: Design Parking Garage'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 532
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:10:27-05:00'
sources: []
---

**1️⃣ Clarify**  
Design an online parking‑garage reservation & payment system for a large urban complex (≈ 5 000 spaces).  
Assumptions:  
- Users book by car‑make/model or license plate; no valet service.  
- Real‑time availability, multi‑day reservations, and dynamic pricing.  
- Integration with mobile app, web portal, and existing payment gateway.  

**2️⃣ Approach**  
1. **Requirements & constraints** – functional (reserve, cancel, pay), non‑functional (latency < 200 ms, 99.9 % uptime).  
2. **High‑level architecture** – microservices: Auth, Booking, Pricing, Inventory, Notification, Payment.  
3. **Data model** – `Space(id, level, status)`, `Reservation(id, spaceId, userId, start, end, price)`.  
4. **Availability engine** – cache (Redis) + relational DB for persistence; optimistic locking to avoid double booking.  

**3️⃣ Depth**  
- *Booking flow*: Auth → Availability check (cache hit; if stale, read‑through to DB) → Create reservation record → Reserve space in cache → Trigger payment.  
- *Concurrency*: Use Redis `SETNX` on `space:{id}` key with expiry = reservation end time to lock the slot.  
- *Pricing*: Event‑driven service updates price based on demand; store in a separate `PriceHistory`.  
- *Payment*: Asynchronous saga pattern – reserve → payment → confirm or rollback.  

**4️⃣ Edge Cases**  
- Network partition: fallback to read‑only DB, mark as “pending” and retry.  
- Time zone mismatches for multi‑day bookings.  
- Sudden surge (e.g., sports event) causing cache thrash – implement rate limiting per user/IP.  

**5️⃣ Optimize & Communicate**  
- **Performance**: Batch inventory reads; use CDN for static assets.  
- **Scalability**: Horizontal scaling of booking service with sticky sessions to Redis.  
- **Observability**: Distributed tracing (OpenTelemetry), metrics on reservation success rate, latency histograms.  

Narration: I’d start by validating assumptions, sketch the domain model, then iterate from a single‑service MVP to a fully decoupled microservice stack, always tying back to SLAs and user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
