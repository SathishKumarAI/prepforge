---
qid: ing_ddd9f7b539__star__local
question: 'Explain: Functional Requirements — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 368
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:52:07-05:00'
sources: []
---

**Situation:**  
During my senior capstone project I was tasked with designing an end‑to‑end online marketplace similar to Airbnb for a university hackathon. The client needed a platform that could handle property listings, user bookings, payments, and reviews while scaling to thousands of concurrent users.

**Task:**  
I had to define the functional requirements: what features the system must support, how they interact, and the data flows that enable seamless booking, search, and payment processing.

**Action:**  
First, I mapped out key user stories—searching by location/date, viewing detailed listings, making a reservation, processing payments via Stripe, and leaving reviews. I drafted a feature diagram using Lucidchart, then translated each story into functional requirements: 
- *Search API* (filter by date, price, amenities) with pagination.  
- *Booking Engine* that locks availability in real time using optimistic concurrency control.  
- *Payment Service* that authorizes, captures, and refunds through the Stripe SDK.  
- *Review System* that requires verified stays before allowing a rating.  
I also identified cross‑cutting concerns: authentication (JWT), rate limiting, and audit logging. Tools used included Postman for API contract testing and Docker Compose to simulate microservices.

**Result:**  
The prototype handled 2,500 concurrent search requests with <200 ms latency and processed 1,000 bookings per hour without race conditions. The client awarded our team a “Best Design” trophy, and I learned how precise functional specs turn complex business logic into scalable services—essential for any production‑grade marketplace.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
