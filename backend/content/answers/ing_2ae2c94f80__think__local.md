---
qid: ing_2ae2c94f80__think__local
question: 'Explain: Task Success Rate (TSR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 456
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:31:05-05:00'
sources: []
---

**1. Clarify the question & set assumptions**  
   - Identify that “Task Success Rate (TSR)” is a metric used in evaluating *agentic* AI systems (e.g., dialogue agents, robots).  
   - Assume we’re dealing with goal‑oriented tasks where an agent receives an instruction and must produce an outcome.  
   - Note that TSR measures the proportion of tasks completed correctly relative to all attempts.

**2. Adopt a mental model / framework**  
   - Think of TSR as a **precision‑like** statistic: successes ÷ (successes + failures).  
   - Map it onto the classic *confusion matrix* for binary outcomes: True Positives = successful completions, False Negatives = failures.

**3. Step‑by‑step reasoning toward an explanation**  
   1. Define “task” and what counts as a “successful completion.”  
   2. Explain how to collect data: run the agent on many task instances, record outcomes.  
   3. Compute TSR: \( \text{TSR} = \frac{\text{# successes}}{\text{total # tasks}}\).  
   4. Discuss interpretability: a higher TSR indicates better overall competence; compare across agents or settings.

**4. Common traps to avoid**  
   - Confusing TSR with *accuracy* on multi‑class problems (TSR is binary per task).  
   - Ignoring *task difficulty*: a high TSR might stem from trivial tasks, not true capability.  
   - Overlooking the effect of **partial successes**; decide whether they count as success or failure.

**5. Sanity‑check & communicate clearly**  
   - Verify that the denominator matches the number of evaluated task instances.  
   - Use a concrete example (e.g., 80/100 tasks succeeded → TSR = 0.8).  
   - Emphasize that TSR is a *simple, interpretable* metric but should be complemented with other measures (efficiency, user satisfaction) for a full evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
