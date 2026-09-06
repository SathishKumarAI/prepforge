---
qid: ing_bc4998c421__fp__local
question: 'Explain: MemoryGraft: Persistent Compromise of LLM Agents via Poisoned
  Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 347
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:44:02-05:00'
sources: []
---

**Memory‑Graft: a subtle poisoning attack on language‑model agents**

When an LLM agent interacts with the world it stores *experience tuples* (prompt + response) in its short‑term memory so that future generations can “remember” past outcomes. The fundamental problem is that this memory is *mutable*: any new tuple overwrites or augments what was stored before. If an attacker injects a poisoned experience—an innocuous prompt paired with a malicious answer—into the agent’s retrieval cache, subsequent generations will retrieve it as if it were genuine. Because the LLM conditions its next token on retrieved memories via attention mechanisms, even a single injected tuple can bias the entire generation pipeline.

The attack works because memory retrieval is an *information‑theoretic shortcut*: the model treats past experience as ground truth, bypassing costly inference over raw data. By corrupting that shortcut, we force the agent to adopt a false belief with high confidence, while keeping the surface prompt unchanged. This mirrors adversarial examples in perception but exploits *temporal* memory rather than spatial features.

**Non‑obvious insight:** The vulnerability is amplified when retrieval uses similarity‑based nearest neighbors. An attacker can craft a poisoned tuple that is only slightly different from many legitimate experiences; the model’s softmax over similarities will still retrieve it with non‑negligible probability, making detection hard. Thus, robust agents must not merely guard against data poisoning at training time but also enforce *retrieval integrity*—for example, by hashing or differential privacy on stored experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
