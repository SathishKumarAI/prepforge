---
qid: ing_1dc3ce1b89__fp__local
question: LLM APIs are slow, expensive, and flaky. How does your retry strategy differ
  from retrying a normal REST dependency?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 479
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:09:44-05:00'
sources: []
---

**Why a “LLM‑aware” retry differs from a generic REST retry**

The core problem is *latency variance + high cost*.  
A normal REST call is cheap and deterministic; you can afford to retry on any 5xx or timeout, because the penalty (time + money) is negligible.  
With an LLM API each request may cost **$0.02–$0.10** per 1k tokens and a failure forces the client to pay again. Moreover, the service deliberately throttles or caps usage; a naïve retry can quickly exhaust quotas or trigger rate‑limits, making subsequent calls stall for minutes.

The correct strategy treats each request as an **expensive random variable** whose *expected cost* is a function of:
1. **Token budget** – how many tokens you’ll pay for if the call succeeds.
2. **Failure probability** – which depends on current load, user‑specific parameters, and historical stability.
3. **Retry‑backoff shape** – exponential back‑off reduces collision with other users’ retries, but too aggressive back‑off wastes time.

Hence a *LLM‑aware* retry policy optimizes the **expected total cost**:

\[
E[\text{total cost}] = \sum_{k=1}^{N} P(\text{fail}_{k-1})\,C_{\text{retry}_k}
\]

where \(P(\text{fail}_{k-1})\) shrinks geometrically with back‑off, and \(C_{\text{retry}_k}\) grows linearly with the token count of the eventual successful call.  
The policy stops after a threshold where additional retries would increase expected cost more than the marginal benefit of avoiding a failure.

**Non‑obvious insight:** *the optimal back‑off is not just “wait longer”; it should adapt to the **token density** of the pending prompt*. A short, low‑token query tolerates aggressive retrying because its monetary impact is minimal; a long prompt requires a more conservative approach. By conditioning retries on token budget rather than on raw latency alone, you achieve both cost‑efficiency and reliability.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
