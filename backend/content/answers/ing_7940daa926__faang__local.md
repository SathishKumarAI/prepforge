---
qid: ing_7940daa926__faang__local
question: You want to switch model providers and your prompts break. Why, and how
  would you have made them portable?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 396
total_tokens: 640
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:25:46-05:00'
sources: []
---

**Clarify**  
You’re moving from one LLM provider (e.g., OpenAI) to another (e.g., Anthropic). Your existing prompts fail because each model has a different **prompt syntax, token format, and instruction style**. I’d first confirm the target’s API spec: max tokens, prompt prefix/suffix conventions, and supported special tokens.

**Approach**  
1. Identify *semantic* vs. *syntactic* parts of your prompts.  
2. Abstract them into reusable templates (e.g., `{role}: {instruction}`).  
3. Build a lightweight wrapper that injects provider‑specific prefixes/suffixes and handles token limits.  
4. Write unit tests for each template against both providers.

**Depth**  
- **Template engine**: Jinja/Handlebars to separate logic from text.  
- **Provider layer**: an interface exposing `send(prompt, max_tokens)`; concrete classes add the necessary `<|assistant|>` or `[INST]` markers.  
- **Tokenization check**: pre‑validate length using each provider’s tokenizer to avoid runtime errors.  
Complexity is O(n) in prompt size; memory overhead is negligible.

**Edge cases**  
- Models that don’t support certain control tokens (e.g., `stop`).  
- Different temperature/temperature‑scaling semantics.  
- Variations in default system messages or context windows. Test with edge prompts: empty, very long, containing special characters.

**Optimize & communicate**  
After the wrapper works, benchmark latency and cost per token for both providers. Explain to stakeholders that this design gives *portability* (swap implementations without touching business logic) and *testability* (mock provider in CI). I’d present a diagram of the abstraction layers and a quick demo showing a prompt rendered identically across providers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
