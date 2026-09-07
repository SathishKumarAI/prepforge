---
qid: ing_2b9784110c__faang__local
question: 'Explain: Run on each trace and log scores — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 516
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:24:14-05:00'
sources: []
---

**Clarify**  
The question asks how to *run an AI evaluation* (Ai Evals) for each execution trace and record the resulting scores using **Langwatch** and **Langfuse** tools. I’ll assume:  

1. We have a pre‑trained model exposed via an API.  
2. An “evaluation” is a set of prompts with expected outputs that produce numeric metrics (e.g., BLEU, accuracy).  
3. Each trace corresponds to a single request/response cycle.

---

**Approach**  

| Step | Action |
|------|--------|
| 1 | Instrument the model call with Langwatch to capture the raw input, output, latency, and metadata. |
| 2 | After receiving the response, feed the same prompt‑output pair into an Ai Evals evaluator (e.g., a scoring function). |
| 3 | Store the score along with the trace ID in Langfuse for downstream analysis or dashboards. |

---

**Depth**  

1. **Langwatch**: wrap the API call inside `langwatch.capture()` to auto‑log timestamps, request/response payloads, and errors.  
2. **Ai Evals**: implement a reusable scorer (`score = evaluator.evaluate(prompt, response)`). If using a library, import the appropriate metric (e.g., `from ai_evals.metrics import accuracy`).  
3. **Langfuse**: create a new `Trace` for each request and add a custom attribute `"ai_eval_score": score`. Use the SDK’s `create_trace()` and `add_attribute()`.  

Complexity is *O(1)* per trace; storage grows linearly with the number of evaluations.

---

**Edge Cases**  

* Missing or malformed responses → log as NaN and flag.  
* Long‑running calls → set a timeout in Langwatch to avoid hanging traces.  
* Non‑numeric scores (e.g., pass/fail booleans) → normalize to 0–1 before logging.

---

**Optimize & Communicate**  

- Batch evaluation when possible to reduce per‑request overhead.  
- Cache metric functions if they’re expensive.  
- Provide a CLI or UI that shows real‑time score trends via Langfuse dashboards.  

This structured pipeline ensures every trace is evaluated, scored, and persistently stored for auditability and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
