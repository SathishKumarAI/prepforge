---
qid: ing_9d37c001db__faang__local
question: 'Explain: Pitfall 7: Misunderstanding Context Windows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 457
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:49:48-05:00'
sources: []
---

**Pitfall 7 – Misunderstanding Context Windows**

| **Stage** | **What to Do / Say** |
|-----------|----------------------|
| **Clarify** | Restate: “We’re dealing with the limit on how many tokens a model can see at once, and the common mistake is treating that limit as a static ‘memory’.” Ask whether the interviewee knows token‑counting vs. semantic context, and whether they’ve seen differences between GPT‑3’s 4 k window and GPT‑4’s 8–32 k. |
| **Approach** | 1️⃣ Explain tokenization: words → subwords → tokens. <br>2️⃣ Show how a 4 k window ≈ 3 k words, not 4 k *unique* words. <br>3️⃣ Discuss sliding windows / chunking for long documents. |
| **Depth** | • **Token math:** “If ‘context’ = 4096 tokens, a single 10‑word sentence is ~2 tokens after tokenization.”<br>• **Semantic bleed:** Models only see the last N tokens; earlier content may be forgotten unless explicitly repeated or summarized.<br>• **Implementation tricks:** Use hierarchical prompt engineering: chunk + summarize, then feed summary. Complexity O(n) for linear scan, but you can cache embeddings to reduce re‑tokenization cost. |
| **Edge Cases** | • Very short prompts that exceed the window because of large system messages.<br>• Tokenizers that split rare words into many subwords (e.g., emojis).<br>• Multi‑language text where token counts per word vary widely. |
| **Optimize & Communicate** | Suggest using *prompt chunking* with overlap, or a retrieval‑augmented pipeline that keeps the most recent 90% of tokens active while summarizing older ones. Explain trade‑offs: more passes = higher latency but better context retention. Wrap up by noting that misreading the window leads to hallucinations and wasted compute—so always validate token counts before sending requests. |

*Word count:* ~195 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
