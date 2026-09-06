---
qid: ing_8c30170181__fp__local
question: How does prompt injection work against agents via tool results, and what
  actually mitigates it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 516
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:03:04-05:00'
sources: []
---

**Prompt‑injection via tool results**  
When an LLM‑powered agent calls a “tool” (API, database query, calculator), it receives the *raw* text of the result and then uses that text as part of its next prompt. The fundamental problem is that the model treats **every token in that response as evidence**, not as code or data.  
If an attacker can craft a tool output that contains syntactic tricks—e.g., a line that looks like a new instruction, or an embedded JSON field that the agent later parses—the model will dutifully incorporate it into its next decision step. Because the agent’s policy is learned by *optimizing* reward over text sequences, any additional token that increases expected reward (even if spurious) can be adopted. Thus injection works not because of a bug in the tool, but because the language model cannot distinguish “trusted output” from “generated text”.

**What mitigates it?**  
1. **Typed interfaces / schemas** – Require the tool to return a *structured* object (JSON schema). The agent validates against the schema before using any field.  
2. **Sandboxed execution** – Run the tool in an isolated environment that cannot influence the model’s prompt buffer directly; only a sanitized, minimal payload is passed back.  
3. **Prompt hygiene** – Append a clear “STOP” token or delimiter after tool output so the agent’s next prompt starts fresh.  
4. **Token‑budget control** – Limit the length of any tool response; shorter outputs reduce the chance for hidden instructions.

**Non‑obvious insight:** The attack surface is not the tool itself but the *model’s inference loop*. Because the LLM re‑generates the entire next prompt from scratch, even a single injected token can cascade into a policy shift. Therefore, robust mitigation must be applied **after each tool call**, treating its output as untrusted data—much like how secure systems treat external input—rather than merely trusting the tool’s correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
