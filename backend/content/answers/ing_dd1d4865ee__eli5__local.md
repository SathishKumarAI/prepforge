---
qid: ing_dd1d4865ee__eli5__local
question: What is an Event-Driven Architecture?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 273
total_tokens: 429
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:19-05:00'
sources: []
---

Imagine a kitchen where every dish you make starts because something happens in the room—someone knocks on the door (an event), a timer rings, or the fridge lights up when it’s empty. In an **Event‑Driven Architecture** (EDA) software works the same way: the system watches for *events*—small signals that “something happened.” When an event appears, one or more *listeners* (special programs called services) jump in and react automatically.

Think of each service as a chef who knows how to handle a particular cue. If the “Order Placed” event rings, the “Cooking” service starts preparing food; if the “Payment Confirmed” event comes, the “Shipping” service packs it. Services stay independent, only talking when an event triggers them, so the kitchen can keep running smoothly even if one chef is busy or leaves.

Key terms:  
- **Event** – a notification that something occurred (e.g., “Order Placed”).  
- **Listener/Service** – software that waits for events and acts when they happen.  

In short, EDA lets programs respond instantly to changes, just like chefs reacting to kitchen cues—fast, flexible, and organized.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
