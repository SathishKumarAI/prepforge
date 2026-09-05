---
qid: ing_3d3eb9e46b__think__local
question: 'Explain: Run on dataset — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 513
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:49:31-05:00'
sources: []
---

**1️⃣ Clarify the goal and context**  
- Ask: “Which model am I evaluating?  Which dataset do I have?  What metrics matter (accuracy, latency, cost)?”  
- Assume a standard LLM fine‑tuned on a text corpus; we want to benchmark it against an official Ai Evals suite.  

**2️⃣ Map the toolchain**  
- **Ai Evals**: generates prompts and scoring rules.  
- **Langwatch**: monitors model calls (latency, tokens).  
- **Langfuse**: aggregates runs, visualizes metrics, stores metadata.  
  Visualize a flow: *Dataset → Ai Evals → Langwatch → Langfuse*.

**3️⃣ Step‑by‑step execution**  
1. **Prepare the dataset** – CSV/JSONL with `prompt` and optional `expected_answer`.  
2. **Write an Ai Eval script** (Python) that loads each prompt, sends it to the LLM via Langwatch’s API wrapper, receives a response, and applies the scoring function.  
3. **Instrument with Langwatch** – wrap the inference call so every request logs tokens, latency, and cost.  
4. **Send results to Langfuse** – use its SDK to create a run per prompt; attach metrics from Ai Eval (score) and Langwatch (tokens/latency).  
5. **Run** – execute the script locally or in CI; monitor progress through Langfuse UI.

**4️⃣ Avoid common pitfalls**  
- Forgetting to seed randomness → non‑repeatable results.  
- Not handling API limits → rate‑limit errors.  
- Mixing metric units (ms vs s) → misleading dashboards.  

**5️⃣ Sanity‑check & communicate**  
- Verify that every prompt yields a Langfuse run with all fields populated.  
- Cross‑validate a handful of scores manually.  
- Summarize in a slide: “We ran 10k prompts, mean latency = 350 ms, accuracy = 78 %.”  

By iterating this cycle—clarify → map → execute → avoid traps → sanity check—you’ll consistently produce reliable evaluations with Ai Evals, Langwatch, and Langfuse.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
