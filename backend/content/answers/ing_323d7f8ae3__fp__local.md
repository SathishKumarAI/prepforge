---
qid: ing_323d7f8ae3__fp__local
question: 'Explain: Step 3: Lightweight Multi-Agent Coding — AI Coding Workflow -
  by Neo Kim and Louis-Fran\u00e7ois Bouchard'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 474
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:51:38-05:00'
sources: []
---

**Step 3: Lightweight Multi‑Agent Coding**  
*Why it must be the “glue” of a modern AI development pipeline*

At its core, building an AI model is a *search* over two intertwined spaces: (1) the **data‑engineering space**—how we curate, annotate, and transform raw signals; and (2) the **algorithmic space**—the architecture, hyper‑parameters, and loss functions that map data to predictions. Traditional monolithic pipelines treat these dimensions serially: a human engineer first cleans data, then a machine learns. This seriality forces *serial bottlenecks* (time, memory, cognitive load) and hampers reproducibility.

A lightweight multi‑agent system reframes the pipeline as **parallel, cooperative agents**:

| Agent | Role | Interaction |
|-------|------|-------------|
| **Data‑Agent** | Generates synthetic or semi‑labelled examples on demand. | Feeds batches to the Model‑Agent while listening for “data‑needs” signals. |
| **Model‑Agent** | Trains a parametric model, evaluates loss, and proposes next data points. | Requests more samples from Data‑Agent; forwards gradients to the Optimization‑Agent. |
| **Optimization‑Agent** | Adjusts learning rates, schedules, or architecture heuristics based on Model‑Agent feedback. | Notifies Model‑Agent when to switch regimes (e.g., from pretraining to fine‑tuning). |

The *lightweight* qualifier means each agent is a small, stateless script that can be swapped out or parallelised without heavy orchestration frameworks. This design mirrors the **actor‑critic** paradigm in reinforcement learning: agents learn not only about the environment (data) but also how best to communicate with one another.

> **Non‑obvious insight:** Because each agent is decoupled, you can *replay* an entire training run by replaying the log of inter‑agent messages rather than re‑executing code. This turns a traditionally opaque “black box” into a transparent, version‑controlled *workflow graph*, enabling true reproducibility and auditability at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
