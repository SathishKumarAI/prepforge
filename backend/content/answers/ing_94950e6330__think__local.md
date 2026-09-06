---
qid: ing_94950e6330__think__local
question: 'Explain: Action Success Rate (ASR) — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 433
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:54:40-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
   * Identify what “action” means in the agentic system (e.g., a single API call, a decision node, or an end‑to‑end task).  
   * Decide if we are measuring raw success probability or a weighted metric that accounts for partial successes, failures, and penalties.  
   * Assume access to ground‑truth labels or oracle feedback for each action.

**2. Adopt the “Success Rate” mental model**  
   * Treat ASR as a binary classification problem: action = success (1) vs. failure (0).  
   * The metric is simply the proportion of successful actions over total evaluated actions, \( \text{ASR} = \frac{\sum_{i}\mathbf{1}_{\text{succ}_i}}{N} \).

**3. Step‑by‑step reasoning**  
   1. Collect a validation set of agent interactions with known outcomes.  
   2. For each action, label it as success or failure based on the oracle.  
   3. Compute the sum of successes and divide by total actions to get ASR.  
   4. If needed, stratify by context (e.g., difficulty level) to understand performance nuances.

**4. Avoid common traps**  
   * Don’t conflate “action success” with overall task completion; an action can be correct but still lead to a later failure.  
   * Beware of class imbalance: if failures dominate, ASR may look deceptively high for trivial actions.  
   * Do not ignore partial successes unless your definition explicitly includes them.

**5. Sanity‑check & communicate**  
   * Verify that ASR is between 0 and 1; values near 0 or 1 should trigger a deeper inspection of the action space.  
   * Explain to stakeholders: “ASR tells us, on average, how often our agent executes an intended action correctly, which directly reflects its reliability in real‑world deployment.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
