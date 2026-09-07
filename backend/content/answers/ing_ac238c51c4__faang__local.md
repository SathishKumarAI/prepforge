---
qid: ing_ac238c51c4__faang__local
question: 'Explain: Infinite Loops — Computer Use Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 515
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:24:24-05:00'
sources: []
---

**Infinite Loops – Computer‑Use Agents**

| **Step** | **What I’d do** |
|----------|----------------|
| **Clarify** | *Problem:* We’re building agents that automate tasks on a computer (e.g., bots that browse, fill forms). The issue is they can get stuck in infinite loops—continuously repeating actions without progress. <br>*Assumptions to confirm:* 1) Agents run locally or in a sandbox? 2) They have access to UI events and state? 3) Are we limiting CPU/memory? |
| **Approach** | 1. Detect cycles by tracking *state signatures* (e.g., window titles + DOM hashes). <br>2. Enforce *timeouts* per action and overall task. <br>3. Implement a *watchdog* that aborts after N consecutive no‑progress steps. |
| **Depth** | • **State hashing**: Compute a lightweight hash of the visible UI (e.g., element tree + values). Store last K hashes in a ring buffer; if a hash repeats → loop detected. <br>• **Action timeouts**: Wrap each API call with a deadline (default 5 s). If exceeded, abort and log. <br>• **Watchdog counter**: Increment when an action yields no state change; reset on progress. After threshold (e.g., 10), raise exception. <br>Complexity: O(1) per step for hash lookup, O(K) memory where K is buffer size. |
| **Edge Cases** | • Legitimate waiting periods (e.g., page load) can trigger false positives—mitigate by distinguishing *idle* vs *stuck* via network activity. <br>• Rapid UI flicker may change hashes; use a debounce window. <br>• Agents that intentionally loop for polling need an explicit *loop flag* to bypass detection. |
| **Optimize & Communicate** | • Cache previous hashes to avoid recomputation. <br>• Expose configuration knobs (timeout, threshold) so ops can tune per workload. <br>When presenting, I’d show a diagram of the watchdog cycle, explain trade‑offs between sensitivity and false positives, and outline how logs help debug loop causes. This demonstrates structured thinking, depth in algorithm design, and clear communication—key FAANG signals. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
