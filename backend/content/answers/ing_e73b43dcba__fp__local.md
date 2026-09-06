---
qid: ing_e73b43dcba__fp__local
question: 'Explain: The Extensions Framework — Tool Use And Mcp'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 587
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:10:58-05:00'
sources: []
---

## The Extensions Framework – Tool Use & *MCP* (Model‑Controlled Prompting)

### 1. What problem does it solve?

When a large language model (LLM) is asked to perform a task that requires **external knowledge or computation**—say, retrieving the latest stock price or solving a symbolic integral—it cannot access the world in real time. The *Extensions Framework* bridges this gap by letting an LLM orchestrate **auxiliary tools** (APIs, databases, code interpreters) as part of its inference pipeline.

### 2. Why must it work this way?

1. **Separation of concerns** – The LLM excels at language understanding; the tool is specialized for the domain (e.g., a SQL engine).  
2. **Modularity & composability** – Tools can be swapped or chained without retraining the core model.  
3. **Safety & auditability** – Each tool call is logged, so we know what data was fetched and how it influenced the answer.

### 3. The deeper principle

This design embodies *modular Bayesian inference*: the LLM maintains a prior over possible answers; each tool invocation yields an evidence term that updates this belief. Formally, after \(k\) calls,
\[
P(\theta \mid r_{1:k}) \propto P(r_k \mid \theta)\, P(\theta \mid r_{1:k-1}),
\]
where \(\theta\) is the target answer and \(r_k\) is the tool’s response. Thus, the model learns to **query** only when its posterior uncertainty exceeds a threshold.

### 4. Model‑Controlled Prompting (MCP)

*MCP* refines this by letting the LLM *decide* which prompt format to send to a tool based on its internal state:

- **Prompt templates** are stored as learnable embeddings.
- The model predicts a *prompt distribution* conditioned on the current belief.
- This yields *adaptive prompting*: the same tool can be queried for raw data, formatted tables, or even code snippets.

### 5. Non‑obvious insight

Most people treat tool calls as deterministic “black boxes.” In reality, **the variance of a tool’s output is part of the inference**. If a financial API sometimes returns stale values, the LLM can weigh that uncertainty and request a second source or a higher‑confidence tool. Thus, *tool choice* becomes an explicit component of probabilistic reasoning rather than a mere convenience.

---

In short, the Extensions Framework turns an LLM into a **probabilistic agent** that orchestrates specialized tools via *Model‑Controlled Prompting*, preserving modularity, safety, and principled uncertainty management.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
