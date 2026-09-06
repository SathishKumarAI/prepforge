---
qid: ing_2db5fde30c__think__local
question: 'Q51: Your agent takes 47 LLM calls to complete a task that should take
  5. How do you debug this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 434
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:40:25-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What* is “task” (e.g., summarization, data extraction)?  
- *Why* should it need only 5 LLM calls—are there benchmarks or a baseline?  
- Assume the agent’s logic and environment are stable; the issue lies in how it orchestrates calls.

**2️⃣ Adopt a debugging framework**  
1. **Instrumentation** – log every call (prompt, input size, output length, latency).  
2. **Isolation** – run each sub‑step of the task individually to see where repetition occurs.  
3. **Comparative analysis** – compare the agent’s call pattern against an optimal script.

**3️⃣ Step‑by‑step reasoning**  
- *Step 1*: Reproduce the over‑call scenario in a controlled test harness.  
- *Step 2*: Inspect the control flow: is there a loop that never exits? Does the agent retry on failure?  
- *Step 3*: Check for mis‑parameterization (e.g., prompt templates causing ambiguous sub‑tasks).  
- *Step 4*: Verify that state updates are persisted—if the agent “forgets” it may re‑ask.  
- *Step 5*: Look at cost/latency thresholds: maybe a timeout causes restarts.

**4️⃣ Common traps to avoid**  
- Assuming the LLM is the culprit; often the orchestration logic misbehaves.  
- Ignoring hidden recursion or duplicate task triggers.  
- Over‑optimizing prompts without testing that they actually reduce calls.

**5️⃣ Sanity‑check & communicate**  
- After each fix, run a minimal “golden” test to confirm 5 calls.  
- Document the root cause (e.g., “loop guard missing”), the fix applied, and the resulting call count.  
- Explain in plain terms: “The agent was retrying after every timeout because it didn’t mark the step as complete; adding a flag stopped unnecessary repeats.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
