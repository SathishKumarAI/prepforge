---
qid: ing_902ebe66d6__fp__local
question: 'Explain: Action whitelist over action blocklist — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 579
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:36-05:00'
sources: []
---

**Why a whitelist beats a blocklist for a Computer‑Use Agent**

A *Computer‑Use Agent* (CUA) must decide which system calls or API actions to perform in real time.  
The fundamental problem is **safety under uncertainty**: the agent cannot know all malicious behaviors it might trigger, but it can guarantee that every chosen action lies in a set that has been vetted for correctness and safety.

### From safety to a whitelist

1. **Safety as a constraint:** For any policy π we require  
   \( \forall s\in S,\;\pi(s)\in A_{\text{safe}}\).  
   The set \(A_{\text{safe}}\) must be *closed* under the dynamics of the system; otherwise an action that appears safe can lead to a state where only unsafe actions are possible.

2. **Blocklist incompleteness:** A blocklist \(B\) removes known bad actions, but its complement \(S\setminus B\) may still contain *unknown* harmful actions. The agent cannot prove the complement is safe; it must either explore (risking failure) or be overly conservative.

3. **Whitelist as a constructive proof:** By explicitly constructing a whitelist \(W\), we certify that each action in \(W\) has been proven to preserve safety properties (e.g., no privilege escalation, no data leakage). The agent’s policy is then simply “pick any action from \(W\)”—a guaranteed safe decision.

### Deeper principle: *constrained optimization*  

The CUA solves  
\(\max_{\pi}\mathbb{E}[R]\)  subject to \( \pi(s)\in W\).  
Because the feasible set is explicitly known, standard reinforcement‑learning algorithms can optimise without risking constraint violation. In contrast, a blocklist would require *adversarial robustness* guarantees that are far harder to achieve.

### Non‑obvious insight

A whitelist implicitly encodes *negative information*: every action not in \(W\) is considered unsafe, but this does **not** mean it is known bad—it simply lacks proof of safety. Thus a whitelist allows the agent to *grow* its safe set over time by proving more actions safe, whereas a blocklist can only shrink (by discovering new threats). This incremental safety expansion is what makes whitelists scalable in open‑world settings.

---

**Bottom line:** A whitelist transforms safety from an unprovable “everything else might be bad” stance into a concrete, verifiable constraint that aligns perfectly with optimisation frameworks and permits systematic growth of safe behaviour.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
