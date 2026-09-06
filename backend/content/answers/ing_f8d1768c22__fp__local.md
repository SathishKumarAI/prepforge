---
qid: ing_f8d1768c22__fp__local
question: 'Explain: Step 5: Tradeoffs and Extensions — How to Prepare for System Design
  Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 376
total_tokens: 554
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:48:37-05:00'
sources: []
---

**Step 5: Trade‑offs & Extensions – Preparing for the System‑Design Interview**

When you sketch a learning pipeline (data ingestion → feature extraction → model training → inference), every choice is an *optimization problem* under constraints (latency, throughput, cost, data drift).  
- **Fundamental trade‑off**: *Expressivity vs. scalability*. A complex deep network may fit the data better but demands more compute and storage; a simpler linear model scales easily but risks bias.  
- **Why it must work that way**: The loss surface of a model is a high‑dimensional function; richer models have more parameters, thus a larger hypothesis space → lower empirical risk but higher variance (bias–variance trade‑off).  
- **Connection to deeper principles**: Information theory tells us that the *mutual information* between input and label bounds achievable accuracy. A design that maximizes this while minimizing *information bottleneck* (i.e., compressing irrelevant features) yields an optimal system.  
- **Non‑obvious insight**: Most candidates treat “latency” as a single number, but in practice it is *distribution‑aware*. A system should expose per‑batch latency percentiles and allow the interviewee to argue why tail latency matters for online recommendation (e.g., 99th percentile > 200 ms kills revenue).  
- **Preparation tip**: Build a mental map of **cost functions** you can trade off (compute, storage, freshness) and practice arguing which side of the trade‑off to tilt under different business constraints. This shows mastery of both theory and pragmatic engineering.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
