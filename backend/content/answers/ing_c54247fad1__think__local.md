---
qid: ing_c54247fad1__think__local
question: What is indirect prompt injection, and why is it more dangerous than direct?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 391
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:00:09-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
First ask whether “indirect” means *through a third‑party* or *via an intermediate prompt chain*. Assume it refers to a scenario where the user’s malicious intent is hidden behind legitimate content (e.g., a story, code snippet, or data file) that the LLM processes before reaching the target prompt.  
**2️⃣ Adopt a “prompt‑flow” mental model**  
Visualize the interaction as a pipeline: *User input → Pre‑processing → Target prompt → Model output*. Indirect injection exploits a hidden transformation step that can bypass safety checks applied only to the final prompt.  
**3️⃣ Step‑by‑step reasoning**  
- Identify the entry point where user data enters the system (e.g., file upload).  
- Determine whether safety filters are applied at that stage.  
- Trace how the content is subsequently incorporated into a downstream prompt.  
- Evaluate if the intermediate transformation can mask disallowed instructions or reveal hidden keys.  
**4️⃣ Common traps to avoid**  
- Assuming all user data passes through the same guardrails; in reality, some stages (e.g., file parsing) may be unfiltered.  
- Overlooking that indirect injection can embed malicious code in seemingly innocuous formats (images, PDFs).  
- Ignoring that safety modules often ignore “meta‑instructions” hidden inside other content.  
**5️⃣ Sanity‑check & communicate**  
Re‑explain the concept to a colleague: “Indirect prompt injection sneaks instructions into a system via an intermediary step, bypassing direct filters and making it harder to detect.” Check if this summary covers both the mechanism (intermediate transformation) and why it’s riskier (masking, filter evasion).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
