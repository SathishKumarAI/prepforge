---
qid: ing_2c5ea24a9a__faang__local
question: 'Explain: Tools, Resources, and Prompts — Model Context Protocol Explained
  in 3 Levels of Difficulty'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 519
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:15-05:00'
sources: []
---

**Clarify**  
We’re asked to describe the *Model Context Protocol*—the framework that dictates how we feed tools, resources, and prompts into an LLM across three difficulty tiers (Easy, Medium, Hard). I’ll assume the audience knows basic prompting but not this tiered protocol.

**Approach**  
1. Outline each level’s goal.  
2. Enumerate core components: *Tool set*, *Resource cache*, *Prompt template*.  
3. Show how they scale in complexity and precision from Easy → Medium → Hard.  

**Depth**  

| Level | Toolset | Resource Cache | Prompt Template |
|-------|---------|----------------|-----------------|
| **Easy** | Pre‑built wrapper (e.g., `search()`, `calc()`) that returns a single value. | Small static list of FAQs or factoids. | Simple “What is X?” → “Answer in one sentence.” |
| **Medium** | Composite tools: chaining (`lookup()` → `summarize()`), conditional branching. | Dynamic cache (API‑fetched docs, recent news). | Structured prompt with slots: “Using the provided data on Y, explain Z in 3 bullet points.” |
| **Hard** | Custom tool integration (e.g., external ML model, database query engine) and real‑time API calls. | Hierarchical knowledge graph; versioned datasets. | Multi‑step instruction set: “First validate premise A, then compute B using tool C, finally format output as JSON.” |

The protocol ensures that at each tier the *context*—what tools are available, what data can be pulled, and how the prompt is framed—matches the task’s cognitive load.

**Edge Cases**  
- Tool failures: fallback to cached data.  
- Resource staleness: timestamp validation.  
- Prompt ambiguity: enforce schema or token limits.  

Testing involves unit‑tests for each tool, integration tests for chained calls, and end‑to‑end prompts on synthetic inputs.

**Optimize & Communicate**  
To improve latency, pre‑fetch resources in Medium/Hard tiers and cache results locally. Communicate decisions by logging the chosen level, tool invocation trace, and prompt version—this aids debugging and auditability. In an interview, I’d emphasize that this protocol balances *expressiveness* against *predictable performance*, a core FAANG concern when scaling LLM services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
