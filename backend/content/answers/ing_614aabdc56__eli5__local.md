---
qid: ing_614aabdc56__eli5__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 233
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:10:35-05:00'
sources: []
---

Imagine you’re a restaurant manager who must decide how many cooks and kitchen stations to open each day, but you only have a rough idea of how busy the place will be. A **back‑of‑the‑envelope estimation** is that quick, ball‑park math you do on a napkin: “If we serve 200 customers a day and each needs about 5 minutes in the kitchen, we’ll need roughly (200 × 5) / 60 ≈ 17 cooking minutes per hour. With one cook working 60 minutes, that’s about three cooks.”  

In system design interviews, you use the same trick for a **load balancer**: estimate how many requests your web service will get, how long each request takes to process, and then figure out how many server instances (or “cooks”) you need so no one waits too long. This gives interviewers confidence that you can scale the system sensibly before diving into deeper details.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
