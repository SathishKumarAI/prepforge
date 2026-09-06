---
qid: ing_7bca0f5ef1__fp__local
question: 'Explain: Create prompt — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 525
total_tokens: 699
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:28:51-05:00'
sources: []
---

**How to Build an AI‑Evaluation Prompt with LangWatch & LangFuse**

1. **Define the objective**  
   *What problem are we solving?*  
   We want a reproducible, quantitative measure of a language model’s performance on a specific task (e.g., summarisation quality). The prompt must elicit a structured answer that can be automatically parsed and scored.

2. **Choose a scoring rubric**  
   Ground the prompt in an *optimization objective*: higher scores → better models.  
   Example: “Rate the summary on factuality, coherence, and conciseness from 0–10.” This transforms a free‑text response into a vector that can be fed to a metric.

3. **Write the prompt as a contract**  
   ```markdown
   # Task
   Summarise the following article in ≤150 words.
   
   # Evaluation Criteria (for your answer)
   * Factuality – does it preserve key facts? (0–10)
   * Coherence – logical flow? (0–10)
   * Conciseness – uses minimal words? (0–10)
   
   Provide the summary followed by a JSON object:
   {"factuality":x,"coherence":y,"conciseness":z}
   ```
   The contract guarantees consistent output format, which LangFuse can ingest as a single event.

4. **Wrap in LangWatch**  
   *LangWatch* monitors token usage, latency, and compliance with the contract. By wrapping the prompt call you capture all observables needed for auditability and cost optimisation.

5. **Run through LangFuse**  
   *LangFuse* orchestrates the entire evaluation pipeline:
   - Sends the prompt to the model.
   - Parses the JSON score block.
   - Stores raw output, metadata, and computed metrics in a structured dataset.
   - Enables downstream visualisation or leaderboard generation.

6. **Iterate & validate**  
   Use LangWatch logs to spot anomalies (e.g., missing keys). Adjust the prompt contract accordingly. Repeat until the evaluation pipeline is stable.

---

### Non‑obvious Insight  
Most people treat prompts as static templates, but they are *dynamic contracts*. By explicitly encoding the output schema inside the prompt and coupling it with LangWatch’s observability, you convert an opaque LLM response into a reproducible experiment—turning model “guesswork” into a rigorous optimisation problem.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
