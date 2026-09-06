---
qid: ing_9ca6be519a__think__local
question: 'Explain: Daily Reservations and TPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 446
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:25:54-05:00'
sources: []
---

**1. Clarify the request & set assumptions**  
   * Confirm you’re asked to explain two key components of Airbnb’s design paper: **Daily Reservations** and **TPS (Transaction Processing System)**.  
   * Assume the audience has a basic CS background but may not know the original paper.

**2. Adopt a “component‑by‑purpose” mental model**  
   * Treat each term as a subsystem with inputs, outputs, constraints, and trade‑offs.  
   * Map them onto familiar patterns (e.g., TPS ↔ OLTP, Daily Reservations ↔ booking window logic).

**3. Step‑by‑step reasoning**  
   1. **Daily Reservations** – describe the problem it solves (single‑day stays vs multi‑night), why a separate service matters for latency & scaling.  
   2. Outline its data model: reservation ID, guest, listing, dates, status.  
   3. Explain how it handles conflicts (optimistic locking, distributed queues).  
   4. Move to **TPS** – define what “transaction” means in Airbnb context (payment + booking commit).  
   5. Show its ACID guarantees, use of two‑phase commit or saga patterns, and how it interfaces with payment gateways.  
   6. Highlight the interaction: TPS updates Daily Reservations upon success.

**4. Avoid common pitfalls**  
   * Don’t mix up “TPS” (transaction processor) with “TPS” as throughput per second.  
   * Don’t gloss over consistency; emphasize eventual vs strong consistency in a distributed setting.  
   * Skip unnecessary jargon—use plain language and analogies.

**5. Sanity‑check & communicate**  
   * Re‑read your outline to ensure each bullet answers the “why” and “how”.  
   * If explaining aloud, start with a quick story: “Imagine a user books a single night…”.  
   * End by summarizing how both components together enable reliable, high‑scale bookings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
