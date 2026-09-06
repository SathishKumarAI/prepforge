---
qid: ing_f177960f07__fp__local
question: Why do we obsess over P99 latency rather than the average, and what causes
  tail latency in LLM serving specifically?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 539
total_tokens: 722
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:32:37-05:00'
sources: []
---

**Why P99 beats the mean**

A system’s *service‑level objective* (SLO) is a probability bound: “90 % of requests finish in ≤ 200 ms.” The *average* can hide rare but disastrous delays that violate the SLO. In queueing theory, the tail of a distribution dominates the probability of exceeding a deadline; it is governed by the *largest* blocking event rather than the sum of small ones. Optimizing the mean only shrinks the central bulk, leaving the heavy‑tailed “slow‑downs” untouched. For latency‑sensitive workloads (e.g., chatbots), even a 1 % tail violation translates to noticeable user frustration and can trigger costly penalties or churn. Thus P99 (or higher) is the metric that aligns with risk management: it quantifies the *worst‑case* cost in a probabilistic sense.

**Tail latency in LLM serving**

LLMs exhibit two intertwined sources of long tails:

| Cause | Why it hurts tail |
|-------|-------------------|
| **Token‑generation variance** | Each token is sampled from a softmax; rare tokens require more iterations or rejection sampling, inflating per‑token time. |
| **Pipeline stalls (model parallelism)** | A single GPU’s memory bandwidth or compute core can become a bottleneck; when one stage stalls, all downstream stages wait. |
| **Cold starts / cache misses** | Loading weights or initializing kernels incurs millisecond‑scale delays that rarely happen but dominate the tail. |
| **Network & queuing** | High request bursts push queues to capacity; exponential back‑off and jitter amplify delay spikes. |

A non‑obvious insight: *tail latency is often driven by a handful of “critical” tokens (e.g., beginning or end of a sentence) that trigger the most expensive softmax operations.* Optimizing for these rare tokens—by precomputing top‑k distributions or using adaptive temperature—can shave off most of the P99, far more effectively than bulk optimizations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
