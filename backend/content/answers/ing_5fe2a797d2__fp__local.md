---
qid: ing_5fe2a797d2__fp__local
question: 'Explain: Install the Additional Dependencies — GitHub - OpenBMB/AgentVerse:
  \ud83e\udd16 AgentVerse \ud83e\ude90 is designed to facilitate the deployment of
  multiple LLM-based agents in various applications, which primarily provides two
  frameworks: task-solving and simulation \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 472
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:29:33-05:00'
sources: []
---

### Why the “Additional Dependencies” matter

When you clone **OpenBMB/AgentVerse**, the core package is lightweight—just enough to launch a single LLM agent.  
But AgentVerse’s real power lies in *co‑ordination* and *simulation*:  

1. **Task‑solving** requires an orchestrator that can dispatch sub‑tasks, aggregate results, and handle failures.  
2. **Simulation** needs physics engines, rendering backends, and environment descriptors to model multi‑agent interactions.

Those capabilities are not bundled with the core because they pull in large, optional binaries (e.g., PyBullet, Unity ML‑Agents). Installing them separately keeps the base install lean for developers who only need inference.

### How the installation works

```bash
# 1. Clone the repo
git clone https://github.com/OpenBMB/AgentVerse.git
cd AgentVerse

# 2. Create a virtual environment (recommended)
python -m venv .venv && source .venv/bin/activate

# 3. Install core dependencies
pip install -e .

# 4. Install optional “simulation” extras
pip install ".[sim]"   # pulls PyBullet, gymnasium, etc.

# 5. (Optional) Install “task‑solving” extras
pip install ".[tasks]"
```

The `setup.cfg` declares two *extras* (`sim`, `tasks`). Each extra lists the exact packages needed for that feature set. This design follows Python’s packaging convention: users only pull what they need, avoiding unnecessary bloat and binary conflicts.

### Non‑obvious insight

Many developers skip step 4 assuming the core package is sufficient. However, **without the simulation extras, the AgentVerse `Simulator` class fails at import time**, producing cryptic errors that look like missing LLM libraries rather than missing physics engines. By installing the extras early, you avoid a cascade of silent failures that would otherwise surface only when you first try to run a multi‑agent environment.

> **Bottom line:** Install the optional dependencies *before* you start experimenting with AgentVerse’s task or simulation features; it keeps the dependency graph clean and prevents obscure runtime errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
