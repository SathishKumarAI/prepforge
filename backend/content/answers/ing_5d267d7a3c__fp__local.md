---
qid: ing_5d267d7a3c__fp__local
question: 'Explain: Bit Manipulation (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 467
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:22:35-05:00'
sources: []
---

**Bit Manipulation – The 7 Classic Neetcode 150 Problems**

At its core, every bit‑manipulation puzzle asks: *“Can we encode a combinatorial state in O(1) memory and perform a logical test or update faster than naïve loops?”*  
Bits are the ultimate **binary basis** of information: each position is an independent Boolean variable. When you treat an integer as a vector over GF(2), operations like `AND`, `OR`, `XOR` become linear transformations, and shifting becomes a simple index shift.  

1. **Single Number / Unique Numbers** – `xorAll ^ xorPairs` collapses duplicates because `a ⊕ a = 0`.  
2. **Missing Number** – Subtracting the XOR of expected indices from the XOR of array values removes the missing element.  
3. **Count Bits (Hamming Weight)** – `x & (x-1)` clears the lowest set bit; iterating this reveals each ‘1’ in O(popcount).  
4. **Swap Bits** – Masking with `0b01` and `0b10`, shifting, then OR‑ing reconstructs swapped positions without temporary storage.  
5. **Check Power of Two** – `x & (x-1) == 0` exploits that powers of two have a single ‘1’ followed by zeros.  
6. **Reverse Bits** – Swapping halves, quarters, etc., is a recursive application of the swap‑bits trick; each step doubles the granularity.  
7. **Number of Set Bits in Range** – Pre‑computing prefix counts or using bit DP gives O(1) query time.

**Non‑obvious insight:**  
*The XOR operation is its own inverse and distributes over addition modulo 2.* This duality lets us “cancel” duplicates without extra memory—an elegant algebraic shortcut that underlies many of the problems. Understanding XOR as a group operation on `{0,1}` clarifies why these tricks work universally across seemingly unrelated tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
