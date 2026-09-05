---
qid: ing_555b6b5dac__eli5__local
question: 'Explain: CP, AP, and CA — CAP Theorem | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 264
total_tokens: 427
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:52:11-05:00'
sources: []
---

Imagine you’re baking a three‑layer cake for a party.  
**Consistency (C)** means every slice of the cake tastes exactly the same—if one guest eats chocolate, everyone else gets chocolate too.  
**Availability (A)** is like having a waiter who always brings a fresh slice whenever someone asks—no one has to wait for the kitchen.  
**Partition tolerance (P)** is the guarantee that even if the kitchen’s power goes out in one room, the rest of the party can still get slices and keep the cake flowing.

The **CAP theorem** says a distributed system can only guarantee two of these three at once. It’s like choosing between:  
- *Consistent & Available* (everyone gets the same slice instantly, but if a power cut happens you stop serving)  
- *Available & Partition‑tolerant* (you keep serving even during outages, though some slices may differ)  
- *Consistent & Partition‑tolerant* (every slice is identical across all rooms, but if a room loses power the whole party must pause).

In real life, designers pick the two that best fit their app’s needs and accept the trade‑off.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
