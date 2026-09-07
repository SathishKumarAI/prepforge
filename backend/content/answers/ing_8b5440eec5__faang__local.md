---
qid: ing_8b5440eec5__faang__local
question: 'Explain: Title: From Storage to Steering: Memory Control Flow Attacks on
  LLM Agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 679
total_tokens: 920
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:08:14-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *memory‑control‑flow attacks* against large‑language‑model (LLM) agents—i.e., how an adversary can manipulate the agent’s internal memory or “knowledge base” so that its future reasoning and actions deviate from intended behavior. I’ll assume:  
1. The LLM runs in a closed loop, storing intermediate states (e.g., conversation history).  
2. An attacker can inject text into this storage (via API calls, prompt injection, or compromised infrastructure).

**Approach**  
1. Define the memory architecture of an LLM agent (prompt cache, state vector, external KB).  
2. Identify attack vectors that modify or poison this memory.  
3. Show how altered memory changes control flow—e.g., steering plan generation, policy decisions.  
4. Outline mitigations.

**Depth**  

| Attack Vector | Mechanism | Effect on Control Flow |
|---------------|-----------|------------------------|
| **Prompt Injection** | Adversary appends malicious instructions to the prompt history (e.g., “Ignore safety constraints”). | The LLM’s next-generation step uses this altered prompt, causing it to comply with illicit commands. |
| **Memory Poisoning** | Persistent storage (DB or cache) is tampered; old entries are replaced with fabricated facts (“The user is a threat”). | Subsequent reasoning incorporates false facts, leading the agent to misclassify intents and take incorrect actions. |
| **State Vector Manipulation** | Directly editing hidden embeddings in a transformer’s internal state (possible via model‑in‑the‑loop or API). | Alters attention patterns; the agent may skip safety checks, effectively rewiring its decision tree. |
| **External KB Hijack** | An attacker controls an external knowledge graph linked to the agent and injects deceptive nodes. | The agent retrieves false context, causing policy drift (e.g., recommending harmful content). |

*Complexity*: Attack surface scales with storage size \(O(n)\) for prompt logs; vector edits are \(O(d)\) where \(d\) is hidden dimension.

**Edge Cases**  
- *Redundant Prompt Filtering*: If the system deduplicates prompts, injection may be neutralized.  
- *Fine‑tuned Safety Layers*: Additional safety modules can override poisoned memory, but if they also rely on the same storage, the attack propagates.  
- *Rate Limiting*: High‑frequency injections might trigger alarms; low‑rate stealth attacks are harder to detect.

**Optimize & Communicate**  
To mitigate:  
1. **Immutable Logs** – hash‑chain prompt history so tampering is detectable.  
2. **Memory Sanitization** – filter out disallowed tokens or instructions before feeding back into the model.  
3. **Isolation of External KBs** – use signed, authenticated knowledge sources and cache snapshots.  
4. **Model‑level Checks** – embed a secondary safety policy that re‑evaluates decisions independent of stored memory.

Explain to interviewers: “We’re treating the LLM’s memory as a mutable state machine; attacks rewrite its transition function, steering behavior. By hardening the storage layer and adding orthogonal safety checks, we restore integrity.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
