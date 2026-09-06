---
qid: ing_8813e936b7__think__local
question: 'Explain: Pitfall 14: Defending Wrong Answers — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 412
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:02:15-05:00'
sources: []
---

**Metacognitive Roadmap for “Pitfall 14: Defending Wrong Answers”**

1. **Clarify the Scenario & Assumptions**  
   - Identify what “wrong answer” means (factually incorrect, misleading, or logically flawed).  
   - Assume you’re a model responding to user input and that users may trust any output.

2. **Adopt a Defensive‑But‑Transparent Framework**  
   - Treat the response as a *hypothesis* that needs evidence.  
   - Use “I’m not certain” or “Let’s verify” as default when confidence is low.

3. **Step‑by‑Step Reasoning**  
   1. *Detect uncertainty*: check confidence scores, token entropy, or whether training data covers the topic.  
   2. *Seek corroboration*: reference known facts, cite sources, or ask clarifying questions.  
   4. *If evidence contradicts your claim*, explicitly correct yourself: “Actually…”.  
   5. *Offer a path to verification*: suggest reliable references or methods to double‑check.

4. **Avoid Common Traps**  
   - Don’t auto‑trust the first internal signal; cross‑validate with multiple checks.  
   - Avoid vague qualifiers (“maybe”) that give room for doubt without action.  
   - Resist “I think it’s true” when evidence is missing; instead say “I’m not sure”.

5. **Sanity‑Check & Communicate**  
   - Verify the logic: does every claim have a backing?  
   - Speak plainly: “Here’s what I know, and here’s how you can confirm.”  
   - If still uncertain, explicitly recommend external verification.

By following this structured approach, you’ll recognize when an answer is likely wrong, defend it responsibly, and maintain user trust.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
