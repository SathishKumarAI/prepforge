---
qid: ing_be63ac8193__faang__local
question: 'Explain: Types of CoT prompts — Prompt Engineering | Lil''Log'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 581
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:19-05:00'
sources: []
---

**Clarify**  
You’re asking me to explain the *types of Chain‑of‑Thought (CoT) prompts* used in prompt engineering for language models—i.e., how we structure a prompt so that the model explicitly “thinks” step‑by‑step before giving an answer. I’ll assume you want a concise taxonomy, examples, and practical tips.

**Approach**  
1. List primary CoT styles (explicit, implicit, iterative).  
2. Provide a short code‑style template for each.  
3. Discuss when to use which style, noting trade‑offs in length vs. reasoning quality.

**Depth**  

| Style | Description | Example Prompt | Pros / Cons |
|-------|-------------|----------------|------------|
| **Explicit CoT** | You literally ask the model to *think aloud*. | “Answer the math problem step by step: 7 × 8 = …” | Gives clear reasoning; increases token count, may hit length limits. |
| **Implicit CoT** | The prompt is phrased so that a rational answer *must* involve intermediate steps (e.g., “Explain why…”). | “Why does the sky appear blue? First explain Rayleigh scattering…” | Saves tokens, but relies on model to internally generate steps; less controllable. |
| **Iterative CoT** | The model is prompted to produce a draft, then refine it in subsequent turns. | 1) “Draft an outline for…”. 2) “Expand point 3.” | Enables fine‑grained control and error correction; requires multi‑turn interaction. |

*Common patterns:*  
- **Instruction + Example** (few‑shot): “First, solve this example: … Now solve yours.”  
- **Question → Sub‑questions**: Break the main query into smaller, solvable pieces.

**Edge Cases**  
- Token limits: long explicit CoT may truncate.  
- Model hallucination: iterative refinement can amplify errors if not checked.  
- Domain knowledge gaps: some tasks (e.g., complex proofs) still fail despite CoT framing.

**Optimize & Communicate**  
1. **Start with implicit CoT** for most queries to save tokens.  
2. If accuracy drops, switch to explicit or add a *“show your work”* instruction.  
3. For high‑stakes outputs (e.g., code generation), use iterative refinement plus a verification step.

When explaining this to interviewers:  
- State the taxonomy first, then justify each with pros/cons.  
- Show an example in Markdown for readability.  
- Highlight that CoT is not a silver bullet—trade‑offs must be tuned per task and model size.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
