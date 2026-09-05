---
qid: vq_ed3fc6348f__eli5__local
question: What are all different types of collation sensitivity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 330
total_tokens: 488
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:33:11-05:00'
sources: []
---

Imagine your data is a big library of books that can be read by many people around the world.  
**Collation** is the rule set that tells the library how to sort and compare titles—whether it cares about accents, case (uppercase vs lowercase), or even which language the words belong to.

| Sensitivity | What it looks at |
|-------------|------------------|
| **Case‑sensitive** | “Apple” ≠ “apple”. Treats uppercase and lowercase as different. |
| **Accent‑sensitive** | “resume” ≠ “résumé”. Differentiates letters with accents or diacritics. |
| **Kana‑sensitively (Japanese)** | Distinguishes between hiragana, katakana, and romaji forms of the same sound. |
| **Width‑sensitive** | Treats half‑width and full‑width characters as different (common in East Asian text). |
| **Language‑specific** | Uses rules particular to a language, like how “ch” comes after “c” in Spanish but not in English. |

When you set a collation for a database column, you decide which of these factors matter. If you choose *case‑insensitive* and *accent‑insensitive*, the library will treat “Apple”, “apple”, “Applé” all as the same title, making searches easier but sometimes losing precise distinctions. Choosing stricter sensitivities keeps every nuance, useful when exact matching is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
