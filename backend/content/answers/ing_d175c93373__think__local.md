---
qid: ing_d175c93373__think__local
question: What are the most common prompt anti-patterns you'd flag in a code review?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 488
total_tokens: 682
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:47:39-05:00'
sources: []
---

**1️⃣ Clarify & set scope**  
   *Assume* we’re reviewing prompts that generate code (e.g., in a CI pipeline or during development).  
   • Identify the audience: developers, reviewers, automated tools.  
   • Decide whether to focus on safety, readability, performance, or all of them.

**2️⃣ Adopt a prompt‑review framework**  
   *Mental model:* treat a prompt like any other code artifact—check for **clarity**, **precision**, **efficiency**, and **robustness**.  
   • Clarify: Is the intent obvious?  
   • Precision: Are instructions unambiguous?  
   • Efficiency: Does it avoid unnecessary verbosity or loops?  
   • Robustness: Does it guard against hallucinations or misuse?

**3️⃣ Step‑by‑step reasoning**  
   a. Scan for **generic placeholders** (`"..."`, `"etc."`) that invite vague answers.  
   b. Look for **overly long prompts**—they can overwhelm the model and reduce coherence.  
   c. Spot missing **contextual cues** (e.g., language version, library constraints).  
   d. Check for **redundant or contradictory instructions** (e.g., “write a function” then “do not write any functions”).  
   e. Verify that safety clauses are present when dealing with sensitive data.

**4️⃣ Common traps to avoid**  
   • Assuming the model knows everything: always provide minimal context.  
   • Over‑optimizing for brevity at the cost of clarity.  
   • Neglecting to test the prompt on a small sample before full review.  
   • Ignoring version control: prompts should be versioned like code.

**5️⃣ Sanity‑check & communicate**  
   • Re‑read the prompt from an outsider’s perspective; if it feels confusing, flag it.  
   • Summarize findings in a concise bullet list for the reviewer: “Missing context → add library name”; “Redundant instruction → remove”.  
   • Encourage iterative refinement—prompts are as mutable as code.

By following this structured approach, you’ll surface anti‑patterns that reduce errors, improve maintainability, and keep your AI tooling reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
