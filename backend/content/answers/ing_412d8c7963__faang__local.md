---
qid: ing_412d8c7963__faang__local
question: 'Explain: B. Coding agents — Building Effective AI Agents \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 515
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:15:40-05:00'
sources: []
---

**B. Coding agents – Building Effective AI Agents (Anthropic)**  

| Step | What I’d say |
|------|--------------|
| **Clarify** | “You’re asking how Anthropic builds coding‑agent models that can write, debug, and refactor code.  I’ll assume we want a system that: 1) understands user intent from natural language, 2) generates syntactically correct code in a target language, and 3) tests it against a suite of unit tests.” |
| **Approach** | 1️⃣ Train a large‑language model (LLM) on a diverse corpus of open‑source repos + documentation. <br>2️⃣ Fine‑tune with reinforcement learning from human feedback (RLHF) where reviewers rate correctness and style. <br>3️⃣ Wrap the LLM in a “skill” architecture: a *planner* selects sub‑tasks, an *executor* calls the model, and a *verifier* runs tests. |
| **Depth** | • **Model**: 13–30 B parameters; tokenization on code + comments. <br>• **RLHF**: reward = (pass_rate × style_score) – penalty for unsafe patterns. <br>• **Planner**: uses a lightweight policy network to decompose tasks into atomic prompts (“write function X”, “add test Y”). <br>• **Verifier**: CI‑style sandbox that compiles, runs tests, and feeds feedback back to RLHF loop. <br>Complexity: inference O(tokens), fine‑tune cost ~ \$1M; latency 200 ms for short functions. |
| **Edge Cases** | • Ambiguous specs → fallback to clarification dialog.<br>• Infinite loops or unsafe code → sandbox limits (time, memory).<br>• Non‑deterministic tests → use deterministic stubs. |
| **Optimize & Communicate** | 1) Cache frequent sub‑prompts to reduce token usage. <br>2) Parallelize verifier across micro‑VMs for speed. <br>3) Explain trade‑offs: larger models improve accuracy but raise inference cost; RLHF reduces hallucinations but requires ongoing human labeling. I’d finish by highlighting how this pipeline aligns with Anthropic’s safety‑first ethos and can be scaled to multi‑language, domain‑specific agents. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
