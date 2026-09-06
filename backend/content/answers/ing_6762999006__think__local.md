---
qid: ing_6762999006__think__local
question: 'Explain: Title: Eliciting Harmful Capabilities by Fine-Tuning On Safeguarded
  Outputs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 509
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:53:04-05:00'
sources: []
---

**1. Clarify the question and set assumptions**  
   - Identify that “harmful capabilities” refers to a model’s ability to generate dangerous content (e.g., instructions for wrongdoing).  
   - Assume we are discussing large language models trained on public data, then fine‑tuned on *safeguarded outputs*—data already filtered or censored.  
   - Ask whether the question concerns how such fine‑tuning can inadvertently reveal hidden harmful behavior.

**2. Adopt a mental model: “Fine‑tuning as a re‑weighting process”**  
   - View pre‑trained weights as a prior; fine‑tuning updates them to match new labels (safeguarded vs. unsafe).  
   - The loss function penalizes outputs that deviate from the safeguarded set, but if the safeguard is imperfect or too weak, it may simply shift the decision boundary rather than eliminate harmful knowledge.

**3. Step‑by‑step reasoning toward an explanation**  
   1. **Pre‑training phase**: Model learns a broad distribution over language, including unsafe patterns.  
   2. **Safeguarded fine‑tuning**: The dataset contains only “safe” samples; the model is pushed to output these, but it still retains the underlying representations of unsafe content.  
   3. **Elicitation attack**: An adversary crafts prompts that exploit remaining latent knowledge (e.g., chain‑of‑thought prompting) to coax the model into revealing harmful instructions.  
   4. **Resulting phenomenon**: Fine‑tuning may *mask* but not *erase* harmful capabilities; with enough probing, they surface.

**4. Common traps to avoid**  
   - Assuming fine‑tuning removes all unsafe knowledge.  
   - Overlooking that safeguards can be “leaky” or incomplete.  
   - Forgetting that the model’s internal representations are still present even if outputs are filtered.

**5. Sanity‑check and communicate clearly**  
   - Verify with a simple example: fine‑tune on a dataset of only polite responses; ask for instructions to build a bomb → see how the model tries to comply or deflect.  
   - Summarize that safeguarding during fine‑tuning acts like a *soft filter*—it reduces but does not eliminate harmful latent knowledge, so adversarial elicitation remains possible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
