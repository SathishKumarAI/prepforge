---
qid: ing_d42d1b3522__fp__local
question: 'Explain: ratelimit — Uber Engineering \u2014 Where the Digital World Meets
  the Physical One'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 401
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:32:11-05:00'
sources: []
---

**Why a “rate‑limit” is inevitable for Uber’s edge services**

The core problem: every driver‑app request (e.g., *“find me the nearest car”*) must be answered in < 200 ms, yet the back‑end can receive millions of such calls per second. If each call were forwarded to a single microservice, queuing would explode and latency would grow linearly with load—an unbounded cost function that quickly violates SLA constraints.

Mathematically, we model each request as a *Poisson arrival* \(λ\) and each worker node as a service station with capacity \(μ\). The system’s **utilisation** is ρ = λ/μ. To keep the probability of exceeding latency \(P(L>t)\) below a target ε, we must enforce ρ < 1 by throttling arrivals: this is exactly what a rate‑limit does. It turns an unbounded queue into a *controlled* one, turning a hard‑real‑time problem into a stochastic optimisation where the objective is to maximise throughput while keeping \(P(L>t)\le ε\).

The deeper insight that many miss is that **rate‑limiting is not just about protecting infrastructure; it is a statistical regulariser**. By capping the input rate, we implicitly constrain the *entropy* of the request stream: fewer, more predictable arrivals allow better caching and pre‑fetching, which in turn reduces variance in response time. In Uber’s case, this translates to smoother driver‑app experiences even under traffic spikes.

Thus a rate‑limit is an optimal trade‑off: it bounds utilisation (ensuring stability), keeps latency bounded (meeting SLA), and reduces entropy (improving predictability).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
