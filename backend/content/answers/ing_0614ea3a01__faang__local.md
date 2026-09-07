---
qid: ing_0614ea3a01__faang__local
question: What query understanding techniques would you apply before retrieval, and
  when is each worth it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 564
total_tokens: 803
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:58:27-05:00'
sources: []
---

**Clarify**  
We’re asked which *query‑understanding* methods to run **before** a document or vector retrieval step and when each is justified. I’ll assume we have an end‑to‑end search system (textual query → embedding / keyword index) that can accept either raw text or pre‑processed tokens, and we care about latency, accuracy, and robustness.

**Approach**  
1. List core techniques: spell‑check, intent classification, entity extraction, synonym/embedding expansion, language detection, stop‑word removal, phrase‑level parsing (chunking), query rewriting.  
2. Map each to cost vs benefit scenarios.  
3. Summarize in a table + short narrative.

**Depth**  

| Technique | When it pays off | Why |
|-----------|------------------|-----|
| **Spell‑check / auto‑correct** | High user‑error volume (e.g., mobile, voice). | Fixes noisy input; small CPU cost. |
| **Intent classification** | Multi‑domain or mixed content. | Enables retrieval to a specialized index or fallback logic. |
| **Named‑entity extraction** | Knowledge‑base heavy queries (dates, product names). | Allows entity‑centric retrieval and disambiguation. |
| **Synonym / embedding expansion** | Domain with rich jargon or evolving terminology. | Broadens recall without over‑generating candidates. |
| **Language detection & translation** | Global user base. | Ensures we hit the correct language index. |
| **Stop‑word removal + stemming/lemmatization** | Token‑based keyword indexes. | Reduces noise and index size. |
| **Phrase / chunk parsing (NP/PP)** | Long, complex queries. | Preserves meaningful units for phrase‑matching engines. |

*Complexity*: Most steps are linear in query length; heavy NLP (intent, NER) can be off‑loaded to a microservice or batched.  

**Edge Cases**  
- Ambiguous single words: rely on context from intent/NER.  
- Mixed‑language queries: detect and translate each segment.  
- Extremely short queries (<2 tokens): skip expensive parsing.

**Optimize & Communicate**  
Start with lightweight checks (spell, language). Only invoke heavier models if the query length > 3 or hits a “mixed‑domain” flag. Use caching for repeated intent/NER results. Present this pipeline in an architecture diagram and explain that latency budget drives pruning decisions. This structured plan demonstrates clear trade‑offs and aligns with FAANG expectations of concise, data‑driven reasoning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
