---
qid: ing_b46ea5ce05__think__local
question: 'Explain: How do you evaluate an agent? Compare trajectory evals and final-outcome
  evals.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 458
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:53:48-05:00'
sources: []
---

**Thinking Process for Explaining Agent Evaluation**

1. **Clarify the goal & assumptions**  
   - *Goal*: Show how to judge an AI agent’s performance.  
   - *Assumptions*: The agent operates in a simulated or real environment, receives observations and produces actions; evaluation can be done offline (dataset) or online (live interaction).  

2. **Choose a mental model**  
   Use the *evaluation framework* of **metrics → data → procedure**: decide what you measure (accuracy, reward, safety), how you collect data (trajectories vs. final outcomes), and how you compute the metric.

3. **Step‑by‑step reasoning**  
   - Define *trajectory eval*: run the agent over a full episode, record every state–action pair, then compute metrics that depend on the whole path (e.g., cumulative reward, safety violations).  
   - Define *final‑outcome eval*: only look at the terminal state or final reward; ignore intermediate steps.  
   - Compare: trajectory evals capture temporal dynamics and can expose sub‑optimal policies that still reach a good end state; final‑outcome evals are simpler but may miss safety, efficiency, or fairness issues.

4. **Avoid common traps**  
   - Don’t conflate *final reward* with *overall quality*—a high final score could result from reckless behavior earlier in the trajectory.  
   - Avoid over‑reliance on a single metric; consider multiple aspects (reward, safety, sample efficiency).  
   - Beware of data leakage: if you use future observations to evaluate past actions, the evaluation is biased.

5. **Sanity‑check & communicate**  
   - Ask: “Does this evaluation reflect what users actually care about?”  
   - Explain clearly that trajectory evals give a richer picture but are costlier; final‑outcome evals are quick but risk missing critical behaviors.  
   - Use concrete examples (e.g., a navigation agent reaching the goal vs. one colliding en route) to illustrate differences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
