---
qid: ing_a8be0d082e__fp__local
question: 'Explain: Calculate usage — system-design-primer/solutions/system_design/twitter/README.md
  at master \u00b7 donnemartin/system-design-primer \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 584
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:04:22-05:00'
sources: []
---

**Why we need a “usage” model**

A scalable service must be dimensioned on *expected load*, not on an arbitrary guess.  
For Twitter the dominant resource is the number of requests that touch the data store
per second (writes for tweets, reads for timelines, likes, retweets).  
We therefore start from the fundamental user‑centric quantity: **active users per day**.

---

### 1. From users to requests

| Activity | Avg. ops/user/day | Fraction of active users |
|----------|-------------------|--------------------------|
| Tweet (write) | 0.05 | 10 % |
| Timeline read | 2 | 100 % |
| Like/retweet (update) | 0.1 | 20 % |

Assuming **U** active users per day, the total ops/day (**O**) is

\[
O = U \times [\,0.05 + 2 + 0.02\,] \approx 2.07\,U .
\]

Dividing by 86 400 gives the peak **ops/second (R)**:

\[
R = \frac{2.07\,U}{86400} \;\text{s}^{-1}.
\]

---

### 2. Peak‑to‑average factor

Real traffic is bursty; a 3× factor (typical for web services) gives the *peak* load
\(R_{\text{peak}} = 3R\).  
The system must sustain \(R_{\text{peak}}\) writes and reads per second.

---

### 3. Storage requirement

Each tweet is ~1 KB; with a **retention policy** of 30 days:

\[
S = U \times 0.05 \times 1024\,\text{B} \times 30
   \approx 1.5\,U\,\text{MiB}.
\]

---

### 4. Non‑obvious insight

The *write* traffic is a tiny fraction of the reads, yet it dominates **latency** because writes must be durable before acknowledging the user.  
Thus, a system that optimizes only read throughput (e.g., caching timelines) will still fail if the write path cannot keep up. This “write‑first” bottleneck is often overlooked when scaling social media services.

---

**Bottom line:**  
Given **U** active users/day, compute \(R_{\text{peak}}\) for writes/reads and storage *S* as above; design your cluster to meet those figures while ensuring the write path remains the linchpin of performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
