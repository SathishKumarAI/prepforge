---
qid: vq_0a67ecbb99__fp__local
question: What will be the value of ‘a’ after execution ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 667
total_tokens: 839
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:22:06-05:00'
sources: []
---

Below is a principled derivation of what `a` will be after the snippet executes.  
Assume the code in question is

```c
int a = 1;
for (int i = 0; i < n; ++i) {
    a += i;
}
```

---

### The fundamental problem it solves  

The loop accumulates the sum of all integers **strictly less than** `n` into `a`.  
This is the classic *prefix‑sum* or *triangular number* computation.

### Why it must work this way  

Let us prove by induction that after the `k`‑th iteration (`0 ≤ k < n`) the invariant holds:

> **Invariant**: `a = 1 + Σ_{j=0}^{k-1} j`.

*Base case (`k = 0`) – before any iteration:*  
The sum is empty, so `a = 1`, satisfying the invariant.

*Inductive step:*  
Assume the invariant holds after iteration `k`.  
During iteration `k` we execute `a += k`; thus

```
new a = (1 + Σ_{j=0}^{k-1} j) + k
      = 1 + Σ_{j=0}^{k} j .
```

Hence the invariant holds for `k+1`.  
By induction it is true after all `n` iterations.

### Final value

After the loop terminates (`k = n`), the invariant gives

\[
a = 1 + \sum_{j=0}^{\,n-1} j
   = 1 + \frac{(n-1)n}{2}.
\]

So the final `a` is **\(1 + \tfrac{n(n-1)}{2}\)**.

---

### One non‑obvious insight  

The loop invariant *exactly* mirrors the closed‑form of the triangular number.  
If one were to write a separate accumulator variable, the same result would emerge—but the invariant shows that the initial value `1` is not “extra”; it is part of the mathematical structure of the problem. This perspective turns what looks like an arbitrary initialization into a natural offset in the arithmetic progression, revealing why adding `1` before the loop is essential to match the intended formula.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
