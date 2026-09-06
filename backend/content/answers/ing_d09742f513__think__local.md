---
qid: ing_d09742f513__think__local
question: In our build session you get two hours and any AI tools you want. How do
  you decide what to build and how do you spend the time?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 208
output_tokens: 462
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:44:02-05:00'
sources: []
---

**1. Clarify goals & constraints**  
   - Ask: *What problem am I solving?* (e.g., user‑friendly chatbot, data summarizer)  
   - Note time limit (2 h), tool availability (Python libs, APIs, no‑code platforms), and deliverable format (demo, prototype, docs).  

**2. Pick a mental framework**  
   - Use *Value‑Time Trade‑off*: high‑value features that can be delivered quickly vs. low‑impact “nice‑to‑have” extras.  
   - Apply the *Build‑Measure‑Learn* loop: start with a minimal viable feature, test it, iterate.

**3. Step‑by‑step reasoning**  
   1. **Brainstorm** 5–7 ideas on paper or whiteboard.  
   2. Score each idea on *Impact* (user benefit) and *Feasibility* (time & tool fit).  
   3. Pick the top 1–2 scores.  
   4. Outline a simple architecture: input → AI model → output, with minimal UI or API layer.  
   5. Allocate time blocks: 30 min research, 60 min coding, 20 min testing, 10 min polishing.  

**4. Avoid common traps**  
   - *Scope creep*: stay within the two‑hour window; if a feature needs more work, skip it.  
   - *Tool overconfidence*: don’t assume a library will do everything—check docs first.  
   - *Premature optimization*: focus on correctness and usability before fancy tweaks.

**5. Sanity‑check & communicate**  
   - After each block, run a quick demo or print logs to confirm progress.  
   - Verbally explain what you built: “I built an AI summarizer that takes a paragraph, sends it to GPT‑4 via the OpenAI API, and returns a concise 3‑sentence summary.”  
   - End with a brief reflection on what worked, what didn’t, and next steps if time allowed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
