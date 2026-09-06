---
qid: ing_e837f312d8__fp__local
question: 'Explain: Title: Display Advertising with Real-Time Bidding (RTB) and Behavioural
  Targeting'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 402
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:12:46-05:00'
sources: []
---

**Why RTB + behavioural targeting works**

At its core, online display is a *resource allocation* problem: each ad impression is an indivisible unit of advertising capital that must be assigned to the most valuable buyer in real time. The auction must solve

\[
\max_{i}\; \text{bid}_i + \lambda_i,
\]

where \(\lambda_i\) captures the *expected incremental revenue* from showing ad \(i\). This expected value is not static—it depends on how likely the viewer’s future actions (click, conversion, lifetime value) are conditioned by their recent browsing history. Behavioural targeting turns a raw impression into a *probabilistic feature vector* \(\mathbf{x}\) summarizing context (time of day, device, content category) and user state (search terms, site visits). The bid is then

\[
\text{bid} = f_{\theta}(\mathbf{x}) ,
\]

with \(f_{\theta}\) a learned model (e.g., logistic regression or deep network) that predicts click‑through probability (CTR) or conversion rate (CVR). Because the auction occurs in milliseconds, the model must be *calibrated* and *efficient*: it cannot rely on heavy inference pipelines. Thus practitioners use factorization machines or embedding layers to compress high‑dimensional sparse user features into low‑rank representations.

**Non‑obvious insight**

The *entropy of the bid distribution* is a key lever for platform revenue, not just the mean bid. By intentionally adding controlled noise (e.g., Laplace perturbation) to bids before they reach the exchange, publishers can smooth out extreme spikes and stabilize yield without compromising targeting precision—an application of differential privacy that also protects user privacy while preserving auction efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
