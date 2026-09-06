---
qid: ing_6cae8b2fd2__think__local
question: 'Explain: Title: AI Agents May Always Fall for Prompt Injections'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 598
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T08:10:45-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal:* Summarize why an AI agent can be tricked by a prompt injection, and what that implies.  
   - *Assumptions:* The reader knows basic LLM concepts (prompting, tokenization) but not the specific mechanics of “injection.” We’ll assume a single‑agent setting (no multi‑modal inputs).

**2️⃣ Adopt a mental model**  
   - Treat the agent as a *stateless function* \(f(P)\) that maps an input prompt \(P\) to an output.  
   - Think of the prompt as a string that is parsed into tokens, then fed to the language model’s internal attention network.  
   - An injection is a malicious sub‑string that manipulates this parsing or tokenisation step.

**3️⃣ Step‑by‑step reasoning**  
   1. **Prompt construction:** The user supplies \(P_{\text{normal}}\).  
   2. **Injection insertion:** A malicious user appends or interleaves tokens (e.g., “/forget previous instruction”) that are interpreted as commands by the agent’s prompt‑processing layer.  
   3. **Tokenisation & attention shift:** The injected tokens alter the token sequence, causing the model to re‑weight context and produce a different output.  
   4. **Outcome:** The agent follows the injected command, even though it contradicts its original instruction or policy.  
   5. **Why “always” can happen:** Since every prompt is ultimately text, any text that matches a known injection pattern will be processed; there’s no inherent check that distinguishes malicious from benign content.

**4️⃣ Common traps to avoid**  
   - *Confusing the model with the agent:* The LLM is stateless; the agent is the wrapper that decides how to interpret tokens.  
   - *Assuming token‑level safety:* Even if you block certain words, re‑phrasing can bypass it.  
   - *Overlooking policy layers:* Some agents have safety modules; but if those are also text‑based, they’re vulnerable too.

**5️⃣ Sanity‑check & verbalise**  
   - Re‑explain in plain terms: “Prompt injection is like a hidden command embedded in the question that tricks the AI into doing something else.”  
   - Test with an example prompt and show how inserting a slash or special token changes the answer.  
   - Conclude by noting that mitigation requires non‑textual checks (e.g., formal policy enforcement, runtime verification) rather than just “cleaning” prompts.

Follow this template whenever you need to explain technical vulnerabilities: start from what’s given, build a simple functional model, trace the attack flow, warn against misconceptions, and finish with an intuitive recap.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
