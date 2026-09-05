---
qid: ing_0438e2f6b3__star__local
question: 'Explain: Browser DNS caching — Why DNS Based Global Server Load Balancing
  (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 336
total_tokens: 587
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:37:14-05:00'
sources: []
---

**Situation** – While working on a global e‑commerce platform, we noticed that users in Asia were consistently hitting our US‑based edge servers, causing latency spikes during the holiday season. The issue was traced to the browser’s DNS cache holding stale A records from a previous GSLB round.

**Task** – I had to redesign our traffic routing so that each user reached the nearest server without being stuck on outdated DNS entries, while keeping the cost of additional queries low.

**Action** – First, I disabled the GSLB’s single‑step DNS lookup and introduced a secondary “smart proxy” layer. The browser would resolve to a short‑TTL (5 s) CNAME that pointed to an always‑updating reverse‑proxy farm. This proxy performed real‑time IP selection based on latency and server health, then returned the final IP via a fresh DNS response. I also added a “stale‑while‑revalidate” header in our HTTP responses so browsers could cache content but still check for newer DNS entries.

**Result** – Latency dropped from 350 ms to under 120 ms for 80% of Asian users, and the CDN hit ratio improved by 25%. The exercise taught me that DNS caching is a double‑edged sword: it reduces lookup overhead but can lock traffic into suboptimal paths if not managed with short TTLs and secondary routing layers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
