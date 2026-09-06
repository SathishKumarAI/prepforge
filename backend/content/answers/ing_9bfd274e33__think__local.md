---
qid: ing_9bfd274e33__think__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 528
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:22:37-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   • Identify what “back‑of‑the‑envelope” means in this context: quick, order‑of‑magnitude sizing of Airbnb’s core subsystems (search, booking, pricing, notifications).  
   • Assume a global user base (~10 M active users), 1 % conversion per search, and a peak load during holiday seasons.  

**2️⃣ Adopt a modular mental model**  
   • Break the system into key layers: **Front‑end API gateway → Service layer (search, booking, pricing) → Data stores (relational + cache) → Messaging & background jobs → Monitoring**.  
   • For each layer, list primary metrics: request per second (RPS), latency budget, storage size, and data consistency needs.

**3️⃣ Step‑by‑step reasoning**  
   a. **Search traffic**: 10 M users × 5 searches/day ≈ 50 M searches/day → ~580 req/s peak.  
   b. **Booking conversions**: 1 % of searches → 0.58 req/s → ~2‑3 bookings/second.  
   c. **Pricing updates**: daily adjustments for millions of listings → ~10⁶ writes/day ≈ 12 writes/sec.  
   d. **Cache sizing**: top 1 M listings × 200 B ≈ 200 MB; add user sessions ≈ 50 GB.  
   e. **Storage**: 100 M listings × 1 KB ≈ 100 GB + logs ≈ 10 TB/year.

**4️⃣ Avoid common traps**  
   • Don’t ignore peak‑to‑average ratios (use 3×–5×).  
   • Don’t assume linear scaling; remember queuing delays grow superlinearly.  
   • Beware of “magic numbers”—justify each assumption with real‑world analogues.

**5️⃣ Sanity check & communicate**  
   • Cross‑verify: if 580 req/s search yields ~2 bookings/sec, the conversion path is plausible.  
   • Present results in a concise table, highlighting key bottlenecks and recommended scaling strategies (e.g., sharding listings, using CDN for static assets).  

This structured approach lets you quickly estimate capacity while keeping the reasoning transparent and defensible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
