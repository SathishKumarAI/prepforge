---
qid: ing_ddd9f7b539__think__local
question: 'Explain: Functional Requirements — Airbnb System Design - by Neo Kim and
  Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 446
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:37:00-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   • Confirm that “Functional Requirements” refers to *what* the system must do (e.g., listing creation, booking flow).  
   • Assume a typical Airbnb‑style marketplace with hosts, guests, listings, reservations, payments, and reviews.  
   • Note any constraints mentioned in Neo Kim & Hayk’s design notes (e.g., no third‑party APIs, focus on core features).

**2️⃣ Adopt a functional‑analysis framework**  
   • Use the **DDD/Use‑Case** lens: identify *actors* (host, guest, admin), *actions* (create listing, search, book), and *outcomes*.  
   • Map each use case to high‑level services or micro‑services (e.g., ListingService, BookingService).  

**3️⃣ Step‑by‑step reasoning**  
   1. List all actors → host, guest, system admin, payment gateway.  
   2. For each actor, enumerate primary actions they perform.  
   3. Translate each action into a *functional requirement* (e.g., “Guests can search listings by location, date, and price”).  
   4. Group related requirements under functional domains (search, booking, payment, reviews).  
   5. Identify cross‑cutting concerns (authentication, authorization, notifications).  

**4️⃣ Common traps to avoid**  
   • Mixing *non‑functional* (performance, scalability) with functional items.  
   • Over‑specifying UI details; focus on the “what” not the “how”.  
   • Forgetting edge cases: cancellations, refunds, dispute resolution.

**5️⃣ Sanity‑check & verbalize**  
   • Cross‑reference each requirement against the original design diagram to ensure coverage.  
   • Explain each requirement aloud as if teaching a teammate—this reveals gaps or ambiguities.  

Follow this process and you’ll produce a clear, complete set of functional requirements that align with Neo Kim & Hayk’s Airbnb system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
