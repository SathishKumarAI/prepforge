---
qid: ing_91c652f5fa__think__local
question: 'Explain: Your new agent version scores higher on every benchmark, but internal
  users say it got worse. Find the problem.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 420
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:43:26-05:00'
sources: []
---

**1️⃣ Clarify & set assumptions**  
- *What does “higher on every benchmark” mean?* Assume quantitative metrics (accuracy, F1, etc.) are strictly improved.  
- *Who are the internal users?* Likely domain experts or product‑owners using the agent in real workflows.  
- *What is “got worse”?* Subjective feedback—slower responses, more hallucinations, less relevant answers.

**2️⃣ Mental model / framework**  
Use a **signal‑to‑noise** lens:  
- Benchmarks → controlled test sets (low variance).  
- Internal users → noisy, high‑variance real‑world data.  
Also consider the *distribution shift* and *evaluation bias* concepts.

**3️⃣ Step‑by‑step reasoning**  
1. Verify benchmark methodology—could be overfitting to specific prompts?  
2. Inspect training data overlap: maybe new version memorized benchmark answers.  
3. Compare user prompt distribution vs. benchmark prompts (topic, length, style).  
4. Look for changes in safety filters or response truncation that affect real‑world usage but not benchmarks.  
5. Check latency or resource constraints introduced in the new version—users might perceive it as “worse” if responses are delayed.

**4️⃣ Common traps to avoid**  
- Assuming metrics alone capture user experience.  
- Ignoring distribution shift between test and production data.  
- Overlooking that higher accuracy on synthetic data can hide hallucinations that matter to users.  
- Blaming the model without inspecting infrastructure changes (e.g., rate limits, caching).

**5️⃣ Sanity‑check & communicate**  
Run a *side‑by‑side* pilot: same user prompts fed to both versions; collect objective metrics + qualitative feedback. Present findings as: “Benchmarks improved due to X, but real‑world performance degraded because Y.” This keeps the discussion grounded in data while acknowledging user sentiment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
