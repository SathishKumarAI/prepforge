---
qid: ing_6d60915f3b__faang__local
question: Qwen3 uses "strong-to-weak" distillation, bootstrapping the smaller models
  from flagship ones instead of running the full heavy post-training on every size.
  How does that work and why is it cheaper?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 266
output_tokens: 491
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:43-05:00'
sources: []
---

**Clarify**  
You’re asking how Qwen‑3’s “strong‑to‑weak” distillation works: a large, fully‑trained model (the *teacher*) generates training data for smaller models (the *students*), instead of each student undergoing its own heavy post‑training. We’ll assume the teacher is already fine‑tuned on downstream tasks and that we have enough compute to run it once per batch.

**Approach**  
1. **Generate pseudo‑labels**: For a large unlabeled corpus, feed inputs through the teacher; capture logits or hidden states.  
2. **Create a distilled dataset**: Pair each input with the teacher’s predictions (soft labels).  
3. **Train students** on this curated set using standard cross‑entropy or KL divergence loss.  
4. **Iterate if needed**: Optionally re‑run the teacher on student outputs to refine.

**Depth**  
- *Teacher inference* is a one‑time cost per sample, amortized across all students.  
- Students learn to mimic the teacher’s decision surface without needing full‑scale fine‑tuning or large‑batch gradient updates.  
- Training complexity drops from **O(N · C)** (full training) to **O(1 · C)** for label generation plus **O(M · S)** for student training, where *M* is the number of students and *S* their size.  
- The method preserves most performance because soft labels encode richer information than hard classes.

**Edge Cases**  
- Teacher may over‑confidently bias students; use temperature scaling or label smoothing.  
- If data distribution shifts drastically from teacher’s training set, distilled labels could be stale—test on held‑out validation sets.  
- Very small students might still underfit even with strong teachers; consider curriculum learning.

**Optimize & Communicate**  
To make it cheaper:  
- Run the teacher once and cache logits.  
- Parallelize student training across GPUs.  
- Use mixed precision to reduce memory.  

Explain this flow to interviewers by highlighting the *amortization of inference cost* versus *per‑model fine‑tuning*, and how distillation preserves accuracy while cutting compute by orders of magnitude.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
