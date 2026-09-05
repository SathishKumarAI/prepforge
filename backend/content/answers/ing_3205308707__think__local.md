---
qid: ing_3205308707__think__local
question: 'Explain: Prompt Engineering Fundamentals'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 393
total_tokens: 576
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:24:41-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   - *What is “prompt engineering” in this context?* Assume it’s the practice of crafting prompts for large‑language models (LLMs) to elicit desired outputs.  
   - *Audience level:* Likely non‑experts, so keep jargon minimal and provide concrete examples.  

**2️⃣ Adopt a mental model**  
   - Think of the prompt as an *instruction + context* pair that maps input → output.  
   - Break it into three pillars: **Clarity**, **Structure**, and **Constraints**.  

**3️⃣ Step‑by‑step reasoning**  
   1. Define the goal (e.g., “summarize a legal document”).  
   2. Identify necessary context (the document text).  
   3. Choose wording that reduces ambiguity (“Please provide a concise summary…”).  
   4. Add constraints if needed (length, tone).  
   5. Test and iterate: tweak phrasing, observe changes in output quality.  

**4️⃣ Common traps to avoid**  
   - *Over‑prompting:* giving too many instructions can confuse the model.  
   - *Under‑prompting:* vague requests lead to generic answers.  
   - *Assuming the model “knows” everything:* always provide relevant context.  

**5️⃣ Sanity‑check & communicate clearly**  
   - Run a quick demo: show before/after prompt versions.  
   - Summarize each pillar in one sentence for quick recall.  
   - Encourage practice: write prompts for simple tasks, then refine based on output.  

By following this scaffold—clarify goal → structure prompt → iterate—you’ll master the fundamentals of prompt engineering and produce consistently reliable LLM responses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
