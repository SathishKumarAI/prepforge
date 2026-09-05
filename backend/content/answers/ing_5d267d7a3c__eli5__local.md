---
qid: ing_5d267d7a3c__eli5__local
question: 'Explain: Bit Manipulation (7 Problems) — Neetcode 150'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 355
total_tokens: 517
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:04:05-05:00'
sources: []
---

Imagine a machine that can only flip tiny switches on or off—like a row of lights on a long power strip. Each switch represents one “bit” (0 or 1). Bit‑manipulation tricks let you treat the whole strip as a single number and change individual lights without touching the others.

**Seven common tricks**

| Trick | What it does | Light‑strip analogy |
|-------|--------------|---------------------|
| **Set a bit** | Turn one switch on. | `number |= (1 << k)` – flip switch *k*. |
| **Clear a bit** | Turn one switch off. | `number &= ~(1 << k)` – turn switch *k* off. |
| **Toggle a bit** | Flip a switch’s state. | `number ^= (1 << k)` – toggle switch *k*. |
| **Check a bit** | See if a switch is on. | `(number >> k) & 1` – read switch *k*. |
| **Count set bits** | Count how many switches are on. | Loop or use built‑in popcount. |
| **Swap bits** | Exchange two switches’ positions. | Use XOR to swap without a temp variable. |
| **Reverse bits** | Flip the entire strip left ↔ right. | Shift and OR repeatedly, or use lookup tables. |

With these moves you can solve many Neetcode 150 “bit‑manipulation” problems—like finding the most frequent bit, checking parity, or detecting duplicate numbers—all by treating binary digits as simple on/off switches in a clever, efficient dance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
