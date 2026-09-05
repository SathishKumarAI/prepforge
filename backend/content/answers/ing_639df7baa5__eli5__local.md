---
qid: ing_639df7baa5__eli5__local
question: 'Explain: Product Quantization (PQ) — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 211
total_tokens: 370
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:13:59-05:00'
sources: []
---

**Product Quantization (PQ)** is like turning a long, detailed recipe into a short set of “ingredient cards.”  
Imagine you have thousands of complex dishes (vectors) that each describe a point in space. Storing every dish verbatim would need huge amounts of memory and slow searches. With PQ, you first split each dish into several smaller sections—say, flavor, texture, color, and aroma. For each section you create a small menu of common “flavor cards” (a tiny codebook). Every dish is then represented by the indices of its closest cards in each section, not by all its original details.

When you search, you only compare these compact card indices, which takes far less time and space. If you need a more accurate answer later, you can quickly reconstruct the full recipe from the chosen cards. Thus PQ keeps vector databases fast and lightweight while still letting you find similar items accurately.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
