---
qid: ing_0dabb9a134__eli5__local
question: 'Explain: Migrating Live — From Zero to 50 Million Uploads per Day: Scaling
  Media at Canva - Canva Engineering Blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 282
total_tokens: 455
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:57:05-05:00'
sources: []
---

Imagine a bustling train station that suddenly has to handle 50 million passengers each day instead of just a few thousand. The platform (Canva’s media storage) is already built for small crowds, but now it must support huge traffic without delays.

**Migration “live”** means the trains (user uploads) keep arriving while the station upgrades its tracks and platforms. Engineers can’t shut down the whole system; they move sections of the track one by one, redirecting trains onto temporary sidings so the main line stays open.  

At Canva, this meant shifting data from a few storage boxes to thousands of cloud “shelves,” adding more servers that act like extra platforms, and rewiring the software so each upload is automatically placed on the right shelf. They did it in small, overlapping steps—just enough to keep the station running while expanding capacity.

**Key terms**
- *Upload*: a file (photo or design) sent from a user’s device.
- *Scaling*: increasing resources (servers, storage) to handle more traffic.
- *Live migration*: moving data and services without stopping the whole system.  

The result: users can upload at any time, even during the upgrade, and Canva can store millions of files every day with no service hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
