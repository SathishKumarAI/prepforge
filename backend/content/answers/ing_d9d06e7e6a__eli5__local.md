---
qid: ing_d9d06e7e6a__eli5__local
question: How to choose a CDN? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 311
total_tokens: 506
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:19:20-05:00'
sources: []
---

Choosing a CDN (Content Delivery Network) is like picking the best set of post‑offices to deliver your mail quickly and reliably.

**Think of each CDN as a chain of post‑offices spread across the world.**  
- *Coverage* = how many cities (servers) they have – the more, the faster your data reaches users far away.  
- *Latency* = the time it takes for a letter to travel from the sender’s office to the nearest recipient office – you want this as low as possible.  
- *Bandwidth* = how much mail each office can handle at once – if traffic spikes, a big‑capacity office keeps things moving.  
- *Cost* = how many coins you pay per post‑office and per letter sent – cheaper networks may have fewer offices or slower speeds.

When your machine‑learning model serves predictions to users everywhere, pick the CDN that:

1. **Has edge servers near all major user regions** (good coverage).  
2. **Shows low round‑trip times in those regions** (low latency).  
3. **Can handle a burst of prediction requests without throttling** (high bandwidth).  
4. **Fits your budget while meeting the above needs** (cost‑effective).

Just as you’d choose the post‑office that delivers your letters fastest and cheapest, pick the CDN that gives the quickest, most reliable delivery for your ML predictions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
