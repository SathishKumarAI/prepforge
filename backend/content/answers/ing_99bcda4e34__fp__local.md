---
qid: ing_99bcda4e34__fp__local
question: 'Explain: Run an evaluation — GitHub - sierra-research/tau2-bench: \u03c4-Bench:
  A Benchmark for Tool-Agent-User Interaction in Real-World Domains \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 378
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:53-05:00'
sources: []
---

**Running an Evaluation on the τ‑Bench (tau2‑bench) Repository**

The core problem τ‑Bench solves is *quantifying how well a tool‑agent collaborates with a human in realistic tasks*. To do this, it treats evaluation as a **structured experiment**:  
1. **Define the interaction protocol** – a sequence of prompts and tool calls that a user would naturally make (e.g., “summarise the last page”).  
2. **Instantiate the environment** – the repository supplies a `config.yaml` listing available tools, the language model to use, and a test set of documents or web pages.  
3. **Execute the pipeline** – run `python -m tau2_bench.run --config config.yaml`. The script orchestrates the agent: it sends the prompt to the LLM, receives a tool‑invocation JSON, calls the corresponding Python function (e.g., `extract_text`), and feeds back the result.  
4. **Collect metrics** – after each episode the script logs `tool_success`, `response_time`, and a custom `user_satisfaction` score derived from simulated feedback. These are aggregated into a CSV for downstream analysis.

Why this works: the evaluation is an *optimization loop* over the agent’s policy; each tool call reduces uncertainty in the task state, mirroring Bayesian inference. The non‑obvious insight is that **the latency of a single tool invocation dominates total runtime**, so profiling that step gives you the greatest return on performance tuning.  

After execution, simply open `results/summary.json` to see precision, recall, and an overall “interaction quality” metric that can be plotted or fed into a dashboard.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
