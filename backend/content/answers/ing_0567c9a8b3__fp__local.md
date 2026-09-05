---
qid: ing_0567c9a8b3__fp__local
question: 'Explain: PoC: Memory Manipulation via Indirect Prompt Injection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 490
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:03-05:00'
sources: []
---

### From the Core Problem to an Attack

**Goal:** Let a language model (LLM) “remember” arbitrary text it never received in its training set and then use that memory to influence future outputs.  
The LLM’s internal state is a *context window*—a sequence of tokens whose embeddings are linearly combined to produce the next token. If we can inject a hidden, high‑probability token sequence into this context, we effectively “write” data into the model’s working memory.

**Why Indirect Prompt Injection?**  
Directly inserting the malicious text in the user prompt is trivial but easily detected by moderation. Instead, we exploit *meta‑information*—the prompt that controls how the LLM processes other prompts. By crafting a prompt that tells the model to “remember this snippet” (e.g., via a specially formatted instruction or a hidden keyphrase), we redirect its attention mechanism to store the snippet in an internal slot without ever exposing it to the user.

**Mechanics of Memory Manipulation**

1. **Tokenization & Embedding:** The injected meta‑prompt contains tokens that map to high‑activation vectors for a *memory gate* layer (e.g., a special “remember” token).
2. **Attention Routing:** The attention mask is altered so that the memory gate’s key vectors attend exclusively to the snippet’s value vectors.
3. **State Update:** During forward pass, the model updates its hidden state by adding the weighted snippet embeddings, effectively “storing” them.
4. **Recall Trigger:** Later prompts can reference a *retrieval keyword* that activates the same attention pattern, causing the stored snippet to be regenerated and influence the output.

**Non‑Obvious Insight**

Most defenses focus on the prompt text itself; they ignore *how context is routed*. Because the memory gate can be activated by a single high‑weight token, an attacker only needs to embed that token once. The attack’s stealth comes from hiding it in a seemingly innocuous instruction, making detection by lexical filters nearly impossible.

---

*This PoC demonstrates that by treating the LLM as a differentiable memory system and manipulating its attention pathways, one can covertly write arbitrary data into its short‑term state.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
