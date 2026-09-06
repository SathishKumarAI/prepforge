---
qid: ing_e863dbb1c4__think__local
question: 'Explain: Q112: Your agent performs well on short tasks but degrades badly
  past 30 minutes of autonomous work. Diagnose and fix it using context engineering.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 210
output_tokens: 467
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:21:54-05:00'
sources: []
---

**1. Clarify the problem & set assumptions**  
   - *What is “short tasks” vs. >30 min?* Assume a continuous run of an RL agent in a simulated environment.  
   - *Performance metric*: reward per step or cumulative reward.  
   - *Assumptions*: no external resource limits, deterministic policy, only the context (state) changes over time.

**2. Mental model: Context‑drift & catastrophic forgetting**  
   Treat the “context” as a latent variable that evolves slowly with time. The agent’s policy is trained on early‑time contexts; after 30 min the distribution shifts, causing degraded returns.

**3. Step‑by‑step reasoning**  
   - **Diagnose**:  
     1. Log state statistics (e.g., mean/variance) over time.  
     2. Compare early vs. late‑time distributions.  
     3. Plot reward vs. elapsed time to confirm a drop around 30 min.  
   - **Fix via context engineering**:  
     1. Augment the observation with a *context token* (e.g., a running counter or timestamp).  
     2. Train the policy jointly on this augmented input, letting it learn to condition its actions on the context.  
     3. Optionally add a *context‑aware regularizer*: penalize large changes in action distribution across adjacent time steps to smooth drift.

**4. Common traps to avoid**  
   - Forgetting that the context token must be *predictable* by the agent; using raw timestamps may break invariance if the environment resets.  
   - Over‑fitting to a specific 30 min horizon—ensure the training data covers the full time span.  
   - Neglecting to test after adding the token: the policy might still ignore it if not properly encoded.

**5. Sanity‑check & communicate**  
   - Re‑run the agent; verify that reward stabilizes across the entire duration.  
   - Present before/after plots, highlight the added context feature, and explain how conditioning on time mitigates the drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
