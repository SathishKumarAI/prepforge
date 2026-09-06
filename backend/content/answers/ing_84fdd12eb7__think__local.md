---
qid: ing_84fdd12eb7__think__local
question: 'Explain: Step 4: Build Your Judge Prompt — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 577
total_tokens: 776
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:49:05-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
- *What* is “Step 4” referring to? It’s the part of the AI‑Evals workflow where you craft a prompt that will act as the evaluator (the “judge”).  
- Assume the reader knows: (a) you’ve already defined an evaluation metric, (b) you have a set of model outputs and reference answers, and (c) you’re using Langwatch/Langfuse to orchestrate the run.

**2️⃣ Adopt a mental framework**  
Think of the judge prompt as a *mini‑dialogue* that:  
1. **Receives** the candidate answer + ground truth.  
2. **Applies** the evaluation rule (e.g., “rate similarity on 0–5”).  
3. **Returns** a structured score or verdict.

Treat it like writing an API endpoint: clear inputs → deterministic logic → predictable output.

**3️⃣ Step‑by‑step reasoning**  

| Step | What to do | Why |
|------|------------|-----|
| a. List required variables | `candidate`, `reference` | These are the only dynamic parts the prompt will get. |
| b. Write evaluation instruction | “Compare… and give a score 0–5.” | Gives the LLM the rubric. |
| c. Add output format specifier | e.g., `{ "score": <int> }` | Ensures downstream parsing is trivial for Langwatch/Langfuse. |
| d. Test with a sample | Run locally; check if JSON parses. | Catches missing keys or bad formatting early. |
| e. Wrap in Langwatch/Langfuse schema | `prompt_template: ...`, `variables: [candidate, reference]` | Allows the orchestrator to inject data automatically. |

**4️⃣ Common pitfalls & how to dodge them**  
- *Ambiguous instructions* → LLM may output free‑form text. Use explicit “return JSON”.  
- *Missing variable names* → Langwatch won’t substitute; double‑check placeholder syntax (`{candidate}`).  
- *Too long prompts* → Truncate or use instruction‑tuning instead of raw text.

**5️⃣ Sanity‑checking & communicating the result**  

1. **Run a dry‑run**: feed a known pair, confirm score matches expectation.  
2. **Validate JSON** with `json.loads` before sending to downstream.  
3. When explaining to teammates, show the prompt template, the variable list, and an example of the rendered prompt + expected JSON.

By following this scaffold you’ll produce a robust judge prompt that Langwatch/Langfuse can plug into the evaluation pipeline without surprises.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
