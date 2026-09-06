---
qid: ing_8412bf72b6__think__local
question: 'Explain: Preference optimisation: RLHF → DPO → GRPO'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 490
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:45:45-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - Assume the reader knows basic RL‑HF (reward‑based fine‑tuning) and wants a concise map to DPO and GRPO.  
   - Define “preference optimisation” as learning from human feedback to align models with desirable behavior.

**2️⃣ Adopt a layered mental model**  
   - View each method as a *step in the alignment pipeline*:  
     1. **RLHF** – raw reward modeling + policy gradient.  
     2. **DPO** – direct preference optimisation, eliminating explicit rewards.  
     3. **GRPO** – generalised DPO that handles richer objectives (e.g., multi‑task or hierarchical).  
   - Treat each layer as a refinement of the previous one, improving sample efficiency and robustness.

**3️⃣ Reason through the progression step by step**  
   - *RLHF*: collect preference pairs → fit reward model → policy updated via PPO.  
   - *DPO*: observe that the reward model is only used for gradients; replace it with a direct objective on preference likelihoods, removing the intermediate reward.  
   - *GRPO*: generalise DPO by allowing any differentiable scoring function (not just binary preferences), enabling multi‑objective optimisation and better handling of sparse or noisy signals.

**4️⃣ Avoid common traps**  
   - Don’t conflate “reward model” with “policy”; they are distinct stages.  
   - Remember that DPO still needs a policy gradient backbone; it’s not “no RL”.  
   - Beware of over‑simplifying GRPO as just “more data”; its power comes from a richer objective space.

**5️⃣ Sanity‑check & verbalise**  
   - Ask: does each step reduce an intermediate artifact (reward model, preference pairs) while preserving the end goal?  
   - Communicate by summarising: RLHF → reward modeling → policy update; DPO skips the reward model → directly optimises preference likelihoods; GRPO extends this to general objectives.  
   - Use analogies: moving from a *middleman* (reward model) to a *direct conversation* (DPO), then to a *multi‑speaker meeting* (GRPO).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
