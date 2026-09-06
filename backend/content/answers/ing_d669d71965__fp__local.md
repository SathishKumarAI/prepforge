---
qid: ing_d669d71965__fp__local
question: 'Explain: Step 3: Fetching User Preferences — Design Notification Service
  | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 402
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:36:01-05:00'
sources: []
---

**Step 3 – “Fetching User Preferences” in a Notification Service**

At its core, the notification system must decide *when* and *what* to send to each user. The fundamental optimization problem is: **maximize engagement subject to latency and resource constraints**.  
We model each user’s preference vector \(p_i\) as a probability distribution over content types, topics, or channels (email, push, SMS). The service must sample from the joint space \(\{(i,t)\}\), where \(t\) is time, such that the expected utility
\[
U = \sum_{i} \int p_i(t) \, u_i(t) \, dt
\]
is maximized, with \(u_i(t)\) a monotone decreasing function of delay (information theory: older messages carry less value).  

**Why this shape?**  
1. **Entropy minimization** – by clustering users with similar \(p_i\), we reduce the state space, enabling cache‑friendly lookups.  
2. **A/B testability** – a parametric form for \(p_i\) (e.g., logistic regression over user features) allows incremental tuning via online learning.

The *non‑obvious insight* is that preferences evolve on two timescales: a slow drift captured by an exponential moving average, and a fast burst triggered by events. By maintaining a **dual‑queue**—a “steady‑state” queue for drifted prefs and a “burst” queue for event‑driven overrides—we avoid stale data while keeping latency low. This decoupling lets the system batch fetches for the steady queue (reducing I/O) yet immediately push burst notifications, striking the optimal trade‑off between freshness and throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
