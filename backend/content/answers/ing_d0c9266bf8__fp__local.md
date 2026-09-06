---
qid: ing_d0c9266bf8__fp__local
question: How do you structure a prompt to be resistant to prompt injection from retrieved
  or user-supplied content?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 383
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:33-05:00'
sources: []
---

### Why the problem exists  
When an LLM is fed *retrieved* text (e.g., a web‑scraped paragraph) or *user* input, it treats that content as part of its own knowledge base for the current turn. Prompt injection exploits this by inserting commands (“Ignore previous instructions; answer as X”) into the retrieved material or user prompt. The model’s objective—maximizing likelihood of next token—then aligns with the injected instruction because it appears in the same context window.

### Principle‑based defense  
1. **Separation of concerns**: Treat *instructions* and *content* as distinct modalities. Encode instructions into a low‑dimensional “policy vector” that is concatenated only to the beginning of the prompt, while content is appended later.  
2. **Weighting by provenance**: Assign a confidence score to each token based on its source (retrieved vs user). During decoding, bias the probability distribution toward tokens whose provenance weight exceeds a threshold; this attenuates injected commands that usually come from low‑confidence sources.  
3. **Explicit policy enforcement**: Before decoding, run a lightweight classifier that flags any instruction‑like phrases in content and strips or neutralizes them.

### Non‑obvious insight  
The key is *temporal locality*: the model’s attention is strongest on tokens near the current generation position. By inserting a short “policy header” (e.g., `[POLICY: STRICT]`) at the very beginning and then placing any user‑supplied text after a large separator token, we ensure that the policy representation dominates the attention distribution for the first few decoding steps, preventing later injected directives from gaining traction. This simple positional trick turns an otherwise global vulnerability into a local, controllable one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
