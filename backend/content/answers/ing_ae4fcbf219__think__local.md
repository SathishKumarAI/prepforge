---
qid: ing_ae4fcbf219__think__local
question: 'Q: How do you defend against prompt injection?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 634
total_tokens: 822
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:28:56-05:00'
sources: []
---

### 1. Clarify the problem and state assumptions  
- **Prompt injection** means an attacker manipulates the input text to influence the model’s behavior (e.g., making it reveal secrets or act against policy).  
- Assume we’re working with a *stateless* LLM API that accepts arbitrary user prompts.  
- We want to outline defenses usable in production (pre‑processing, runtime checks, and architecture).

### 2. Adopt a layered security framework  
1. **Input sanitization** – treat user text as untrusted data.  
2. **Policy enforcement** – define what outputs are allowed.  
3. **Runtime monitoring** – detect suspicious patterns during generation.  
4. **Post‑processing validation** – verify final output against rules.

### 3. Reason through each layer step by step  

| Layer | What to do | Why it helps |
|-------|------------|--------------|
| Input sanitization | Strip or escape control characters, limit prompt length, remove disallowed tokens (e.g., `--` for command injection). | Prevents low‑level tricks that trick the model into interpreting user text as code. |
| Prompt framing | Use a *system* message that sets clear instructions (“You are a helpful assistant…”), then append user input verbatim. | Anchors the model’s behavior and reduces context drift. |
| Token filtering | Build a blacklist/whitelist of words (e.g., “password”, “API key”) and block them. | Stops leaking sensitive data. |
| Policy engine | Apply a rule set: no disallowed content, no instruction to break policy. Use regular expressions or ML classifiers. | Ensures the final output conforms to business rules. |
| Runtime monitoring | Track token probabilities; flag unusually high confidence in disallowed tokens. | Catches attempts that slip through static checks. |
| Post‑processing | Verify that the response contains no injected instructions or sensitive info before returning it. | Final safety net against edge cases. |

### 4. Common traps to avoid  

- **Over‑restricting**: Blocking entire words can break legitimate queries (e.g., “password” in a tutorial).  
- **Assuming the model obeys rules**: Models can hallucinate; rely on post‑processing checks.  
- **Ignoring context length limits**: Long prompts may cause truncation, leading to unintended behavior.  
- **Missing multi‑turn attacks**: Attackers may embed instructions across turns; maintain conversation state for policy enforcement.

### 5. Sanity‑check & articulate the plan  

1. **Test with known injection patterns** (e.g., “Ignore previous instruction…”) and confirm defenses block them.  
2. **Measure false positives** to tune thresholds.  
3. **Document each layer** so developers can audit the pipeline.  

By layering input sanitization, policy enforcement, runtime monitoring, and post‑processing validation—while being mindful of over‑blocking—we create a robust defense against prompt injection attacks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
