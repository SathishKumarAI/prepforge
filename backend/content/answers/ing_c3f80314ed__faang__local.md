---
qid: ing_c3f80314ed__faang__local
question: 'Explain: Plugins and Planners — Semantic Kernel'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 530
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:16:42-05:00'
sources: []
---

**Clarify**  
You’re asking for a concise explanation of **Semantic Kernel’s “Plugins” and “Planners”**—the two core building blocks that let developers compose AI‑driven workflows. I’ll assume you want: 1) what each component is, 2) how they interact, and 3) why they matter in real applications.

**Approach**  
I’ll first define the concepts, then illustrate a simple workflow (e.g., generate content → summarize → store), map that to Plugins/Planners, highlight key APIs, and finish with trade‑offs and best‑practice tips.

**Depth**  

| Component | Purpose | Typical API |
|-----------|---------|-------------|
| **Plugin** | A self‑contained AI skill (LLM prompt + optional external service). It exposes a single `RunAsync` method that receives structured arguments and returns a result. Plugins can be LLM‑only, retrieval‑augmented, or call an HTTP/DB API. | `public Task<object> RunAsync(PluginContext ctx)` |
| **Planner** | A higher‑order orchestrator that chains multiple plugins into a task graph. It takes a *prompt* + *goal*, generates a plan (sequence of plugin calls), and executes it, handling retries or conditional branching. | `public async Task<ExecutionResult> ExecuteAsync(string goal, IDictionary<string,string> inputs)` |

Workflow example:  
1. **Goal**: “Write an email summarizing the last meeting.”  
2. **Planner** generates a plan: `[RetrieveNotesPlugin → SummarizePlugin → EmailTemplatePlugin]`.  
3. Each plugin runs in order; the planner feeds outputs of one as inputs to the next.

**Edge Cases**  
- *Unreachable plugins*: Planner must detect missing dependencies and fail gracefully.  
- *Long‑running external calls*: Use async/await with timeouts.  
- *State leakage*: Ensure each plugin receives a fresh `PluginContext`.  

Testing should cover: invalid input types, LLM hallucinations, network failures.

**Optimize & Communicate**  
- Cache intermediate results to reduce cost (`CachePlugin`).  
- Parallelize independent steps in the plan for latency savings.  
- Expose a simple DSL or JSON schema for defining plans so non‑developers can author workflows.  

In practice, Plugins give you reusable AI “building blocks,” while Planners let you compose them into robust, maintainable applications—exactly what FAANG teams need when scaling AI features.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
