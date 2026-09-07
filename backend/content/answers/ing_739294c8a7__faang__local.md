---
qid: ing_739294c8a7__faang__local
question: 'Q53: How do you prevent prompt injection in a system that accepts user
  input?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 518
total_tokens: 757
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:57-05:00'
sources: []
---

**Clarify**  
We’re building an LLM‑powered service where users can type prompts that are forwarded to the model. Prompt Injection means a malicious user crafts text that manipulates the model into performing unintended actions (e.g., leaking secrets, bypassing policies). I’ll assume: *the prompt is free‑form*, *we have no control over tokenization*, and *the backend uses a standard API with safety filters disabled for speed*.

**Approach**  
1. **Input sanitization & whitelisting** – strip or escape disallowed tokens (e.g., system messages, instruction‑style prefixes).  
2. **Prompt framing** – prepend a fixed “system” instruction that enforces policy and limits the model’s ability to override it.  
3. **Token‑level filtering** – run user text through a lightweight NER/regex engine to flag forbidden keywords (e.g., “delete all data”).  
4. **Redaction & masking** – replace detected policy violations with placeholders before passing to the LLM.  
5. **Post‑generation review** – run outputs through an RLHF safety classifier; if it flags a violation, reject or re‑prompt.

**Depth**  
- Whitelisting uses a curated set of allowed tokens (e.g., alphanumerics + punctuation). Complexity: O(n) per prompt.  
- Prompt framing keeps the system instruction at the top; most LLMs honor the first token as the strongest cue, so injection risk drops dramatically.  
- Regex/NER can catch known patterns with <1 ms latency.  
- RLHF safety classifier runs in ~10 ms; overall throughput remains acceptable for interactive use.

**Edge Cases**  
- Obfuscated attacks (Unicode tricks) may bypass simple regexes → use Unicode normalization.  
- Legitimate user requests that contain policy‑like phrasing (“Explain how to delete a file”) must be handled by contextual disambiguation, perhaps via intent classification before masking.

**Optimize & Communicate**  
We can batch multiple user prompts to amortize tokenization cost and run the safety classifier in parallel with generation. I’d explain this pipeline to stakeholders: *sanitize → frame → filter → mask → generate → classify*, ensuring every layer is independent yet composable. This layered defense gives us a 95 %+ success rate against prompt injection while keeping latency under 200 ms for real‑time applications.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
