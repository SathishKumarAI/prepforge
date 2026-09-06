---
qid: ing_8441d2399f__think__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 471
total_tokens: 669
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:46:08-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
   - *Goal:* keep a pre‑trained model’s broad knowledge intact while still adapting it to a new domain.  
   - *Assumptions:* you have a frozen base checkpoint, access to a small fine‑tuning set, and compute budget for regularization.

**2️⃣ Pick the right mental framework**  
   - Treat the problem as **continual learning / catastrophic forgetting**.  
   - Use the “regularize, constrain, or replay” triad: *Regularization* (penalties), *Constraints* (parameter freezing), *Replay* (synthetic or stored examples).

**3️⃣ Step‑by‑step reasoning**  
   1. **Baseline:** fine‑tune normally and measure performance drop on a held‑out general set.  
   2. **Regularization:** add a penalty term that keeps new weights close to the original ones (e.g., L2, elastic weight consolidation).  
   3. **Freezing strategy:** freeze lower layers or groups of tokens that carry generic knowledge; only fine‑tune higher‑level heads.  
   4. **Replay buffer:** periodically mix a small batch of general data into each update.  
   5. **Evaluation loop:** after each epoch, test both domain and general metrics to detect drift early.

**4️⃣ Avoid common pitfalls**  
   - Don’t over‑freeze: the model becomes rigid and underfits new data.  
   - Beware of “negative transfer” where domain signals corrupt unrelated features.  
   - Ensure replay samples are representative; otherwise you’ll re‑introduce noise rather than knowledge.

**5️⃣ Sanity‑check & verbalize**  
   - Verify that general metrics stay within a small tolerance (e.g., ±1 % loss).  
   - Explain the trade‑off: “We’re keeping the backbone fixed and only fine‑tuning the task head, while periodically reminding the model of its prior knowledge through replay.”  

This structured approach lets you internalize a systematic way to preserve general capabilities during targeted fine‑tuning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
