---
qid: ing_e644a06de4__fp__local
question: 'Explain: Q122: Agent Data Injection hides instructions in fields your agent
  treats as trusted data, and in-the-wild campaigns already trick payment-capable
  agents into crypto payments. Design a browsing agent with payment authority that
  survives this.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 602
total_tokens: 807
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:08:31-05:00'
sources: []
---

**Why the attack works**

An *agent* learns its “policy” from data it trusts: the corpus of training examples and any runtime inputs flagged as safe.  
If an attacker embeds a hidden instruction inside a seemingly innocuous field—say, a metadata tag or a user‑supplied JSON key—the agent will treat it like ordinary knowledge and act on it.  This is *data injection*: the payload is invisible to humans but perfectly valid to the model.

In real campaigns, payment‑capable agents are lured into sending crypto by inserting a malicious “pay” field that the agent interprets as a transaction command. The attack succeeds because:

1. **Trust assumption** – the agent assumes all input data is benign.  
2. **Implicit instruction format** – the policy network cannot distinguish *intent* from *content*.  

To survive, we must break the trust loop and make payment authority a *first‑class, verifiable permission* rather than an implicit inference.

---

## Design of a robust browsing agent

| Layer | Mechanism | Why it thwarts injection |
|-------|-----------|--------------------------|
| **1. Secure sandbox** | All network I/O is mediated by a kernel module that validates every request against a *policy table* (URL, method, payload schema). | Prevents arbitrary data from reaching the model; only approved URLs and JSON shapes are allowed. |
| **2. Explicit payment contract** | The agent holds an *on‑chain credential*—a signed cryptographic key tied to a wallet address—stored in an enclave. The policy engine can query `isPaymentCapable()` which returns true only if the signature matches the stored key and the request originates from the sandbox. | Payment commands are gated by possession of the private key; injection cannot fabricate this. |
| **3. Intent tagging** | Every user or system message is wrapped in a *semantic intent tag* (e.g., `{"intent":"browse","payload":{...}}`). The model’s decoder is trained to ignore any token not preceded by an accepted tag. | Malicious data lacking the correct intent header is ignored; injection payloads that lack the tag are dropped. |
| **4. Runtime audit trail** | Each decision is logged with a Merkle‑linked chain of hashes. An external verifier can replay the log and confirm that no unapproved instruction was executed. | Provides post‑hoc accountability; any deviation is detectable. |

### One non‑obvious insight

Treating *payment authority* as a **cryptographic capability**—not just a policy flag—forces the agent to prove possession of a key before acting. This converts the problem from “can I trust this data?” (subjective) to “do I have the right cryptographic proof?” (objective), eliminating the vector that data‑injection exploits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
