---
qid: ing_ca45c881ee__star__local
question: 'Explain: Back-of-the-envelope calculations — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 275
output_tokens: 447
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:40-05:00'
sources: []
---

**Situation** – In my last role I was asked to lead a feasibility study for a new recommendation engine that would run in real‑time on our e‑commerce platform. The product team wanted an estimate of how many users we could support before hitting latency or cost limits, but the data science team didn’t have a concrete architecture yet.

**Task** – My goal was to produce a quick, rough calculation that showed whether a single‑node inference cluster would be enough, and if not, what scale would be required. I had to do this in under an hour so we could decide on the next interview question for the system design round.

**Action** – I pulled the latest benchmark: 5 ms per inference on a GPU‑based model with a batch size of 32. Assuming each user makes one request per second and we need 99th‑percentile latency <10 ms, I calculated:
1. **Requests per second (RPS)** = users × requests/user/sec.
2. **Total GPU time** = RPS × inference time ÷ batch size.
3. **Number of GPUs** = ceil(total GPU time / GPU capacity per hour).
I plugged in 100k active users → 100 k RPS, got ~1.6 GPU‑hours per second, and concluded we’d need at least 5 GPUs to stay under the latency budget. I also factored a 20% overhead for data loading, so I rounded up to 6 GPUs.

**Result** – The estimate was delivered in time; the interviewers used it as the basis for a deeper discussion on sharding and auto‑scaling. We later built a prototype that matched the back‑of‑the‑envelope numbers within ±10 %. I learned how powerful a simple formula can be to steer architecture decisions, and I now routinely use this approach in early design interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
