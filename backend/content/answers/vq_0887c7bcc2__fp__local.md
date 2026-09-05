---
qid: vq_0887c7bcc2__fp__local
question: What is FGCC?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 937
total_tokens: 1102
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T15:21:48-05:00'
sources: []
---

**FGCC (Faster GCD Computation via Co‑Prime Cancellation)**  
In a data‑structure and algorithm setting, we often need the greatest common divisor of two integers—say for simplifying fractions or hashing. The *fundamental* problem is: “Given \(a,b\in\mathbb N\), compute \(\gcd(a,b)\) as fast as possible.”  

The classical Euclidean algorithm solves this by repeatedly replacing \((a,b)\) with \((b,a\bmod b)\). Its cost is proportional to the number of digit shifts, i.e. \(O(\log a+\log b)\). FGCC refines this by **eliminating all common powers of two** *before* invoking Euclid’s step:

1. Extract the largest power of two dividing both numbers:
   \[
   k=\nu_2(a)+\nu_2(b),\qquad
   a'=\frac{a}{2^{\nu_2(a)}},\;b'=\frac{b}{2^{\nu_2(b)}}.
   \]
2. Run the binary GCD on \(a',b'\).  
3. Multiply the result by \(2^k\).

Why does this work? The Euclidean algorithm is invariant under multiplication by a unit (here, powers of two), because \(\gcd(2^x a, 2^y b)=2^{\min(x,y)}\gcd(a,b)\). By stripping these factors first, we reduce the size of the operands, thereby cutting the number of division steps. The bit‑shift operations in step 1 are \(O(1)\) on modern hardware.

**Deeper principle:** FGCC is an instance of *preconditioning*—transforming inputs to a form that makes the core algorithm cheaper. Here, we exploit the fact that binary arithmetic is cheap: dividing by two is just a right shift, and checking for evenness is a single bit test. This ties into information‑theoretic bounds: the number of bits in \(a\) and \(b\) determines the work, so reducing those bits directly reduces runtime.

**Non‑obvious insight:** Many people think any factor extraction (like removing all common primes) would help, but FGCC shows that *only* powers of two matter for speed on binary machines. Removing larger odd factors would require expensive division and offers no asymptotic benefit because Euclid’s algorithm already handles them efficiently.

Thus, FGCC is a lightweight wrapper around the binary GCD that guarantees a constant‑factor improvement on typical integer sizes encountered in competitive programming and cryptographic protocols.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
