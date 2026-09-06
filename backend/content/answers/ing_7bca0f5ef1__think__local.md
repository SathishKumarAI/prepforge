---
qid: ing_7bca0f5ef1__think__local
question: 'Explain: Create prompt — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 490
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:12:36-05:00'
sources: []
---

**Metacognitive Blueprint for Crafting the Prompt**

1. **Clarify Intent & Audience**  
   - *What is the goal?* We need a single prompt that instructs an AI to generate a comprehensive guide on “Ai Evals Complete Guide” using the tools **Langwatch** and **Langfuse**.  
   - *Who will read it?* Likely developers or researchers familiar with evaluation frameworks but not necessarily experts in Langwatch/Langfuse.  
   - *Assumptions*: The AI knows basic eval concepts, can access documentation of Langwatch & Langfuse, and understands how to structure a guide (intro, steps, examples).

2. **Choose a Framework**  
   - Use the **“Context → Question → Instruction”** pattern: give background, ask a clear question, then specify output format.  
   - Incorporate *prompt engineering* tactics: mention constraints (e.g., word count, tone), and prompt for structured sections.

3. **Step‑by‑Step Reasoning**  
   - **Context**: Briefly explain AI evaluation and why Langwatch/Langfuse matter.  
   - **Question**: “Generate a complete guide covering …” to focus the model.  
   - **Instruction**: List required sections (setup, usage, examples, best practices). Add formatting cues (headings, bullet points).  
   - Decide whether to ask for code snippets or just prose; include placeholders if needed.

4. **Avoid Common Traps**  
   - Don’t let the prompt be too vague—model may hallucinate irrelevant details.  
   - Avoid over‑specifying every sentence; give enough freedom for natural flow.  
   - Keep it concise to reduce token waste but detailed enough to cover all facets.

5. **Sanity Check & Communicate**  
   - Read the prompt aloud: does each part logically lead to the next?  
   - Verify that constraints (e.g., mention both Langwatch and Langfuse) are explicit.  
   - Test a quick run mentally: would the AI produce sections like “Installation”, “Evaluation Pipeline”, etc.? If not, tweak wording.

Follow this scaffold whenever you need to craft precise yet flexible prompts for complex guides or technical content.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
