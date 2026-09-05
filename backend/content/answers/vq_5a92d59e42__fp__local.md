---
qid: vq_5a92d59e42__fp__local
question: What is a constraint and what are the seven constraints?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 847
total_tokens: 1018
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:36:26-05:00'
sources: []
---

### Why we need *constraints* in data engineering

A data‑engineering system must make a handful of hard trade‑offs.  
If you ignore the limits that a given technology or business imposes,
you will end up with either an unusable pipeline (too slow, too expensive) or
with data that is wrong or unreadable.  
Constraints are therefore *the knobs we turn to keep the system sane* – they
capture what the system can tolerate and what it must guarantee.

### The seven constraints

From first principles—volume, speed, heterogeneity, trust, utility,
flexibility, and insight—we arrive at a compact taxonomy that is widely used in
modern analytics architecture:

| # | Constraint | What it bounds | Why it matters |
|---|------------|----------------|----------------|
| 1 | **Volume** | Size of the data set (bytes, records) | Drives storage choice, sharding, compression |
| 2 | **Velocity** | Rate at which new data arrives (records / sec) | Determines ingestion throughput, buffering strategy |
| 3 | **Variety** | Number and types of schemas / formats | Impacts schema‑on‑read vs. schema‑on‑write decisions |
| 4 | **Veracity** | Data quality & uncertainty | Forces validation, cleansing, lineage tracking |
| 5 | **Value** | Business worth extracted per unit data | Drives prioritisation of pipelines and feature engineering |
| 6 | **Variability** | Fluctuation in workload or schema over time | Requires elastic compute, auto‑scaling, dynamic partitioning |
| 7 | **Visualization** | How quickly insights must be produced (latency) | Guides use of real‑time vs. batch analytics, dashboards |

These seven constraints are not arbitrary; they emerge from the dual
optimization problem that every data‑engineering team solves:

- **Maximise utility** (value, insight, accuracy)
- **Minimise cost and risk** (storage, compute, error)

Each constraint is a *boundary* on one side of that optimization.  
For example, increasing volume without tightening storage compression raises
cost; ignoring veracity lets noise corrupt downstream models.

#### One non‑obvious insight

Most people treat “visualization” as merely the final UI layer, but it is in
fact a **performance constraint**: if analysts cannot see results within the
time window that informs decisions (seconds to minutes), the entire data
pipeline loses its purpose. Treating visualization latency as an early‑stage
constraint forces you to design streaming or incremental aggregation layers
before you even touch the UI, often saving months of re‑engineering later.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
