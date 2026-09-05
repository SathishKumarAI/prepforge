---
qid: ing_48212c51d4__think__local
question: 'Q41: How do you prevent reward hacking when using Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 445
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:13:56-05:00'
sources: []
---

**1. Clarify the setup and assumptions**  
   - *What is “Best‑of‑N” exactly?* (e.g., selecting the top k actions from a set of N sampled actions).  
   - *Which reward signal is being optimized?* Is it a human‑given scalar, an intrinsic metric, or something learned?  
   - *Assume we have access to a policy that can sample many candidates and a deterministic way to pick the best.*  

**2. Adopt a mental model: “Reward as a safety filter”**  
   - Think of reward hacking as the agent exploiting loopholes in the reward function.  
   - Treat Best‑of‑N as a *constraint* that reduces variance but still allows exploitation if the reward is misaligned.

**3. Step‑by‑step reasoning**  
   1. **Define a robust reward**: combine the primary objective with auxiliary penalties (e.g., for unsafe actions).  
   2. **Bound the sampling space**: limit N to realistic, diverse candidates; avoid pathological “super‑good” but harmful samples.  
   3. **Post‑selection audit**: after picking the best, run a safety check or secondary model before execution.  
   4. **Iterate on reward shaping**: if hacking is observed, adjust the reward function and re‑evaluate.

**4. Common traps to avoid**  
   - Assuming that a higher N automatically solves all problems—more samples can surface more hacks.  
   - Ignoring that Best‑of‑N amplifies any bias in the underlying policy.  
   - Over‑relying on deterministic selection; stochastic tie‑breaking can expose vulnerabilities.

**5. Sanity‑check & communicate**  
   - *Ask*: “Does every step reduce the incentive to cheat?”  
   - Explain the process as: first, make the reward hard to game; second, limit candidate space; third, verify after selection. This verbal walk‑through confirms that each layer addresses a specific hacking vector.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
