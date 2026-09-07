---
qid: ing_8425ee32d4__faang__local
question: What are agents? — Building Effective AI Agents \\ Anthropic
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 494
total_tokens: 728
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:52:11-05:00'
sources: []
---

**What are agents? (Building Effective AI Agents – Anthropic)**  

| Step | Focus |
|------|-------|
| **Clarify** | An *agent* is a system that perceives its environment, takes actions, and learns to maximize long‑term reward. I’ll assume we’re talking about large language‑model–based agents deployed in real‑world applications (e.g., customer support bots). |
| **Approach** | 1️⃣ Define the *state* representation from raw inputs. <br>2️⃣ Design a policy network that maps state → action (often via a prompt + LLM). <br>3️⃣ Implement a reward signal (explicit or implicit) and an optimizer (RL‑HF, PPO, etc.). <br>4️⃣ Add safety layers: guardrails, hallucination checks, and human‑in‑the‑loop fallback. |
| **Depth** | • *State*: tokenized text + metadata; use embeddings for context retention. <br>• *Policy*: fine‑tune the LLM on demonstration data, then apply RL‑HF to align with user intent. <br>• *Reward*: combine task success metrics and compliance scores. <br>• *Safety*: incorporate a verifier module that flags low‑confidence outputs for human review. Complexity: inference O(L²) per token; training scales linearly with data size but can be distributed. |
| **Edge Cases** | • Ambiguous user queries → agent defers or asks clarifying questions. <br>• Non‑existent knowledge → fallback to external APIs or “I don’t know.” <br>• Safety violations (hallucinations) → trigger safe completion or escalation. Testing: unit tests for policy outputs, integration tests against edge prompts, and human‑reviewed safety audits. |
| **Optimize & Communicate** | • Use cached embeddings and beam pruning to cut inference latency. <br>• Apply model distillation for deployment on edge devices. <br>Explain trade‑offs (speed vs. fidelity) during stakeholder demos, highlighting how reinforcement signals improve long‑term alignment while safety modules maintain user trust. |

This structure demonstrates clear problem framing, methodical planning, technical depth, robustness checks, and communication—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
