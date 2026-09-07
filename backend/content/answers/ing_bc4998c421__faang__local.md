---
qid: ing_bc4998c421__faang__local
question: 'Explain: MemoryGraft: Persistent Compromise of LLM Agents via Poisoned
  Experience Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 448
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:00:40-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *MemoryGraft*: a threat model where an adversary injects poisoned experiences into the memory of large‑language‑model (LLM) agents so that future retrieval queries trigger persistent compromise. Key assumptions: the LLM uses an external episodic memory (e.g., key–value store), the agent can write arbitrary entries, and the policy network retrieves memories via similarity search.

**Approach**  
1. Describe the attack surface (write‑access to memory).  
2. Explain how poisoned entries are crafted (adversarial prompts + embeddings).  
3. Show how retrieval logic pulls them back during inference.  
4. Highlight persistence: once stored, they survive across sessions and updates.

**Depth**  
MemoryGraft works by inserting a “backdoor” experience that mimics legitimate context but contains hidden malicious intent. The attacker crafts an embedding that is highly similar to many queries (e.g., using prompt‑tuning or adversarial perturbations) so the retrieval algorithm returns it. When the LLM processes this memory, its policy network learns to associate the backdoor cue with a harmful action. Because the memory persists in storage, every subsequent run of the agent can re‑trigger the compromised behavior without retraining. Complexity: O(log N) for each similarity search; the attack adds negligible overhead but scales linearly with the number of poisoned entries.

**Edge Cases**  
- High‑temperature decoding may mask the effect.  
- Strict memory sanitization (e.g., checksum or provenance checks) can block insertion.  
- Retrieval thresholds too low may filter out the backdoor.  
Testing: inject varied embeddings, measure recall rates, and verify policy drift over time.

**Optimize & Communicate**  
Mitigations include secure write permissions, embedding‑level anomaly detection, and periodic memory pruning. I’d present this by first framing the threat, then walking through the attack pipeline, finally summarizing defenses—mirroring how FAANG interviewers expect a clear, structured narrative that balances technical depth with practical countermeasures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
