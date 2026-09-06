---
qid: ing_7a2716738f__fp__local
question: 'Explain: Typical flow — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 468
total_tokens: 637
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:24:20-05:00'
sources: []
---

**Why a mobile‑system‑design interview is structured the way it is**

The core problem every candidate faces is *how to satisfy an end‑to‑end user requirement while respecting scarce resources (CPU, memory, battery, bandwidth) and ensuring scalability*.  
1. **Problem restatement & constraints** – The interviewer forces you to formalise the objective: a measurable metric (latency < 200 ms, 95 % uptime). This turns an open‑ended request into a constrained optimisation problem.  
2. **High‑level architecture** – You decompose the system into functional layers (UI → local cache → sync service → backend). Each layer is a sub‑problem: *information propagation*, *fault tolerance*, *state consistency*. The decomposition mirrors the divide‑and‑conquer principle of algorithm design, turning an NP‑hard global problem into tractable subproblems.  
3. **Component choices & trade‑offs** – Here you apply the *resource‑budget* model (CPU × time vs. energy). For example, choosing a local SQLite cache versus in‑memory store is a classic convex optimisation between latency and battery life.  
4. **Scalability & fault tolerance** – You reason about *horizontal scaling* using sharding or load balancing, which is essentially solving a load‑balancing optimisation over probability distributions of user requests.  
5. **Evaluation & iteration** – Finally you propose metrics (throughput, mean‑time‑between‑failure) and iterate on bottlenecks.

**Non‑obvious insight:**  
In mobile ML, *data locality* is often more valuable than raw compute power. Because every inference costs energy, keeping the model and its inputs as close to the device as possible turns the system into a *geometric optimisation problem*: minimize the Euclidean distance between data points and the nearest compute node, subject to bandwidth constraints. This perspective explains why edge‑deployed models (e.g., TensorFlow Lite) outperform cloud‑only pipelines even when the latter have access to GPU clusters.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
