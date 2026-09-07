---
qid: ing_e644a06de4__faang__local
question: 'Explain: Q122: Agent Data Injection hides instructions in fields your agent
  treats as trusted data, and in-the-wild campaigns already trick payment-capable
  agents into crypto payments. Design a browsing agent with payment authority that
  survives this.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 268
output_tokens: 496
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:33:52-05:00'
sources: []
---

**Clarify**  
We need a *browsing‑agent* (web‑automation bot) that can initiate and authorize crypto payments, yet must resist **Agent Data Injection (ADI)**—the trick of inserting malicious instructions into “trusted” data fields. The agent should survive real‑world campaigns where attackers embed hidden commands in UI elements or hidden form fields. Assumptions: the agent runs on a sandboxed VM, has access to a payment API, and can inspect page DOMs.

**Approach**  
1. **Data provenance layer** – tag every input field with its source (origin header, CSP, signed token).  
2. **Instruction whitelist** – only accept payment commands that match an explicit schema (e.g., JSON payload signed by the agent’s private key).  
3. **Behavioral sandboxing** – run the agent in a restricted JavaScript VM; disallow eval/Function on page‑derived code.  
4. **Runtime integrity check** – hash critical DOM nodes and compare against baseline snapshots before payment execution.

**Depth**  
- Use *Content Security Policy* (CSP) to restrict script sources, combined with *Subresource Integrity* for third‑party libs.  
- The agent’s UI layer parses a signed `payment_request` object; any deviation (extra fields, altered amounts) causes rejection.  
- Runtime sandbox: Node’s `vm2` or WebAssembly sandbox isolates the agent code from page scripts.  
- Complexity: O(n) DOM scan per transaction; memory overhead is minimal (~10 MB). Trade‑off: extra latency for hashing but negligible for few payments.

**Edge Cases**  
- Adversaries may try to inject via CSS selectors that mimic trusted fields; mitigate by validating field `name` and `id`.  
- Timing attacks: ensure cryptographic signing occurs server‑side, not client‑side.  
- Network tampering: enforce TLS 1.3 with certificate pinning.

**Optimize & Communicate**  
We can batch hash checks for consecutive payments and cache baseline hashes per domain. Explain to interviewers that the key insight is separating *trusted data* from *executable code* and enforcing cryptographic integrity, which turns ADI into a no‑op. This design scales linearly with transaction volume while keeping attack surface minimal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
