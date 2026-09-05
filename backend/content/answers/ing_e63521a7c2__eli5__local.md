---
qid: ing_e63521a7c2__eli5__local
question: 'Explain: Your team extended a model from 32k to 256k with YaRN plus a short
  fine-tune. Long-context evals improved, but users say it got worse on ordinary short
  prompts and it''s noticeably more verbose. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 504
total_tokens: 701
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:39:37-05:00'
sources: []
---

Think of the model as a long‑scroll poem that your team made taller: from 32 k lines to 256 k lines, using YaRN (a way to stretch the scroll) and then giving it a quick “fine‑tune” lesson on how to read it. The new, taller scroll reads better when you ask for long passages – the evaluation shows that. But users say the short verses feel off and the poem is now too talkative.

**Debugging in plain steps**

1. **Check the “stretch” effect (YaRN).**  
   YaRN lets the model remember more context by rearranging tokens, but it can also make the model lean on the extra memory when it shouldn’t. Test with a mix of short and long prompts: if the short ones now use up some of that new memory unnecessarily, they’ll read slower or spill words.

2. **Look at the fine‑tune data.**  
   A short fine‑tune is like giving the model a few extra lines to practice. If those lines are verbose or come from long documents, the model learns “more words = better answer.” Check the training set for bias toward longer answers and trim or balance it.

3. **Evaluate verbosity directly.**  
   Measure average token count per response before and after. If the new model consistently uses more tokens, it’s probably because the fine‑tune encouraged a higher “output length” hyperparameter or the loss function rewards longer completions (e.g., by not penalizing extra words).

4. **Re‑balance the loss.**  
   In training, add a small penalty for excess length or explicitly train with shorter examples. This nudges the model back to concise style.

5. **Test on a “short‑prompt” suite again.**  
   After each tweak, run the same set of everyday questions (e.g., “What’s 2+2?”) and see if the answer length and quality return to baseline while long‑context performance stays high.

In short, the model’s new height helped for big requests but also gave it a habit of filling space. Reduce that habit by checking how YaRN uses memory, cleaning up the fine‑tune data, and re‑introducing a small penalty for verbosity. The result should be a tall scroll that still writes short verses with the same crispness as before.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
