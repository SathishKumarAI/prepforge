---
qid: ing_991fdefe9f__fp__local
question: 'Explain: Example Cost Calculations — Pricing And Costs'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 605
total_tokens: 774
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:39-05:00'
sources: []
---

**Why AI prices the way it does**

At its core an AI model is a *function* \(f_\theta\) that maps data to predictions.  
Running \(f_\theta\) requires compute (CPU/GPU cycles), memory, storage, and
networking. Each of these resources has a monetary cost per unit:
\(c_{\text{cpu}}, c_{\text{mem}}, c_{\text{net}}\).  
If an inference request consumes \(t_{\text{cpu}}\) seconds, \(m\) GB‑seconds of RAM,
and transfers \(b\) bytes, the *raw operating cost* is  

\[
C_{\text{op}} = t_{\text{cpu}}\,c_{\text{cpu}}
+ m\,c_{\text{mem}}
+ b\,c_{\text{net}}\;.
\]

But a price must also reflect **value** and **scarcity**.  
Let \(V\) be the expected revenue per request from a customer (e.g., subscription
fee or usage‑based charge). The provider wants to set a price \(p\) that maximizes
expected profit:

\[
\pi(p)= \mathbb{E}\!\big[(p-C_{\text{op}})\,1_{\{p\le V\}}\big] .
\]

The indicator captures the fact that if the price exceeds what the customer is willing to pay,
the request is lost. Maximizing \(\pi(p)\) under a demand curve \(D(p)\) (often
log‑concave) yields the **optimal pricing rule**:

\[
p^* = \arg\max_p \; p\,D(p) - \mathbb{E}[C_{\text{op}}\mid p] .
\]

This is essentially an *economic marginal‑cost pricing* problem: set price where
marginal revenue equals marginal cost, but with a probabilistic twist because the
customer’s willingness to pay is uncertain.

**Non‑obvious insight**

Many services quote a flat “per inference” fee, ignoring that the **distribution of request sizes** matters.  
If most requests are tiny (e.g., 1 kB payloads) but a few are huge (10 GB),
the mean operating cost can be low while peak costs spike.  
Pricing that averages over all requests underestimates tail risk and forces
providers to either raise prices for everyone or accept higher loss‑ratio
exposures on the heavy users. A more principled approach is to price **by
resource volume** (CPU‑seconds, GB‑RAM) rather than by request count,
aligning cost with actual consumption and smoothing revenue across usage
patterns.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
