---
qid: ing_12f84c29f4__think__local
question: 'Explain: Task-Specific Dimensions — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 444
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:59:17-05:00'
sources: []
---

**1️⃣ Clarify the question & assumptions**  
- The user wants a *thinking process* (not the answer) about “Task‑Specific Dimensions – LLM Evaluation.”  
- Assume they’re familiar with AI basics but not the specific evaluation framework.  
- Goal: give reusable, numbered metacognitive steps.

**2️⃣ Choose a mental model / framework**  
- Use a *problem‑solving loop*: Identify, Break down, Explore options, Evaluate, Iterate.  
- Map this onto evaluating LLMs on task‑specific dimensions (accuracy, fluency, safety, etc.).

**3️⃣ Step‑by‑step reasoning**  
1. **Define the task domain** – what problem are we solving?  
2. **List relevant evaluation dimensions** – e.g., correctness, relevance, coherence, bias, efficiency.  
3. **Determine metrics for each dimension** – numeric scores, human ratings, logs.  
4. **Design test cases that isolate each dimension** – controlled prompts or adversarial inputs.  
5. **Collect data & compute metrics** – run the model, gather results.  
6. **Analyze correlations & trade‑offs** – see if improving one hurts another.  
7. **Iterate** – refine prompts, adjust thresholds, repeat.

**4️⃣ Common traps to avoid**  
- *Overgeneralizing*: treating all tasks as identical; each needs tailored metrics.  
- *Neglecting context*: ignoring domain constraints that affect relevance or safety.  
- *Ignoring human bias*: relying solely on automatic scores can miss nuanced errors.  
- *Skipping reproducibility*: not documenting prompts and settings makes results non‑repeatable.

**5️⃣ Sanity‑check & communicate**  
- Verify each dimension actually reflects a real user need.  
- Ask “If I had one metric, which would it be?” to prioritize.  
- Summarize in plain language: list dimensions → metrics → test design → analysis loop.  
- End with a quick sanity question (“Does this cover the main failure modes for X?”) to ensure completeness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
