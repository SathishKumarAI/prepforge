---
qid: ing_25038527f5__fp__local
question: 'Q47: How do you defend against prompt injection attacks?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 330
total_tokens: 501
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:23:59-05:00'
sources: []
---

**Prompt‑injection defenses arise from the *information‑flow* principle:** a model must not let untrusted input alter its internal policy or reveal private data.  
1. **Input sanitisation (token‑level filtering).** Before tokenising, strip or escape control characters that could re‑interpret the prompt as code (e.g., newlines, quotation marks).  
2. **Prompt anchoring (contextual gating).** Prefix every user prompt with a hard‑coded “system” instruction that sets a policy boundary: *“You are an assistant that only answers factual queries; do not execute commands.”* The model learns to treat the anchor as a higher‑priority token, effectively creating a hierarchical attention mask.  
3. **Dynamic policy enforcement (self‑regulation).** At inference time, monitor the probability of policy‑violating tokens and abort if it exceeds a threshold—akin to a runtime sandbox that rejects any output with high “execution” confidence.  
4. **Differential privacy in fine‑tuning.** By adding noise to gradients during training, we limit how much a single prompt can influence the weights, reducing the chance of learning malicious injection patterns.

*Non‑obvious insight:* **Token‑level entropy reduction**—injecting adversarial tokens often increases local entropy. Regularising the model’s output distribution (e.g., via temperature scaling) to maintain low entropy for policy‑relevant tokens makes it harder for an attacker to steer the LM toward execution commands, without sacrificing expressiveness on benign queries.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
