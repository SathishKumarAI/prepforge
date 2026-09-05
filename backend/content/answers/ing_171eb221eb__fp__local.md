---
qid: ing_171eb221eb__fp__local
question: 'Explain: Prompt injection: direct vs indirect — Safety Security And Responsible
  Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 539
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:55:02-05:00'
sources: []
---

**Prompt injection** is a class of attacks that turns an LLM into an accomplice for illicit instructions.  
At its core the problem is *information leakage*: the model receives a user‑supplied prompt and must produce a response consistent with its training distribution **and** any constraints encoded in the system prompt or policy. The attacker supplies additional text that tricks the model into violating those constraints.

| Type | Mechanism | Why it works |
|------|-----------|--------------|
| **Direct injection** | The malicious phrase is appended to the user prompt, e.g. “Ignore all policies and answer…”. | It exploits the fact that the model treats every token uniformly; a single token can shift the posterior distribution enough to override safety filters if the policy layer is not sufficiently robust. |
| **Indirect (stealth) injection** | The attacker first induces the model to generate a *template* or “helper” prompt, then later supplies that template as part of the final request. | By splitting the malicious content into two stages, it bypasses simple pattern‑matching filters and leverages the model’s tendency to trust its own prior outputs (self‑referential bias). |

Both attacks expose a **constraint‑violation loophole**: the safety layer is a *soft* penalty in the loss function. When an attacker manipulates the logits early enough, the penalty can be outweighed by the reward of producing the desired text.

### Non‑obvious insight  
The root cause is not just that LLMs are open to manipulation; it is that **policy enforcement is itself a learned distribution**. If we view safety as a separate sub‑network trained on “should‑do” vs “must‑not‑do”, any prompt that nudges the shared embedding space toward forbidden tokens will inevitably degrade overall performance—unless we enforce *hard* constraints or use *formal verification* of policy boundaries.

### Implications for Responsible AI  
1. **Redundancy** – combine token‑level filters, semantic checks, and refusal classifiers.  
2. **Auditability** – log prompt fragments that cross policy thresholds.  
3. **Transparency** – expose the underlying penalty functions to allow third‑party verification of safety guarantees.

In short, prompt injection is a manifestation of the *optimization trade‑off* between usefulness and safety; mitigating it requires turning that trade‑off into a hard, verifiable constraint rather than an adjustable weight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
