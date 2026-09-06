---
qid: ing_d5ca7016d8__think__local
question: How would you build a deterministic replay harness for agent evals, and
  what does it genuinely buy you?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 460
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:02:36-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Reproduce every run of an agent‑evaluation pipeline so that you can debug failures or compare models without hidden randomness.  
- *Assumptions*: You control the code, all external services can be stubbed, and you have access to deterministic seeds for any random number generators.

**2️⃣ Adopt a “state‑snapshot” mental model**  
Treat each evaluation as a pure function of an initial state (seeds, environment config, data splits). The harness records that state and the sequence of actions taken, then can replay by feeding the same state back into the system.

**3️⃣ Step‑by‑step reasoning**  
1. **Capture seeds & configs** – log RNG seeds, env parameters, model weights.  
2. **Hook all sources of nondeterminism** – wrap `random`, NumPy, PyTorch/TensorFlow RNGs; intercept external calls (API requests) and replace with deterministic mocks.  
3. **Record observable events** – actions, observations, rewards, logs.  
4. **Persist the snapshot** in a lightweight format (e.g., JSON + binary blobs).  
5. **Replay** by restoring the snapshot, re‑seeding RNGs, feeding recorded inputs to the agent, and asserting that outputs match expectations.

**4️⃣ Common traps to avoid**  
- *Hidden async I/O*: unmocked network calls will break determinism.  
- *GPU nondeterminism*: use deterministic CUDA ops or CPU fallback.  
- *Floating‑point drift*: small numerical differences can accumulate; consider rounding thresholds when comparing states.

**5️⃣ Sanity‑check & communicate**  
Run a “golden” evaluation, replay it, and assert equality of all logged outputs. If they diverge, investigate the source (e.g., unmocked API). Explain to stakeholders that the harness gives you reproducible debugging, auditability, and confidence that model changes truly alter behavior rather than random variance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
