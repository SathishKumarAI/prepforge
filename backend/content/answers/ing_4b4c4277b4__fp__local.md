---
qid: ing_4b4c4277b4__fp__local
question: Your agent model outputs an edited version of a 500-line file. Applying
  it verbatim is slow and error-prone. How do you make "apply" fast and reliable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 460
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:45:15-05:00'
sources: []
---

### Fast, Reliable “Apply” for Large Files

The core problem is that a *full rewrite* of a 500‑line file forces the editor to re‑parse every line and to shift all subsequent content in memory or disk. That quadratic cost hides two facts:

1. **Only a small fraction of lines actually change** – most edits are local.
2. **Text is linear; operations on it are *local* (insert/delete at a position).**

Therefore the optimal strategy is to treat the model’s output as a *patch* rather than a new file.

#### 1. Generate a delta

- Compute the longest common subsequence (LCS) between the original and edited lines.
- Emit an edit script of three operations: `Keep`, `Insert(line, pos)`, `Delete(pos)`.

The LCS guarantees that every inserted line is *necessary* and every deleted line is *unnecessary*, minimizing the number of changes.

#### 2. Apply the patch in place

- Traverse the file once, maintaining a read pointer (`r`) and write pointer (`w`).
- When encountering `Keep`, copy `lines[r]` to `lines[w]`; increment both.
- For `Insert`, write the new line at `w`; increment only `w`.
- For `Delete`, skip `r`; increment only `r`.

Because each line is touched at most once, the time complexity collapses from \(O(n^2)\) to \(O(n)\).

#### 3. Verify consistency

After applying, compute a hash of the resulting file and compare it with the hash the model supplied (or recompute the LCS again). This guarantees that no corruption occurred during streaming or concurrent edits.

---

**Non‑obvious insight:**  
Treating the edit as *incremental* exploits the *sparsity* of typical changes. Even a 500‑line file can be rewritten in milliseconds if you avoid re‑reading unchanged data—exactly what patch algorithms do. The same principle underlies fast text editors, version control systems, and real‑time collaborative tools.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
