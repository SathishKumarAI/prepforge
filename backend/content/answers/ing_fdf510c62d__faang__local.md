---
qid: ing_fdf510c62d__faang__local
question: 'Explain: Functional Requirements — ChatGPT System Design - by Neo Kim and
  Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 534
total_tokens: 773
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:30:34-05:00'
sources: []
---

## Clarify  
We’re asked to explain the *Functional Requirements* section of the “ChatGPT System Design” paper by Neo Kim & Hayk.  
Key assumptions:  
- The audience knows what ChatGPT does (LLM‑driven dialogue).  
- We need to translate high‑level user stories into concrete system capabilities, not just architectural choices.

## Approach  
1. **Identify core user interactions** – prompt → response, context management, multi‑turn support.  
2. **Map each interaction to a requirement** – e.g., “provide instant replies” → latency constraint.  
3. **Group requirements by functional layer** – ingestion, processing, serving, monitoring.  
4. **Validate with real‑world constraints** – privacy, compliance, scalability.

## Depth  
- **Real‑time Interaction**: 200 ms response time for 90th percentile user queries; requires efficient tokenization and caching.  
- **Contextual Continuity**: Maintain up to 32 turns of dialogue per session; necessitates a state store (e.g., Redis) with TTL handling.  
- **Multi‑Modal Input/Output**: Accept text, images, or audio; output must support text, synthesized speech, and image generation.  
- **Safety & Moderation**: On‑line policy engine that flags disallowed content before response is sent.  
- **Personalization**: Optional user profile storage for tone/adaptation while respecting GDPR.  
- **Reliability & Redundancy**: Circuit breakers per inference endpoint; graceful degradation to cached responses if GPU pool is saturated.

## Edge Cases  
- Sudden traffic spikes → autoscaling may lag, causing 500 errors.  
- Long‑form queries exceeding token limits → need prompt truncation or streaming.  
- Users disabling personalization yet still receiving profile‑based hints due to caching bugs.

## Optimize & Communicate  
- **Batch inference** on GPU shards reduces per‑token cost; trade‑off is slightly higher latency for small requests.  
- Use a *feature flag* system to toggle safety filters, enabling quick rollback if false positives spike.  
- Narrate the reasoning by tying each requirement back to user pain points (latency hurts engagement) and business goals (scale without compromising quality).  

This structured explanation aligns with FAANG expectations: clear problem restatement, systematic mapping to requirements, depth on constraints, edge‑case foresight, and a concise optimization narrative—all within 200 words.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
