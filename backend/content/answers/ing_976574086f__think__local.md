---
qid: ing_976574086f__think__local
question: 'Explain: What makes a good tool definition? Give concrete design rules.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 422
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:07:51-05:00'
sources: []
---

**Meta‑Thinking Guide**

1. **Clarify the ask & set scope**  
   - Confirm that “tool” refers to an AI system (model + interface).  
   - Decide whether we focus on *definition* (what it is) or *design rules* (how to build it).  
   - Assume a user‑centric, safety‑first mindset.

2. **Choose a mental model**  
   - Use the *Human–AI Interaction* triad: *Functionality*, *Usability*, *Trust*.  
   - Map each dimension to concrete criteria (e.g., accuracy → Functionality; explainability → Trust).

3. **Step‑by‑step reasoning**  
   1. List core attributes of a “good” tool (purpose clarity, reliability, transparency).  
   2. Translate each attribute into a design rule (e.g., “If the user needs to verify outputs, provide audit logs”).  
   4. Prioritize rules based on impact and feasibility.  
   5. Iterate: check that each rule feeds back into at least one core attribute.

4. **Avoid common traps**  
   - Don’t conflate *performance* with *quality*: a fast but inaccurate model isn’t good.  
   - Beware of over‑engineering “explainability” when the domain doesn’t need it.  
   - Skip assumptions about user expertise; design for both novices and experts.

5. **Sanity‑check & communicate**  
   - Run through a quick scenario: “User asks X → tool responds Y”; ensure all rules hold.  
   - Summarize in plain language, then drill down into concrete examples (e.g., API rate limits, error messages).  
   - End with a concise checklist that can be referenced during design reviews.

Follow this flow whenever you need to articulate what makes an AI tool well‑designed and how to formalise those ideas into actionable rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
