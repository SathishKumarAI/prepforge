---
qid: ing_e03431bf6e__think__local
question: 'Explain: Register as custom evaluator — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 436
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:46:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
- *What* is being asked?  A guide on how to “register as a custom evaluator” in the context of AI evaluation frameworks (Ai Evals, Langwatch, Langfuse).  
- Assume the reader knows basic Python/AI concepts but not the specific API.  
- Decide whether to cover all three platforms or just illustrate with one and note parallels.

**2️⃣ Choose a mental‑model framework**  
- *Problem decomposition*: “What is a custom evaluator?” → “How does each platform expose registration?”  
- *Pattern‑matching*: Identify common patterns (factory functions, decorator hooks, config files).  
- *Iterative refinement*: Start with the simplest example, then layer in advanced options.

**3️⃣ Step‑by‑step reasoning**  
a. Define a minimal evaluator interface: input → output score.  
b. Show the registration API call for each platform (e.g., `register_evaluator(name, func)` or `@add_evaluator`).  
c. Explain required metadata (name, description, tags).  
d. Demonstrate how to test the evaluator locally.  
e. Cover deployment: packaging as a pip module or Docker image if needed.

**4️⃣ Avoid common traps**  
- Don’t mix up *registration* vs *invocation*.  
- Forget to export the function in `__init__.py` when publishing.  
- Assume all platforms use the same config file; check docs for YAML vs JSON differences.  
- Ignore version compatibility (e.g., Langfuse v2 uses async).

**5️⃣ Sanity‑check & verbalize**  
- Verify each code snippet runs against a minimal stub of the platform’s API.  
- Summarize: “After registering, the evaluator is discoverable via the platform’s UI and can be called automatically during evaluation pipelines.”  
- Encourage testing with sample prompts to ensure scores are returned as expected.

Follow this template for any future “how‑to” explanations across similar AI tooling ecosystems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
