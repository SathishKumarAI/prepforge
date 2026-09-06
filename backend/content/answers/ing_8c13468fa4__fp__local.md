---
qid: ing_8c13468fa4__fp__local
question: 'Explain: Fetch traces and filter by span name — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 491
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:02:46-05:00'
sources: []
---

### Why trace‑level filtering matters

When an AI system runs, every request triggers a **span** (a timed unit of work).  
A *trace* is the collection of all these spans for one logical flow.  
If you want to audit or debug a particular sub‑process—say “token‑generation” or
“response‑postprocessing”—you must be able to extract only those spans from the trace.

### The math behind it

Let \(T=\{s_1,\dots ,s_n\}\) be the set of all spans in a trace.  
Define a predicate \(P(s)\) that is true iff \(span\_name(s)=x\).  
Filtering is simply computing \(T_x = \{ s\in T \mid P(s) \}\).

Because span names are **categorical** (finite, non‑overlapping identifiers),  
\(P\) can be implemented as a hash lookup: \(O(1)\) per span.  
Thus the overall cost is linear in the trace size—essential for real‑time dashboards.

### Connection to deeper principles

* **Information bottleneck:** By selecting only spans with name = x, you reduce noise and
  preserve the *relevant* information needed to understand that sub‑process.
* **Geometry of traces:** In a directed acyclic graph representation,
  filtering isolates a sub‑graph whose nodes all share the same label, simplifying causal analysis.

### One non‑obvious insight

Most people think “filter by name” is just string matching.  
In practice, span names are often *parameterized* (e.g., `model-inference: gpt-4`).  
If you filter only on the prefix (`model-inference`), you capture all model calls,
regardless of version—providing a higher‑level view that scales as new models arrive.

---

**In practice:**  

1. **Fetch** the trace via Langfuse’s API (JSON or GraphQL).  
2. **Iterate** over `trace.spans`.  
3. **Keep** those where `span.name.startsWith('model-inference')`.  
4. Render or analyze the resulting sub‑graph.

This gives you a lightweight, scalable way to drill into specific AI workflow stages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
