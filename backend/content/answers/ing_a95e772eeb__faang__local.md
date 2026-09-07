---
qid: ing_a95e772eeb__faang__local
question: Why ML + Rules, Not Just ML? — Fraud Detection
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 471
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:18:13-05:00'
sources: []
---

**Why Combine ML + Rules for Fraud Detection (not just ML)?**

| Step | What I’d say |
|------|--------------|
| **Clarify** | “We need a system that flags fraudulent transactions in real‑time while staying auditable and compliant.  Is the goal to reduce false positives, improve interpretability, or meet regulatory constraints?” |
| **Approach** | 1️⃣ Build an ML model for probabilistic risk scoring. <br>2️⃣ Wrap it with deterministic rule‑based filters (e.g., velocity limits, blacklists). <br>3️⃣ Feed both outputs into a decision engine that balances precision and recall. |
| **Depth** | • **ML part**: gradient‑boosted trees or deep nets on labeled history; provide *probability* of fraud. Complexity O(N log N) training, inference O(1) per transaction. <br>• **Rule part**: stateless rules coded in a domain‑specific language; instant 0‑latency checks (O(1)). <br>• **Ensemble logic**: e.g., if rule fires → immediate block; else if ML score > τ → flag for review. This yields higher recall than either alone and keeps false positives low because rules capture hard constraints that models might miss. |
| **Edge Cases** | • New attack vectors not in training data → caught by fresh rules. <br>• Legitimate large‑value transactions may trigger rules; mitigate with rule whitelists or adaptive thresholds. <br>• Model drift: monitor precision/recall over time and retrain monthly. |
| **Optimize & Communicate** | • Use feature importance to prune model features, reducing inference latency. <br>• Store rule definitions in a versioned config store so changes are auditable (important for KYC/AML compliance). <br>• Explain to stakeholders: “ML gives us probability; rules give us guarantees.” This duality satisfies both data‑driven optimization and regulatory auditability, making the system robust against evolving fraud tactics. |

*Word count:* ~190 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
