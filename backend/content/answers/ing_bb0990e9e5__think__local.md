---
qid: ing_bb0990e9e5__think__local
question: 'Explain: LLM-as-Judge for Step Quality — Evaluating Agentic Systems'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 472
total_tokens: 666
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:16:49-05:00'
sources: []
---

**1️⃣ Clarify the prompt & set assumptions**

* Identify the core ask: “Explain how a large language model (LLM) can act as a judge that evaluates the *step quality* of an agentic system.”  
* Assume readers know basic RL‑style agents, but not the specific “LLM‑as‑Judge” paradigm.  
* Note that we’re dealing with *evaluation*, not training; the LLM is a critic, not a controller.

**2️⃣ Adopt a mental model**

Use the **“critic–actor” architecture** common in reinforcement learning and recent agentic systems:
- **Actor (agent)** proposes a plan or executes actions.  
- **Critic (LLM‑judge)** assesses each step against criteria (safety, correctness, efficiency).  
Map this to “step quality”: the judge rates individual decisions or sub‑plans.

**3️⃣ Step‑by‑step reasoning**

1. *Input framing*: The agent submits a textual description of its next step (e.g., “I will query the database for user X”).  
2. *LLM prompt design*: Provide context, evaluation rubric, and past examples to guide consistent scoring.  
3. *Evaluation mechanics*: The LLM outputs a numeric score or structured feedback (e.g., 0‑5 with comments).  
4. *Feedback loop*: The agent receives the critique, refines its next step, and repeats.  
5. *Aggregation*: Over many steps, aggregate scores to estimate overall plan quality.

**4️⃣ Common traps**

* Treating the LLM as a deterministic oracle—ignore hallucinations or bias.  
* Using too vague prompts; the judge will produce noisy ratings.  
* Failing to calibrate scores across different domains—one step in finance vs. one in robotics may need different rubrics.  

**5️⃣ Sanity‑check & articulate**

- Verify that the rubric covers safety, feasibility, and efficiency.  
- Run a toy example: show an agent’s step, the LLM’s critique, and how the agent might adjust.  
- Conclude by emphasizing that this “LLM-as-Judge” turns subjective human judgment into a reusable, scalable evaluation signal for autonomous agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
